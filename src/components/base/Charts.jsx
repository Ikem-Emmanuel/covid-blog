import React, {useEffect, useState} from 'react';
import {getDailyData} from '../../api';
import {Line} from 'react-chartjs-2';

export const Charts = () => {
	const [dailyData, setdailyData] = useState([]);

	useEffect(() => {
		const getAPI = async () => {
			setdailyData(await getDailyData());
		};
		getAPI();
	}, []);

	// border-2 border-solid border-blue-200

	const lineChart = dailyData.length ? (
		<Line
			data={{
				labels: dailyData.map(({date}) => date),
				datasets: [
					{
						data: dailyData.map(({confirmed}) => confirmed),
						label: 'Infected People',
						borderColor: '#3333ff',
						fill: true,
					},
					{
						data: dailyData.map(({deaths}) => deaths),
						label: 'Deaths',
						borderColor: 'red',
						backgroundColor: 'rgba(255, 0, 0, 0.5)',
						fill: true,
					},
				],
			}}
		/>
	) : (
		<h2>No data Found</h2>
	);

	return (
		<div className='bg-opacity-10 my-4 mx-10 sm:mx-10 p-10 border-l-4 border-teal-400 border-solid rounded shadow-lg text-left'>
			{lineChart}
		</div>
	);
};

export default Charts;
