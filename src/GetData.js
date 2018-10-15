import { create } from 'apisauce'

const api = create({
    baseURL: 'http://api.openweathermap.org/data/2.5/'
})

export const GetWeather = async (parameter) => {
	var obj
    if (typeof (parameter) === 'object') {
        obj = await api.get('weather?lat=' + parameter.lat + '&lon=' + parameter.lon + '&appid=5e1d43ad492006206d3f953b8b45f42e')
            .then((res) => {
                if (res.ok) {
                    return res.data
                }
            })
    } else {
        obj = await api.get('weather?q=' + parameter + '&appid=5e1d43ad492006206d3f953b8b45f42e')
            .then((res) => {
                if (res.ok){
					return res.data
                }
            })
	}
	if (obj) return obj
}
