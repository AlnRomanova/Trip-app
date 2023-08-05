import React from "react";
import css from "../../components/TripsList/TripsList.module.css";
import pointImage from "../../images/shutterstock_1054558727-1140x694.jpg";
import ButtonAddTrip from "../ButtonAddTrip/ButtonAddTrip";

const TripsList = ({trips, setTrips}) => {

  return (
    <>
      <ul className={css.tripList}>
      {trips.map(({ city, startDate, endDate }) => (
          <li className={css.tripItem} key={city}>
            <img
              className={css.tripDestinationImg}
              src={pointImage}
              alt="city"
            />
            <div className={css.tripInfo}>
              <p className={css.tripDestination}>{city}</p>
              <p className={css.tripDate}>{startDate} - {endDate}</p>
            </div>
          </li>
        ))}
      </ul>  
      <ButtonAddTrip setTrips={setTrips} />
    </>
  );
};

export default TripsList;
