import CategorySideContent from "./CategorySideContent";
import styles from "./CategorySideBar.module.css";

function CategorySideBar() {
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
        <nav className={`CategorySideBar ${styles.CategorySideBar}`}>
            <a href="/" className={styles.category_title}>
                분류 전체보기
            </a>
            {categoryData.map((element, id) => (
                <CategorySideContent key={id} data={element} />
            ))}
        </nav>
    );
}

export default CategorySideBar;
