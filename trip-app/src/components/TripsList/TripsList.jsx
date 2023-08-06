import React, { useState } from "react";
import { useSelector } from "react-redux";
import css from "../../components/TripsList/TripsList.module.css";
import ButtonAddTrip from "../ButtonAddTrip/ButtonAddTrip";
import { selectAllTrips, selectError, selectFilteredTrips, selectStatus } from "../../redux/tripsSelector";



const TripsList = () => {
  const [currentPosition, setCurrentPosition] = useState(0);

  const trips = useSelector(selectAllTrips);
  const filteredTrips = useSelector(selectFilteredTrips);
  const status = useSelector(selectStatus);
  const error = useSelector(selectError);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  const displayedTrips = filteredTrips.length > 0 ? filteredTrips : trips;


  const ITEMS_PER_PAGE = 3; 


  const handleNext = () => {
    setCurrentPosition((prevPosition) => prevPosition + 1);
  };

  const handlePrevious = () => {
    setCurrentPosition((prevPosition) => prevPosition - 1);
  };

  const paginatedTrips = displayedTrips.slice(
    currentPosition * ITEMS_PER_PAGE,
    currentPosition * ITEMS_PER_PAGE + ITEMS_PER_PAGE
  );

  console.log(trips);
  return (
    <>
      <ul className={css.tripList}>
        {paginatedTrips.map(({ id, city, startDate, endDate, photo }) => (
          <li className={css.tripItem} key={id}>
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
