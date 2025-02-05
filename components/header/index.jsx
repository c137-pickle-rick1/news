'use client'

import styles from "./index.module.css"
import Image from "next/image"
import Logo from "../logo"
import Link from "next/link"
import { Bell } from "@phosphor-icons/react"

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.left}>
                <Link href="/">
                    <Logo />
                </Link>
            </div>
            <input className={styles.search} type="search" placeholder="搜索" />
            <div className={styles.right}>
                <button>投稿</button>
                <button className={styles.notification}>
                    <Bell size={22} />
                    <div className={styles.badge}>29</div>
                </button>
                <Image className={styles.avatar} src="/avatar.png" alt="avatar" width={32} height={32} />
            </div>
        </header>
    )
}
