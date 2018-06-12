import React from 'react';

class Exclass extends React.Component {
	render() {
		return (
			<Welcome name="Mg Mg"/> 	      
		);
	   }
}

class Welcome extends React.Component {
	render(props) {
		return <h1>Hello, {this.props.name}&nbsp;{this.sum(2,2)} &nbsp;{this.withdraw(2000,1000)}</h1>;
	}
	sum(a, b) {
	  return a + b;
	}

	withdraw(account, amount) {
	  account-= amount;
	}
}
export default Exclass;