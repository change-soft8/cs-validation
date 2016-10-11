import React from "react";
import Select from "./Select";

export default class SelectF extends React.Component {
	
	render(){
		let {label, labelhide, ...others} = this.props;

		return (
			<div className="form-group">
				{labelhide ? '' : <label>{label}</label>}
				<Select {...others} />
			</div>
		)
	}
}