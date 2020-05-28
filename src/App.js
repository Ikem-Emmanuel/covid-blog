import React, {Component} from 'react';
import {Button, Input} from './components/base';
import {InfoCards} from './components/layouts';
import {getData} from './api';
class App extends Component {
	state = {
		data: {},
	};
	async componentDidMount() {
		const retrivedData = await getData();
		this.setState({data: retrivedData});
	}

	render() {
		const {data} = this.state;
		return (
			<div className='container py-20'>
				<Button className='mx-auto bg-black'>Hello Covid-help</Button>
				<Input></Input>
				<InfoCards data={data} />
			</div>
		);
	}
}

export default App;
