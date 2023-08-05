import React from "react";
import css from "./ModalAddTrip.module.css";
import modalCloseIcon from "../../images/closeBtn.svg";
import FormAddTrip from "../FormAddTrip/FormAddTrip";

const ModalAddTrip = ({ onCloseModal, onClickBackdrop }) => {
  return (
    <>
      <div className={css.modalWrapperContainer} onSubmit={onClickBackdrop}>
        <div className={css.modalWrap}>
          <FormAddTrip onCloseModal={onCloseModal}/>
          <button type="button" className={css.modalCloseBtn} onClick={onCloseModal}>
            <img
              className={css.modalCloseIcon}
              src={modalCloseIcon}
              alt="close"
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default ModalAddTrip;
