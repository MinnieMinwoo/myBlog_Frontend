import React from "react";
import { useNavigate } from "react-router-dom";
import { deleteUserData } from "../../logic/getSetUserInfo";
import { useRecoilState } from "recoil";
import { loginData } from "../../states/LoginState";

const Withdrawal = () => {
  const [userData, setUserData] = useRecoilState(loginData);
  const navigate = useNavigate();
  const onClick = async () => {
    if (userData.uid && window.confirm("Are you really want to leave?")) {
      await deleteUserData(userData.uid);
      window.alert("Your withdrawal has been completed.");
      setUserData({ isLoggedIn: false });
      navigate("/");
    }
  };

  return (
    <div>
      <span>Withdrawal</span>
      <button onClick={onClick}>Quit</button>
      <p>
        All posts and comments you created upon withdrawal will be deleted and will not be
        recovered.
      </p>
    </div>
  );
};

export default Withdrawal;
