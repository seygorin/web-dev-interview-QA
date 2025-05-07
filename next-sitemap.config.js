/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://web-dev-interview-qa.vercel.app',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    additionalSitemaps: ['https://web-dev-interview-qa.vercel.app/sitemap.xml'],
  },
  exclude: ['/404'],
}
