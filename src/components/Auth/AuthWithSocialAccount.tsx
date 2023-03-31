import React from "react";
import { useNavigate } from "react-router-dom";

import { signInSocialAccount } from "../../logic/authSetting";

import google from "../../assets/images/google.png";
import facebook from "../../assets/images/facebook.png";
import twitter from "../../assets/images/twitter.png";
import email from "../../assets/images/email.png";
import { useModal } from "../../states/ModalState";
import AlertModal from "../Share/AlertModal";

interface Props {
  signIn: boolean;
  setIsEmail: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuthWithSocialAccount = ({ signIn, setIsEmail }: Props) => {
  const navigate = useNavigate();
  const { openModal } = useModal();

  const onClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!(event.target instanceof HTMLButtonElement)) return;
    const {
      target: { value },
    } = event;

    switch (value) {
      case "Email":
        setIsEmail(true);
        break;
      default:
        try {
          const nickname = await signInSocialAccount(value.toLowerCase());
          navigate(`/home/${nickname}`);
        } catch (error) {
          if (!(error instanceof Error)) return;
          switch (error.message) {
            case "No Account":
              navigate("/auth/create");
              break;
            case "Email Verification":
              openModal(
                "Email Verification",
                "Please complete email verification if you want to login."
              );
              break;
            default:
              console.log(error);
              openModal("Something wrong", "Please try again later.");
          }
        }
        break;
    }
  };

  const SocialButton = ({ name, img }: { name: string; img: string }) => {
    return (
      <button className="btn btn-light w-100 text-start" value={name} onClick={onClick}>
        <img
          className="img-fluid offset-1 me-4"
          style={{ width: "40px", height: "40px" }}
          src={img}
          alt={name}
        />
        <span className="fw-semibold fs-6" style={{ color: "#333" }}>{`Sign ${
          signIn ? "in" : "up"
        } with ${name}`}</span>
      </button>
    );
  };

  return (
    <div className="AuthWithSocialAccount vstack gap-3">
      <AlertModal />
      <SocialButton name="Google" img={google} />
      <SocialButton name="Facebook" img={facebook} />
      <SocialButton name="Twitter" img={twitter} />
      <SocialButton name="Email" img={email} />
    </div>
  );
};

export default AuthWithSocialAccount;
