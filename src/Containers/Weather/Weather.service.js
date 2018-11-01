import axios from 'axios';
import Config from "../../Config/Api.config";

export function getWeatherByLocation(settings) {
    const url = `${Config.url}weather?lat=${settings.latitude}&lon=${settings.longitude}&appid=${Config.key}`;

    return axios.get(url)
        .then(response => response.data)
}

export function getForecastByLocation(settings) {
    const url = `${Config.url}forecast?lat=${settings.latitude}&lon=${settings.longitude}&appid=${Config.key}`;

    return axios.get(url)
        .then(response => response.data)
}