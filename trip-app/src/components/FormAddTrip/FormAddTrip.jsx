import React from "react";
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { addTrip } from "../../redux/trips/tripsOperation";
import cities from "../../cities.json";
import css from "../FormAddTrip/FormAddTrip.module.css";
import { nanoid } from 'nanoid';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from 'date-fns';
import { toast } from "react-toastify";


const FormAddTrip = ({ onCloseModal }) => {
  
  const [formData, setFormData] = useState({
    id: nanoid(),
    city: '',
    startDate:'', 
    endDate: '',
  });
  const dispatch = useDispatch();

  const handleStartDateChange = (date) => {
    setFormData((prevData) => ({
      ...prevData,
      startDate: date,
    }));
  };
  
  const handleEndDateChange = (date) => {
    setFormData((prevData) => ({
      ...prevData,
      endDate: date,
    }));
  };



  const getCityPhoto = (selectedCityName) => {
    const selectedCity = cities.find((city) => city.name === selectedCityName);
    return selectedCity ? selectedCity.photo : "";
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value}));
  };


  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.city) {
      const formattedStartDate = format(formData.startDate, 'dd.MM.yyyy');
      console.log(formattedStartDate)
      const formattedEndDate = format(formData.endDate, 'dd.MM.yyyy');
  
      dispatch(
        addTrip({
          ...formData,
          photo: getCityPhoto(formData.city),
          startDate: formattedStartDate,
          endDate: formattedEndDate,
        })
      );
      setFormData({ city: "", startDate: "", endDate: "" });
      onCloseModal();
    } else {
      toast.error("Please select a city before submitting the form.");
    }
  };

  return (
    <>
    <div className={css.formWrapper}>
      <h3 className={css.formTitle}>Create trip</h3>
      <form className={css.form} onSubmit={handleSubmit}>
        <label className={css.formLabel} htmlFor="title">
          City <span className={css.formFieldRequired}>*</span>
        </label>
        <select
          className={css.formSelect}
          id="city"
          name="city"
          value={formData.city}
          onChange={handleChange}
        >
          <option className={css.selectPlaceholder} value="" disabled hidden>
            Please select a city
          </option>
          {cities.map(({ id, name}) => (
            <option key={id} value={name}>
              {name}
            </option>
          ))}
        </select>
        {formData.city && (
          <img
            className={css.selectedCityImg}
            src={getCityPhoto(formData.city)}
            alt={formData.city}
          />
        )}
        <label className={css.formLabel} htmlFor="startDate">
          Start date <span className={css.formFieldRequired}>*</span>
        </label>
        <DatePicker
        selected={formData.startDate ? new Date(formData.startDate) : null}
        showTimeSelect={false}
        onChange={(date) => handleStartDateChange(date)}
        dateFormat="dd.MM.yyyy"
        placeholderText="Select date"
        minDate={new Date()}
        maxDate={new Date(new Date().setDate(new Date().getDate() + 15))}
        className={css.formInput}
      />
          <label className={css.formLabel} htmlFor="endDate">
            End date <span className={css.formFieldRequired}>*</span>
          </label>
          <DatePicker
        selected={formData.endDate ? new Date(formData.endDate) : null}
        showTimeSelect={false}
        onChange={(date) => handleEndDateChange(date)}
        dateFormat="dd.MM.yyyy"
        placeholderText="Select date"
        minDate={formData.startDate ? new Date(formData.startDate) : new Date()}
        maxDate={
          formData.startDate
            ? new Date(
                new Date(formData.startDate).setDate(
                  new Date(formData.startDate).getDate() + 15
                )
              )
            : new Date(new Date().setDate(new Date().getDate() + 15))
        }
        className={css.formInput}
      />
        <div className={css.formButtonWrap}>
          <button className={css.formCancelBtn} onClick={onCloseModal}>Cancel</button>
          <button className={css.formSaveBtn} type="submit">
            Save
          </button>
        </div>
      </form>
    </div>
     </>
  );
};

export default FormAddTrip;
