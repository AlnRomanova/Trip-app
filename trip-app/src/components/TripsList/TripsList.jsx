import React from 'react';
import { useState, useEffect } from 'react';
import css from '../../components/TripsList/TripsList.module.css';
// import defaultImage from '../../images/default-image-icon-missing-picture-page-vector-40546530.jpg';
import pointImage from '../../images/shutterstock_1054558727-1140x694.jpg'
import addTripIcon from '../../images/addTripIcon.svg';
import Modal from '../Modal/Modal';



const TripsList = () => {
  const [isModalAddTransactionOpen, setIsModalAddTransactionOpen] = useState(false);

  useEffect(() => {
    if (isModalAddTransactionOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [isModalAddTransactionOpen]);

  const handleOpenModal = () => {
    setIsModalAddTransactionOpen(true);

  };

  const handleClickClose = () => {
    setIsModalAddTransactionOpen(false);

  };

  const handleBackdrop = e => {
    if (e.target === e.currentTarget) {
      handleClickClose();
    }
  };

  useEffect(() => {
    const closeByEsc = e => {
      if (e.code === 'Escape') {
        handleClickClose();
      }
    };

    window.addEventListener('keydown', closeByEsc);

    return () => {
      window.removeEventListener('keydown', closeByEsc);
    };
  }, []);

  return (
    <>
      <ul className={css.tripList}>
      
          <li className={css.tripItem}>
          <img
              className={css.tripDestinationImg}
              src= {pointImage}
              alt="city"
            />
            <div className={css.tripInfo}>
            <p className={css.tripDestination}>London</p>
            <p className={css.tripDate}>23.06.2020 - 28.06.2020</p>
            </div>
          </li>
          <li className={css.tripItem}>
          <img
              className={css.tripDestinationImg}
              src= {pointImage}
              alt="city"
            />
            <div className={css.tripInfo}>
            <p className={css.tripDestination}>London</p>
            <p className={css.tripDate}>23.06.2020 - 28.06.2020</p>
            </div>
          </li>
          <li className={css.tripItem}>
          <img
              className={css.tripDestinationImg}
              src= {pointImage}
              alt="city"
            />
            <div className={css.tripInfo}>
            <p className={css.tripDestination}>London</p>
            <p className={css.tripDate}>23.06.2020 - 28.06.2020</p>
            </div>
          </li>
          <div className={css.addTripItem}>
            <div className={css.addTripWrap}>
            <button className={css.addTripBtn} onClick={() => handleOpenModal()}>
            <img className={css.addTripIcon} src={addTripIcon} alt="Add Trip Icon" />
            </button>
            <p className={css.addTripText}>Add trip</p>
            </div>
          </div>
      </ul>
      {isModalAddTransactionOpen && (
           <Modal
           onClose={handleClickClose}
           onClickBackdrop={handleBackdrop}
         />
       )}
      
  </>
  );
}

export default TripsList;