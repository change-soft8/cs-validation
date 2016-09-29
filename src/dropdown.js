import React from 'react';

export default class Dropdown extends React.Component {

	constructor(props) {
		super(props);
		let datas = props.datas;
		datas.map((data, i)=>{
			if (data.selected) {
				this.state = {value: data.value, label: data.label} || {};
			}
		});
	}

	componentDidMount(){
		$(this.refs.dropdown).dropdown();

		$(this.refs.dropdown).on('show.bs.dropdown', function () {
		    console.log($(this.refs.sinput).val());
		})
	}
	// ========================================= 自定义方法 =================================================
	/**
	 * [clickHandler 点击dropdown下拉选项 触发事件]
	 * @param         {[type]}                 data [description]
	 * @return        {[type]}                      [description]
	 */
	clickHandler(data){
		this.setState({...data});
	}

	render(){

		const {rule, label, datas, ...others} = this.props;
		
		return (
			<div className="form-group">
				<label htmlFor={rule}>{label}</label>
			    <div className="dropdown" name={rule}>
					<button ref="dropdown" className="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
					    {this.state.label}
					    <span className="caret"></span>
					</button>
					<ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
						{datas.map((data, i) => {
							const {...otherd} = data;
							return (data.hide ? null : <li key={i} {...otherd} onClick={this.clickHandler.bind(this, otherd)}><a>{data.label}</a></li>);
						})}
					</ul>
				</div>
		        <input ref="sinput" className="sr-only" name={rule} value={this.state.value} {...others}/>
			</div>
		)
	}
}