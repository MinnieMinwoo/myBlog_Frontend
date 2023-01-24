import styles from "./PostItem.module.css";

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
    <a href={`/${id}`} className={`PostItem ${styles.post_item}`}>
      <div className={styles.post_dataDiv}>
        <div className={styles.post_title}>{title}</div>
        <p className={styles.post_content}>{testText}</p>
        <span className={styles.post_date}>2023. 01. 18</span>
      </div>
      {imageLink ? (
        <div className={styles.post_imgDiv}>
          <img className={styles.post_image} src={imageLink} alt="post image" />
        </div>
      ) : null}
    </a>
  );
};

export default PostItem;
