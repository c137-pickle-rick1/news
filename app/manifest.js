export default function manifest() {
    return {
        name: 'News',
        start_url: '/',
        display: 'standalone',
        icons: [
            {
                src: '/icon.png',
            }
        ],
    }
}