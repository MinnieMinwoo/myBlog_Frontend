import React from "react";
import { useNavigate } from "react-router-dom";
import { deleteUserData } from "../../logic/getSetUserInfo";
import { useRecoilState } from "recoil";
import { loginData } from "../../states/LoginState";
import { Button } from "react-bootstrap";
import styled from "styled-components";

const SettingContainer = styled.div`
  border-bottom: 1px solid #eee;
  padding: 16px 24px;
  h3 {
    width: 150px;
    display: inline-block;
    font-size: 20px;
    color: #111;
  }
  button {
    float: right;
    width: 96px;
  }
  p {
    margin-top: 16px;
    font-size: 14px;
    color: #777;
  }
`;

const Withdrawal = () => {
  const [userData, setUserData] = useRecoilState(loginData);
  const navigate = useNavigate();
  const onClick = async () => {
    if (userData.uid && window.confirm("Are you really want to leave?")) {
      await deleteUserData(userData.uid);
      window.alert("Your withdrawal has been completed.");
      setUserData({ isInit: true, isLoggedIn: false });
      navigate("/");
    }
  };

  return (
    <SettingContainer>
      <h3>Withdrawal</h3>
      <Button variant="danger" onClick={onClick}>
        Quit
      </Button>
      <p>
        All posts and comments you created upon withdrawal will be deleted and will not be
        recovered.
      </p>
    </SettingContainer>
  );
};

export default Withdrawal;
