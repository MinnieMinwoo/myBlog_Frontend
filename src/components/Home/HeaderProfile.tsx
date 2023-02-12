import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { loginData } from "../../states/LoginState";
import { authService } from "../../logic/firebase";
import { signOut } from "firebase/auth";
import styled from "styled-components";

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
const RouteButton = styled.button`
  display: block;
  box-sizing: content-box;
  width: 96px;
  padding: 0;
  border: 1px solid #eee;
  background-color: #fff;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  font-size: 14px;
  line-height: 35px;
  color: #777;
`;

const HomeProfile = () => {
  const [isHidden, setIsHidden] = useState(true);
  const navigate = useNavigate();
  const [userData, setUserData] = useRecoilState(loginData);
  const onToggle = () => {
    setIsHidden((prev) => !prev);
  };

  const onLogout = async () => {
    try {
      await signOut(authService);
      setUserData({
        isLoggedIn: false,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ProfileBox className="HeaderProfile">
      <ProfileButton url={userData.photoURL ?? ""} onClick={onToggle} />
      {isHidden ? null : (
        <ButtonContainer>
          <RouteButton as={Link} to="/write">
            글쓰기
          </RouteButton>
          <RouteButton as={Link} to="/setting">
            설정
          </RouteButton>
          <RouteButton onClick={onLogout}>로그아웃</RouteButton>
        </ButtonContainer>
      )}
    </ProfileBox>
  );
};

export default HomeProfile;
