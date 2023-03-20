import React from "react";
import { Link, useNavigate } from "react-router-dom";

import image from "../../assets/images/logo.png";
import { useModal } from "../../states/ModalState";

interface Props {
  title?: string;
  userName?: string;
  outlet?: JSX.Element;
  isWarningAlert?: boolean;
}

const Header = ({ title, userName, outlet, isWarningAlert = false }: Props) => {
  const navigate = useNavigate();
  const { openModal } = useModal();

  const onExit = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    navigate("/");
  };
  const onExitModal = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const warningTitle = "Warning";
    const warningMessage = "Post data will not be saved when you leave the window.";
    const confirmCallback = () => {
      navigate("/");
    };
    openModal(warningTitle, warningMessage, confirmCallback, true);
  };

  return (
    <header className="Header">
      <nav className="navbar bg-light">
        <div className="container">
          <div className="navbar-brand">
            <a href="/" onClick={isWarningAlert ? onExitModal : onExit}>
              <img
                className="me-2 pe-auto"
                style={{ width: "40px", height: "40px", cursor: "pointer" }}
                src={image}
                alt="blog logo"
              />
            </a>
            {title ?? ""}
            {userName && (
              <ul className="navbar-nav hstack gap-3 ms-1">
                <li className="nav-item">
                  <Link className="nav-link" to={`${userName ? `/home/${userName}` : "/"}`}>
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to={`${userName ? `/home/${userName}/category` : "/"}`}
                  >
                    Category
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link disabled" to="/">
                    Tag
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link disabled" to="/">
                    About
                  </Link>
                </li>
              </ul>
            )}
          </div>
          {outlet ?? null}
        </div>
      </nav>
    </header>
  );
};

export default Header;
