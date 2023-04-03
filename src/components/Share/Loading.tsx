import React from "react";

const Loading = () => {
  return (
    <div className="Loading d-inline-block position-fixed top-0 start-0 vw-100 vh-100 bg-light bg-opacity-50 z-index-10">
      <div className="position-absolute top-50 start-50 translate-middle w-100px h-100px">
        <div className="spinner-border text-secondary w-100 h-100" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default Loading;
