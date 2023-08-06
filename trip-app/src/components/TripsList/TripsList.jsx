import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import css from "../../components/TripsList/TripsList.module.css";
import ButtonAddTrip from "../ButtonAddTrip/ButtonAddTrip";
import { selectFilteredTrips, sortTripsByStartDate} from "../../redux/trips/tripsSelector";
import { fetchForecast } from "../../redux/forecast/forecastOperation";

const TripsList = () => {
  const [currentPosition, setCurrentPosition] = useState(0);
  const [selectedTrip, setSelectedTrip] = useState(null);
  const dispatch = useDispatch();
  console.log(selectedTrip)

  const trips = useSelector(sortTripsByStartDate);
  const filteredTrips = useSelector(selectFilteredTrips);
  

  useEffect(() => {
    setCurrentPosition(0);
  }, [trips, filteredTrips?.length]);
  

  const displayedTrips = filteredTrips?.length > 0 ? [...filteredTrips] : [...trips];

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


  const handleTripItemClick = (city) => {
    console.log(city)
    setSelectedTrip(city); 
    dispatch(fetchForecast(city)); 
  };

  return (
    <>
      <ul className={css.tripList}>
        {paginatedTrips.map(({ id, city, startDate, endDate, photo }) => (
          <li className={css.tripItem} key={id} onClick={() => handleTripItemClick(city)}>
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
          disabled={currentPosition >= trips?.length / ITEMS_PER_PAGE - 1}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default TripsList;
