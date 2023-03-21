import styles from './templatePost.module.css';

export default function TemplatePost({children, coverImage, title}) {
    return (
        <article className={styles.templatePostContainer}>
            <div className={styles.coverImage} style={{ backgroundImage: `url(${coverImage})` }}></div>
            <h2 className={styles.title}>
                {title}
            </h2>

            <div className={styles.contentPostContainer}>
                {children}
            </div>
        </article>
    )
}
