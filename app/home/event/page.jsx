import EventListItem from "@/components/event-list-item"
import { eventList } from "@/app/demo-data"
import styles from "./page.module.css"

export default function App() {
    return (
        <>
            <Carousel />
            {
                eventList.map((item, i) => (
                    <EventListItem key={i} {...item} />
                ))
            }
        </>
    )
}

function Carousel() {
    return (
        <div className={styles.carousel}>
            <div className={styles.banners}>
                <Banner {...banners[0]} />
                <Banner {...banners[1]} className={styles.secondBanner} />
            </div>
            <div className={styles.index}>
                <div className={`${styles.dot} ${styles.active}`}></div>
                <div className={styles.dot}></div>
                <div className={styles.dot}></div>
                <div className={styles.dot}></div>
            </div>
        </div>
    )
}

const banners = [
    {
        index: 0,
        title: "大S因流感引发肺炎不幸离世",
        image: "https://www.jiuzyoung.com/wp-content/uploads/2025/02/da-s-barbie-hsu-confirmed-passed-away.jpg",
        time: "1小时前",
        newsCount: 10
    },
    {
        index: 1,
        title: "美国一民航客机与军用直升机相撞坠河事件",
        image: "https://i.ytimg.com/vi/0_wcJn7leLk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDPUxN0khQgc7jQKT4OhI2MU4hjYQ",
        time: "1小时前",
        newsCount: 20
    }
]

function Banner({ index, title, image, time, newsCount, className }) {
    return (
        <div className={`${styles.banner} ${className}`}>
            <div className={styles.newsCount}>
                {newsCount}
            </div>
            <div className={styles.bottom}>
                <div className={styles.time}>{time}</div>
                <div className={styles.title}>{title}</div>
            </div>
            <img className={styles.image} src={image} alt="" />
        </div>
    )
}