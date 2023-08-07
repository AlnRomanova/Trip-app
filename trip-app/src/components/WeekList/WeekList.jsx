import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import css from "../WeekList/WeekList.module.css";
import { fetchForecastDuringWeeks } from "../../redux/forecast/forecastOperation";
import { selectWeeklyForecastData } from "../../redux/forecast/forecastSelector";

const WeekList = ({startDate, endDate, city}) => {

  const dispatch = useDispatch();
  const forecastWeekData = useSelector(selectWeeklyForecastData);
  console.log("forecastWeekData:", forecastWeekData);
  
  
  useEffect(() => {
    dispatch(fetchForecastDuringWeeks({ city, startDate, endDate }));
  }, [dispatch, startDate, endDate, city]);

  console.log(startDate)
  console.log(endDate)

  const weatherIcons = {
    "clear-day": "https://static.vecteezy.com/system/resources/previews/009/344/657/original/sun-transparent-background-free-png.png", 
     "rain": "https://icon-library.com/images/rain-icon-png/rain-icon-png-2.jpg",
     "cloudy": "https://cdn-icons-png.flaticon.com/512/1163/1163634.png",
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
