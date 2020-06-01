import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

const urlDaily = 'https://covid19.mathdro.id/api/daily';

export const getData = async () => {
	try {
		const {
			data: {confirmed, recovered, deaths, lastUpdate},
		} = await axios.get(url);
		return {confirmed, recovered, deaths, lastUpdate};
	} catch (error) {}
};

export const getDailyData = async () => {
	try {
		const {data} = await axios.get(urlDaily);
		const newData = data.map(dailyData => ({
			confirmed: dailyData.confirmed.total,
			deaths: dailyData.deaths.total,
			date: dailyData.reportDate,
		}));
		return newData;
	} catch (error) {
		console.log(error);
	}
};
