import React from 'react';
import Input from './Input';

export default class InputF extends React.Component {
	
	render(){
		const { rule, label, enabled, labelhide, ...others} = this.props;
		return (
			<div className="form-group">
				{labelhide ? '' : <label htmlFor={rule}>{label}</label>}
            	<Input rule={rule} {...others} />
            </div>
		)
	}
}