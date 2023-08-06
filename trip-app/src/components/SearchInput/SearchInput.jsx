import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import css from "../SearchInput/SearchInput.module.css";
import iconSearch from "../../images/searchIcon.svg";
import { searchTrips } from "../../redux/trips/tripsOperation";
import { selectStatus, selectError, selectFilteredTrips } from "../../redux/trips/tripsSelector";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import debounce from "lodash.debounce";

const SearchInput = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();
  const status = useSelector(selectStatus);
  const error = useSelector(selectError);
  const filteredTrips = useSelector(selectFilteredTrips);

   useEffect(() => {
    if (error === 'No trips found for the given search query.') {
      toast.error(
        "Sorry, there are no matches on your search, please try another query."
      );
    }
  }, [error]);

  useEffect(() => {
    if (status === "failed" && error && filteredTrips?.length > 0) {
      toast.error(
        "Sorry, there are no matches on your search, please try another query."
      );
    }
  }, [status, error, filteredTrips]);
  
// eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedSearch = useCallback(
    debounce((value) => {
      dispatch(searchTrips(value.trim()));
    }, 500),
    [dispatch]
  );

  const handleChange = (event) => {
    const { value } = event.target;
    setSearchQuery(value);
    debouncedSearch(value); 
  };

  return (
    <div className={css.searchWrap}>
      <label htmlFor="search" className={css.searchLabel}>
        <img className={css.searchIcon} src={iconSearch} alt="" />
      </label>
      <input
        className={css.searchInput}
        type="text"
        name="search"
        id="search"
        value={searchQuery}
        placeholder="Search your trip"
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchInput;