import React from 'react';
import Input from './Input';

export default class InputGroup extends React.Component {

	render(){
		const {pre, end, ...others} = this.props;
		return (
        	<div className="input-group">
        	  {pre ? <span className="input-group-addon"><span dangerouslySetInnerHTML={{__html: pre}}></span></span> : ''}
              <Input {...others} />
        	  {end ? <span className="input-group-addon"><span dangerouslySetInnerHTML={{__html: end}}></span></span> : ''}
			</div>
		)
	}
}