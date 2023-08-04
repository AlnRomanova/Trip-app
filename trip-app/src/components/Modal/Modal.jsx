import React from "react";
import { useState } from "react";
import css from "../Modal/Modal.module.css";
import modalCloseIcon from "../../images/closeBtn.svg";
import cities from "../../cities.json";

const Modal = ({ onClose, onClickBackdrop }) => {
  const getFormattedDate = (date) => {
    const [year, month, day] = date.toISOString().split("T")[0].split("-");
    return `${year}-${month}-${day}`;
  };

  const getMaxEndDate = () => {
    if (formData.startDate) {
      const start = new Date(formData.startDate);
      const maxEndDate = new Date(start);
      maxEndDate.setDate(maxEndDate.getDate() + 15);
      return getFormattedDate(maxEndDate);
    }
    return getFormattedDate(new Date());
  };

  const [formData, setFormData] = useState({
    city: "",
    startDate: "",
    endDate: "",
  });

  const [trips, setTrips] = useState([]);
  console.log(trips);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.city) {
      const selectedCity = cities.find((city) => city.id === formData.city);
      setTrips((prevItems) => [
        ...prevItems,
        { ...formData, name: selectedCity.name },
      ]);
      setFormData({ city: "", startDate: "", endDate: "" });
    } else {
      alert("Please select a city before submitting the form.");
    }
  };

  console.log(cities.photo);
  return (
    <>
      <div className={css.modalWrapperContainer} onSubmit={onClickBackdrop}>
        <div className={css.modalWrap}>
          <div className={css.formWrapper}>
            <h3 className={css.modalTitle}>Create trip</h3>
            <form className={css.form} onSubmit={handleSubmit}>
              <label className={css.formLabel} htmlFor="title">
                City <span className={css.fieldRequired}>*</span>
              </label>
              <select
                className={css.formSelect}
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
              >
                <option
                  className={css.selectPlaceholder}
                  value=""
                  disabled
                  hidden
                >
                  Please select a city
                </option>
                {cities.map(({ id, name }) => (
                  <option key={id} value={id}>
                    {name}
                  </option>
                ))}
              </select>
              <label className={css.formLabel} htmlFor="startDate">
                Start date <span className={css.fieldRequired}>*</span>
              </label>
              <input
                className={css.formInput}
                type="date"
                id="startDate"
                name="startDate"
                placeholder="Select date"
                value={formData.startDate}
                onChange={handleChange}
                min={getFormattedDate(new Date())}
                max={getFormattedDate(
                  new Date(new Date().setDate(new Date().getDate() + 15))
                )}
              />
              <label className={css.formLabel} htmlFor="endDate">
                End date <span className={css.fieldRequired}>*</span>
              </label>
              <input
                className={css.formInput}
                type="date"
                id="endDate"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
                min={
                  formData.startDate
                    ? formData.startDate
                    : getFormattedDate(new Date())
                }
                max={getMaxEndDate()}
                placeholder="Select date"
              />
              <div className={css.buttonWrap}>
                <button className={css.btnCancel}>Cancel</button>
                <button className={css.btnAdd} type="submit">
                  Save
                </button>
              </div>
            </form>
            <button
              type="button"
              className={css.modalCloseBtn}
              onClick={onClose}
            >
              <img
                className={css.modalCloseIcon}
                src={modalCloseIcon}
                alt="close"
              />
            </button>
          </div>
        </div>
      </div>
      <ul>
      {trips.map(({ name }) => (
    <li className={css.tripItem} key={name}> {/* Use 'name' as the key */}
      <img
        className={css.tripDestinationImg}
        src={cities.find((city) => city.name === name).photo}
        alt="view of the city"
      />
      <div className={css.tripInfo}>
        <p className={css.tripDestination}>{name}</p>
        <p className={css.tripDate}></p>
      </div>
    </li>
  ))}
      </ul>
    </>
  );
};

export default Modal;
