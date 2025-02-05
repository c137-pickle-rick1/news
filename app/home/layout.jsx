import styles from "./layout.module.css"
import Recommend from "@/components/section/recommend"
import HotEvent from "@/components/section/hot-event"    
import Tabs from "@/components/tabs"
import { homeTabs } from "@/app/demo-data"
import HotSearch from "@/components/section/hot-search"
import TopClicked from "@/components/section/top-clicked"

export default function Layout({ children }) {
    return (
        <main className={styles.main}>
            <aside className={styles.leftSidebar} >
                <HotEvent />
                <Recommend />
            </aside>
            <div className={styles.list}>
                <div className={styles.tabsContainer}>
                    <Tabs tabs={homeTabs} />
                </div>
                {children}
            </div>
            <aside className={styles.rightSidebar} >
                <HotSearch />
                <TopClicked />
            </aside>
        </main>
    )
}
