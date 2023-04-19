import React from "react";
import { useNavigate } from "react-router-dom";

import { signInSocialAccount } from "../../logic/authSetting";

import google from "../../assets/images/google.png";
import facebook from "../../assets/images/facebook.png";
import twitter from "../../assets/images/twitter.png";
import email from "../../assets/images/email.png";
import { useModal } from "../../states/ModalState";
import { FirebaseError } from "firebase/app";

interface Props {
  signIn: boolean;
  setIsEmail: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuthWithSocialAccount = ({ signIn, setIsEmail }: Props) => {
  const navigate = useNavigate();
  const { openModal } = useModal();

  const onClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!(event.currentTarget instanceof HTMLButtonElement)) return;
    const {
      currentTarget: { value },
    } = event;
    if (value === "Email") setIsEmail(true);
    else {
      try {
        const nickname = await signInSocialAccount(value.toLowerCase());
        navigate(`/home/${nickname}`);
      } catch (error) {
        if (!(error instanceof Error)) return;
        else if (error.message === "No Account") navigate("/auth/create");
        else if (error.message === "Email Verification") {
          openModal("Email Verification", "Please complete email verification if you want to login.");
        } else {
          console.log(error);
          if (error instanceof FirebaseError && error.code === "auth/popup-closed-by-user") return;
          openModal("Something wrong", "Please try again later.");
        }
      }
    }
  };

  const SocialButton = ({ name, img }: { name: string; img: string }) => {
    return (
      <button className="btn btn-light w-100 text-start" value={name} onClick={onClick}>
        <img className="img-fluid offset-1 me-4 w-40px h-40px-i" src={img} alt={name} />
        <span className="fw-semibold fs-6 text-333" onClick={onClick}>{`Sign ${
          signIn ? "in" : "up"
        } with ${name}`}</span>
      </button>
    );
  };

  return (
    <div className="AuthWithSocialAccount vstack gap-3">
      <SocialButton name="Google" img={google} />
      <SocialButton name="Facebook" img={facebook} />
      <SocialButton name="Twitter" img={twitter} />
      <SocialButton name="Email" img={email} />
    </div>
  );
};

export default AuthWithSocialAccount;
