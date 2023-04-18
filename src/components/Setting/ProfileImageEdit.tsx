import React, { useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { loginData } from "../../states/LoginState";
import { updateUserImage } from "../../logic/getSetUserInfo";
import altImage from "../../assets/images/altThumbnail.jpg";

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
    const imageURL = await updateUserImage(Boolean(userData.photoURL), userData.uid, event.target.files[0]);
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
    <div className="ProfileImageEdit px-4 vstack gap-3 flex-basis-210px">
      <img
        className="img-thumbnail rounded-circle w-128px h-128px-i"
        src={imageLink ? imageLink : altImage}
        alt="Profile"
      />
      <input hidden type="file" accept="image/*" ref={inputRef} src={imageLink} onChange={onChange} />
      <button type="button" className="btn btn-primary w-128px" onClick={onUpload}>
        Upload Image
      </button>
      <button type="button" className="btn btn-outline-primary w-128px" onClick={onDelete}>
        Delete Image
      </button>
    </div>
  );
};

export default ProfileImageEdit;
