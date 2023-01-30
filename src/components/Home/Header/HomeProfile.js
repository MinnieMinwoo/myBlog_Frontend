import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./HomeProfile.module.css";

const HomeProfile = () => {
    const [isHidden, setIsHidden] = useState(true);
    const onClick = () => {
        console.log(isHidden);
        setIsHidden((prev) => !prev);
    };
    return (
        <div className={`HomeProfile ${styles.HomeProfile}`}>
            <button className={styles.profile_button} onClick={onClick} />
            {isHidden ? null : (
                <div>
                    <Link to="write">글쓰기</Link>
                    <p>설정</p>
                    <p>로그아웃</p>
                </div>
            )}
        </div>
    );
};

export default HomeProfile;
