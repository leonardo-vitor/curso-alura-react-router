import styles from './mainButton.module.css';

export default function MainButton({children, size}) {
    const btnSize = `${styles.btnMain} ${styles[size]}`;

    return (
        <button className={btnSize}>
            {children}
        </button>
    )
}