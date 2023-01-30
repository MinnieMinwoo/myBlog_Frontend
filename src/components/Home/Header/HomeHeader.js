import HomeIcon from "./HomeIcon";
import HomeNavigation from "./HomeNavigation";
import styled from "styled-components";

const MainHeader = styled.div`
    border-bottom: 1px solid #eee;
`;

const TopDivision = styled.div`
    display: flex;
    justify-content: space-between;
    @media (min-width: 1080px) {
        width: 80%;
        margin-left: 10%;
    }
`;

const Title = styled.h1`
    color: #333;
`;

const HomeHeader = () => {
    return (
        <MainHeader className="HomeHeader">
            <TopDivision>
                <Title>몰?루</Title>
                <HomeIcon />
            </TopDivision>
        </MainHeader>
    );
};

export default HomeHeader;
