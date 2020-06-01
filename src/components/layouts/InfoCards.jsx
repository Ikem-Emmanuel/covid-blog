import React, {Fragment} from 'react';
import Chart from '../base/Charts';
import CountUp from 'react-countup';

const InfoCards = ({data: {confirmed, recovered, deaths, lastUpdate}}) => {
	// const [confirmed, setConfirmed] = useState(undefined);

	console.log(confirmed);
	if (!confirmed) {
		return (
			<div className='container text-center mx-auto pt-20'>
				<h1 className='text-gray-900 text-3xl'>Loading....</h1>
			</div>
		);
	}

	return (
		<Fragment>
			<Chart />
			<div className='flex flex-col mx-auto justify-center '>
				<div className='bg-opacity-10 my-4 mx-10 sm:mx-10 p-10 border-l-4 border-teal-400 border-solid rounded shadow-lg text-left'>
					<div className='mr-auto'>
						<span className='text-black font-medium md:font-semibold text-xl sm:text-4xl bg-gray-300 py-1 px-2 rounded'>
							Get All your Covid Start
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
				<div className='flex flex-col transition lg:flex-row mx-auto justify-center'>
					<div className='bg-opacity-50 m-4 py-8 px-12 border-l-4 border-blue-300 border-solid rounded shadow-xl text-left'>
						<div className='mr-auto'>
							<span className='text-black font-medium text-lg bg-blue-300 py-1 px-2 rounded'>
								Pick A Country
							</span>
						</div>
						<div className='py-2 text mx-auto'>
							<h2 className='text-gray-800 font-bold text-2xl '>dropdown</h2>
							<div className='text mx-auto'>
								<p className='text-gray-700 font-normal text-xs'>
									Number of active cases of COVID-19
								</p>
							</div>
						</div>
						<div className='divide-y divide-gray-400'></div>
						<div className='text-sm mr-auto'>
							<span className='text-black-100 font-normal text-xs bg-blue-300 rounded py-1 px-2'>
								{new Date(lastUpdate).toDateString()}
							</span>
						</div>
					</div>
					<div className='bg-opacity-50 m-4 py-8 px-12 border-l-4 border-orange-300 border-solid rounded shadow-xl text-left'>
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
								{new Date(lastUpdate).toDateString()}
							</span>
						</div>
					</div>
					<div className='bg-opacity-10 m-4 py-8 px-12 border-l-4 border-green-300 border-solid rounded shadow-xl text-left'>
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
								{new Date(lastUpdate).toDateString()}
							</span>
						</div>
					</div>
					<div className='bg-opacity-10 m-4 py-8 px-12 border-l-4 border-red-300 border-solid rounded shadow-xl text-left'>
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
								{new Date(lastUpdate).toDateString()}
							</span>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default InfoCards;
