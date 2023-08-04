import React from "react";
import css from "../Modal/Modal.module.css";
import modalCloseIcon from "../../images/closeBtn.svg";
import cities from '../../cities.json';

const Modal = ({onClose,onClickBackdrop }) => {

console.log(cities.photo)
  return (
    <div className={css.modalWrapperContainer} onSubmit={onClickBackdrop}>
      <div className={css.modalWrap}>
        <div className={css.formWrapper}>
          <h3 className={css.modalTitle}>Create trip</h3>
          <form className={css.form}>
            <label className={css.formLabel} htmlFor="title">
              City <span className={css.fieldRequired}>*</span>
            </label>
            <select
              className={css.formSelect}
              id="city"
              name="city"
            >
              <option
                className={css.selectPlaceholder}
                value=""
                disabled
                selected
                hidden
              >
                Please select a city
              </option>
            </select>
            <label className={css.formLabel} htmlFor="title">
              Start date <span className={css.fieldRequired}>*</span>
            </label>
            <input
              className={css.formInput}
              type="date"
              id="startDate"
              name="startDate"
              placeholder="Select date"
            />
            <label className={css.formLabel} htmlFor="title">
              End date <span className={css.fieldRequired}>*</span>
            </label>
            <input
              className={css.formInput}
              type="date"
              id="endDate"
              name="endDate"
              placeholder="Select date"
              max={new Date().toISOString().split("T")[0]}
            />
            <div className={css.buttonWrap}>
              <button className={css.btnCancel}>Cancel</button>
              <button className={css.btnAdd} type="submit">
                Save
              </button>
            </div>
          </form>
          <button type="button" className={css.modalCloseBtn} onClick={onClose}>
            <img
              className={css.modalCloseIcon}
              src={modalCloseIcon}
              alt="close"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
