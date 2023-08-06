import React, {useEffect} from "react";
import css from "./Sidebar.module.css";
import { useDispatch, useSelector } from "react-redux";
import sidebarImage from "../../images/icons8-penguin-64.png";

import { fetchForecast } from "../../redux/forecast/forecastOperation";


const Sidebar = () => {
  const dispatch = useDispatch();
  const forecastData = useSelector((state) => state.forecast.data);
  console.log(forecastData.days)

  

  useEffect(() => {
    dispatch(fetchForecast());
  }, [dispatch]);
  
  return (
    <section className={css.sidebar}>
      <img className={css.sidebarImg} src={sidebarImage} alt="Add Trip Icon" />
      <div className={css.sidebarContainer}>
        <h2 className={css.sidebarTitle}>Sunday</h2>
        
        {/* <div className={css.sidebarWrap}>
        <img src={imageSidebar} alt="" />
        <p className={css.sidebarDegrees}>{}  </p>
        </div> */}
        {/* <ul>
        {forecastData.days.map(({icon, tempmax}) => (
            <li className={css.sidebarWrap}>
        <img src={icon} alt="" />
        <p className={css.sidebarDegrees}>{tempmax}</p>
        </li>
        ))}
        </ul> */}
       
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
