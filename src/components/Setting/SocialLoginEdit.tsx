import React from "react";
import google from "../../assets/images/google.png";
import googleGray from "../../assets/images/googleGray.png";
import facebook from "../../assets/images/facebook.png";
import facebookGray from "../../assets/images/facebookGray.png";
import twitter from "../../assets/images/twitter.png";
import twitterGray from "../../assets/images/twitterGray.png";

const SocialLoginEdit = () => {
  const onClick = (event: React.MouseEvent<HTMLImageElement>) => {
    if (!(event.target instanceof HTMLImageElement)) return;
    const {
      target: { alt },
    } = event;
    console.log(alt);
  };

  const SocialButton = ({ name, img }: { name: string; img: string }) => {
    return (
      <img
        className="img-fluid img-thumbnail ms-2"
        style={{ width: "50px", height: "50px" }}
        src={img}
        alt={name}
        role="button"
        onClick={onClick}
      />
    );
  };

  return (
    <div className="SettingData px-3 py-4" style={{ borderBottom: "1px solid #eee" }}>
      <h3 className="d-inline-block fs-5" style={{ width: "170px", color: "#111" }}>
        Social Login
      </h3>
      <span className="d-inline-block float-end">
        <div className="hstack">
          <SocialButton name="google" img={google} />
          <SocialButton name="facebook" img={facebook} />
          <SocialButton name="twitter" img={twitter} />
        </div>
      </span>

      <p className="mt-2 mb-0" style={{ fontSize: "14px", color: "#777" }}>
        You can set up a social login method.
      </p>
    </div>
  );
};

export default SocialLoginEdit;
