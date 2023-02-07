import React from "react";
import { useRecoilState } from "recoil";
import { loginData } from "../../states/LoginState";

const ProfileInfoEdit = () => {
  const [userData, setUserData] = useRecoilState(loginData);
  return (
    <div>
      <div>{userData.nickname}</div>
      <div>{userData.description}</div>
      <button>Edit</button>
      <form>
        <input type="text" placeholder="NickName" required />
        <input type="text" placeholder="Description" />
      </form>
    </div>
  );
};

export default ProfileInfoEdit;
