/** @type {import('next-sitemap').IConfig} */
export default config = {
  siteUrl: process.env.SITE_URL || 'https://ieeetamu.org',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  // ...other options
};
