import React from "react";
import Select2 from "./Select2";

export default class SelectF2 extends React.Component {

	render(){
		let {label, rule, labelhide, ...others} = this.props;

		return (
			<div className="form-group">
				{labelhide ? '' : <label htmlFor={rule}>{label}</label>}
				<Select2 {...others} />
			</div>
		)
	}
}