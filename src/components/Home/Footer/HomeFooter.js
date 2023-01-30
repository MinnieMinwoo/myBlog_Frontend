import styled from "styled-components";

const MainFooter = styled.div`
    border-top: 1px solid #eee;
    padding: 20px 0;
`;
const TextBox = styled.p`
    margin: 10px 0;
    font-size: 0.875em;
    color: #777;
    @media (min-width: 1080px) {
        margin-left: 10%;
    }
`;

const HomeFooter = () => {
    return (
        <MainFooter className="HomeFooter">
            <TextBox> 2023 My own blog project</TextBox>
            <TextBox> © Snowcat</TextBox>
        </MainFooter>
    );
};

export default HomeFooter;
