import React, {Component} from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import Errorboundry from '../Components/Errorboundry'
import './App.css';
class App  extends Component {
	constructor() {
		super()
		this.state = {
			robots: [],
			searchfield: ''
		}

	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
  			.then(response => { return response.json()})
  			.then(users => {
  				this.setState({robots: users});
  			})
	}
	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value})
	}
	render() {
		// destructuring
		const {robots, searchfield} = this.state; 
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		})
		//use ! to make robots.length true as it evaluates as false initally
		return (
	 	<div className = 'tc'>
			<h1 className = 'f1'>RoboFriends </h1>
			<SearchBox searchChange = {this.onSearchChange} />
			<Scroll>
				<Errorboundry>
					<CardList robots = {filteredRobots}/>
				</Errorboundry>
			</Scroll>
	 	</div>
	  );
	}
  }
export default App;