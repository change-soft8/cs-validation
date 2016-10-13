import React from 'react';

import {Form, Input, Button, Checkbox, Radio, Select ,Select2, Textarea, InputGroup} from '../../build/index.js';
// import { Form, Input, Button, Checkbox, Radio, Select, Select2, Textarea, InputGroup } from '../../src/index.js';

export default class App extends React.Component {
    /**
     * [closeModal 模拟关闭 Modal 窗口]
     * @return        {[type]}                 [description]
     */
    closeModal() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('close close close close....')
                resolve();
            }, 5000);
        });
    }

    clear() {
        this.refs.Form.clear();
    }

    render() {

        const dataC = {
            label: 'Check me out1',
            value: 'checkone',
            defaultChecked: true
        };

        const dataCheck = [{
            label: 'Check me out1',
            value: 'checkone',
            defaultChecked: true
        }, {
            label: 'Check me out2',
            value: 'checktwo',
            defaultChecked: true
        }, {
            label: 'Check me out3',
            value: 'checkthree'
        }];

        const requiredCheck = [{
            label: 'requiredCheck',
            value: 'requiredCheck',
            defaultChecked: true
        }];

        const dataSelect = [{
            label: '请选择',
            value: '',
            selected: true,
            hide: true
        }, {
            label: 'project1',
            value: 'project1',
            selected: true,
            // hide: true
        }, {
            label: 'project2',
            value: 'project2'
        }, {
            label: 'project3',
            value: 'project3'
        }, {
            label: 'project4',
            value: 'project4'
        }];

        const dataSelect2 = [{
            label: 'project1',
            value: 'project1',
        }, {
            label: 'project2',
            value: 'project2',
            selected: true
        }, {
            label: 'project3',
            value: 'project3'
        }, {
            label: 'project4',
            value: 'project4'
        }];

        const dataSelect3 = [{
            icon: './china.png',
            label: 'project1',
            value: 'project1'
        }, {
            icon: './china.png',
            label: 'project2',
            value: 'project2',
            selected: true
        }, {
            icon: './china.png',
            label: 'project3',
            value: 'project3'
        }, {
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
			        	<button type="button" className="btn btn-default" onClick={this.clear.bind(this)}>重置表单</button>
		          		{/**  callback={this.closeModal.bind(this)}  **/}
			            <Form entityOper="task-insert" config={config} ref="Form">
			            	<span>input（无label）</span>
				            <Input rule="taskName3" required value="默认任务名"/>
			            	<span>input（labelHide）</span>
				            <Input rule="taskName1" label="任务名" required value="默认任务名" kind="form"/>
			            	<span>input（labelShow）</span>
				            <Input rule="taskName2" label="任务名" required value="默认任务名" kind="form.label"/>
				            <InputGroup rule="taskName1" label="任务名1" required value="默认任务名1" pre="<span class='glyphicon glyphicon-user'></span>" end="<input type='checkbox'>" kind="form.label" />
				            <Input rule="inviteFriend" label="手机、邮箱或用户名" placeholder="请输入手机、邮箱或用户名" enabled kind="form.label" />
				            <Checkbox rule="taskLabel2" datas={dataC}/>
				            <Checkbox rule="taskLabel" label="任务标签" datas={dataCheck} kind="form.label"/>
				            <Checkbox rule="requiredCheck" label="必选标签" datas={requiredCheck} kind="form.label" required />
				            <Radio rule="taskPrio1" datas={dataC} />
				            <Radio rule="taskPrio" label="任务优先级" datas={dataCheck} kind="form.label" />
				            <Select rule="projectName" label="所属项目(select)" datas={dataSelect} required kind="form.label" />
				            <Select2 rule="projectName2" label="所属项目(单选)" datas={dataSelect2} placeholder="请选择项目" required kind="form.label" />
				            <Select2 rule="projectName3" label="所属项目(多选)" datas={dataSelect2} placeholder="请选择项目" multiple kind="form.label" />
				            <Select2 rule="projectName4" label="所属项目(带图片)" datas={dataSelect3} placeholder="请选择项目" kind="form.label" />
				            <Input type="password" rule="password" label="密码" required kind="form.label" />
				            <Input rule="password2" label="确认密码" required kind="form.label" />
				            { /** <Textarea rule="taskDetail" label="任务详情" required placeholder="请输入任务详情" rows="3" kind="form.label" /> */}
				            <Button type="submit" className="btn-primary" label="注册" />
			            </Form>
			          </div>
		        </div>
		    </div>
        )
    }
}
