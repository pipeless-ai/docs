const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

module.exports = withNextra({
  basePath: '/docs',
  assetPrefix: '/docs', // Allow URLs to be correct on the main site
  webpack(config) {
    const allowedSvgRegex = /components\/icons\/.+\.svg$/

    const fileLoaderRule = config.module.rules.find(rule =>
      rule.test?.test('.svg')
    )
    fileLoaderRule.exclude = allowedSvgRegex

    config.module.rules.push({
      test: allowedSvgRegex,
      use: ['@svgr/webpack']
    })
    return config
  },
  async redirects() {
    // The rewrite on the main site causes a duplicated /docs/docs on page reload.
    // This redirect takes the user to the proper path
    return [
      {
        // Hack to avoid too many redirections
        source: '/docs/docs',
        destination: 'https://www.pipeless.ai/docs',
        permanent: true,
      },
      {
        source: '/docs/docs/:path*',
        destination: 'https://www.pipeless.ai/docs/:path*',
        permanent: true,
      },
    ]
  },
})
