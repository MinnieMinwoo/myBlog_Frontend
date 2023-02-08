import React, { useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { loginData } from "../../states/LoginState";
import { setUserImage } from "../../logic/getSetUserInfo";

const ProfileImageEdit = () => {
  const [userData, setUserData] = useRecoilState(loginData);
  const [imageLink, setImageLink] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (userData.photoURL) setImageLink(userData.photoURL);
  }, [userData.photoURL]);

  const onChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!userData.uid) throw window.alert("no user uid data");
    if (!event.target.files) throw window.alert("no files exist");
    const imageURL = await setUserImage(
      Boolean(userData.photoURL),
      userData.uid,
      event.target.files[0]
    );
    setUserData((prev) => ({
      ...prev,
      photoURL: imageURL,
    }));
  };
  const onClick = () => {
    if (inputRef.current?.value) inputRef.current.value = "";
  };
  return (
    <div className="ProfileImageEdit">
      <input type="file" accept="image/*" ref={inputRef} src={imageLink} onChange={onChange} />
      <button onClick={onClick}>Delete Image</button>
    </div>
  );
};

export default ProfileImageEdit;
