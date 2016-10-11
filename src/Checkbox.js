import React from "react";

export default class Checkbox extends React.Component {

	render(){
		const {rule, datas, className, ...others} = this.props;
		return (
			<div className={(className ? className : 'checkbox') + (others.disabled ? ' disabled' : '')}>
			    <label className={className ? className : 'checkbox'}>
			    	<input type="checkbox" name={rule} {...others} defaultChecked={datas.defaultChecked} />
			    	{datas.label || datas.value}
			    </label>
			</div>
		)
	}
}