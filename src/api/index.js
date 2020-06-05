import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

const urlDaily = 'https://covid19.mathdro.id/api/daily';

export const getData = async country => {
	let dynamicApiUrl = url;
	if (country) {
		dynamicApiUrl = `${url}/countries/${country}`;
	}
	try {
		const {
			data: {confirmed, recovered, deaths, lastUpdate},
		} = await axios.get(dynamicApiUrl);
		return {
			confirmed,
			recovered,
			deaths,
			lastUpdate,
		};
	} catch (error) {
		console.log(error);
	}
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

export const getCountry = async () => {
	try {
		const {
			data: {countries},
		} = await axios.get(`${url}/countries`);
		return countries.map(country => country.name);
	} catch (error) {
		console.log(error);
	}
};
