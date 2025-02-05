/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/home/event',
                permanent: true,
            },
        ]
    },
}

export default nextConfig
