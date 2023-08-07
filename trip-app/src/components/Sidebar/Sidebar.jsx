import React, { useEffect } from "react";
import css from "./Sidebar.module.css";
import { useDispatch, useSelector } from "react-redux";
import sidebarImage from "../../images/icons8-penguin-64.png";
import { fetchForecast } from "../../redux/forecast/forecastOperation";
import { selectCurrentForecastData } from "../../redux/forecast/forecastSelector";
import { format, parse } from "date-fns";

const Sidebar = () => {
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
    dispatch(fetchForecast());
  }, [dispatch]);

  const getDayOfWeek = (dateString) => {
    const date = parse(dateString, "yyyy-MM-dd", new Date());
    return format(date, "EEEE");
  };

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
      </div>
    </section>
  );
};

export default Sidebar;
