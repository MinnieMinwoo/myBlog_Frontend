import React from "react";
import { useModal } from "../../states/ModalState";
import { Button, Modal } from "react-bootstrap";
import styled from "styled-components";

const ModalDialog = styled(Modal.Dialog)`
  margin: 0;
`;

const AlertModal = () => {
  const { modalDataState, closeModal, closeModalWithCallback } = useModal();

  return (
    <Modal
      size="lg"
      centered
      show={modalDataState.isOpen}
      onHide={modalDataState.isConfirm ? closeModal : closeModalWithCallback}
      className="AlertModal"
    >
      <ModalDialog>
        <Modal.Header closeButton>
          <Modal.Title>{modalDataState.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{modalDataState.content}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={modalDataState.isConfirm ? closeModal : closeModalWithCallback}
          >
            {modalDataState.isConfirm ? "Cancel" : "Close"}
          </Button>
          <Button variant="primary" onClick={closeModalWithCallback}>
            Confirm
          </Button>
        </Modal.Footer>
      </ModalDialog>
    </Modal>
  );
};

export default AlertModal;
