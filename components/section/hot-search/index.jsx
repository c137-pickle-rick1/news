"use client"

import styles from "./index.module.css"
import { Fire } from "@phosphor-icons/react"
import SectionHeader from "../section-header"

const keywords = [
    "李文亮",
    "大S",
    "习近平",
    "李老师",
    "沈阳",
    "爆炸",
    "妙瓦底",
    "大东",
    "大东副食品商场",
    "华盛顿",
    "病毒",
    "疫情",
    "疫苗",
    "新冠肺炎",
    "柯洁",
    "远洋捕捞",
]
export default function Page() {
    return (
        <section className={styles.section}>
            <SectionHeader title="热搜榜" icon={<Fire size={22} weight="fill" fill="#F53F3F" />} />
            <div className={styles.tags}>
                {
                    keywords.map(keyword => (
                        <Tag key={keyword} keyword={keyword} />
                    ))
                }
            </div>
        </section>
    )
}

function Tag({ keyword }) {
    return (
        <div className={styles.tag}>
            {keyword}
        </div>
    )
}