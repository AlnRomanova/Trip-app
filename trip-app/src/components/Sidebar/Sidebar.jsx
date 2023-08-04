import React from "react";
import css from "./Sidebar.module.css";
import sidebarImage from "../../images/icons8-penguin-64.png";
import imageSidebar from '../../images/icons8-cloud-with-rain-48.png';

const Sidebar = () => {
  return (
    <section className={css.sidebar}>
      <img className={css.sidebarImg} src={sidebarImage} alt="Add Trip Icon" />
      <div className={css.sidebarContainer}>
        <h2 className={css.sidebarTitle}>Sunday</h2>
        <div className={css.sidebarWrap}>
        <img src={imageSidebar} alt="" />
        <p className={css.sidebarDegrees}>24  </p>
        </div>
        <p className={css.sidebarCity}>London</p>
      </div>
      <ul className={css.sidebarList}>
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
        <li className={css.sidebarItem}>
          <p className={css.sidebarDate}>30</p>
          <p className={css.sidebarDateText}>days</p>
        </li>
        
      </ul>
    </section>
  );
};

export default Sidebar;
