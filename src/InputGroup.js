import React from 'react';
import InputGroupBase from './InputGroupBase';

export default class InputGroupF extends React.Component {

	render(){
		const { rule, label, labelHide, formGroup, ...others} = this.props;
		if(formGroup){
			return (
				<div className="form-group">
					<label className={labelHide ? 'sr-only' : null} htmlFor={rule}>{label}</label>
					<InputGroupBase rule={rule} {...others} />
	            </div>
			)
		}else{
			return (
				<InputGroupBase rule={rule} {...others} />
			)
		}
	}
}