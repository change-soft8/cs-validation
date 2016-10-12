import React from "react";
import SelectBase2 from "./SelectBase2";

export default class SelectF2 extends React.Component {

	render(){
		let {label, rule, labelHide, formGroup, ...others} = this.props;

		if(formGroup){
			return (
				<div className="form-group">
					<label className={labelHide ? 'sr-only' : null} htmlFor={rule}>{label}</label>
					<SelectBase2 {...others} />
				</div>
			)
		}else{
			return (
				<SelectBase2 rule={rule} {...others} />
			)
		}
	}
}