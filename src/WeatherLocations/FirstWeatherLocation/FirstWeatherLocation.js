import {React, useEffect, useState } from 'react';
import './FirstWeatherLocation.scss';

function FirstWeatherLocation(props) {

	const [weather, setWeather] = useState();
	const [url, setUrl] = useState(''); 
	const [temperature, setTemperature] = useState('')
	const [city, setCity] = useState('')

	let baseUrl
	// Fill in blanks with a valid url and hash key to initiate API request
	// The {url} is a city name
	baseUrl = '' + url + "&days=1&aqi=no&alerts=no";

			
	const fetchData = async () => {
		try {
			const response = await fetch(baseUrl, {
				headers: {
					//Insert auth key from weatherapi.com
					'Authorization': ''
				}
			});
			const json = await response.json();
			setWeather(json);
		} catch (error) {
			console.log("error", error);
}
};

	useEffect(() => {
    	fetchData();
	}, [url]);

	let clickMe = () => {
		fetchData();
		console.log(weather)
		try{
			setTemperature(weather.current.temp_c)
			setCity(weather.location.name)
			props.firstToParentTemperature(weather.current.temp_c)
			props.firstToParentCity(weather.location.name)
		} catch(error) {
			alert("Invalid city")
			console.log("error", error);
		}
	}

	if(url !== '') {
	return (
		<div className="weather-component-first-container">

			<input className="input-first" value={url} onChange={e => setUrl(e.target.value)}/>

			<button className="button-first" onClick={() => clickMe()}>
				Get the temperature in {url}
			</button>
		</div>
	);
	} else {
		return (
			<div className="weather-component-first-container">

			<input className="input-first" placeholder="Type a city name..." value={url} onChange={e => setUrl(e.target.value)}/>

			<button className="button-first-empty" onClick={() => clickMe()}>
			( No city yet )
			</button>
			</div>
		)
	}
}

export default FirstWeatherLocation;