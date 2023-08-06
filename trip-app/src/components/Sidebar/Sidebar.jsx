import React, {useEffect} from "react";
import css from "./Sidebar.module.css";
import { useDispatch, useSelector } from "react-redux";
import sidebarImage from "../../images/icons8-penguin-64.png";

import { fetchForecast } from "../../redux/forecast/forecastOperation";


const Sidebar = () => {
  const dispatch = useDispatch();
  const forecastData = useSelector((state) => state.forecast.data);
  console.log(forecastData)

  
  const weatherIcons = {
    "clear-day": "https://cdn-icons-png.flaticon.com/512/7865/7865939.png", 
     "rain": "https://icon-library.com/images/rain-icon-png/rain-icon-png-2.jpg",
     "thunderstorms": "https://www.seekpng.com/png/small/75-756238_collection-of-thunder-storm-icons-png-png-images.png",
     "partly-cloudy-day": "https://icon-library.com/images/partly-cloudy-icon/partly-cloudy-icon-0.jpg"
  };
 

  useEffect(() => {
    dispatch(fetchForecast());
  }, [dispatch]);
  
  return (
    <section className={css.sidebar}>
      <img className={css.sidebarImg} src={sidebarImage} alt="Add Trip Icon" />
      <div className={css.sidebarContainer}>
        <h2 className={css.sidebarTitle}>Sunday</h2>
       <ul>
        {forecastData.days?.map(({ icon, temp}) => (
            <li className={css.sidebarWrap} key={icon}  >
        <img  src={weatherIcons[icon]} alt="" className={css.forecastIcon} />
        <p className={css.sidebarDegrees}>{temp}</p>
        </li>
        ))}
        </ul>
       
        <p className={css.sidebarCity}>{forecastData.address}</p>
      </div>
      <ul className={css.sidebarList}>
       {/* {forecastData.days.map(({datetime, datetimeEpoch}) => (
        <li className={css.sidebarItem}>
          <p className={css.sidebarDate}>{datetime} days</p>
          <p className={css.sidebarDateText}>{datetimeEpoch}hour</p>
        </li>
       ))} */}
      
        <li className={css.sidebarItem}>
          <p className={css.sidebarDate}>30</p>
          <p className={css.sidebarDateText}>days</p>
        </li>
        <li className={css.sidebarItem}>
          <p className={css.sidebarDate}>30</p>
          <p className={css.sidebarDateText}>days</p>
        </li>
        <li className={css.sidebarItem}>
          <p className={css.sidebarDate}>30</p>
          <p className={css.sidebarDateText}>days</p>
        </li>
        
      </ul>
    </section>
  );
};

export default Sidebar;
