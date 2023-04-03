import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { loginData } from "../../states/LoginState";

import { signOutUser } from "../../logic/authSetting";
import { useModal } from "../../states/ModalState";
import altImage from "../../assets/images/altThumbnail.jpg";

import "../../styles/HeaderProfile.css";

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
      <img
        className="img-thumbnail rounded-circle w-50px h-50px fs-0"
        src={userData.photoURL ? userData.photoURL : altImage}
        alt="Profile"
        role="button"
        onClick={onToggle}
      />
      {isHidden ? null : (
        <div
          className="btn-group-vertical mt-2 position-absolute w-98px z-index-1 header-profile-translate"
          role="group"
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
        </div>
      )}
    </div>
  );
};

export default HomeProfile;
