import styles from "./page.module.css"

const articles = [
    {
        title: "台媒曝大S火化细节，穿着最舒服的衣服化成仙，前男友周渝民悼念",
        description: "台媒曝大S火化细节，穿着最舒服的衣服化成仙，前男友周渝民悼念,大s,小s,火化,周渝民,吴佩慈,汪小菲,贾永婕,徐熙媛",
        time: "1小时前"
    },
    {
        title: "张兰发文悼念大S，称其离世是共同损失，呼吁双方一起保护孩子",
        description: "张兰发文悼念大S，称其离世是共同损失，呼吁双方一起保护孩子,大s,熙媛,再婚,汪小菲,穆婷婷,张兰(企业家)",
        time: "1小时前"
    },
    {
        title: "大S的＂矛盾性＂",
        description: '大S的＂矛盾性＂,大s,娱乐圈,小s,康熙来了,汪小菲,吴宗宪',
        time: "1小时前"
    },
]

export default function EventPage({ params }) {
    return (
        <div className={styles.list}>
            <section className={styles.section}>
                <div className={styles.date}>
                    2025-02-04
                </div>
                {
                    articles.map(article => (
                        <Article key={article.title} {...article} />
                    ))
                }
            </section>
        </div>
    )
}

function Article({ title, description, time }) {
    return (
        <article className={styles.article}>
            <h4 className={styles.title}>{title}</h4>
            <p className={styles.description}>{description}</p>
            <div className={styles.time}>{time}</div>
        </article>
    )
}