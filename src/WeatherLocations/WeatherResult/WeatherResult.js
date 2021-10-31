import React from 'react';
import './WeatherResult.scss';

function WeatherResult(props) {

	if(props.fromFirstCity=== ''){
		console.log('NULLA');
	}

	let FromFirst = parseInt(props.fromFirstTemperature);
	let FromSecond = parseInt(props.fromSecondTemperature);
	let message = "Please select two cities"

	if (FromFirst - FromSecond > 0) {
		message = props.fromFirstCity + " is warmer than " + props.fromSecondCity + " by " + Math.abs(FromFirst - FromSecond) + " degrees";
	} else if ((FromFirst - FromSecond < 0)) {
		message = props.fromFirstCity + " is colder than " + props.fromSecondCity + " by " + Math.abs(FromFirst - FromSecond) + " degrees";
	} else {
		message = props.fromFirstCity + " and " + props.fromSecondCity + "are of equal temperature"
	}

	if ((props.fromFirstCity !== '' && props.fromSecondCity !== '') && (props.fromFirstCity !== props.fromSecondCity )) {
		return (
			<div className="weather-result-container">
				Degrees for both cities in Celsius:

				<div>
				{props.fromFirstCity} : {props.fromFirstTemperature}
				</div>

				<div>
				{props.fromSecondCity} : {props.fromSecondTemperature}
				</div>

				<div>
					{message}
				</div>
			</div>
		);

	} else {
		return <div className="weather-result-container">
			<div className="awaiting-input">
				AWAITING VALID INPUT
			</div>
		</div>
	}

}

export default WeatherResult;