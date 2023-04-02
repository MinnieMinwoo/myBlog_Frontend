import React, { useEffect, useRef } from "react";
import { useModal } from "../../states/ModalState";
import { Modal } from "bootstrap";

const AlertModal = () => {
  const { modalDataState, closeModal, closeModalWithCallback } = useModal();
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!modalDataState.isOpen || !(modalRef.current instanceof HTMLDivElement))
      return;
    const showModal = new Modal(modalRef.current);
    showModal.show();
  }, [modalDataState]);

  return (
    <div
      className="AlertModal modal fade modal-lg"
      id="AlertModal"
      tabIndex={-1}
      aria-labelledby="AlertModalLabel"
      ref={modalRef}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{modalDataState.title}</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={
                modalDataState.isConfirm ? closeModal : closeModalWithCallback
              }
            />
          </div>
          <div className="modal-body">{modalDataState.content}</div>
          <div className="modal-footer">
            <button
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={
                modalDataState.isConfirm ? closeModal : closeModalWithCallback
              }
            >
              {modalDataState.isConfirm ? "Cancel" : "Close"}
            </button>
            <button
              className={`btn btn-${modalDataState.buttonColor}`}
              hidden={!modalDataState.isConfirm}
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={closeModalWithCallback}
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlertModal;
