import React from 'react';
import Input from './Input';

export default class InputGroupF extends React.Component {

	render(){
		const { rule, label, labelhide, pre, end, ...others} = this.props;
		return (
			<div className="form-group">
				{labelhide ? '' : <label htmlFor={rule}>{label}</label>}

            	<div className="input-group">
            	  {pre ? <span className="input-group-addon"><span dangerouslySetInnerHTML={{__html: pre}}></span></span> : ''}
            	  <Input rule={rule} {...others} />
            	  {end ? <span className="input-group-addon"><span dangerouslySetInnerHTML={{__html: end}}></span></span> : ''}
				</div>
            </div>
		)
	}
}