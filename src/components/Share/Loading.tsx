import React from "react";

const Loading = () => {
  return (
    <div className="Loading d-inline-block position-fixed top-0 start-0 vw-100 vh-100 bg-light bg-opacity-50 z-10">
      <div
        className="spinner-grow text-secondary position-absolute top-50 start-50 translate-middle"
        style={{
          width: "100px",
          height: "100px",
        }}
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
