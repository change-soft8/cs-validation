import React from "react";

export default class RadioF extends React.Component {

	render(){
		const {rule, datas, className, ...others} = this.props;
		return (
			<div className={(className ? className : 'radio') + (others.disabled ? ' disabled' : '')}>
			  	<label className={className ? className : 'radio'}>
			    	<input type="radio" name={rule} {...others} defaultChecked={datas.defaultChecked} /> 
			    	{datas.label || datas.value}
			  	</label>
			</div>
		)
	}
}