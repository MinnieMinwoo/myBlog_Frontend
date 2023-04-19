import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { useModal } from "../states/ModalState";
import { loginData } from "../states/LoginState";
import { isLoadingData } from "../states/LoadingState";

import { deleteUserData } from "../logic/getSetUserInfo";

import Loading from "../components/Share/Loading";
import ProfileImageEdit from "../components/Setting/ProfileImageEdit";
import ProfileInfoEdit from "../components/Setting/ProfileInfoEdit";
import SettingData from "../components/Setting/SettingData";
import Header from "../components/Share/Header";
import { updateUserEmail } from "../logic/authSetting";
import SocialLoginEdit from "../components/Setting/SocialLoginEdit";
import MetaTag from "../components/Share/MetaTag";

const Setting = () => {
  const [userData, setUserData] = useRecoilState(loginData);
  const loading = useRecoilValue(isLoadingData);
  const { openModal, closeModal } = useModal();
  const navigate = useNavigate();

  const emailRef = useRef<HTMLInputElement>(null);
  const emailAuthRef = useRef<HTMLInputElement>(null);
  const onEmailChange = async () => {
    openModal(
      "Email Change",
      <>
        <p>Enter your new email.</p>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              className="form-control"
              name="email"
              type="string"
              placeholder="enter your email"
              autoComplete="off"
              ref={emailRef}
              required
            />
          </div>
          <label className="form-label">Current Password</label>
          <input
            className="form-control"
            name="password"
            type="password"
            placeholder="enter your password"
            autoComplete="off"
            ref={emailAuthRef}
            required
          />
          <div className="form-text">Password is required when you change email address.</div>
        </form>
      </>,
      async () => {
        try {
          if (!userData.uid) throw console.log("No userData");
          if (!emailRef.current?.value) return;
          const newEmail = emailRef.current.value;
          if (!emailAuthRef.current?.value) return;
          const password = emailAuthRef.current.value;
          await updateUserEmail(newEmail, password);
          closeModal();
          setUserData({ isLoggedIn: false });
          openModal("Email update complete", "Please complete email verification if you want to login", () =>
            navigate("/")
          );
        } catch (error) {
          if (error) console.log(error);
          openModal("Error", "Email update error");
        }
      },
      true
    );
  };

  const passwordRef = useRef<HTMLInputElement>(null);
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
          openModal("Withdrawal complete", "Your withdrawal has been completed", () => navigate("/"));
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
      <MetaTag title="myBlog - setting" description="User setting page" />
      <Header title="Setting" />
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
            description="Email address that receives authentication or notification."
            buttonMessage="Change"
            currentData={userData.email}
            onClick={onEmailChange}
          />
          <SocialLoginEdit />
          <SettingData
            title="Withdrawal"
            description="All posts and comments you created upon withdrawal will be deleted and will not be
            recovered."
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
