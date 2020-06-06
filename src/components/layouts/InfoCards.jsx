import React, {Fragment} from 'react';
import Chart from '../base/Charts';
import Country from '../layouts/Country';
import CountUp from 'react-countup';

const InfoCards = ({
	data: {confirmed, recovered, deaths, lastUpdate},
	countryChange,
	country,
	data,
}) => {
	// const [confirmed, setConfirmed] = useState(undefined);

	// console.log(confirmed);
	if (!confirmed) {
		return (
			<div className='container text-center mx-auto pt-20'>
				<h1 className='text-gray-900 text-3xl'>Loading....</h1>
			</div>
		);
	}

	function formatDate(string) {
		var options = {year: 'numeric', month: 'long', day: 'numeric'};
		return new Date(string).toLocaleDateString([], options);
	}

	// console.log(selectedCountry);

	return (
		<Fragment>
			<div className='flex flex-col mx-auto justify-center'>
				<div className='bg-white mx-6 my-4 sm:mx-6 py-8 px-12 border-l-4 border-blue-300 border-solid rounded shadow-xl text-left'>
					<div className='mr-auto'>
						<span className='text-black font-medium md:font-semibold text-xl sm:text-4xl bg-gray-100 py-1 px-2 rounded'>
							Get All your Covid19 Stats
						</span>
					</div>
					<div className='py-2 text mx-auto'>
						<p className='md:text-gray-700 font-normal text-justify text-xs'>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates
							temporibus iure obcaecati nam voluptatem dolore placeat laborum
							veritatis? Aspernatur nam delectus tempora assumenda vitae architecto
							dolorem quisquam, sed nemo ad consequuntur neque mollitia at. Saepe
							ducimus similique aut. Quam consequatur porro maxime quo
						</p>
					</div>
				</div>
				<Country countryChange={countryChange} country={country} />
				<div className='flex flex-col transition lg:flex-row mx-6 justify-center'>
					<div className='bg-white sm:m-4 my-2 py-8 px-12 border-l-4 border-orange-300 border-solid rounded shadow-xl text-left'>
						<div className='mr-auto'>
							<span className='text-black font-medium text-lg bg-orange-300 py-1 px-2 rounded'>
								Confirmed Cases :
							</span>
						</div>
						<div className='py-2 text mx-auto'>
							<h2 className='text-gray-800 font-bold text-2xl '>
								<CountUp
									start={0}
									end={confirmed.value}
									duration={2.5}
									separator=', '
								/>
							</h2>
							<div className='text mx-auto'>
								<p className='text-gray-700 font-normal text-xs'>
									Number of active cases of COVID-19
								</p>
							</div>
						</div>
						<div className='divide-y divide-gray-400'></div>
						<div className='text-sm mr-auto'>
							<span className='text-black-100 font-normal text-xs bg-orange-300 rounded py-1 px-2'>
								{formatDate(lastUpdate)}
							</span>
						</div>
					</div>
					<div className='bg-white sm:m-4 my-2 py-8 px-12 border-l-4 border-green-300 border-solid rounded shadow-xl text-left'>
						<div className='mr-auto'>
							<span className='text-black font-medium text-lg bg-green-300 py-1 px-2 rounded'>
								Recovered Cases :
							</span>
						</div>
						<div className='py-2 text mx-auto'>
							<h2 className='text-gray-800 font-bold text-2xl '>
								<CountUp
									start={0}
									end={recovered.value}
									duration={2.5}
									separator=', '
								/>
							</h2>
							<div className='text mx-auto'>
								<p className='text-gray-700 font-normal text-xs'>
									Number of recoveries from COVID-19
								</p>
							</div>
						</div>
						<div className='divide-y divide-gray-400'></div>
						<div className='text-sm mr-auto'>
							<span className='text-black-100 font-normal text-xs bg-green-300 rounded py-1 px-2'>
								{formatDate(lastUpdate)}
							</span>
						</div>
					</div>
					<div className='bg-white sm:m-4 my-2 py-8 px-12 border-l-4 border-red-300 border-solid rounded shadow-xl text-left'>
						<div className='mr-auto'>
							<span className='text-black font-medium text-lg bg-red-300 py-1 px-2 rounded'>
								Death Cases :
							</span>
						</div>
						<div className='py-2 text mx-auto'>
							<h2 className='text-gray-800 font-bold text-2xl '>
								<CountUp
									start={0}
									end={deaths.value}
									duration={2.5}
									separator=', '
								/>
							</h2>
							<div className='text mx-auto'>
								<p className='text-gray-700 font-normal text-xs'>
									Number of Deaths from COVID-19
								</p>
							</div>
						</div>
						<div className='divide-y divide-gray-400'></div>
						<div className='text-sm mr-auto'>
							<span className='text-black-100 font-normal text-xs bg-red-300 rounded py-1 px-2'>
								{formatDate(lastUpdate)}
							</span>
						</div>
					</div>
				</div>

				<Chart data={data} country={country} />
			</div>
		</Fragment>
	);
};

export default InfoCards;
