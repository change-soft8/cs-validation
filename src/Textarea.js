import React from "react";

export default class Textarea extends React.Component {
	
	render(){
		const {label, rule, labelhide, ...others} = this.props;

		return (
			<div className="form-group">
				{labelhide ? '' : <label>{label}</label>}
				<textarea className="form-control" name={rule} style={{resize:"none"}} {...others}></textarea>
			</div>
		)
	}
}