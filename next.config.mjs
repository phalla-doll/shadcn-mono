/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: "/component",
                destination: "/components",
                permanent: true,
            },
        ]
    },
}

export default nextConfig
