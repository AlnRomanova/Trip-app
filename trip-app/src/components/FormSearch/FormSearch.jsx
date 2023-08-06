import React from "react";
import { useState } from "react";
import { useDispatch } from 'react-redux';
import css from "../../components/FormSearch/FormSearch.module.css";
import iconSearch from "../../images/searchIcon.svg";
import iconClose from "../../images/x-circle.svg";
import { searchTrips } from "../../redux/tripsOperation";


const FormSearch = () => {
  const [isHiden, setIsHiden] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  console.log(searchQuery)

  const dispatch = useDispatch();

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    dispatch(searchTrips(searchQuery));
  };

  const handleChange = (e) => {
    setSearchQuery(e.currentTarget.value);
  };

  const handleCloseBtn = () => {
    setSearchQuery("");
    setIsHiden(false);
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
        {!isHiden ? (
          <button className={css.searchButton} disabled={!searchQuery}>
            <img className={css.icon} src={iconSearch} alt="" />
          </button>
        ) : (
          <button
            className={css.closeButton}
            type="button"
            onClick={() => handleCloseBtn()}
          >
            <img className={css.icon} src={iconClose} alt="" />
          </button>
        )}
      </label>
    </form>
  );
};

export default FormSearch;
