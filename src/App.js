import React, {useState, useEffect} from 'react';
import FadeIn from 'react-fade-in';
import Lottie from 'react-lottie';
import {InfoCards} from './components/layouts';
import loadingGif from '../src/assets/loading.json';
import {getData} from './api';

const defaultOptions = {
	loop: true,
	autoplay: true,
	animationData: loadingGif,
	rendererSettings: {
		preserveAspectRatio: 'xMidYMid slice',
	},
};

export const App = () => {
	const [data, setData] = useState({});

	const [loading, setLoading] = useState(undefined);

	const [country, setCountry] = useState({});

	// async componentDidMount() {
	// const retrivedData = await getData();
	// this.setState({data: retrivedData});
	// this.setState({setIsloading: true});
	// }

	useEffect(() => {
		callData();
	}, []);

	const callData = () => {
		setTimeout(() => {
			const newData = async () => {
				setData(await getData());
				setLoading(true);
			};
			newData();
		}, 1200);
	};

	const countryChange = async country => {
		//fetch county and set the state
		const fetchCountry = await getData(country);
		setCountry({country: country});
		setData(fetchCountry);

		console.log(country);
	};

	// const selectedCountry = country;

	return (
		<div className='container flex-col items-center mx-auto'>
			<div className='bg-gray-900 mb-3'>
				<h1 className='text-center text-white text-3xl font-semibold p-6'>Covid-19 Stat Trackker</h1>
			</div>

			{!loading ? (
				<FadeIn>
					<div className='container text-center mx-auto pt-20'>
						<Lottie className='p-2' options={defaultOptions} height={300} width={300} />{' '}
						<h1 className='text-gray-900 text-3xl'> Please Wait... </h1>{' '}
					</div>{' '}
				</FadeIn>
			) : (
				<InfoCards data={data} countryChange={countryChange} country={country} />
			)}{' '}
		</div>
	);
};

export default App;
