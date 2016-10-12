import React from "react";
import TextareaBase from "./TextareaBase";

export default class TextareaF extends React.Component {
	
	render(){
		const {label, labelHide, formGroup, ...others} = this.props;

		if(formGroup){
			return (
				<div className="form-group">
					<label className={labelHide ? 'sr-only' : null}>{label}</label>
					<TextareaBase {...others} />
				</div>
			)
		}else{
			return (
				<TextareaBase {...others} />
			)
		}
	}
}