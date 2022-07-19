import React, { Component } from "react";

export default class DataList extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<>
        <input type="text" list={this.props.id}/>
				<datalist id={this.props.id}>
					{this.props.options.map((e, i) => (
						<option key={i} value={e.value}>
							{" "}
							{e.value}{" "}
						</option>
					))}
				</datalist>
			</>
		);
	}
}
