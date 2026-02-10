/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1. Turbopack Configuration
  turbo: {
    rules: {
      '*.svg': {
        loaders: [
          {
            loader: '@svgr/webpack',
            options: { icon: true, svgo: true },
          },
        ],
        as: '*.js',
      },
    },
  },

  // 2. Webpack Configuration
  webpack(config) {
    // Find the rule that handles SVGs by default
    const fileLoaderRule = config.module.rules.find(rule => rule.test?.test?.('.svg'))

    config.module.rules.push(
      // Re-apply the internal rule for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/,
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...(fileLoaderRule.resourceQuery?.not || []), /url/] },
        use: [{ loader: '@svgr/webpack', options: { icon: true, svgo: true } }],
      }
    )

    // 3. IMPORTANT: Tell the default loader to stop touching SVGs
    fileLoaderRule.exclude = /\.svg$/i

    return config
  },
}

module.exports = nextConfig
