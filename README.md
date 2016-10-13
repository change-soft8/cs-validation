[TOC]

<a name="cs-validation"></a>
# cs-validation

表单验证组件

* [cs-validation](#cs-validation)
  * [1. 支持的表单验证组件](#cs-validation-1)
  * [2. 简单用例](#cs-validation-2)
  * [3. API](#cs-validation-API)
	* [3.1 Form](#cs-validation-API-form)
	* [3.2 Input](#cs-validation-API-input)
	* [3.3 InputGroup](#cs-validation-API-inputgroup)
	* [3.4 Button](#cs-validation-API-button)
	* [3.5 Checkbox](#cs-validation-API-checkbox)
	* [3.6 Radio](#cs-validation-API-radio)
	* [3.7 Select](#cs-validation-API-select)
	* [3.8 Select2](#cs-validation-API-select2)
	* [3.9 Textarea](#cs-validation-API-textarea)

<a name="cs-validation-1"></a>
### 1. 支持的表单验证组件

1. Form
2. Input
3. InputGroup
4. Button
5. Checkbox
6. Radio
7. Select
8. Select2
9. Textarea

> 备注： 以上所有组件(除了Form、Button)具有3种对应样式
> 
> - 基础组件 `kind="base"`
> ```
> <Input rule="taskName" value="默认任务名" />
> <Input rule="taskName" value="默认任务名" kind="base" />
> -->
> <input class="form-control" name="taskName" value="默认任务名">
> ```
>
> - 组合表单组件(隐藏label) `kind="form"`
> ```
> <Input rule="taskName2" label="任务名" value="默认任务名" formGroup labelHide/>
> -->
> <div class="form-group">
>   <label class="sr-only" for="taskName2">任务名</label>
>   <input class="form-control" name="taskName2" value="默认任务名">
> </div>
> ```
>
> - 组合表单组件 `kind="form.label"`
> ```
> <Input rule="taskName3" label="任务名" value="默认任务名" formGroup/>
> -->
> <div class="form-group">
>   <label for="taskName3">任务名</label>
>   <input class="form-control" name="taskName3 value="默认任务名">
> </div>
> ```

<a name="cs-validation-2"></a>
### 2. 简单用例
```
// 验证规则配置
const config = {
	 // 验证规则
    "rules": {
        "taskName": {
            "minlength": 2,
            "maxlength": 10,
        }
    },
    // 验证错误提示信息
    "messages": {
        "taskName": {
            "required": "taskName不能为空",
            "minlength": "taskName至少{0}个字符",
            "maxlength": "taskName最多{0}个字符",
        }
    }
};

<Form config={config}>
  <Input rule="taskName" label="任务名" value="默认任务名" formGroup required/>
</Form>
```
<a name="cs-validation-API"></a>
### 3. API

<a name="cs-validation-API-form"></a>
#### 3.1 Form
属性     | 作用
---      | ---
config   | 初始化表单验证
disabled | 将整个表单disabeld

** 说明： **
在整个表单 `disabeled` 的情况下，将单个组件属性设为 `enabled` 即可激活 

<a name="cs-validation-API-input"></a>
#### 3.2 Input
属性     | 作用
---      | ---
required | 必填
rule     | 验证规则的key
label    | 组合表单组件时需要，label显示内容
value    | 默认值

<a name="cs-validation-API-inputgroup"></a>
#### 3.3 InputGroup
属性     | 作用
---      | ---
required | 必填
rule     | 验证规则的key
label    | 组合表单组件时需要，label显示内容
value    | 默认值
pre      | 前缀内容
end      | 后缀内容

<a name="cs-validation-API-button"></a>
#### 3.4 Button
属性  | 作用
---   | ---
label | button显示内容

<a name="cs-validation-API-checkbox"></a>
#### 3.5 Checkbox
属性     | 作用
---      | ---
required | 必填
rule     | 验证规则的key
label    | 组合表单组件时需要，label显示内容
datas    | 数据

** 说明：**
> 1. 当有属性formGroup时：datas是数组
> ```
> datas = [{
> 	  label: 'Check me out1',
> 	  value: 'checkone',
> 	  defaultChecked: true
> },...];
> ```
> 2. 当无属性formGroup时：datas是对象
> ```
> datas = {
> 	  label: 'Check me out1',
> 	  value: 'checkone',
> 	  defaultChecked: true
> };
> ```

<a name="cs-validation-API-radio"></a>
#### 3.6 Radio
属性     | 作用
---      | ---
rule     | 验证规则的key
label    | 组合表单组件时需要，label显示内容
datas    | 数据

** 说明：同 Checkbox **

<a name="cs-validation-API-select"></a>
#### 3.7 Select
属性     | 作用
---      | ---
required | 必填
rule     | 验证规则的key
label    | 组合表单组件时需要，label显示内容
datas    | 数据

** 说明：**
> datas是数组
> ```
> datas = [{
>     label: '请选择',
>	  value: '',
>	  selected: true,
>	  hide: true
> },{
>     label: 'project1',
>	  value: 'project1',
>	  selected: true,
> },...];
> ```

<a name="cs-validation-API-select2"></a>
#### 3.8 Select2
属性     | 作用
---      | ---
required | 必填
multiple | 多选
rule     | 验证规则的key
label    | 组合表单组件时需要，label显示内容
datas    | 数据

** 说明：同 Select, 但是没有 `hide` 属性 **

<a name="cs-validation-API-textarea"></a>
#### 3.9 Textarea
属性     | 作用
---      | ---
required | 必填
rule     | 验证规则的key
label    | 组合表单组件时需要，label显示内容