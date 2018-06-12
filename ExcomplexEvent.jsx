import React from 'react';
class ExcomplexEvent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: 'Initial data'
		}

		this.updateState = this.updateState.bind(this);
	}

	updateState() {
		this.setState({data: 'Data updated from the child component....'})
	}

	render() {
		return(
			<div>
				<Content myDataProp={this.state.data} updatedProp={this.updateState} />
			</div>
			)
	}
}
class Content extends React.Component {
	render() {
		return(
			<div>
				<button onClick={this.props.updatedProp}>Click</button>
				<h4>{this.props.myDataProp}</h4>
			</div>
		)
	}
}
export default ExcomplexEvent;