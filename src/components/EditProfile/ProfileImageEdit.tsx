import React, { useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { loginData } from "../../states/LoginState";
import { authService } from "../../logic/firebase";
import { updateProfile } from "firebase/auth";
import { deleteImg, uploadImg } from "../../logic/getSetImage";

const ProfileImageEdit = () => {
  const [userData, setUserData] = useRecoilState(loginData);
  const [imageLink, setImageLink] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (userData.photoURL) setImageLink(userData.photoURL);
  }, [userData.photoURL]);

  const onChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (userData.photoURL) deleteImg(`$profile/${userData.uid}`);
    if (event.target.files && authService.currentUser)
      try {
        const imageURL = await uploadImg(event.target.files[0], `$profile/${userData.uid}`);
        if (!imageURL) throw console.log("no image data");
        await updateProfile(authService.currentUser, {
          photoURL: imageURL,
        });
        setUserData((prev) => ({
          ...prev,
          photoURL: imageURL,
        }));
      } catch (error) {
        console.log(error);
      }
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
