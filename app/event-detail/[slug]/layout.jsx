import { eventList } from "@/app/demo-data"
import styles from "./layout.module.css"
import Recommend from "@/components/section/recommend"
import HotEvent from "@/components/section/hot-event"
import EmojiButton from "@/components/emoji-button"
import Tabs from "@/components/tabs"

export default function Layout({ params, children }) {
    const event = eventList.find(event => event.id === parseInt(params.slug))

    const tabs = [
        {
            index: 0,
            title: "内宣",
            path: `http://localhost:3000/event-detail/${params.slug}`
        },
        {
            index: 1,
            title: "自媒体",
            path: `http://localhost:3000/event-detail/${params.slug}/self-media`
        }
    ]

    return (
        <main className={styles.main}>
            <div className={styles.leftSidebar} >
                <HotEvent />
                <Recommend />
            </div>
            <div className={styles.list}>
                <article className={styles.article}>
                    <h4 className={styles.title}>{event.title}</h4>
                    <p className={styles.description}>{event.description}</p>
                    <div className={styles.actions}>
                        <button>关注</button>
                        <EmojiButton />
                    </div>
                </article >
                <Tabs tabs={tabs} justifyContent={"center"}/>
                {children}
            </div>
            <div className={styles.rightSidebar} >
                comment
            </div>
        </main>
    )
}