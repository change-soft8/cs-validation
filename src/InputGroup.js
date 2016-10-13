import React from 'react';
import InputGroupBase from './InputGroupBase';

export default class InputGroupF extends React.Component {

    render() {
        const { rule, label, labelHide, kind, ...others } = this.props;
        if (kind && kind.startsWith('form')) {
            return (
                <div className="form-group">
					<label className={kind.endsWith('label') ? null : 'sr-only'} htmlFor={rule}>{label}</label>
					<InputGroupBase rule={rule} {...others} />
	            </div>
            )
        } else if (kind == 'base') {
            return (
                <InputGroupBase rule={rule} {...others} />
            )
        } else {
            return (
                <InputGroupBase rule={rule} {...others} />
            )
        }
    }
}
