import React from "react";
import SelectBase from "./SelectBase";

export default class SelectF extends React.Component {

    render() {
        let { label, labelHide, kind, ...others } = this.props;

        if (kind && kind.startsWith('form')) {
            return (
                <div className="form-group">
					<label className={kind.endsWith('label') ? null : 'sr-only'}>{label}</label>
					<SelectBase {...others} />
				</div>
            )
        } else if (kind == 'base') {
            return (
                <SelectBase {...others} />
            )
        } else {
            return (
                <SelectBase {...others} />
            )
        }

    }
}
