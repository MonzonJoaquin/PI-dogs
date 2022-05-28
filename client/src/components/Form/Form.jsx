import React, { Component } from "react";

export default class Form extends Component {
	constructor(props) {
		super(props);
		this.inputText = this.props.inputText ? this.props.inputText : null;
		this.inputDatalist = this.props.inputDatalist
			? this.props.inputDatalist
			: null;
		this.inputSelection = this.props.inputSelection
			? this.props.inputSelection
			: null;
		this.inputRadio = this.props.inputRadio ? this.props.inputRadio : null;
		this.inputCheck = this.props.inputCheck ? this.props.inputCheck : null;
		this.inputRange = this.props.inputRange ? this.props.inputRange : null;
	}
	render() {
		return (
			<>
				{this.inputText
					? this.inputText.map((e, i) => {
							return (
								<div key={i}>
									<label>{e.label}</label>{" "}
									<input type={"text"} />
									{""}
									{/*value={this.props[e.value*/}
								</div>
							);
					  })
					: null}
				{this.inputDatalist
					? this.inputDatalist.map((e, i) => {
							return (
								<div key={i}>
									<input type="text" list={e.id} />
									<datalist id={e.id}>
										{e.options.map((e) => (
											<option key={e.value} value={e.value}>
												{" "}
												{e.value}{" "}
											</option>
										))}
									</datalist>
								</div>
							);
					  })
					: null}
				{this.inputSelection
					? this.inputSelection.map((e, i) => {
							return (
								<div key={i}>
									<label htmlFor={e.id}>{e.text}</label>
									<select id={e.id}>
										{e.options.map((e) => (
											<option key={e.value} value={e.value}>
												{e.value}
											</option>
										))}
									</select>
								</div>
							);
					  })
					: null}
				{this.inputRadio
					? this.inputRadio.map((e, i) => {
							return (
								<div key={i}>
									<label>{e.label}</label>
									<input type={"radio"} />
								</div>
							);
					  })
					: null}
				{this.inputCheck
					? this.inputCheck.map((e, i) => {
							return (
								<div key={i}>
									<label>{e.label}</label>
									<input type={"checkbox"} />
								</div>
							);
					  })
					: null}
				{this.inputRange
					? this.inputRange.map((e, i) => {
							return (
								<div key={i}>
									<label htmlFor={e.id}>{e.label}</label>
									<input id={e.id} type={"range"} min={e.min} max={e.max} />
								</div>
							);
					  })
					: null}
			</>
		);
	}
}

/*
const mapStateToProps = (state) => {
  return {
    count: state.count,
    amigos: state.amigos,
  };
};

export default connect(mapStateToProps, { addFriend })(Friends);


*/
