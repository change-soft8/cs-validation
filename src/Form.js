import React from 'react';

import Utils from './utils';

import Button from './button';

export default class Form extends React.Component{
 
    static propTypes = {
        config: React.PropTypes.object.isRequired
    };

	componentDidMount(){
        // 页面new时，表单验证初始化
        this.initFormValidation();
	}

    componentDidUpdate(){
        // 页面重构时，表单验证初始化
        this.initFormValidation();
    }

    // ========================================= 自定义方法 =================================================
	/**
	 * [initForm 表单数据初始化]
	 * @return        {[type]}                 [description]
	 */
	initForm(){
 		let datas = {};
        let checkValue = [];
        let pname;
        let len = this.refs.form && this.refs.form.length || 0;
        for (let i = 0; i < len; i++) {
        	let input = this.refs.form[i];
        	let name = input.name;
        	let val = input.value;
        	let data;
        	if(name){
        		if(input.type == 'checkbox'){
        			if(pname != name){
        				checkValue = [];
        				pname = name;
        			}
        			if(input.checked){
        				checkValue.push(val);
        				data = {
		        			[name]: checkValue.toString()
			        	};
        			}else{
        				continue;
        			}
        		}else if (input.type == 'radio') {
        			checkValue = [];
        			if(input.checked){
        				data = {
		        			[name]: val
			        	};
        			}else{
        				continue;
        			}
        		}else{
        			checkValue = [];
	        	    data = {
	        			[name]: val
		        	};
        		}

	        	Object.assign(datas, data);

                
        	}
        }

        // 绑定回车事件
        this.keyEnter(this.refs.form, ()=>{
            this.validator.form();
        });

        return datas;
	}

    /**
     * [initFormValidation 表单验证初始化]
     * @return        {[type]}                 [description]
     */
    initFormValidation(){
        // 实体 和 操作
        if(this.props.entityOper){
            // 判断能不能直接发布事件
            this.ifUseConfig = true;
            let entityOper = this.props.entityOper;
            // 获取实体
            this.entity = entityOper.split('-')[0];
            // 获取操作
            this.operation = entityOper.split('-')[1];
        }else{
            // 判断能不能直接发布事件
            this.ifUseConfig = false;
        }
        

        const config = this.props.config;
        // 初始化验证规则
        // 获取实体的 所有 验证规则
        let rulesAll = config.rules;
        // 获取实体的 所有 报错信息
        let msgAll = config.messages;

        // 表单初始数据
        let datas = this.initForm();

        // 获得表单的数据key
        let filter = Object.keys(datas);
        // 根据表单数据key获取 所需 验证
        let rules = Utils.getKeyObj(rulesAll, filter);
        // 根据表单数据key获取 所需 报错信息
        let messages = Utils.getKeyObj(msgAll, filter);

        // 验证实体
        let validator = {
            // 获得焦点报错信息清除
            focusCleanup: true,
            // 提交表单验证时不自动聚焦错误表单组件
            focusInvalid: false,
            // 验证规则
            rules,
            // 验证报错信息
            messages,
            // 失去焦点自动验证
            onfocusout: (element) => {
                element.value = element.value.trim();
                $(element).valid();
            },
            // 验证通过
            submitHandler: (form, event) => { 
                console.log("Submitted!");
                this.formSubmit();
            },
            // 验证错误
            errorPlacement: (error, element) => { 
                // 指定错误信息位置
                // 如果是radio或checkbox或select
                if (element.is(':radio') || element.is(':checkbox') || element.is('select')) {
                    // 将错误信息添加当前元素的父结点后面
                    error.appendTo(element.parent());
                } else if(element.is(':input') && element.parent().hasClass('input-group')){
                    // 将错误信息添加当前元素的父结点后面
                    error.insertAfter(element.parent());
                }else {
                    // 将错误信息直接添加在后面
                    error.insertAfter(element);
                }
            }
        };

        // 初始化验证
        this.validator = $(this.refs.form).validate(validator);
    }
	
	/**
	 * [formSubmit 表单验证成功之后的操作]
	 * @return        {[type]}                 [description]
	 */
	async formSubmit(){
        // 如果按钮 disabled装填，点击无效果
        if(this.refs.button.state.disabled){
            return false;
        }
        // 获取表单数据
		let datas = this.initForm();
        // 按钮 disabled
        console.log('disabled');
        this.refs.button.setState({disabled: true});

        if(this.ifUseConfig){
            // 表单数据操作
            await this.formOperation(datas);  
        }else{
            await this.props.callback(datas);  
        }

        // 按钮 enabled
        console.log('enabled');
        this.refs.button.setState({disabled: false});
        // 表单重置
        this.setState({});
        
	}

    /**
     * [formOperation 表单数据接口操作]
     * @return        {[type]}                 [description]
     */
    formOperation(datas){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('ajax ajax...');
                resolve();
            }, 5000);
        });
        
        // debugger;
        // return window.db[entity][this.operation](datas);
    }

    /**
     * [keyEnter description]
     * @param         {[type]}                 select [表单选择器]
     * @param         {[type]}                 func   [回调方法]
     * @return        {[type]}                        [description]
     */
    keyEnter(select, func) {
        let uuid = this.uuid();
        $(select).attr('id', uuid);
        let ips = $(select).find('input:checked,input:selected,[name][type!=checkbox][type!=radio]');
        let l = ips.length;
        if (l < 1) {
            ips = $(select);
            l = 1;
        }
        ips.each(function(i) {
            let end = false;
            if (i == ips.length - 1) end = true;
            $(this).attr({
                'enter_index': i,
                'enter_end': end
            });
            $(this).keyup((event) => {
                if (13 == event.keyCode) {
                    let e = $(this).attr('enter_end');
                    let a = $(this).attr('enter_finish');
                    let ei = parseInt($(this).attr('enter_index'));
                    if (a || e == 'true') {
                        func();
                    } else {
                        $('#' + uuid + ' [enter_index="' + (ei + 1) + '"]')[0].focus();
                    }
                }
            });
        });
    }

    /**
     * [clear 表单验证清除]
     * @return        {[type]}                 [description]
     */
    clear(){
        this.validator.resetForm();
    }

    /**
     * [uuid 生成]
     * @return        {[type]}                 [uuid]
     */
    uuid() {
        var s = [];
        var hexDigits = "0123456789abcdef";
        for (var i = 0; i < 36; i++) {
            s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
        }
        s[14] = "4";  // bits 12-15 of the time_hi_and_version field to 0010
        s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);  // bits 6-7 of the clock_seq_hi_and_reserved to 01
        s[8] = s[13] = s[18] = s[23] = "-";
     
        var uuid = s.join("");
        return uuid;
    }

	render(){
        const {disabled, ...others} = this.props;
		return(
			<form ref="form" key={Utils.getKey('form')}>
                {React.Children.map(this.props.children, (element, i) => {
                    // 设置 disabled 属性
                    if(element){
                        let props = Object.assign({}, element.props);
                        props.disabled = props.enabled ? '' : (props.disabled || disabled);
                        if(props.type == 'submit'){
                            const {...othersb} = props;
                            return (<Button ref="button" {...othersb} />);
                        }else{
                            let ele = Object.assign({}, element);
                            ele.props = props;
                            return ele;
                        }
                    }
                })}
			</form>
		)
	}
}