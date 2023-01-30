import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ProfileBox = styled.div`
    display: inline-block;
`;

const ProfileButton = styled.button`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 1px solid #eee;
    background-color: #fff;
    background-position: center;
    background-repeat: no-repeat;
`;

const HomeProfile = () => {
    const [isHidden, setIsHidden] = useState(true);
    const onClick = () => {
        console.log(isHidden);
        setIsHidden((prev) => !prev);
    };
    return (
        <ProfileBox className="HomeProfile">
            <ProfileButton onClick={onClick} />
            {isHidden ? null : (
                <div>
                    <Link to="write">글쓰기</Link>
                    <p>설정</p>
                    <p>로그아웃</p>
                </div>
            )}
        </ProfileBox>
    );
};

export default HomeProfile;
