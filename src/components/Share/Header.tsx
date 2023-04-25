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
    const confirmCallback = () => navigate("/");
    openModal(warningTitle, warningMessage, confirmCallback, true);
  };

  return (
    <header className="Header">
      <nav className="navbar bg-white">
        <div className="container">
          <div className="navbar-brand">
            <a href="/" onClick={isWarningAlert ? onExitModal : onExit}>
              <img className="me-2 pe-auto w-40px h-40px pe-on" src={image} alt="blog logo" />
            </a>
            {title ?? ""}
          </div>
          {outlet ?? null}
        </div>
      </nav>
      {userName && (
        <nav className="navbar bg-primary py-1">
          <div className="container">
            {userName && (
              <ul className="navbar-nav hstack gap-3 ms-1 fs-5">
                <li className="nav-item">
                  <Link className="nav-link text-white" to={`${userName ? `/home/${userName}` : "/"}`}>
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to={`${userName ? `/home/${userName}/category` : "/"}`}>
                    Category
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to={`${userName ? `/home/${userName}/about` : "/"}`}>
                    About
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
