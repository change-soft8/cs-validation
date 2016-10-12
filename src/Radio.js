import React from "react";
import RadioBase from "./RadioBase";

export default class RadioF extends React.Component {

	render(){

		const {label, rule, datas, labelHide, formGroup, ...others} = this.props;

		if(formGroup){
			return (
				<div className="form-group radio-group">
					<label className={labelHide ? 'sr-only' : null}>{label}</label>
					{datas.map((radio, i) => {
						return(
							<RadioBase name={rule} datas={radio} {...others}  key={i} />
						);
					})}
				</div>
			)
		}else{
			return (
				<RadioBase name={rule} datas={datas} {...others} />
			)
		}
	}
}