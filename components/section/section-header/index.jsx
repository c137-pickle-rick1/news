import styles from './index.module.css'

export default function SectionHeader({ title, icon }) {
    return (
        <header className={styles.header}>
            {icon}
            <div className={styles.title}>{title}</div>
        </header>
    )
}