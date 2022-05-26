import React, { Component } from "react";

export default class Form extends Component {
	constructor(props) {
		super(props);
		this.inputText = this.props.inputText ? this.props.inputText : [];
		this.inputRadio = this.props.inputRadio ? this.props.inputRadio : [];
		this.inputCheck = this.props.inputCheck ? this.props.inputCheck : [];
	}
	render() {
		return (
			<>
				{this.inputText.map((e, i) => {
					<>
						<label key={i}>{e.label}</label> <input type={text} key={i} onChange={(e) => this.props.action(e)} value={this.props[e.name]}/>
					</>;
				})}
				{this.inputRadio.map((e, i) => {
					<>
						<label key={i}>{e.label}</label> <input type={radio} key={i} />
					</>;
				})}
				{this.inputCheck.map((e, i) => {
					<>
						<label key={i}>{e.label}</label> <input type={checkbox} key={i} />
					</>;
				})}
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