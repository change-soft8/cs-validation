import React from 'react';

export default class Button extends React.Component {

	state = {disabled: false};
	
	// ========================================= 自定义方法 =================================================

	render(){
		const {label, className, ...others} = this.props;
		return (
		    <button className={`btn ${className} ${this.state.disabled ? 'disabled' : ''}`} {...others} >{label}</button>
		)
	}
}