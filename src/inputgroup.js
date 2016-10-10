import React from 'react';

export default class InputGroup extends React.Component {

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
		const { rule, label, enabled, labelhide, pre, end, ...others} = this.props;
		const test = "<input type='checkbox'>";
		return (
			<div className="form-group">
				{labelhide ? '' : <label htmlFor={rule}>{label}</label>}

            	<div className="input-group">
            	  {pre ? <span className="input-group-addon"><span dangerouslySetInnerHTML={{__html: pre}}></span></span> : ''}
				  <input ref="sinput" type="text" className="form-control" name={rule} {...others} value={this.state.value} onChange={this.handleChange.bind(this)} />
            	  {end ? <span className="input-group-addon"><span dangerouslySetInnerHTML={{__html: end}}></span></span> : ''}
				</div>
            </div>
		)
	}
}