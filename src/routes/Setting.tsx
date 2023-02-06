import ProfileImageEdit from "../components/EditProfile/ProfileImageEdit";
import React from "react";
import Header from "../components/Home/Header/Header";

const Setting = () => {
  return (
    <main className="EditProfile">
      <Header />
      <section>
        <ProfileImageEdit />
        <div></div>
      </section>
      <section>
        <div></div>
        <div></div>
      </section>
    </main>
  );
};

export default Setting;
