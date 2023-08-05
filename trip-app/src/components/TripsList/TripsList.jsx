import React from "react";
import css from "../../components/TripsList/TripsList.module.css";
import ButtonAddTrip from "../ButtonAddTrip/ButtonAddTrip";

const TripsList = ({trips, setTrips}) => {
console.log(trips)
  return (
    <>
      <ul className={css.tripList}>
      {trips.map(({ city, startDate, endDate, photo }) => (
          <li className={css.tripItem} key={city}>
            <img
              className={css.tripDestinationImg}
              src={photo}
              alt="city"
            />
            <div className={css.tripInfo}>
              <p className={css.tripDestination}>{city}</p>
              <p className={css.tripDate}>{startDate} - {endDate}</p>
            </div>
          </li>
        ))}
    
      <ButtonAddTrip setTrips={setTrips} />  
      </ul>  
    </>
  );
};

export default TripsList;
