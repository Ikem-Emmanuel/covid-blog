import React from 'react';
import Button from '../base/Button';

const InfoCards = ({data: {confirmed, recovered, deaths, lastUpdated}}) => {
	if (!confirmed) {
		return <h1 className='text-gray-900 text-2xl'>Loading....</h1>;
	}
	return (
		<div className='p-6'>
			<div className='bg-gray-100 m-6 p-6 border-t-4 border-yellow-500 border-solid rounded shadow-xl text-center mx-auto'>
				<div className='py-2 mx-auto'>
					<span className='text-white font-bold text-sm bg-yellow-500 p-2 rounded'>
						Confirmed Cases :
					</span>
				</div>
				<div className='py-2 text mx-auto'>
					<h2 className='text-gray-800 font-bold text-3xl py-1'>{confirmed.value}</h2>
				</div>
			</div>
			<div className='bg-gray-100 m-6  p-6 border-t-4 border-green-500 border-solid rounded shadow-xl text-center mx-auto'>
				<div className='py-2 mx-auto'>
					<span className='text-white font-bold text-sm bg-green-500 p-2 rounded'>
						Recovered Cases :
					</span>
				</div>
				<div className='py-2 text mx-auto'>
					<h2 className='text-gray-800 font-bold text-3xl py-1'>{recovered.value}</h2>
				</div>
			</div>
		</div>
	);
};

export default InfoCards;
