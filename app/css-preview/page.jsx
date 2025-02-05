import styles from "./page.module.css"

export default function CssPreviewPage() {
    return (
        <div className={styles.container}>
            <h1>一级标题，这是一级标题</h1>
            <h2>二级标题，这是二级标题</h2>
            <h3>三级标题，这是三级标题</h3>
            <h4>四级标题，这是四级标题</h4>
            <h5>五级标题，这是五级标题</h5>
            <h6>六级标题，这是六级标题</h6>
            <blockquote>引用</blockquote>
            <ul>
                <li>无序列表</li>
                <li>无序列表</li>
                <li>无序列表</li>
            </ul>
            <ol>
                <li>有序列表</li>
                <li>有序列表</li>
                <li>有序列表</li>
            </ol>
            <pre><code>代码块</code></pre>
            <p>这是段落</p>
            <a href="#">Link</a>
            <button>Button</button>
            <input type="text" placeholder="Input" />
            <input type="file" />
        </div>
    )
}