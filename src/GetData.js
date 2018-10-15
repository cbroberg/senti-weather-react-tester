import React from 'react';
import { create } from 'apisauce'

const api = create({
    baseURL: 'http://api.openweathermap.org/data/2.5/'
})

export const GetWeather = async (parameter) => {
    var data;
    if (typeof (parameter) === 'object') {
        var obj = await api.get('weather?lat=' + parameter.lat + '&lon=' + parameter.lon + '&appid=5e1d43ad492006206d3f953b8b45f42e')
            .then((res) => {
                if (res.ok) {
                    data = res.data;
                }
            })
    } else {
        var obj = await api.get('weather?q=' + parameter + '&appid=5e1d43ad492006206d3f953b8b45f42e')
            .then((res) => {
                if (res.ok){
                    data = res.data;
                }
            })
    }
    if (data) return data;
}
