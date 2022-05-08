/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["i.ibb.co"],
  },
  webpack: (config, options) =>
    {
        config.module.rules.push({
            test: /\.pdf$/i,
            type: 'asset/source'
        })

        return config
    }
}

module.exports = nextConfig
