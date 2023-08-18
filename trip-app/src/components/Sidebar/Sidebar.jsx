import React, { useEffect, useState } from "react";
import css from "./Sidebar.module.css";
import { useDispatch, useSelector } from "react-redux";
import sidebarImage from "../../images/icons8-penguin-64.png";
import { fetchForecast } from "../../redux/forecast/forecastOperation";
import { selectCurrentForecastData } from "../../redux/forecast/forecastSelector";
import { format, parse } from "date-fns";
import { selectAllTrips, selectSelectedTrip } from "../../redux/trips/tripsSelector";

const Sidebar = () => {

const selectedTrip = useSelector(selectSelectedTrip);
console.log(selectedTrip)

 const trips = useSelector(selectAllTrips)
 console.log(trips)


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
  const [countdownTime, setCountdownTime] = useState(null);


  
  useEffect(() => {
    dispatch(fetchForecast(selectedTrip));
    const selectedTripObj = trips.find(trip => trip.city === selectedTrip);
    if (selectedTripObj && selectedTripObj.startDate) {
      const tripStartDateParts = selectedTripObj.startDate.split(".");
      const tripStartDate = new Date(
        tripStartDateParts[2], 
        tripStartDateParts[1] - 1,
        tripStartDateParts[0] 
      );
      
      const currentTime = new Date();
      const timeDifference = tripStartDate - currentTime;
      setCountdownTime(timeDifference);
    }
  }, [dispatch, selectedTrip, trips]);


  const getDayOfWeek = (dateString) => {
    const date = parse(dateString, "yyyy-MM-dd", new Date());
    return format(date, "EEEE");
  };



  return (
    <section className={css.sidebar}>
      <img className={css.sidebarImg} src={sidebarImage} alt="Add Trip Icon" />
      <div className={css.sidebarContainer}>
        <ul className={css.siderbarList}>
          {forecastData.days?.map(({ icon, tempmax, datetime }, index) => (
            <li className={css.sidebarItem} key={index}>
              <p className={css.sidebarDayOfWeek}>{getDayOfWeek(datetime)}</p>
              <div className={css.sidebarDegreesWrap}>
                <img
                  src={weatherIcons[icon]}
                  alt=""
                  className={css.forecastIcon}
                />
                <div className={css.sidebarTemp}>
                  <p className={css.sidebarTempValue}>{tempmax}</p>
                  <p className={css.sidebarTempUnit}>°C</p>
                </div>
              </div>
              <p className={css.sidebarCity}>{forecastData.address}</p>
            </li>
          ))}
        </ul>
        <div className={css.countdown}>
          {countdownTime !== null && countdownTime > 0 ? (
            <p className={css.countdownText}>
              <span className={css.countdownTimer}>
                {Math.floor(countdownTime / (1000 * 60 * 60 * 24))} days{" "}
                {Math.floor((countdownTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))} hours{" "}
                {Math.floor((countdownTime % (1000 * 60 * 60)) / (1000 * 60))} minutes{" "}
                {Math.floor((countdownTime % (1000 * 60)) / 1000)} seconds
              </span>
            </p>
          ) : (
            <p className={css.countdownText}>Trip has started!</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
