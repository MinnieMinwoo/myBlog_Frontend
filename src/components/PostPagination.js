import styles from "./PostPagination.module.css";

function PostPagination() {
    const currentPageNumber = 1;
    return (
        <div class="PostPagination">
            <a
                class={styles.post_pagination_link}
                href={`/${currentPageNumber}`}
            >
                more
            </a>
        </div>
    );
}
export default PostPagination;
