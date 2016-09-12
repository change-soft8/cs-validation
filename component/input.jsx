import React from 'react';

export default class Input extends React.Component {

    state = {value: this.props && this.props.value || ''};

	// ========================================= 自定义方法 =================================================
	/**
	 * [handleChange 输入框内容变化 触发事件]
	 * @return        {[type]}                 [description]
	 */
	handleChange(){
		this.setState({'value': this.refs.sinput.value});
	}

	render(){
		const { rule, label, enabled, ...others} = this.props;
		return (
			<div className="form-group">
                <label htmlFor={rule}>{label}</label>
                <input ref="sinput" type="text" className="form-control" name={rule} {...others} value={this.state.value} onChange={this.handleChange.bind(this)} />
            </div>
		)
	}
}