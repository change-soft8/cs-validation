import React from "react";

export default class Select2 extends React.Component {

    state = {placeholder: this.props.placeholder || '', data: this.props.datas} || {};

	componentDidMount(){
		// 获取默认的选项
		const defaultValue = this.state.data.map((data, i) => {
			if(data.selected){
				this.setState({value: data.value});
				return data.value;
			}
		});

		const $select = $(this.refs.select);
		// select2 初始化
		$select.select2({
			placeholder: this.state.placeholder || null,
			// 单选时允许清空选择
			allowClear: true,
			// 数据绑定
			// data: this.state.data
			// selected 样式控制
			templateResult: this.formatState.bind(this),
			// selected 选中样式控制
			templateSelection: this.formatState.bind(this)
		}).val(defaultValue || null).trigger("change");

		// select 选项收起时的回调事件
		$select.on("select2:close", (e) => {
			$select.blur();
		});
	}

	// ========================================= 自定义方法 =================================================
	/**
	 * [formatState 自定义selection的选择列表样式]
	 * @param         {[type]}                 state [description]
	 * @return        {[type]}                       [description]
	 */
	formatState(state) {
		if (!state.element || !state.element.value || !$(state.element).attr('icon')) { return state.element && state.element.label || state.text; }
		var $state = $(
		    `<span><img src=${$(state.element).attr('icon')} class="img-flag img_24_24" />${state.element.label}</span>`
		);
		return $state;
	}

	render(){
		let {rule, datas, ...others} = this.props;

		return (
			<select className="js-states form-control" name={rule} {...others} ref="select">
				{datas.map((select, i) => {
					const {label, value, selected, ...otherd} = select;

					// 将原生HTML的 selected="selected" 改成 select标签的 value="..."
					if(selected){
						others.value = select.value;
					}

					return (<option value={value} key={i} {...otherd}>{label}</option>);
				})}
			</select>
		)
	}
}