'use client'

import styles from "./index.module.css"
import Link from "next/link"
import { Pulse } from "@phosphor-icons/react"

export default function EventListItem({ id, title, description, newsCount, latestNews }) {
    return (
        <Link href={`/event-detail/${id}`}>
            <article className={styles.article}>
                <div className={styles.title}>{title}</div>
                <p className={styles.description}>{description}</p>
                <div className={styles.latest}>
                    <div className={styles.newsCount}>
                        <Pulse size={14}/>
                        {newsCount}
                    </div>
                    <div className={styles.latestTitle}>{latestNews.time} · {latestNews.title}</div>
                </div>
            </article >
        </Link >
    )
}