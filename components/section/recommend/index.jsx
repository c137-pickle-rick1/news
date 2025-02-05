'use client'

import styles from "./index.module.css"
import { RssSimple } from "@phosphor-icons/react"
import SectionHeader from "../section-header"

const source = [
    {
        index: 0,
        name: "李老师不是你老师",
        avatar: "https://pbs.twimg.com/profile_images/1558667234855292929/RqgodvGb_400x400.jpg"
    },
    {
        index: 1,
        name: "李老师不是你老师",
        avatar: "https://pbs.twimg.com/profile_images/1558667234855292929/RqgodvGb_400x400.jpg"
    },
    {
        index: 2,
        name: "李老师不是你老师",
        avatar: "https://pbs.twimg.com/profile_images/1558667234855292929/RqgodvGb_400x400.jpg"
    },
    {
        index: 3,
        name: "李老师不是你老师",
        avatar: "https://pbs.twimg.com/profile_images/1558667234855292929/RqgodvGb_400x400.jpg"
    },
    {
        index: 4,
        name: "李老师不是你老师",
        avatar: "https://pbs.twimg.com/profile_images/1558667234855292929/RqgodvGb_400x400.jpg"
    },
    {
        index: 5,
        name: "李老师不是你老师",
        avatar: "https://pbs.twimg.com/profile_images/1558667234855292929/RqgodvGb_400x400.jpg"
    },
    {
        index: 6,
        name: "李老师不是你老师",
        avatar: "https://pbs.twimg.com/profile_images/1558667234855292929/RqgodvGb_400x400.jpg"
    },
    {
        index: 7,
        name: "李老师不是你老师",
        avatar: "https://pbs.twimg.com/profile_images/1558667234855292929/RqgodvGb_400x400.jpg"
    },
    {
        index: 8,
        name: "李老师不是你老师",
        avatar: "https://pbs.twimg.com/profile_images/1558667234855292929/RqgodvGb_400x400.jpg"
    },
]

export default function Recommend() {
    return (
        <div className={styles.recommend}>
            <SectionHeader title="推荐关注" icon={<RssSimple size={22} weight="fill" fill="#3491FA" />} />
            <ul className={styles.ul}>
                {
                    source.map(item => (
                        <li className={styles.li} key={item.index}>
                            <img className={styles.avatar} src={item.avatar} alt={item.name} width={32} height={32} />
                            <a href="#" className={styles.name}>{item.name}</a>
                            <button>关注</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}