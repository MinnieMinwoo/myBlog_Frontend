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
    <div className="SettingData px-3 py-4 bb-light">
      <h3 className="d-inline-block fs-5 w-170px text-111">{title}</h3>
      <span className="text-333">{currentData}</span>
      <button className={`btn btn-${buttonColor ?? "primary"} float-end w-98px`} onClick={onClick}>
        {buttonMessage}
      </button>
      <p className="mt-2 mb-0 fs-14px text-777">{description}</p>
    </div>
  );
};

export default SettingData;
