import React from "react";

export default class SelectBase extends React.Component {
	
	render(){
		let {rule, datas, ...others} = this.props;
		return (
			<select className="form-control" name={rule} {...others}>
				{datas.map((option, i) => {
					const {hide, selected, ...otherss} = option;

					// 将原生HTML的 selected="selected" 改成 select标签的 value="..."
					if(selected){
						others.value = option.value;
					}
					return(<option key={i} className={hide ? 'hidden' : null} {...otherss}>{option.label}</option>);
				})}
			</select>
		)
	}
}