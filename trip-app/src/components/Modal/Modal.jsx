import React from "react";
import css from "../Modal/Modal.module.css";
import modalCloseIcon from "../../images/closeBtn.svg";
import FormAddTrip from "../FormAddTrip/FormAddTrip";

const Modal = ({ onClose, onClickBackdrop }) => {

  return (
    <>
      <div className={css.modalWrapperContainer} onSubmit={onClickBackdrop}>
        <div className={css.modalWrap}>
            <FormAddTrip/>
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
    </>
  );
};

export default Modal;
