import React from 'react';
import InputBase from './InputBase';

export default class InputF extends React.Component {

    render() {
        const { rule, label, enabled, labelHide, kind, ...others } = this.props;
        if (kind && kind.startsWith('form')) {
            return (
                <div className="form-group">
					<label className={kind.endsWith('label') ? null : 'sr-only'} htmlFor={rule}>{label}</label>
	            	<InputBase rule={rule} {...others} />
	            </div>
            )
        } else if (kind == 'base') {
            return (
                <InputBase rule={rule} {...others} />
            )
        } else {
            return (
                <InputBase rule={rule} {...others} />
            )
        }
    }
}
