import React from "react";
import styled from "styled-components";

import Header from "../components/Home/Header/Header";
import ProfileImageEdit from "../components/Setting/ProfileImageEdit";
import ProfileInfoEdit from "../components/Setting/ProfileInfoEdit";
import Withdrawal from "../components/Setting/Withdrawal";

import { CenterAlign } from "../styles/PageView";

const ProfileEdit = styled(CenterAlign)`
  display: flex;
  border-bottom: 1px solid #eee;
  padding: 30px 0;
  margin-bottom: 32px;
`;

const SettingEdit = styled(CenterAlign)``;

const Setting = () => {
  return (
    <>
      {" "}
      <Header />
      <main className="EditProfile">
        <ProfileEdit as="section">
          <ProfileImageEdit />
          <ProfileInfoEdit />
        </ProfileEdit>
        <SettingEdit as="section">
          <div></div>
          <Withdrawal />
        </SettingEdit>
      </main>
    </>
  );
};

export default Setting;
