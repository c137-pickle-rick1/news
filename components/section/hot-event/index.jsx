'use client'

import styles from "./index.module.css"
import { NewspaperClipping } from "@phosphor-icons/react"
import SectionHeader from "../section-header"
import { useState } from "react"

const list = [
    {
        index: 0,
        title: "大S因流感引发肺炎不幸离世",
        followed: false
    },
    {
        index: 1,
        title: "美国一民航客机与军用直升机相撞坠河事件",
        followed: true
    },
    {
        index: 2,
        title: "中国“远洋捕捞”式执法事件",
        followed: false
    },
    {
        index: 3,
        title: "美国费城坠机",
        followed: true
    },
    {
        index: 4,
        title: "柯洁LG杯提子退赛风波",
        followed: false
    },
    {
        index: 5,
        title: "TikTok在美被封杀进展",
        followed: false
    },
    {
        index: 6,
        title: "沈阳大东副食品商场爆炸",
        followed: false
    },
    {
        index: 7,
        title: "印度大壶节踩踏事件",
        followed: false
    },
    {
        index: 8,
        title: "李老师发行迷因币$LI，被质疑割韭菜",
        followed: false
    },
    {
        index: 9,
        title: "韩国济州航空空难事件",
        followed: false
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
            <SectionHeader title="热门事件" icon={<NewspaperClipping size={22} weight="fill" fill="#FF7D00" />} />
            <ul className={styles.ul}>
                {
                    list.map(item => (
                        <li className={styles.li} key={item.index}>
                            <a href="#" className={styles.title}>{item.title}</a>
                            <FollowButton followed={item.followed} />
                        </li>
                    ))
                }
            </ul>
        </section>
    )
}

function FollowButton({ followed }) {
    const [isFollowed, setIsFollowed] = useState(followed)

    return (
        <button onClick={() => setIsFollowed(!isFollowed)}>{isFollowed ? "已关注" : "关注"}</button>
    )
}