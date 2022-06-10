import React, { Component } from "react";

export default class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inputText: this.props.inputText ? this.props.inputText : null,
			inputDatalist: this.props.inputDatalist ? this.props.inputDatalist : null,
			inputSelection: this.props.inputSelection
				? this.props.inputSelection
				: null,
			inputRadio: this.props.inputRadio ? this.props.inputRadio : null,
			inputCheck: this.props.inputCheck ? this.props.inputCheck : null,
			inputRange: this.props.inputRange ? this.props.inputRange : null,
			inputURL: this.props.inputURL ? this.props.inputURL : null,
		};
	}
	render() {
		return (
			<>
				{this.props.inputText
					? this.props.inputText.map((e, i) => {
							return (
								<div key={i}>
									<label>{e.label}</label>
									<input
										name={e.name}
										type={"text"}
										onChange={(event) => {
											e.action(event);
										}}
									/>
								</div>
							);
					  })
					: null}
				{this.props.inputDatalist
					? this.props.inputDatalist.map((e, i) => {
							return (
								<div key={i} className={e.style}>
									<label htmlFor={e.id}> {e.text} </label>
									<input
										type="text"
										list={e.id}
										name={e.name}
										onChange={(event) => {
											e.action(event);
										}}
									/>
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
				{this.props.inputSelection
					? this.props.inputSelection.map((e, i) => {
							return (
								<div key={i} className={e.style}>
									<label htmlFor={e.id}> {e.text} </label>
									<select
										id={e.id}
										name={e.name}
										onChange={(event) => {
											e.action(event);
										}}
									>
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
				{this.props.inputRadio
					? this.props.inputRadio.map((e, i) => {
							return (
								<div key={i}>
									<label>{e.label}</label>
									<input type={"radio"} />
								</div>
							);
					  })
					: null}
				{this.props.inputCheck
					? this.props.inputCheck.map((e, i) => {
							return (
								<div key={i}>
									<label>{e.label}</label>
									<input type="checkbox" />
								</div>
							);
					  })
					: null}
				{this.props.inputRange
					? this.props.inputRange.map((e, i) => {
							return (
								<div key={i} className={e.style}>
									<label htmlFor={e.id}>{e.label}</label>
									<input
										name={e.name}
										type={"range"}
										min={e.min}
										max={e.max}
										
										onChange={(event) => e.action(event)}
										value={e.value}
									/>
									{/* <input name={e.name} type={"number"} min={e.min} max={e.max} value={e.value} onChange={(event) => e.action(event)}/> */}
									<span>{e.value}</span>
								</div>
							);
					  })
					: null}
				{this.props.inputURL
					? this.props.inputURL.map((e, i) => {
							return (
								<div key={i}>
									<label htmlFor={e.name}> {e.text} </label>
									<input type="url" name={e.name} id={e.id} onChange={e.action}/>
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
