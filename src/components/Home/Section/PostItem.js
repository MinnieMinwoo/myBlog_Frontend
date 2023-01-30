import { Link } from "react-router-dom";
import styled from "styled-components";

const PostBox = styled(Link)`
  display: flex;
  margin-bottom: 28px;
  text-decoration-line: none;
`;

const Title = styled.p`
  cursor: pointer;
  margin-bottom: 9px;
  padding-top: 3px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.4;
  font-size: 18px;
  color: #555;
  ${PostBox}:hover & {
    text-decoration: underline;
  }
`;

const TextData = styled.p`
  cursor: pointer;
  color: #999;
  margin-bottom: 11px;
  max-height: 66px;
  display: -webkit-box; //수정필요
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  font-size: 14px;
  line-height: 20px;
`;

const Date = styled.span`
  cursor: pointer;
  color: #999;
  font-size: 12px;
`;

const ImageData = styled.img`
  margin-left: 25px;
  width: 130px; /*모바일 100px으로 수정필요 */
  height: 100%;
  object-fit: cover;
  border: 1px solid #f1f1f1;
`;

const PostItem = () => {
  // 실제 들어갈 데이터들
  const id = 1; //게시글 id 확인용
  const title = "안녕하세요, 리액트 블로그 테스트용 메세지입니다.";
  const testText = `동해물과 백두산이 마르고 닳도록
  하느님이 보우하사 우리나라 만세
  무궁화 삼천리 화려 강산
  대한 사람 대한으로 길이 보전하세
  남산 위에 저 소나무 철갑을 두른 듯
  바람 서리 불변함은 우리 기상일세
  무궁화 삼천리 화려 강산
  대한 사람 대한으로 길이 보전하세
  가을 하늘 공활한데 높고 구름 없이
  밝은 달은 우리 가슴 일편단심일세
  무궁화 삼천리 화려 강산
  대한 사람 대한으로 길이 보전하세
  이 기상과 이 맘으로 충성을 다하여
  괴로우나 즐거우나 나라 사랑하세
  무궁화 삼천리 화려 강산
  대한 사람 대한으로 길이 보전하세`; // 실험용 텍스트, 삭제필요
  const imageLink =
    "https://velog.velcdn.com/images/lacomaco/post/9f912ca9-98a9-432f-9285-d6fe65b0cd6c/9d0a6780-394a-11eb-9fd1-6296a684b124.jpeg";

  return (
    <PostBox className="PostItem" to={`/${id}`}>
      <div>
        <Title>{title}</Title>
        <TextData>{testText}</TextData>
        <Date>2023. 01. 18</Date>
      </div>
      {imageLink ? (
        <div>
          <ImageData src={imageLink} alt="post image" />
        </div>
      ) : null}
    </PostBox>
  );
};

export default PostItem;
