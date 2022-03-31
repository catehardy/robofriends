import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

class App extends React.Component {
	constructor() {
		super()
		this.state = {
			robots: [],
			searchfield: ''
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
		.then(users => this.setState({ robots: users }))
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value })
	}

	render() {
		const filteredRobots = this.state.robots.filter(robot =>{
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
		// Code below is equivalent to if (robots.length === 0) 
		if (!this.state.robots.length) {
			return <h1 className='tc'>Loading</h1>
		} else {
			return (
				<div className='tc'> {/* text center */}
					<h1>Kitty Friends</h1>
					<SearchBox searchChange={this.onSearchChange} />
					<Scroll>
						<CardList robots={filteredRobots}/>
					</Scroll>
				</div>
			);
		}
	}
}
export default App;