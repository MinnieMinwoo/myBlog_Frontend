import React, { useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { loginData } from "../../states/LoginState";
import { updateUserImage } from "../../logic/getSetUserInfo";

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
    const imageURL = await updateUserImage(
      Boolean(userData.photoURL),
      userData.uid,
      event.target.files[0]
    );
    setUserData((prev) => ({
      ...prev,
      photoURL: imageURL,
    }));
  };

  const onUpload = () => {
    inputRef.current?.click();
  };

  const onDelete = () => {
    if (inputRef.current?.value) inputRef.current.value = "";
  };

  return (
    <div className="ProfileImageEdit px-4 vstack gap-3" style={{ flexBasis: "210px" }}>
      <img
        className="img-thumbnail rounded-circle"
        style={{ width: "128px", height: "128px" }}
        src={imageLink}
        alt="Profile"
      />
      <input
        hidden
        type="file"
        accept="image/*"
        ref={inputRef}
        src={imageLink}
        onChange={onChange}
      />
      <button type="button" className="btn btn-primary" onClick={onUpload}>
        Upload Image
      </button>
      <button type="button" className="btn btn-outline-primary" onClick={onDelete}>
        Delete Image
      </button>
    </div>
  );
};

export default ProfileImageEdit;
