import React from "react";
import { useState } from "react";
import css from "../../components/FormSearch/FormSearch.module.css";
import iconSearch from "../../images/searchIcon.svg";
import iconClose from "../../images/x-circle.svg";

const FormSearch = () => {
  const [trips, setTrips] = useState([]);
  const [isHiden, setIsHiden] = useState(false);
  const [value, setValue] = useState("");

  console.log(trips);
  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    setIsHiden(true);
    const searchQuery = e.currentTarget.elements.search.value.trim();
    if (searchQuery === "") {
      setTrips(null);
      return;
    }

    // try {
    //   const renderSearchedQuery = await fetchSearchNews(search);
    //   setTrips(renderSearchedQuery);
    // } catch (error) {
    // }
  };

  const handleClick = (e) => {
    setValue(e.currentTarget.value);
  };

  const handleCloseBtn = () => {
    setValue("");
    setTrips(null);
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
          value={value}
          placeholder="Search your trip"
          onChange={handleClick}
        />
        {!isHiden ? (
          <button className={css.searchButton} disabled={!value}>
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
