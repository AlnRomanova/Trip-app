import React from "react";
import css from "../WeekList/WeekList.module.css";
import weatherIcon from "../../images/icons8-cloud-with-rain-48.png";

const WeekList = () => {
  return (
    <div>
      <h3 className={css.weekTitle}>Week</h3>
      <ul className={css.weekList}>
        <li className={css.weekItem}>
          <p>Sunday</p>
          <img className={css.weatherImg} src={weatherIcon} alt="weather" />
          <p className={css.degrees}>24/25</p>
        </li>
        <li className={css.weekItem}>
          <p>Sunday</p>
          <img className={css.weatherImg} src={weatherIcon} alt="weather" />
          <p className={css.degrees}>24/25</p>
        </li>
        <li className={css.weekItem}>
          <p>Sunday</p>
          <img className={css.weatherImg} src={weatherIcon} alt="weather" />
          <p className={css.degrees}>24/25</p>
        </li>
        <li className={css.weekItem}>
          <p>Sunday</p>
          <img className={css.weatherImg} src={weatherIcon} alt="weather" />
          <p className={css.degrees}>24/25</p>
        </li>
        <li className={css.weekItem}>
          <p>Sunday</p>
          <img className={css.weatherImg} src={weatherIcon} alt="weather" />
          <p className={css.degrees}>24/25</p>
        </li>
        <li className={css.weekItem}>
          <p>Sunday</p>
          <img className={css.weatherImg} src={weatherIcon} alt="weather" />
          <p className={css.degrees}>24/25</p>
        </li>
        <li className={css.weekItem}>
          <p>Sunday</p>
          <img className={css.weatherImg} src={weatherIcon} alt="weather" />
          <p className={css.degrees}>24/25</p>
        </li>
      </ul>
    </div>
  );
};

export default WeekList;
