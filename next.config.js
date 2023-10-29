/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'firebasestorage.googleapis.com',
                port: '',
                pathname: '/v0/b/next-exam-1d63a.appspot.com/**'
            }
        ]
    }
}

module.exports = nextConfig
