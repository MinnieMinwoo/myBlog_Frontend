import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { loginData } from "../../states/LoginState";
import styled from "styled-components";

import { signOutUser } from "../../logic/authSetting";
import { useModal } from "../../states/ModalState";
import AlertModal from "../Share/AlertModal";
import altImage from "../../assets/images/altThumbnail.jpg";

const ButtonContainer = styled.div`
  transform: translate(-75px, 50px);
  @media (max-width: 575px) {
    transform: translate(-96px, 50px);
  }
`;

const HomeProfile = () => {
  const [userData, setUserData] = useRecoilState(loginData);
  const [isHidden, setIsHidden] = useState(true);
  const { openModal } = useModal();

  const navigate = useNavigate();
  const onToggle = () => {
    setIsHidden((prev) => !prev);
  };

  const onClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!("name" in event.target)) return;
    const { name } = event.target;
    switch (name) {
      case "write":
        navigate("/write");
        break;
      case "setting":
        navigate("/setting");
        break;
      case "logout":
        try {
          await signOutUser();
          setUserData({
            isLoggedIn: false,
          });
          navigate("/", { replace: false });
        } catch (error) {
          console.log(error);
          const errorTitle = "Logout Error";
          const errorText = "Something wrong. Please try again later";
          openModal(errorTitle, errorText);
        }
        break;
      default:
        break;
    }
  };

  return (
    <div className="HeaderProfile d-inline-block">
      <AlertModal />

      <img
        className="img-thumbnail rounded-circle"
        style={{
          width: "50px",
          height: "50px",
        }}
        src={userData.photoURL ?? altImage}
        alt="Profile"
        role="button"
        onClick={onToggle}
      />
      {isHidden ? null : (
        <ButtonContainer
          className="btn-group-vertical mt-2 position-absolute"
          role="group"
          style={{
            width: "98px",
            zIndex: "1",
          }}
        >
          <button className="btn btn-primary" name="write" onClick={onClick}>
            Post
          </button>
          <button className="btn btn-primary" name="setting" onClick={onClick}>
            Setting
          </button>
          <button className="btn btn-primary" name="logout" onClick={onClick}>
            Sign Out
          </button>
        </ButtonContainer>
      )}
    </div>
  );
};

export default HomeProfile;
