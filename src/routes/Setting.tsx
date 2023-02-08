import React from "react";

import Header from "../components/Home/Header/Header";
import ProfileImageEdit from "../components/Setting/ProfileImageEdit";
import ProfileInfoEdit from "../components/Setting/ProfileInfoEdit";
import Withdrawal from "../components/Setting/Withdrawal";

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
        <Withdrawal />
      </section>
    </main>
  );
};

export default Setting;
