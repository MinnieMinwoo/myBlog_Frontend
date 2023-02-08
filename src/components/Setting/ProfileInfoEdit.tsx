import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { updateUserProfile } from "../../logic/getSetUserInfo";
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

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = event;
    if (name === "nickname") setNickname(value);
    else if (name === "description") setDescription(value);
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!userData.uid) throw window.alert("no user uid data");
    await updateUserProfile(userData.uid, nickname, description);
    setUserData((prev) => ({
      ...prev,
      nickname: nickname,
      description: description,
    }));
    setHidden(true);
    console.log("success");
  };

  return (
    <div>
      <div>{userData.nickname}</div>
      <div>{userData.description}</div>
      <button onClick={onToggle}>Edit</button>
      <form hidden={hidden} onSubmit={onSubmit}>
        <input
          type="text"
          name="nickname"
          placeholder="nickname"
          value={nickname}
          onChange={onChange}
          required
        />
        <input
          type="text"
          name="description"
          placeholder="description"
          value={description}
          onChange={onChange}
        />
        <input type="submit" value="Save" />
      </form>
    </div>
  );
};

export default ProfileInfoEdit;
