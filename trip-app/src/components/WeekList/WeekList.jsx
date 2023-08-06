import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import css from "../WeekList/WeekList.module.css";
import { fetchForecastDuringWeeks } from "../../redux/forecast/forecastOperation";

const WeekList = ({startDate, endDate}) => {

  const dispatch = useDispatch();
  const forecastWeekData = useSelector((state) => state.forecast.data);
  console.log("forecastWeekData:", forecastWeekData);
  
  
  useEffect(() => {
    dispatch(fetchForecastDuringWeeks({ city: "YOUR_CITY_NAME", startDate, endDate }));
  }, [dispatch, startDate, endDate]);

  console.log(startDate)
  console.log(endDate)

  const weatherIcons = {
    "clear-day": "https://cdn-icons-png.flaticon.com/512/7865/7865939.png", 
     "rain": "https://icon-library.com/images/rain-icon-png/rain-icon-png-2.jpg",
     "thunderstorms": "https://www.seekpng.com/png/small/75-756238_collection-of-thunder-storm-icons-png-png-images.png",
     "partly-cloudy-day": "https://icon-library.com/images/partly-cloudy-icon/partly-cloudy-icon-0.jpg"
  };
 

  return (
    <div>
      <h3 className={css.weekTitle}>Week</h3>
      <ul className={css.weekList}>
      {forecastWeekData.days?.map(({ icon, tempmax, tempmin }, index) => (
          <li className={css.weekItem} key={index}>
            <p>Sunday</p>
            <img className={css.weatherImg} src={weatherIcons[icon]} alt="weather" />
            <p className={css.degrees}>{tempmax}/{tempmin}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WeekList;
