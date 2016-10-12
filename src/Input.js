import React from 'react';
import InputBase from './InputBase';

export default class InputF extends React.Component {
	
	render(){
		const { rule, label, enabled, labelHide, formGroup, ...others} = this.props;
		if(formGroup){
			return (
				<div className="form-group">
					<label className={labelHide ? 'sr-only' : null} htmlFor={rule}>{label}</label>
	            	<InputBase rule={rule} {...others} />
	            </div>
			)
		}else{
			return (
	            <InputBase rule={rule} {...others} />
			)
		}
	}
}