import './App.css';
import { useEffect, useState } from 'react';
import axios from '../src/utils/utils.js';
import WeatherLiveForecast from '../src/components/weatherLiveForecast';

const App = () => {
  const [weather, setWeather] = useState({
    temperature: '',
    country: '',
    weather: '',
    temp_feel_like: '',
    sunset: '',
  });
  const fetchDataFromApi = async () => {
    const response = await axios.get(
      '/data/2.5/weather?q=Delhi&APPID=c1f89df5be2c3011740707840ff3b3aa&units=metric'
    );
    // console.log(response.data.main.temp,response.data.name,response.data.weather[0].main,response.data.main.feels_like,response.data.sys.sunset)
    const timestamp = response.data.sys.sunset;
    const time_zone = response.data.timezone * 1000;
    const date = new Date(timestamp * 1000);
    const localDate = new Date(date.getTime() + time_zone);
    console.log('0', localDate);
    const formattedDate = localDate
      .toISOString()
      .replace('T', ' ')
      .substring(0, 19);
    console.log('1', formattedDate);
    const newDate = new Date(formattedDate);
    console.log('2', newDate);
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    const day = newDate.getDate();
    const month = monthNames[newDate.getMonth()];
    const year = newDate.getFullYear();
    const hours = newDate.getHours();
    const minutes = newDate.getMinutes();
    const newformattedDate = `${day} ${month} ${year}`;
    const sunset_time = `${hours}:${minutes}`;

    setWeather({
      ...weather,
      temperature: response.data.main.temp,
      country: response.data.name,
      weather: response.data.weather[0].main,
      temp_feel_like: response.data.main.feels_like,
      sunset: sunset_time,
      date: newformattedDate,
    });
    console.log(weather);
  };

  useEffect(() => {
    fetchDataFromApi();
  }, []);

  return (
    <>
      <div className="main-container">
        <div className="weather-now">
          <div className="weather-now-head">
            <h3>Today</h3>
            <i class="fa-solid fa-chevron-down"></i>
          </div>
          <div className="weather-now-body">
            <i class="fa-solid fa-cloud"></i>
            <p>{weather.temperature}</p>
            <i class="fa-solid fa-o"></i>
          </div>
          <div className="weather-now-tail">
            <p>{weather.weather}</p>
            <p>{weather.country}</p>
            <p>{weather.date}</p>
            <p>
              Feels like {weather.feels_like} | Sunset {weather.sunset}
            </p>
          </div>
        </div>
        <div className="weather-forecast">
          <WeatherLiveForecast />
          <WeatherLiveForecast />
          <WeatherLiveForecast />
          <WeatherLiveForecast />
          <WeatherLiveForecast />
          <WeatherLiveForecast />
          <WeatherLiveForecast />
          <WeatherLiveForecast />
          <WeatherLiveForecast />
          <WeatherLiveForecast />
        </div>
        <div className='text'>
        <h3>Today's Weather</h3>
        <p>
          Welcome to the weather forecast. Now, let’s see what the weather is
          like today. In the north of the country it’s very windy and cold.
          There is a chance of some rain too, so don’t leave home without your
          umbrella!
        </p></div>
      </div>
    </>
  );
};

export default App;
