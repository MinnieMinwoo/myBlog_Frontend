import React from "react";
import { Toast } from "react-bootstrap";
import { useToast } from "../../states/ToastState";
import styled from "styled-components";

const ToastContainer = styled(Toast)`
  position: absolute;
  top: 70px;
  right: 40px;
  z-index: 5;
`;

export const AlertToast = () => {
  const { toastDataState, closeToast } = useToast();
  return (
    <ToastContainer
      onClose={() => {
        closeToast();
      }}
      show={toastDataState.isOpen}
      bg={toastDataState.background}
      delay={3000}
      autohide
    >
      <Toast.Header closeButton={false}>
        <strong className="me-auto">{toastDataState.title}</strong>
      </Toast.Header>
      <Toast.Body>{toastDataState.content}</Toast.Body>
    </ToastContainer>
  );
};

export default AlertToast;
