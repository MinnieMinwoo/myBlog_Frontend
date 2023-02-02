import React from "react";
import HomeSearch from "./HeaderSearch";
import HomeProfile from "./HeaderProfile";

const HeaderIcon = () => {
    return (
        <div className="HeaderIcon">
            <HomeSearch />
            <HomeProfile />
        </div>
    );
};

export default HeaderIcon;
