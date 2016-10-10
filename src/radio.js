import React from "react";

export default class Radio extends React.Component {

	render(){

		const {label, rule, datas, className, labelhide, ...others} = this.props;

		return (
			<div className="form-group radio-group">
				{labelhide ? '' : <label>{label}</label>}

				{datas.map((radio, i) => {
					const {...othersr} = radio;

					return(
						<div className={(className ? className : 'radio') + (others.disabled ? ' disabled' : '')} key={i}>
						  	<label className={className ? className : 'radio'}>
						    	<input type="radio" name={rule} {...othersr} {...others} /> 
						    	{radio.label}
						  	</label>
						</div>
					);
				})}
			</div>
		)
	}
}