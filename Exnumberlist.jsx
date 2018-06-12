import React from 'react';
import Numberlist from './components/Numberlist.jsx';

class Exnumberlist extends React.Component {
	constructor(props) {
    super(props);
  }
	  render() {

	  	const numbers = [1, 2, 3, 4, 5];
		return (<Numberlist numbers={numbers} />);
	  }
}

export default Exnumberlist;