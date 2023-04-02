import React, { useRef } from "react";
import { useModal } from "../../states/ModalState";
import { Modal } from "react-bootstrap";

const AlertModal = () => {
  const { modalDataState, closeModal, closeModalWithCallback } = useModal();
  const modalRef = useRef<HTMLDivElement>(null);

  return (
    <Modal
      className="AlertModal modal fade modal-lg"
      id="AlertModal"
      tabIndex={-1}
      aria-labelledby="AlertModalLabel"
      ref={modalRef}
      centered
      show={modalDataState.isOpen}
      onHide={modalDataState.isConfirm ? closeModal : closeModalWithCallback}
    >
      <div className="modal-dialog modal-dialog-centered m-0">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{modalDataState.title}</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">{modalDataState.content}</div>
          <div className="modal-footer">
            <button
              className="btn btn-secondary"
              onClick={modalDataState.isConfirm ? closeModal : closeModalWithCallback}
            >
              {modalDataState.isConfirm ? "Cancel" : "Close"}
            </button>
            <button
              className={`btn btn-${modalDataState.buttonColor}`}
              hidden={!modalDataState.isConfirm}
              onClick={closeModalWithCallback}
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default AlertModal;
