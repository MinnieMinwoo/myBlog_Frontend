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
  };

  return (
    <div className="ProfileInfoEdit container px-4">
      <div className="vstack gap-2" hidden={!hidden}>
        <p className="fs-2 fw-semibold m-0 text-111">{userData.nickname}</p>
        <div className="text-333">{userData.description}</div>
        <button type="button" className="btn btn-outline-primary w-100px" onClick={onToggle}>
          Edit
        </button>
      </div>
      <form hidden={hidden} onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label">Nickname</label>
          <input
            className="form-control"
            type="text"
            name="nickname"
            placeholder="Nicknames must be written in 4-20 digits using only English, numbers, and special characters."
            value={nickname}
            maxLength={20}
            onChange={onChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <input
            className="form-control"
            type="text"
            name="description"
            placeholder="description"
            value={description}
            maxLength={100}
            onChange={onChange}
          />
        </div>
        <button type="submit" className="btn btn-primary w-100px">
          Save
        </button>
      </form>
    </div>
  );
};

export default ProfileInfoEdit;
