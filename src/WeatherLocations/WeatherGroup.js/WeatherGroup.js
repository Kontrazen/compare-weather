import {React, useEffect, useState} from 'react';
import FirstWeatherLocation from '../FirstWeatherLocation/FirstWeatherLocation';
import SecondWeatherLocation from '../SecondWeatherLocation/SecondWeatherLocation';
import WeatherResult from '../WeatherResult/WeatherResult';

import './WeatherGroup.scss'
function WeatherGroup(props) {

	const [firstTemperatureData, setFirstTemperatureData] = useState('');
	const [secondTemperatureData, setSecondTemperatureData] = useState('');

	const [firstCityData, setFirstCityData] = useState('');
	const [secondCityData, setSecondCityData] = useState('');


	const firstToParentTemperature = (firstData) => {
		setFirstTemperatureData(firstData);
	};
	const secondToParentTemperature = (secondData) => {
		setSecondTemperatureData(secondData);
	};

	const firstToParentCity = (firstData) => {
		setFirstCityData(firstData);
	};
	const secondToParentCity = (secondData) => {
		setSecondCityData(secondData);
	};

	return (
		
		<div>
			<div className= "weather-group-container" >
				<div className="weather-group-main" onClick={console.log(firstTemperatureData, firstCityData, secondTemperatureData, secondCityData)}>
					
					<div className="weather-group-top">
						<div className="city-first">
						
							<FirstWeatherLocation
								firstToParentTemperature={firstToParentTemperature}
								firstToParentCity={firstToParentCity}
							/>
						
						</div>

						<div className="city-second">

							<SecondWeatherLocation
								secondToParentTemperature={secondToParentTemperature}
								secondToParentCity={secondToParentCity}
							/>

						</div>
					</div>


					<div className="weather-group-bottom">
						<div className="result-tab">
							<WeatherResult
								fromFirstTemperature={firstTemperatureData}
								fromSecondTemperature={secondTemperatureData}
								fromFirstCity={firstCityData}
								fromSecondCity={secondCityData}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default WeatherGroup;