/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://web-dev-interview-qa.vercel.app',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  exclude: ['/404', '/500'],
  generateIndexSitemap: false,
  robotsTxtOptions: {
    policies: [{userAgent: '*', allow: '/'}],
  },
}
