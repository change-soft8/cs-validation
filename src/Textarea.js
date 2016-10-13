import React from "react";
import TextareaBase from "./TextareaBase";

export default class TextareaF extends React.Component {

    render() {
        const { label, labelHide, kind, ...others } = this.props;

        if (kind && kind.startsWith('form')) {
            return (
                <div className="form-group">
					<label className={kind.endsWith('label') ? null : 'sr-only'}>{label}</label>
					<TextareaBase {...others} />
				</div>
            )
        } else if (kind == 'base') {
            return (
                <TextareaBase {...others} />
            )
        } else {
            return (
                <TextareaBase {...others} />
            )
        }
    }
}
