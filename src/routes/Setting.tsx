import React from "react";

import Header from "../components/Home/Header/Header";
import ProfileImageEdit from "../components/Setting/ProfileImageEdit";
import ProfileInfoEdit from "../components/Setting/ProfileInfoEdit";

const Setting = () => {
  return (
    <main className="EditProfile">
      <Header />
      <section>
        <ProfileImageEdit />
        <ProfileInfoEdit />
      </section>
      <section>
        <div></div>
        <div></div>
      </section>
    </main>
  );
};

export default Setting;
