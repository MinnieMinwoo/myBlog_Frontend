import styled from "styled-components";

const SearchBox = styled.div`
    display: inline-block;
    margin-right: 15px;
    margin-top: 32px;
`;

const SearchButton = styled.button`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 1px solid #eee;
`;

const HomeSearch = () => {
    return (
        <SearchBox className="SearchBox">
            <SearchButton />
        </SearchBox>
    );
};

export default HomeSearch;
