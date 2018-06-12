import React from 'react';

class App extends React.Component {
   render() {
 //   	const name = 'Josh Perez';
	// const element = <h1>Hello, {name}</h1>;
	// const element =<h1> It is {new Date().toLocaleTimeString()}</h1>.
      return (
         <div>
            It is {new Date().toLocaleTimeString()}
         </div>
      );
   }
}
export default App;