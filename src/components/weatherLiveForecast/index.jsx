import './weatherLiveForecast.css';

const WeatherLiveForecast = () => {
  return (
    <>
      <div className="weather-timely-forecast">
        <p>Now</p>
        <div className="forecast-breakdown">
          <i class="fa-solid fa-cloud-sun"></i>
          <p>25</p>
          <i class="fa-solid fa-o"></i>
        </div>
      </div>
    </>
  );
};

export default WeatherLiveForecast;
