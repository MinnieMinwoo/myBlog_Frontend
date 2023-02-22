import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Stack } from "react-bootstrap";
import { useRecoilState, useRecoilValue } from "recoil";
import { useModal } from "../states/ModalState";
import { loginData } from "../states/LoginState";
import { isLoadingData } from "../states/LoadingState";
import { Navbar, Container } from "react-bootstrap";
import styled from "styled-components";

import { deleteUserData } from "../logic/getSetUserInfo";

import Loading from "../components/Share/Loading";
import ProfileImageEdit from "../components/Setting/ProfileImageEdit";
import ProfileInfoEdit from "../components/Setting/ProfileInfoEdit";
import SettingData from "../components/Setting/SettingData";
import AlertModal from "../components/Share/AlertModal";
import { CenterAlign } from "../styles/PageView";
import blogIcon from "../assets/images/logo.png";

const ProfileEdit = styled(CenterAlign)`
  border-bottom: 1px solid #eee;
  padding: 30px 0;
`;

const SettingEdit = styled(CenterAlign)``;

const Logo = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 20px;
  cursor: pointer;
`;

const Setting = () => {
  const [userData, setUserData] = useRecoilState(loginData);
  const loading = useRecoilValue(isLoadingData);
  const { openModal, closeModal } = useModal();
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const onQuit = async () => {
    openModal(
      "Warning",
      <>
        <p>Please enter your password if you really want leave.</p>
        <Form onSubmit={(e) => e.preventDefault()}>
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="enter your password"
            autoComplete="off"
            ref={passwordRef}
            required
          />
        </Form>
      </>,
      async () => {
        if (!userData.uid) throw console.log("No userData");
        if (!passwordRef.current?.value) return;
        const password = passwordRef.current.value;
        try {
          await deleteUserData(userData.uid, password);
          closeModal();
          setUserData({ isLoggedIn: false });
          openModal("Withdrawal complete", "Your withdrawal has been completed", () =>
            navigate("/")
          );
        } catch (error) {
          if (error) console.log(error);
          openModal("Error", "Withdrawal failed");
        }
      },
      true,
      "danger"
    );
  };

  return (
    <>
      {loading ? <Loading /> : null}
      <AlertModal />
      <header>
        <Navbar bg="light">
          <Container>
            <Navbar.Brand>
              <Link to="/">
                <Logo src={blogIcon} alt="blog logo" />
              </Link>
              Setting
            </Navbar.Brand>
          </Container>
        </Navbar>
      </header>
      <main className="EditProfile">
        <ProfileEdit as="section">
          <Stack direction="horizontal">
            <ProfileImageEdit />
            <ProfileInfoEdit />
          </Stack>
        </ProfileEdit>
        <SettingEdit as="section">
          <SettingData
            title="Email address"
            description="Email address that receives authentication or notification.
            "
            buttonMessage="Change"
            currentData={userData.email}
            onClick={() => {}}
          />
          <SettingData
            title="Withdrawal"
            description="All posts and comments you created upon withdrawal will be deleted and will not be
            recovered.
            "
            buttonMessage="Quit"
            buttonColor="danger"
            onClick={onQuit}
          />
        </SettingEdit>
      </main>
    </>
  );
};

export default Setting;
