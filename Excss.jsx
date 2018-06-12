import React from 'react';
import styles from './css/style.css';

var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

class Excss extends React.Component {
	render() {
		// const myStyle = {color: 'red'};
		return (
				<div>
					<h3 className="myStyle">Win Lhan Phyo</h3>
					<ul>
						<li>One</li>
						<li>Two</li>
						<li>Three</li>
					</ul>
				</div>
			)
	}
}
export default Excss;