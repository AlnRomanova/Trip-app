import React from 'react';
import css from '../../components/FormSearch/FormSearch.module.css';
import iconSearch from '../../images/searchIcon.svg';
import iconClose from '../../images/x-circle.svg';


const FormSearch = ({ onSubmit, onChange, value, onClose, isHiden }) => {
  return (
<form onSubmit={onSubmit} className={css.searchForm}>
      <label htmlFor="search">
        <input className={css.searchInput}
          type="text"
          name="search"
          id="search"
          value={value}
          placeholder="Search your trip"
          onChange={onChange}
        />
        {!isHiden ? (
          <button className={css.searchButton}  disabled={!value}>
            <img className={css.icon} src={iconSearch} alt="" />
          </button>
        ) : (
          <button className={css.closeButton} type="button" onClick={onClose}>
           <img className={css.icon} src={iconClose} alt="" />
          </button>
        )}
      </label>
    </form>
  )
}

export default FormSearch
