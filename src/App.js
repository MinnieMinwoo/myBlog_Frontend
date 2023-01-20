import "./App.css";
import styles from "./App.module.css";
import PostContainer from "./components/PostContainer";
import CategorySideBar from "./components/CategorySideBar";

function App() {
    const id = 1; //게시글 id 확인용
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

    return (
        <div className={`App ${styles.App}`}>
            <PostContainer />
            <CategorySideBar />
        </div>
    );
}

export default App;
