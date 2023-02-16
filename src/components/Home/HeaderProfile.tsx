import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { loginData } from "../../states/LoginState";
import { Button } from "react-bootstrap";
import styled from "styled-components";

import { signOutUser } from "../../logic/authSetting";
import { useModal } from "../../states/ModalState";
import AlertModal from "../Share/AlertModal";

const ProfileBox = styled.div`
  display: inline-block;
`;

const ProfileButton = styled.div<{ url: string | null }>`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid #eee;
  background-image: url(${(props) => (props.url ? props.url : "")});
  background-color: #fff;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  cursor: Pointer;
`;

const ButtonContainer = styled.div`
  position: absolute;
  transform: translateX(-25px);
  @media (max-width: 767px) {
    transform: translateX(-49px);
  }
  margin-top: 5px;
`;

const SelectButton = styled(Button).attrs(() => ({
  variant: "outline-secondary",
}))`
  display: block;
  width: 98px;
  border-radius: 0;
  background-color: #fff;
`;

const HomeProfile = () => {
  const [userData, setUserData] = useRecoilState(loginData);
  const [isHidden, setIsHidden] = useState(true);
  const { openModal } = useModal();

  const navigate = useNavigate();
  const onToggle = () => {
    setIsHidden((prev) => !prev);
  };

  const onClick = async (event: Event) => {
    const { name } = event.target as HTMLButtonElement;
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
    <ProfileBox className="HeaderProfile">
      <AlertModal />

      <ProfileButton url={userData.photoURL ?? ""} onClick={onToggle} />
      {isHidden ? null : (
        <ButtonContainer>
          <SelectButton name="write" onClick={onClick}>
            Post
          </SelectButton>
          <SelectButton name="setting" onClick={onClick}>
            Setting
          </SelectButton>
          <SelectButton name="logout" onClick={onClick}>
            Sign Out
          </SelectButton>
        </ButtonContainer>
      )}
    </ProfileBox>
  );
};

export default HomeProfile;
