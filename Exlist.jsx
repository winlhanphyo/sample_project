import React from 'react';

class Exlist extends React.Component {
	constructor(props) {
	    super(props);
	   
	  }

	  render() {
	      	// const numbers = [1, 2, 3, 4, 5];
		// const doubled = numbers.map((number,index) => <li key={number.toString()}>{number*2}</li>);
		const todo = [{id: 1,text: "a"},{id: 2,text: "b"}];
		const todoItems = todo.map((todo,index) => <li key={index}>{todo.text}</li>);

	       return (
	       <ul>{todoItems}</ul>
      );
	  
	  }
}

export default Exlist;