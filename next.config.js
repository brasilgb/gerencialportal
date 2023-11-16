/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "/gerencial",
    assetPrefix: "/gerencial",
    webpack(config, { isServer }) {
        if (!isServer) {
            config.resolve.fallback = {
                ...config.resolve.fallback,
                fs: false
            };
        }
        return config;
    }
}

module.exports = nextConfig
