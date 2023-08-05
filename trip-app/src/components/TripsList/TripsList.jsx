import React from 'react';
import css from '../../components/TripsList/TripsList.module.css';
// import defaultImage from '../../images/default-image-icon-missing-picture-page-vector-40546530.jpg';
import pointImage from '../../images/shutterstock_1054558727-1140x694.jpg'
import ButtonAddTrip from '../ButtonAddTrip/ButtonAddTrip';



const TripsList = () => {
  
  return (
    <>
      <ul className={css.tripList}>
      
          <li className={css.tripItem}>
          <img
              className={css.tripDestinationImg}
              src= {pointImage}
              alt="city"
            />
            <div className={css.tripInfo}>
            <p className={css.tripDestination}>London</p>
            <p className={css.tripDate}>23.06.2020 - 28.06.2020</p>
            </div>
          </li>
          <li className={css.tripItem}>
          <img
              className={css.tripDestinationImg}
              src= {pointImage}
              alt="city"
            />
            <div className={css.tripInfo}>
            <p className={css.tripDestination}>London</p>
            <p className={css.tripDate}>23.06.2020 - 28.06.2020</p>
            </div>
          </li>
          <li className={css.tripItem}>
          <img
              className={css.tripDestinationImg}
              src= {pointImage}
              alt="city"
            />
            <div className={css.tripInfo}>
            <p className={css.tripDestination}>London</p>
            <p className={css.tripDate}>23.06.2020 - 28.06.2020</p>
            </div>
          </li>
          <ButtonAddTrip/>
      </ul>
  </>
  );
}

export default TripsList;