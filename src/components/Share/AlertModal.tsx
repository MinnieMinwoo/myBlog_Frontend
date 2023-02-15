import React from "react";
import { Button, Modal } from "react-bootstrap";
import styled from "styled-components";
import { useModal } from "../../states/ModalState";

const ModalDialog = styled(Modal.Dialog)`
  margin: 0;
`;

const AlertModal = () => {
  const { modalDataState, closeModal } = useModal();

  return (
    <Modal
      size="lg"
      centered
      show={modalDataState.isOpen}
      onHide={closeModal}
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
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
        </Modal.Footer>
      </ModalDialog>
    </Modal>
  );
};

export default AlertModal;
