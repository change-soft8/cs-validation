import React from 'react';

import {Form, Input, InputF, Button, Checkbox, CheckboxF, Radio, RadioF, Select, SelectF ,Select2, SelectF2, Textarea, TextareaF, InputGroup, InputGroupF} from '../../build/index.js';
// import {Form, Input, InputF, Button, Checkbox, CheckboxF, Radio, RadioF, Select, SelectF ,Select2, SelectF2, Textarea, TextareaF, InputGroup, InputGroupF} from '../../src/index.js';

export default class App extends React.Component {
	/**
	 * [closeModal 模拟关闭 Modal 窗口]
	 * @return        {[type]}                 [description]
	 */
	closeModal(){
		return new Promise((resolve, reject) => {
            setTimeout(() => {
				console.log('close close close close....')
                resolve();
            }, 5000);
        });
	}

	render() {

		const dataC = {
			label: 'Check me out1',
			value: 'checkone',
			defaultChecked: true
		};

		const dataCheck= [{
			label: 'Check me out1',
			value: 'checkone',
			defaultChecked: true
		},{
			label: 'Check me out2',
			value: 'checktwo',
			defaultChecked: true
		},{
			label: 'Check me out3',
			value: 'checkthree'
		}];

		const requiredCheck= [{
			label: 'requiredCheck',
			value: 'requiredCheck',
			defaultChecked: true
		}];

		const dataSelect= [{
			label: '请选择',
			value: '',
			selected: true,
			hide: true
		},{
			label: 'project1',
			value: 'project1',
			selected: true,
			// hide: true
		},{
			label: 'project2',
			value: 'project2'
		},{
			label: 'project3',
			value: 'project3'
		},{
			label: 'project4',
			value: 'project4'
		}];

		const dataSelect2 = [{
			label: 'project1',
			value: 'project1',
		},{
			label: 'project2',
			value: 'project2',
			selected: true
		},{
			label: 'project3',
			value: 'project3'
		},{
			label: 'project4',
			value: 'project4'
		}];

		const dataSelect3 = [{
			icon: './china.png',
			label: 'project1',
			value: 'project1'
		},{
			icon: './china.png',
			label: 'project2',
			value: 'project2',
			selected: true
		},{
			icon: './china.png',
			label: 'project3',
			value: 'project3'
		},{
			label: 'project4',
			value: 'project4'
		}];
		

		const config = {
			 // 验证规则
	        "rules": {
	            "projectId": {
	                "rangelength": [0, 32]
	            },
	            "taskName": {
	                "minlength": 2,
	                "maxlength": 10,
	            },
	            "inviteFriend": {
	                "minlength": 4
	            },
	            "password2": {
	                "equalTo": "[name='password']"
	            }
	        },
	        // 验证错误提示信息
	        "messages": {
	            "projectId": {
	                "length": "projectId的长度为0或32"
	            },
	            "taskName": {
	                "required": "taskName不能为空",
	                "minlength": "taskName至少{0}个字符",
	                "maxlength": "taskName最多{0}个字符",
	                "rangelength": "taskName最少{0}个字符，最多{1}个字符"
	            },
	            "requiredCheck": {
	                "required": "请选中必选checkbox"
	            },
	            "taskDetail": {
	                "required": "请输入任务详情"
	            },
	            "password2": {
	                "equalTo": "密码不一致，请重新输入"
	            }
	        }
		};

		return (
			<div style={{width: 400, margin: 'auto'}}>
		        <div className="panel panel-primary">
		          	<div className="panel-heading">任务添加</div>
		          	<div className="panel-body">
		          		{/**  callback={this.closeModal.bind(this)}  **/}
			            <Form entityOper="task-insert" config={config}>
				            <Input rule="taskName2" required value="默认任务名2" />
				            <InputF rule="taskName" label="任务名" required value="默认任务名" labelhide />
				            <InputGroupF rule="taskName1" label="任务名1" required value="默认任务名1" pre="<span class='glyphicon glyphicon-user'></span>" end="<input type='checkbox'>" />
				            <InputF rule="inviteFriend" label="手机、邮箱或用户名" placeholder="请输入手机、邮箱或用户名" enabled />
				            <Checkbox rule="taskLabel2" datas={dataC}/>
				            <CheckboxF rule="taskLabel" label="任务标签" datas={dataCheck}/>
				            <CheckboxF rule="requiredCheck" label="必选标签" datas={requiredCheck} required />
				            <Radio rule="taskPrio1" datas={dataC} />
				            <RadioF rule="taskPrio" label="任务优先级" datas={dataCheck} />
				            <Select rule="projectName" datas={dataSelect} required></Select>
				            <SelectF rule="projectName" label="所属项目(select)" datas={dataSelect} required></SelectF>
				            <Select2 rule="projectName22" datas={dataSelect2} placeholder="请选择项目" required></Select2>
				            <SelectF2 rule="projectName2" label="所属项目(单选)" datas={dataSelect2} placeholder="请选择项目" required></SelectF2>
				            <SelectF2 rule="projectName3" label="所属项目(多选)" datas={dataSelect2} placeholder="请选择项目" multiple></SelectF2>
				            <SelectF2 rule="projectName4" label="所属项目(带图片)" datas={dataSelect3} placeholder="请选择项目"></SelectF2>
				            <InputF type="password" rule="password" label="密码" required />
				            <InputF rule="password2" label="确认密码" required />
				            { /** <Textarea rule="taskDetail1" label="任务详情" required placeholder="请输入任务详情1" rows="3"></Textarea> */}
				            { /** <TextareaF rule="taskDetail" label="任务详情" required placeholder="请输入任务详情" rows="3"></TextareaF> */}
				            <Button type="submit" className="btn-primary" label="注册" />
			            </Form>
			          </div>
		        </div>
		    </div>
		)
	}
}
