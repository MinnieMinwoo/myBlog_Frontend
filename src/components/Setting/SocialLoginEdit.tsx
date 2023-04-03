import React from "react";
import { useRecoilState } from "recoil";

import { linkSocialLogin, unLInkSocialLogin } from "../../logic/authSetting";
import { loginData } from "../../states/LoginState";
import { useToast } from "../../states/ToastState";

import google from "../../assets/images/google.png";
import googleGray from "../../assets/images/googleGray.png";
import facebook from "../../assets/images/facebook.png";
import facebookGray from "../../assets/images/facebookGray.png";
import twitter from "../../assets/images/twitter.png";
import twitterGray from "../../assets/images/twitterGray.png";
import { useModal } from "../../states/ModalState";

const SocialLoginEdit = () => {
  const [userData, setUserData] = useRecoilState(loginData);
  const { openToast } = useToast();
  const { openModal } = useModal();

  const viewModal = (provider: string) => {
    openModal(
      "Warning",
      `Are you sure you want to unlink your ${provider} account?`,
      async () => {
        try {
          await unLInkSocialLogin(provider);
          switch (provider) {
            case "google":
              setUserData((prev) => ({ ...prev, isGoogleLink: false }));
              break;
            case "facebook":
              break;
            case "twitter":
              break;
            default:
              break;
          }
        } catch (error) {
          console.log(error);
          openToast("Error", "Social account unlink failed.", "danger");
        }
      },
      true,
      "warning"
    );
  };

  const onClick = async (event: React.MouseEvent<HTMLImageElement>) => {
    if (!(event.target instanceof HTMLImageElement)) return;
    const {
      target: { alt },
    } = event;

    try {
      switch (alt) {
        case "google":
          if (userData.isGoogleLink) viewModal("google");
          else {
            await linkSocialLogin(alt);
            setUserData((prev) => ({ ...prev, isGoogleLink: true }));
          }
          break;
        case "facebook":
          if (userData.isFacebookLink) viewModal("facebook");
          else {
            await linkSocialLogin(alt);
            setUserData((prev) => ({ ...prev, isFacebookLink: true }));
          }
          break;
        case "twitter":
          if (userData.isTwitterLink) viewModal("twitter");
          else {
            await linkSocialLogin(alt);
            setUserData((prev) => ({ ...prev, isTwitterLink: true }));
          }
          break;
        default:
          break;
      }
    } catch (error) {
      console.log(error);
      openToast("Error", "Social account linkage failed.", "danger");
    }
  };

  const SocialButton = ({ name, img }: { name: string; img: string }) => {
    return (
      <img
        className="img-fluid img-thumbnail ms-2 w-50px h-50px"
        src={img}
        alt={name}
        role="button"
        onClick={onClick}
      />
    );
  };

  return (
    <>
      <div className="SettingData px-3 py-4 bb-light">
        <h3 className="d-inline-block w-170px fs-5 text-111">Social Login</h3>
        <span className="d-inline-block float-end">
          <div className="hstack">
            <SocialButton name="google" img={userData.isGoogleLink ? google : googleGray} />
            <SocialButton name="facebook" img={userData.isFacebookLink ? facebook : facebookGray} />
            <SocialButton name="twitter" img={userData.isTwitterLink ? twitter : twitterGray} />
          </div>
        </span>
        <p className="mt-2 mb-0 fs-14px text-777">You can set up social login method.</p>
      </div>
    </>
  );
};

export default SocialLoginEdit;
