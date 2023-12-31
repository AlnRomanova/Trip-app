import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import WeekList from "../WeekList/WeekList";
import css from "../../components/TripsList/TripsList.module.css";
import ButtonAddTrip from "../ButtonAddTrip/ButtonAddTrip";
import {
  selectFilteredTrips,
  selectSelectedTrip,
  sortTripsByStartDate,
} from "../../redux/trips/tripsSelector";
import {
  fetchForecast,
  fetchForecastDuringWeeks,
} from "../../redux/forecast/forecastOperation";
import { format, parse } from "date-fns";
import { toast } from "react-toastify";
import { setSelectedTrip } from "../../redux/trips/tripsSlice";
import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";

const TripsList = () => {
  const [currentPosition, setCurrentPosition] = useState(0);
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);



  const dispatch = useDispatch();
  const selectedTrip = useSelector(selectSelectedTrip);
  const trips = useSelector(sortTripsByStartDate);

  console.log(trips)

  const filteredTrips = useSelector(selectFilteredTrips);

  useEffect(() => {
    setCurrentPosition(0);
  }, [trips, filteredTrips?.length]);

  const displayedTrips =
    filteredTrips?.length > 0 ? [...filteredTrips] : [...trips];

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

  const convertToDatetime = (date) => {
    return format(parse(date, "dd.MM.yyyy", new Date()), "yyyy-MM-dd");
  };

  const handleWeekForecastSelection = (city, startDate, endDate) => {
    dispatch(fetchForecastDuringWeeks({ city, startDate, endDate }));
  };

  const handleTripSelection = (selectedCity) => {
    dispatch(fetchForecast(selectedCity));
  };

  const handleTripItemClick = (city, startDate, endDate) => {
    if (!startDate || !endDate) {
      toast.error("Invalid startDate or endDate:", startDate, endDate);
      return;
    }
    dispatch(setSelectedTrip(city));
    setSelectedStartDate(convertToDatetime(startDate));
    setSelectedEndDate(convertToDatetime(endDate));
    handleTripSelection(city);
    handleWeekForecastSelection(
      city,
      convertToDatetime(startDate),
      convertToDatetime(endDate)
    );
  };

  return (
    <>
      <ul className={css.tripList}>
        {paginatedTrips.map(({ id, city, startDate, endDate, photo }) => (
          <li
            className={`${css.tripItem} ${
              selectedTrip === city ? css.selected : ""
            }`}
            key={id}
            onClick={() => handleTripItemClick(city, startDate, endDate)}
          >
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
     
        <button
          className={css.prevButton}
          onClick={handlePrevious}
          disabled={currentPosition === 0}
        >
           <TfiAngleLeft className={css.iconBtn}/>
        </button>
        <button
          className={css.nextButton}
          onClick={handleNext}
          disabled={currentPosition >= trips?.length / ITEMS_PER_PAGE - 1}
        >  
    <TfiAngleRight className={css.iconBtn}/>
        </button>

      {selectedTrip && (
        <WeekList
          startDate={selectedStartDate}
          endDate={selectedEndDate}
          city={selectedTrip}
        />
      )}
    </>
  );
};

export default TripsList;
