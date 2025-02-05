'use client'

import styles from "./index.module.css"
import { CursorClick } from "@phosphor-icons/react"
import SectionHeader from "../section-header"

const news = [
    {
        index: 0,
        title: "CIA称倾向于认同新冠源自实验室泄漏",
    },
    {
        index: 1,
        title: "达赖喇嘛新书描述与中共的谈判与抗争",
    },
    {
        index: 2,
        title: "特朗普对华战略为中国提供喘息空间",
    },
    {
        index: 3,
        title: "“王者归来”：特朗普拥抱君主式权威",
    },
    {
        index: 4,
        title: "特朗普称将于2月1日对华征收新关税",
    },
    {
        index: 5,
        title: "中国人口连续三年减少，出生人口七年来首次反弹",
    },
    {
        index: 6,
        title: "习近平要求“严防极端案件”，中国加强安保力量维稳",
    },
    {
        index: 7,
        title: "习近平新年贺词承认中国经济面临挑战",
    },
    {
        index: 8,
        title: "五角大楼称中国核武器数量仍在强劲增长",
    },
    {
        index: 9,
        title: "从爱国侨领到美国间谍：中美换囚主角之一梁成运",
    }
]

export default function Page() {

    const getColor = (index) => {
        switch (index) {
            case 0:
                return "#F53F3F"
            case 1:
                return "#F77234"
            case 2:
                return "#FF7D00"
            default:
                return "#888"
        }
    }

    return (
        <section className={styles.section}>
            <SectionHeader title="24小时点击排行" icon={<CursorClick size={22} weight="fill" fill="#FF7D00" />} />
            <ul className={styles.ul}>
                {
                    news.map(item => (
                        <li className={styles.li} key={item.index}>
                            <div className={styles.index} style={{ color: getColor(item.index) }}>{item.index + 1}</div>
                            <a href="#" className={styles.title}>{item.title}</a>
                        </li>
                    ))
                }
            </ul>
        </section>
    )
}