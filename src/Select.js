import React from "react";
import SelectBase from "./SelectBase";

export default class SelectF extends React.Component {
	
	render(){
		let {label, labelHide, formGroup,...others} = this.props;

		if(formGroup){
			return (
				<div className="form-group">
					<label className={labelHide ? 'sr-only' : null}>{label}</label>
					<SelectBase {...others} />
				</div>
			)
		}else{
			return (
				<SelectBase {...others} />
			)
		}
		
	}
}