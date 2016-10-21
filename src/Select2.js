import React from "react";
import SelectBase2 from "./component/SelectBase2";

export default class SelectF2 extends React.Component {

    render() {
        let { label, rule, labelHide, kind, ...others } = this.props;

        if (kind && kind.startsWith('form')) {
            return (
                <div className="form-group">
					<label className={kind.endsWith('label') ? null : 'sr-only'} htmlFor={rule}>{label}</label>
					<SelectBase2 {...others} />
				</div>
            )
        } else if (kind == 'base') {
            return (
                <SelectBase2 rule={rule} {...others} />
            )
        } else {
            return (
                <SelectBase2 rule={rule} {...others} />
            )
        }
    }
}
