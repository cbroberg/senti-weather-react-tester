import React, { Component } from 'react';
import { GetWeather } from './GetData'

class Weather extends Component {
    constructor(props) {
        super(props)

        this.state = {
            weatherObj: null,
        }
    }

    componentWillMount = async () => {
        const coords = {
            lat: 57.043271,
            lon: 9.921155,
		}
		
        const cityName = 'Aalborg'
        // this.setState({ weatherObj: await GetWeather(cityName) })
		this.setState({ weatherObj: await GetWeather(coords) })
    }

    render () {
        const { weatherObj } = this.state;
        console.log(weatherObj)
        return (
            <div>
                {weatherObj ? `Weather in ${weatherObj.name} , ${weatherObj.sys.country} : ${weatherObj.weather[0].main} - ${weatherObj.weather[0].description} ${Math.round(weatherObj.main.temp - 273.15)}  °C outside.`
                            : `Loading`}
            </div>
        )
    }
}

export default Weather