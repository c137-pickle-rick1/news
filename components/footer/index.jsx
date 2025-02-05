'use client'

import styles from "./index.module.css"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { House, Fire, CursorClick, UserCircle, Bell } from "@phosphor-icons/react"

const size = 24

const tabs = [
    {
        index: 0,
        title: "首页",
        path: "/home/event",
        icon: {
            default: <House size={size} />,
            active: <House size={size} weight="fill" />
        }
    },
    {
        index: 1,
        title: "点击榜",
        path: "/top-clicked",
        icon: {
            default: <CursorClick size={size} />,
            active: <CursorClick size={size} weight="fill" />
        }
    },
    {
        index: 2,
        title: "热搜榜",
        path: "/hot-search",
        icon: {
            default: <Fire size={size} />,
            active: <Fire size={size} weight="fill" />
        }
    },
    {
        index: 3,
        title: "通知",
        path: "/notification",
        icon: {
            default: <Bell size={size} />,
            active: <Bell size={size} weight="fill" />
        }
    },
    {
        index: 4,
        title: "我的",
        path: "/my",
        icon: {
            default: <UserCircle size={size} />,
            active: <UserCircle size={size} weight="fill" />
        }
    },
]

export default function Footer() {
    // 获取路径的第一个部分
    const pathname = usePathname().split('/')[1]

    return (
        <footer className={styles.footer}>
            {tabs.map(tab => (
                <Link key={tab.index} href={tab.path} className={`${styles.tab} ${tab.path.split('/')[1] === pathname ? styles.selected : ''}`}>
                    <div className={styles.icon}>{tab.icon[tab.path.split('/')[1] === pathname ? 'active' : 'default']}</div>
                    <div className={styles.text}>{tab.title}</div>
                </Link>
            ))}
        </footer>
    )
}