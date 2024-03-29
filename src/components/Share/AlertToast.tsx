import React, { useEffect, useRef } from "react";
import { useToast } from "../../states/ToastState";
import { Toast } from "bootstrap";
import "../../styles/AlertToast.css";

export const AlertToast = () => {
  const { toastDataState, closeToast } = useToast();
  const toastRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!toastDataState.isOpen || !(toastRef.current instanceof HTMLDivElement)) return;
    const showToast = new Toast(toastRef.current);
    showToast.show();
    setTimeout(closeToast, 3500);
  }, [closeToast, toastDataState]);

  return (
    <>
      {toastDataState.isOpen ? (
        <div
          className={`toast position-fixed toast-align z-index-5 text-bg-${toastDataState.background}`}
          id="AlertToast"
          data-bs-delay="3000"
          ref={toastRef}
        >
          <div className="toast-header">
            <strong className="me-auto">{toastDataState.title}</strong>
          </div>
          <div className="toast-body">{toastDataState.content}</div>
        </div>
      ) : null}
    </>
  );
};

export default AlertToast;
