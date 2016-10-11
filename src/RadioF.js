import React from "react";
import Radio from "./Radio";

export default class RadioF extends React.Component {

	render(){

		const {label, rule, datas, labelhide, ...others} = this.props;

		return (
			<div className="form-group radio-group">
				{labelhide ? '' : <label>{label}</label>}

				{datas.map((radio, i) => {
					return(
						<Radio name={rule} datas={radio} {...others}  key={i} />
					);
				})}
			</div>
		)
	}
}