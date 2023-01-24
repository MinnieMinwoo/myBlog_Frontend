import CategorySideContent from "./CategorySideContent";
import styles from "./CategorySideBar.module.css";

const CategorySideBar = () => {
  let categoryData = [
    {
      title: "Program",
      content: ["HTML", "CSS", "JavaScript", "TypeScript", "Python"],
    },
    {
      title: "Frontend",
      content: ["React", "FireBase", "GraphQL", "Recoil"],
    },
    {
      title: "Backend",
      content: ["Node.js", "MySQL", "express.js", "GraphQL"],
    },
    {
      title: "Life",
    },
  ];

  return (
    <aside className={`CategorySideBar ${styles.CategorySideBar}`}>
      <nav className="category_navigation">
        <a href="/" className={styles.category_title}>
          분류 전체보기
        </a>
        {categoryData.map((element, id) => (
          <CategorySideContent key={id} data={element} />
        ))}
      </nav>
    </aside>
  );
};

export default CategorySideBar;
