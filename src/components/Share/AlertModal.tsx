import React from "react";
import { Button, Modal } from "react-bootstrap";
import styled from "styled-components";

interface Props {
  title: string;
  text: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalDialog = styled(Modal.Dialog)`
  margin: 0;
`;

const AlertModal = ({ title, text, open, setOpen }: Props) => {
  const onClose = () => {
    setOpen(false);
  };
  return (
    <Modal
      size="lg"
      centered
      show={open}
      onHide={onClose}
      className="AlertModal"
    >
      <ModalDialog>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{text}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>
            Close
          </Button>
        </Modal.Footer>
      </ModalDialog>
    </Modal>
  );
};

export default AlertModal;
