import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import css from "../SearchInput/SearchInput.module.css";
import iconSearch from "../../images/searchIcon.svg";
import { searchTrips } from "../../redux/trips/tripsOperation";
import { selectError} from "../../redux/trips/tripsSelector";
import { toast } from "react-toastify";
import debounce from "lodash.debounce";

const SearchInput = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();
  const error = useSelector(selectError);

   useEffect(() => {
    if (error === 'No trips found for the given search query.') {
      toast.error(
        "Sorry, there are no matches on your search, please try another query."
      );
    }
  }, [error]);

  
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