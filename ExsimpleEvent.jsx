import React from 'react';
class ExsimpleEvent extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			data: 'Initial data ...'
		}
		this.updateState = this.updateState.bind(this);
	}

	updateState() {
		this.setState({
			data: 'Data updated.....'
		})
	}

	render() {
		return(
				<div>
					<button onClick={this.updateState}>click</button>
					<h4>{this.state.data}</h4>
				</div>
			)
	}
}
export default ExsimpleEvent;