import React from "react";

export default class Textarea extends React.Component {
	
	render(){
		const {label, rule, ...others} = this.props;

		return (
			<div className="form-group">
				<label>{label}</label>
				<textarea className="form-control" name={rule} style={{resize:"none"}} {...others}></textarea>
			</div>
		)
	}
}