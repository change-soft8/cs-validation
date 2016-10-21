import React from "react";
import RadioBase from "./component/RadioBase";

export default class RadioF extends React.Component {

    render() {

        const { label, rule, datas, labelHide, kind, ...others } = this.props;

        if (kind && kind.startsWith('form')) {
            return (
                <div className="form-group radio-group">
					<label className={kind.endsWith('label') ? null : 'sr-only'}>{label}</label>
					{datas.map((radio, i) => {
						return(
							<RadioBase name={rule} datas={radio} {...others}  key={i} />
						);
					})}
				</div>
            )
        } else if (kind == 'base') {
            return (
                <RadioBase name={rule} datas={datas} {...others} />
            )
        } else {
            return (
                <RadioBase name={rule} datas={datas} {...others} />
            )
        }
    }
}
