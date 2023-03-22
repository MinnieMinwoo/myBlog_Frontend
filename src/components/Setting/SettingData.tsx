import React from "react";

interface Props {
  title: string;
  description: string;
  buttonMessage: string;
  onClick: () => void;
  currentData?: string;
  buttonColor?: BootStrapColor;
}

const SettingData = ({
  title,
  description,
  buttonMessage,
  onClick,
  currentData,
  buttonColor,
}: Props) => {
  return (
    <div className="SettingData px-3 py-4" style={{ borderBottom: "1px solid #eee" }}>
      <h3 className="d-inline-block fs-5" style={{ width: "170px", color: "#111" }}>
        {title}
      </h3>
      <span style={{ color: "#333" }}>{currentData}</span>
      <button
        className={`btn btn-${buttonColor ?? "primary"} float-end`}
        style={{ width: "96px" }}
        onClick={onClick}
      >
        {buttonMessage}
      </button>
      <p className="mt-2 mb-0" style={{ fontSize: "14px", color: "#777" }}>
        {description}
      </p>
    </div>
  );
};

export default SettingData;
