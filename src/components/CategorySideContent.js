import styles from "./CategorySideContent.module.css";

function CategorySideContent({ data }) {
    return (
        <div className="CategorySideContent">
            <a href="/" className={styles.content_title}>
                {data.title}
            </a>
            {data.content && (
                <ul className={styles.content_list}>
                    {data.content.map((content, id) => (
                        <li key={id}>
                            <a href="/" className={styles.content_data}>
                                {content}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default CategorySideContent;
