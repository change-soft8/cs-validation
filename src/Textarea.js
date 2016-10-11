import React from "react";

export default class Textarea extends React.Component {
	
	render(){
		const {rule, ...others} = this.props;

		return (
			<textarea className="form-control" name={rule} style={{resize:"none"}} {...others}></textarea>
		)
	}
}