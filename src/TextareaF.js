import React from "react";
import Textarea from "./Textarea";

export default class TextareaF extends React.Component {
	
	render(){
		const {label, labelhide, ...others} = this.props;

		return (
			<div className="form-group">
				{labelhide ? '' : <label>{label}</label>}
				<Textarea {...others} />
			</div>
		)
	}
}