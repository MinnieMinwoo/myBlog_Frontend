import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { loginData } from "../../states/LoginState";
import { Button, ButtonGroup } from "react-bootstrap";
import styled from "styled-components";

import { signOutUser } from "../../logic/authSetting";
import { useModal } from "../../states/ModalState";
import AlertModal from "../Share/AlertModal";

const ProfileBox = styled.div`
  display: inline-block;
`;

const ProfileButton = styled.button<{ url: string | null }>`
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

const ButtonContainer = styled(ButtonGroup).attrs(() => ({
  vertical: true,
}))`
  position: absolute;
  transform: translate(-75px, 50px);
  width: 98px;
  @media (max-width: 767px) {
    transform: translateX(-49px, -50px);
  }
  margin-top: 5px;
  z-index: 1;
  & button {
    background-color: #fff;
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
    <ProfileBox className="HeaderProfile">
      <AlertModal />

      <ProfileButton url={userData.photoURL ?? ""} onClick={onToggle} />
      {isHidden ? null : (
        <ButtonContainer>
          <Button name="write" variant="outline-secondary" onClick={onClick}>
            Post
          </Button>
          <Button name="setting" variant="outline-secondary" onClick={onClick}>
            Setting
          </Button>
          <Button name="logout" variant="outline-secondary" onClick={onClick}>
            Sign Out
          </Button>
        </ButtonContainer>
      )}
    </ProfileBox>
  );
};

export default HomeProfile;
