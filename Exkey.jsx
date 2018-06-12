import React from 'react';
class Exkey extends React.Component {
	constructor(props) {
		super(props);
		this.state={
			data:
			[
				{
					component: 'First......',
					id: 1
				},
				{
					component: 'Second......',
					id: 2
				},
				{
					component: 'Third......',
					id: 3
				},
				{
					component: 'Fourth......',
					id: 4
				},

			]
		}
	}

	render() {
		return(
			<ul>
				{this.state.data.map((dynamicComponent, i)=>
					<Content key={i} componentData={dynamicComponent} />
					)}
			</ul>
			);
	}
}

class Content extends React.Component {
	render() {
		return(
				<li>{this.props.componentData.component}{this.props.componentData.id}</li>

		);
	}
}

export default Exkey;