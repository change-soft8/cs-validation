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

                // 绑定回车事件
                this.keyEnter(input);
        	}
        }
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
     * [keyEnter 表单对事件的处理-回车自动定位下一输入框]
     * @param         {[type]}                 element [description]
     * @return        {[type]}                         [description]
     */
    keyEnter(element){
        // 绑定 keyup 事件
        $(element).keyup((e) => {
            if (13 == e.keyCode) {
                // 回车事件
                // 下个表单元素
                let next = $(e.target.parentElement).next();
                if(next.hasClass('form-group')){
                    // 表单元素
                    let ele;
                    // 拿到 表单输入元素
                    do{
                        ele = next.find('input[type!=checkbox][type!=radio][type!=search]');
                        ele = ele.length ? ele : next.find('textarea');
                        next = next.next();
                    }while(!ele.length && next.hasClass('form-group'));
                    
                    if(ele.length){
                        // 有表单输入元素
                        ele.focus();
                    }else {
                        // 没有表单输入元素，进行验证
                        this.validator.form();
                    }
                }else{
                    // 按钮元素，进行验证
                    this.validator.form();
                }
                return false;
            }
        });
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