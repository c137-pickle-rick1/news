'use client'

import { usePathname } from "next/navigation"
import styles from './index.module.css'
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Tabs({ tabs, justifyContent }) {
    const pathname = usePathname()
    const [width, setWidth] = useState(0)
    const [left, setLeft] = useState(0)

    useEffect(() => {
        const selectedTab = document.querySelector(`.${styles.selected}`)
        if (selectedTab) {
            setWidth(selectedTab.offsetWidth)
            setLeft(selectedTab.offsetLeft)
        }
    }, [pathname])

    return (
        <div className={styles.container} style={{ justifyContent: justifyContent === 'center' ? 'center' : 'flex-start' }}>
            <div className={styles.content} >
                {tabs.map((tab) => (
                    <Link href={tab.path} key={tab.index} className={`${styles.tab} ${tab.path === pathname ? styles.selected : ''}`}>
                        {tab.title}
                    </Link>
                ))}
                <div className={styles.underline} style={{ width: width, left: left }}></div>
            </div>
        </div >
    )
}