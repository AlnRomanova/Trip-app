import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import css from "../../components/FormSearch/FormSearch.module.css";
import iconSearch from "../../images/searchIcon.svg";
import { searchTrips } from "../../redux/tripsOperation";
import { selectStatus, selectError, selectFilteredTrips } from "../../redux/tripsSelector";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FormSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();

  const status = useSelector(selectStatus);
  const error = useSelector(selectError);
  const filteredTrips = useSelector(selectFilteredTrips)

  const handleSearchSubmit = async (e) => {
    e.preventDefault();

    try {
      await dispatch(searchTrips(searchQuery));
    } catch (error) {}
  };

  useEffect(() => {
    if (status === "failed" && error && filteredTrips?.length > 0) {
      toast.error(
        "Sorry, there are no matches on your search,  please try another query."
      );
    }
  }, [status, error, filteredTrips]);

  const handleChange = (e) => {
    const value = e.currentTarget.value;
    setSearchQuery(value);
    if (value.trim() === "") {
      dispatch(searchTrips(""));
    }
  };

  
  return (
    <form onSubmit={handleSearchSubmit} className={css.searchForm}>
      <label htmlFor="search">
        <input
          className={css.searchInput}
          type="text"
          name="search"
          id="search"
          value={searchQuery}
          placeholder="Search your trip"
          onChange={handleChange}
        />
        <button className={css.searchButton} type="submit">
          <img className={css.icon} src={iconSearch} alt="" />
        </button>
      </label>
    </form>
  );
};

export default FormSearch;
