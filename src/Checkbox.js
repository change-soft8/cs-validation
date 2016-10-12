import React from "react";
import CheckboxBase from "./CheckboxBase";

export default class CheckboxF extends React.Component {

	render(){
		const {label, rule, datas, labelHide, formGroup, ...others} = this.props;
		if(formGroup){
			return (
				<div className="form-group checkbox-group">
					<label className={labelHide ? 'sr-only' : null}>{label}</label>

					{datas.map((check, i) => {
						return(
							<CheckboxBase name={rule} datas={check} {...others}  key={i}/>
						);
					})}
				</div>
			)
		}else{
			return (
				<CheckboxBase name={rule} datas={datas} {...others}/>
			)
		}
	}
}