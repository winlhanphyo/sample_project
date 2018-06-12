import React from 'react';
import UserGreeting from './components/UserGreeting.jsx';
import GuestGreeting from './components/GuestGreeting.jsx';
import LoginButton from './components/LoginButton.jsx';
import LogoutButton from './components/LogoutButton.jsx';

class LoginControl extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {isLoggedIn: false};
	    this.handleLoginClick = this.handleLoginClick.bind(this);
	    this.handleLogoutClick = this.handleLogoutClick.bind(this);
	  }

	  handleLoginClick() {
	    this.setState({isLoggedIn: true});
	  }

	  handleLogoutClick() {
	    this.setState({isLoggedIn: false});
	  }

	  render() {
	      const isLoggedIn = this.props.isLoggedIn;
	      const button = isLoggedIn ? (<UserGreeting/>) : (<GuestGreeting />);
	      const greeting = isLoggedIn? (<LogoutButton onClick={this.handleLogoutClick}/>) : (<LoginButton onClick={this.handleLoginClick}/>);
	       return (<div>
	       	{greeting}
        {button}
      </div>
      );
	  
	  }
}

export default LoginControl;