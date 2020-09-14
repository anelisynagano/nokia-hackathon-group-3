import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Title from './components/Title'
import Banners from './components/Banners'
import Footer from './components/Footer'
import PhoneList from './Components/PhoneList';
import PhoneDetail from './Components/PhoneDetail';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
      data: null,
      phoneDetail: null
      
		};
	}

	componentDidMount() {
		this.fetchData();
	}

	fetchData = () => {
		fetch('https://cors-anywhere.herokuapp.com/https://nokia-hackathon.herokuapp.com/phones')
			.then((res) => res.json())
			.then((res) => {
				this.setState({
          data: res,
          phoneDetail: res[4]
				});
			});
	};



	render() {
		return (
      <div className="App">
				<Navbar />
				<Title />
      				{this.state.data && <PhoneList phoneInfo={this.state.data} />}
              {this.state.phoneDetail && <PhoneDetail phoneDetail={this.state.phoneDetail}  /> }
				<Banners />
				<Footer />
			</div>
		)
	}
}

export default App;
