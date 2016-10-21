import React from 'react';
import InputBase from './InputBase';

export default class InputGroupBase extends React.Component {

	render(){
		const {pre, end, ...others} = this.props;
		return (
        	<div className="input-group">
        	  {pre ? <span className="input-group-addon"><span dangerouslySetInnerHTML={{__html: pre}}></span></span> : ''}
              <InputBase {...others} />
        	  {end ? <span className="input-group-addon"><span dangerouslySetInnerHTML={{__html: end}}></span></span> : ''}
			</div>
		)
	}
}