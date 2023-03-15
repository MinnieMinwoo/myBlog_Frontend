import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { useModal } from "../states/ModalState";
import { loginData } from "../states/LoginState";
import { isLoadingData } from "../states/LoadingState";
import { Navbar, Container } from "react-bootstrap";

import { deleteUserData } from "../logic/getSetUserInfo";

import Loading from "../components/Share/Loading";
import ProfileImageEdit from "../components/Setting/ProfileImageEdit";
import ProfileInfoEdit from "../components/Setting/ProfileInfoEdit";
import SettingData from "../components/Setting/SettingData";
import AlertModal from "../components/Share/AlertModal";
import blogIcon from "../assets/images/logo.png";

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
        <form onSubmit={(e) => e.preventDefault()}>
          <label className="form-label">Password</label>
          <input
            className="form-control"
            name="password"
            type="password"
            placeholder="enter your password"
            autoComplete="off"
            ref={passwordRef}
            required
          />
        </form>
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
                <img
                  className="me-2 pe-auto"
                  style={{ width: "40px", height: "40px" }}
                  src={blogIcon}
                  alt="blog logo"
                />
              </Link>
              Setting
            </Navbar.Brand>
          </Container>
        </Navbar>
      </header>
      <main className="EditProfile">
        <section className="py-4 col col-lg-10 offset-lg-1 col-xxl-8 offset-xxl-2">
          <div className="hstack">
            <ProfileImageEdit />
            <div className="vr"></div>
            <ProfileInfoEdit />
          </div>
        </section>
        <hr className="col col-lg-10 offset-lg-1 col-xxl-8 offset-xxl-2" />
        <section className="col col-lg-10 offset-lg-1 col-xxl-8 offset-xxl-2">
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
        </section>
      </main>
    </>
  );
};

export default Setting;
