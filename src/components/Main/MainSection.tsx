import React from "react";
import { useNavigate } from "react-router";
import { useRecoilValue } from "recoil";
import { loginData } from "../../states/LoginState";

import "../../styles/MainSection.css";

const MainSection = () => {
  const userData = useRecoilValue(loginData);
  const navigate = useNavigate();
  const onClick = () => {
    console.log(userData);
    const link = userData.isLoggedIn ? `/home/${userData.nickname}` : "/auth";
    navigate(link);
  };

  return (
    <section className="MainSection d-flex flex-column flex-grow-1 align-items-center justify-content-center main-gradation">
      <h1 className="fw-bold mb-2 text-center text-333 fs-45px">Publish your stroy, your way</h1>
      <p className="fs-3 fw-normal mb-2 text-333">Create a unique and beautiful blog.</p>
      <button className="btn btn-primary btn-lg fs-4 mt-3 w-200px h-60px" onClick={onClick}>
        Start
      </button>
    </section>
  );
};

export default MainSection;
