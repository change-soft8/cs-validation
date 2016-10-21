import React from "react";
import CheckboxBase from "./component/CheckboxBase";

export default class CheckboxF extends React.Component {

    render() {
        const { label, rule, datas, labelHide, kind, ...others } = this.props;
        if (kind && kind.startsWith('form')) {
            return (
                <div className="form-group checkbox-group">
					<label className={kind.endsWith('label') ? null : 'sr-only'}>{label}</label>

					{datas.map((check, i) => {
						return(
							<CheckboxBase name={rule} datas={check} {...others}  key={i}/>
						);
					})}
				</div>
            )
        } else if (kind == 'base') {
            return (
                <CheckboxBase name={rule} datas={datas} {...others}/>
            )
        } else {
            return (
                <CheckboxBase name={rule} datas={datas} {...others}/>
            )
        }
    }
}
