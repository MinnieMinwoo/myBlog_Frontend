import React from "react";
import { useNavigate } from "react-router";
import { useRecoilValue } from "recoil";
import { loginData } from "../../states/LoginState";

const MainSection = () => {
  const userData = useRecoilValue(loginData);
  const navigate = useNavigate();
  const onClick = () => {
    if (userData.isLoggedIn === true) {
      navigate(`/home/${userData.nickname}`);
    } else {
      navigate("/auth");
    }
  };

  return (
    <section
      className="MainSection d-flex flex-column flex-grow-1 align-items-center justify-content-center"
      style={{ background: "linear-gradient(#f8f9fa 0%, #fbfcdb 20%, #e9defa 80%, #f8f9fa 100%)" }}
    >
      <h1 className="fw-bold mb-2 text-center" style={{ color: "#333", fontSize: "45px" }}>
        Publish your stroy, your way
      </h1>
      <p className="fs-3 fw-normal mb-2" style={{ color: "#333" }}>
        Create a unique and beautiful blog.
      </p>
      <button
        className="btn btn-primary btn-lg fs-4 mt-3"
        style={{ width: "200px", height: "60px" }}
        onClick={onClick}
      >
        Start
      </button>
    </section>
  );
};

export default MainSection;
