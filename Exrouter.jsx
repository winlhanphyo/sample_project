import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link,HashRouter  } from 'react-router-dom';
import Home from './components/Home.jsx';
import Login from './components/Login.jsx';

class Exrouter extends React.Component {
	constructor(props) {
    	super(props);
  }
	  render() {
	  let id=10;

	  	return (
		         <HashRouter history={hashHistory}>
		            <div>
		               <h2>Welcome to React Router Tutorial</h2>
		               <ul>
		                  <li><Link to={'/'}>Home</Link></li>
		                  <li><Link to={'/Login/10' }>Login</Link></li>
		               </ul>
		               <hr />
		               
		               <Switch>
		               	<div className='routes'>
		                  <Route exact path='/' component={Home} />
		                  <Route name="app" handler={Login} path="/">
		                  		<Route exact path='/Login/:id' render={(props) => <Login id={this.id} {...props} /> } />
		                  	</Route>
		                  </div>
		               </Switch>
		            </div>
		         </HashRouter>
      			);
	  }
}

<!-- hashHistory.push({
    pathname: '/Login/:id',
    query: { JSONResp: JSON.stringify(result.data)}
});
 -->
export default Exrouter;