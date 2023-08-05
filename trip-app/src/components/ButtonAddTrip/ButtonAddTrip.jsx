import React from "react";
import { useState, useEffect } from "react";
import css from "../ButtonAddTrip/ButtonAddTrip.module.css";
import addTripIcon from "../../images/addTripIcon.svg";
import ModalAddTrip from "../ModalAddTrip/ModalAddTrip";

const ButtonAddTrip = () => {
  const [isModalAddTransactionOpen, setIsModalAddTransactionOpen] =
    useState(false);

  useEffect(() => {
    if (isModalAddTransactionOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [isModalAddTransactionOpen]);

  const handleOpenModal = () => {
    setIsModalAddTransactionOpen(true);
  };

  const handleClickClose = () => {
    setIsModalAddTransactionOpen(false);
  };

  const handleBackdrop = (e) => {
    if (e.target === e.currentTarget) {
      handleClickClose();
    }
  };

  useEffect(() => {
    const closeByEsc = (e) => {
      if (e.code === "Escape") {
        handleClickClose();
      }
    };

    window.addEventListener("keydown", closeByEsc);

    return () => {
      window.removeEventListener("keydown", closeByEsc);
    };
  }, []);

  return (
    <>
      <div className={css.addTripItem}>
        <div className={css.addTripWrap}>
          <button className={css.addTripBtn} onClick={() => handleOpenModal()}>
            <img
              className={css.addTripIcon}
              src={addTripIcon}
              alt="Add Trip Icon"
            />
          </button>
          <p className={css.addTripText}>Add trip</p>
        </div>
      </div>
      {isModalAddTransactionOpen && (
        <ModalAddTrip
          onClose={handleClickClose}
          onClickBackdrop={handleBackdrop}
        />
      )}
    </>
  );
};

export default ButtonAddTrip;
