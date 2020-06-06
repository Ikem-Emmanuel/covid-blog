import React, {useEffect, useState} from 'react';
import {getCountry} from '../../api';

const Country = ({countryChange, country}) => {
	const [countryData, setcountryData] = useState([]);

	useEffect(() => {
		const countryApi = async () => {
			setcountryData(await getCountry());
		};
		countryApi();
	}, [setcountryData]);

	return (
		<div className='md:text-center bg-white mx-6 my-4 sm:mx-6 py-8 px-12 border-l-4 border-blue-300 border-solid rounded shadow-xl text-left'>
			<form className=''>
				<div className='py-4'>
					{!country.country ? (
						<label htmlFor='country'>
							<span className='text-black md:font-semibold text-xl sm:text-lg bg-gray-100 py-2 px-6 rounded uppercase flex flex-wrap sm:flex-no-wrap justify-center text-center'>
								Select a Country to view their current coronavirus case
							</span>
						</label>
					) : (
						<span className='text-black md:font-semibold text-xl sm:text-lg bg-gray-100 py-2 px-6 rounded uppercase flex flex-wrap sm:flex-no-wrap text-center justify-center text-center'>
							Below is a breakdown on {country.country} coronavirus cases.
						</span>
					)}
				</div>
				<div className='py-3'>
					<select
						defaultValue=''
						onChange={e => countryChange(e.target.value)}
						className='w-full md:w-2/3 bg-white border-b-2 border-gray-500 rounded-sm py-2 hover:border-gray-400 hover:border '
						name='country'
						id='country'>
						<option value='global'>Global</option>
						{countryData.map((country, i) => (
							<option key={i} value={country}>
								{country}
							</option>
						))}
					</select>
				</div>
			</form>
		</div>
	);
};

export default Country;
