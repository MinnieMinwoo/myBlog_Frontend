import styles from "./CategorySideContent.module.css";

const CategorySideContent = ({ data }) => {
  return (
    <div className={`CategorySideContent ${styles.CategorySideContent}`}>
      <a href="/" className={styles.content_title}>
        {data.title}
      </a>
      {data.content && (
        <ul className={styles.content_list}>
          {data.content.map((content, id) => (
            <li key={id} className={styles.content_dataContainer}>
              <a href="/" className={styles.content_data}>
                {content}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CategorySideContent;
