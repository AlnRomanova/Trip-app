import React, { useEffect, useState } from "react";
import css from "./Sidebar.module.css";
import { useDispatch, useSelector } from "react-redux";
import sidebarImage from "../../images/icons8-penguin-64.png";
import { fetchForecast } from "../../redux/forecast/forecastOperation";
import { selectCurrentForecastData } from "../../redux/forecast/forecastSelector";
import { format, parse } from "date-fns";
import { selectSelectedTrip } from "../../redux/trips/tripsSelector";

const Sidebar = () => {
  
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
console.log(countdown)

const selectedTrip = useSelector(selectSelectedTrip);
console.log(selectedTrip)

  const dispatch = useDispatch();
  const forecastData = useSelector(selectCurrentForecastData);

  const weatherIcons = {
    "clear-day": "https://cdn-icons-png.flaticon.com/512/7865/7865939.png",
    rain: "https://icon-library.com/images/rain-icon-png/rain-icon-png-2.jpg",
    thunderstorms:
      "https://www.seekpng.com/png/small/75-756238_collection-of-thunder-storm-icons-png-png-images.png",
    "partly-cloudy-day":
      "https://icon-library.com/images/partly-cloudy-icon/partly-cloudy-icon-0.jpg",
  };

  useEffect(() => {
    dispatch(fetchForecast(selectedTrip));
  }, [dispatch, selectedTrip]);

  const getDayOfWeek = (dateString) => {
    const date = parse(dateString, "yyyy-MM-dd", new Date());
    return format(date, "EEEE");
  };


  useEffect(() => {
    if (selectedTrip && forecastData.days) {
    
      const selectedTripData = forecastData.days.find(
        (day) => day.address === selectedTrip
      );
  
      if (selectedTripData) {
        const startDate = parse(selectedTripData.datetime, "yyyy-MM-dd", new Date());
        const currentDate = new Date();
        const timeDifference = startDate - currentDate;
  
        console.log(timeDifference);
  
        if (timeDifference > 0) {
          const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
          const hours = Math.floor(
            (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          );
          const minutes = Math.floor(
            (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
          );
          const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  
          setCountdown({ days, hours, minutes, seconds });
        }
      }
    }
  }, [selectedTrip, forecastData.days]);

  return (
    <section className={css.sidebar}>
      <img className={css.sidebarImg} src={sidebarImage} alt="Add Trip Icon" />
      <div className={css.sidebarContainer}>
        <ul className={css.siderbarList}>
          {forecastData.days?.map(({ icon, temp, datetime }, index) => (
            <li className={css.sidebarItem} key={index}>
              <p className={css.sidebarDayOfWeek}>{getDayOfWeek(datetime)}</p>
              <div className={css.sidebarDegreesWrap}>
                <img
                  src={weatherIcons[icon]}
                  alt=""
                  className={css.forecastIcon}
                />
                <div className={css.sidebarTemp}>
                  <p className={css.sidebarTempValue}>{temp}</p>
                  <p className={css.sidebarTempUnit}>°C</p>
                </div>
              </div>
              <p className={css.sidebarCity}>{forecastData.address}</p>
            </li>
          ))}
        </ul>
        {countdown.days > 0 && (
            <div className={css.countdownContainer}>
              <p>Countdown to Trip: </p>
              <div className={css.countdownTimer}>
                <span>{countdown.days}d </span>
                <span>{countdown.hours}h </span>
                <span>{countdown.minutes}m </span>
                <span>{countdown.seconds}s </span>
              </div>
            </div>
          )}
      </div>
    </section>
  );
};

export default Sidebar;
