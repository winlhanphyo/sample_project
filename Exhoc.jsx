import React from 'react';
 var newData = {
 	data: 'Data from HOC......',
 	name: 'Win Lhan Phyo',
 	age: '21',
 	address: 'Yangon'
 }

 var MyHOC = ComposedComponent => class extends React.Component {
 	componentDidMount() {
 		this.setState({
 			data: newData.data,
 			name: newData.name,
 			age: newData.age,
 			address: newData.address
 		});
 	}

 	render() {
 		return <ComposedComponent {...this.props} {...this.state} />
 	}
 }

 class Exhoc extends React.Component {
 	render() {
 		return (
 			<div>
 				<h1>{this.props.data}</h1>
 				<h1>{this.props.name}</h1>
 				<h1>{this.props.age}</h1>
 				<h1>{this.props.address}</h1>
 			</div>
 		)
 	}
 }

 export default MyHOC(Exhoc);