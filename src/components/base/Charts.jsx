import React, {useEffect, useState} from 'react';
import {getDailyData} from '../../api';
import {Line, Bar} from 'react-chartjs-2';

export const Charts = ({data: {confirmed, recovered, deaths}, country}) => {
	const [dailyData, setdailyData] = useState([]);

	useEffect(() => {
		const getAPI = async () => {
			setdailyData(await getDailyData());
		};
		getAPI();
	}, []);

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

	const barChart = confirmed ? (
		<Bar
			data={{
				labels: ['Cornfirmed Cases', 'Recovered Cases', 'Death Cases'],
				datasets: [
					{
						label: 'People',
						backgroundColor: [
							'rgba(0, 0, 255, 0.5)',
							'rgba(0, 255, 0, 0.5)',
							'rgba(255, 0, 0, 0.5)',
						],
						data: [confirmed.value, recovered.value, deaths.value],
					},
				],
			}}
			options={{
				legend: {display: false},
				title: {display: true, text: `Current state in ${country.country}`},
			}}
		/>
	) : (
		<h2>No data Found</h2>
	);

	return (
		<div className='bg-white mx-6 my-4 py-8 px-12 border-l-4 border-yellow-300 border-solid rounded shadow-xl text-left hidden sm:block'>
			<div className='my-4'>
				<span className='text-black md:font-semibold text-xl sm:text-lg bg-gray-100 py-2 px-6 rounded uppercase'>
					Line Chart Showing the Statistics of the Coronavirus
				</span>
			</div>
			{country.country ? barChart : lineChart},
		</div>
	);
};

export default Charts;
