import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { loginData } from "../../states/LoginState";

const ProfileInfoEdit = () => {
  const [userData, setUserData] = useRecoilState(loginData);
  const [hidden, setHidden] = useState(true);
  const [nickname, setNickname] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    setNickname(userData.nickname ?? "");
    setDescription(userData.description ?? "");
  }, [userData]);
  const onToggle = () => {
    setHidden((prev) => !prev);
  };

  const onSubmit = () => {};

  return (
    <div>
      <div>{userData.nickname}</div>
      <div>{userData.description}</div>
      <button onClick={onToggle}>Edit</button>
      <form hidden={hidden} onSubmit={onSubmit}>
        <input type="text" placeholder="NickName" value={nickname} required />
        <input type="text" placeholder="Description" value={description} />
        <input type="submit" value="Save" />
      </form>
    </div>
  );
};

export default ProfileInfoEdit;
