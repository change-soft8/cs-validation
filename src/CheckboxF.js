import React from "react";
import Checkbox from "./Checkbox";

export default class CheckboxF extends React.Component {

	render(){
		const {label, rule, datas, labelhide, ...others} = this.props;
		return (
			<div className="form-group checkbox-group">
				{labelhide ? '' : <label>{label}</label>}

				{datas.map((check, i) => {
					return(
						<Checkbox name={rule} datas={check} {...others}  key={i}/>
					);
				})}
			</div>
		)
	}
}