import React from "react";

export default class Checkbox extends React.Component {

	// ========================================= 自定义方法 =================================================

	render(){

		const {label, rule, datas, className, labelhide, ...others} = this.props;

		return (
			<div className="form-group checkbox-group">
				{labelhide ? '' : <label>{label}</label>}

				{datas.map((check, i) => {
					const {...othersc} = check;
					return(
						<div className={(className ? className : 'checkbox') + (others.disabled ? ' disabled' : '')} key={i}>
						    <label className={className ? className : 'checkbox'}>
						    	<input type="checkbox" name={rule} {...othersc} {...others} /> {check.label || check.value}
						    </label>
						</div>
					);
				})}
			</div>
		)
	}
}