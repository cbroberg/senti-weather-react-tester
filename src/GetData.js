import { create } from 'apisauce'

const api = create({
    baseURL: 'http://api.openweathermap.org/data/2.5/'
})

export const GetWeather = async (arg) => {
	var data
    if (typeof (arg) === 'object') {
        data = await api.get('weather?lat=' + arg.lat + '&lon=' + arg.lon + '&appid=5e1d43ad492006206d3f953b8b45f42e')
            .then((res) => {
                if (res.ok) {
                    return res.data
                }
            })
    } else {
        data = await api.get('weather?q=' + arg + '&appid=5e1d43ad492006206d3f953b8b45f42e')
            .then((res) => {
                if (res.ok){
					return res.data
                }
            })
	}
	if (data) return data
}
