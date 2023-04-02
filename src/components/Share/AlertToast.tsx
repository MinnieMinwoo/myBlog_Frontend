import React from "react";
import { Toast } from "react-bootstrap";
import { useToast } from "../../states/ToastState";

export const AlertToast = () => {
  const { toastDataState, closeToast } = useToast();
  return (
    <Toast
      className="position-absolute"
      style={{
        top: "70px",
        right: "40px",
        zIndex: "5",
      }}
      onClose={() => {
        closeToast();
      }}
      show={toastDataState.isOpen}
      bg={toastDataState.background}
      delay={3000}
      autohide
    >
      <div className="toast-header">
        <strong className="me-auto">{toastDataState.title}</strong>
      </div>
      <div className="toast-body">{toastDataState.content}</div>
    </Toast>
  );
};

export default AlertToast;
