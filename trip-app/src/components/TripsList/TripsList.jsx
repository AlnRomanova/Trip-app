import React, { useState } from "react";
import { useSelector } from "react-redux";
import css from "../../components/TripsList/TripsList.module.css";
import ButtonAddTrip from "../ButtonAddTrip/ButtonAddTrip";

const TripsList = () => {
  const trips = useSelector((state) => state.trips.trips);

  const ITEMS_PER_PAGE = 3; 

  const [currentPosition, setCurrentPosition] = useState(0);

  const handleNext = () => {
    setCurrentPosition((prevPosition) => prevPosition + 1);
  };

  const handlePrevious = () => {
    setCurrentPosition((prevPosition) => prevPosition - 1);
  };

  const paginatedTrips = trips.slice(
    currentPosition * ITEMS_PER_PAGE,
    currentPosition * ITEMS_PER_PAGE + ITEMS_PER_PAGE
  );

  console.log(trips);
  return (
    <>
      <ul className={css.tripList}>
        {paginatedTrips.map(({ city, startDate, endDate, photo }) => (
          <li className={css.tripItem} key={city}>
            <img className={css.tripDestinationImg} src={photo} alt="city" />
            <div className={css.tripInfo}>
              <p className={css.tripDestination}>{city}</p>
              <p className={css.tripDate}>
                {startDate} - {endDate}
              </p>
            </div>
          </li>
        ))}
        <ButtonAddTrip />
      </ul>
      <div className={css.sliderButtons}>
        <button
          className={css.prevButton}
          onClick={handlePrevious}
          disabled={currentPosition === 0}
        >
          Previous
        </button>
        <button
          className={css.nextButton}
          onClick={handleNext}
          disabled={currentPosition >= trips.length / ITEMS_PER_PAGE - 1}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default TripsList;
