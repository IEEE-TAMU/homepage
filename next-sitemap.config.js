/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.SITE_URL || 'https://ieeetamu.org',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  // ...other options
};

export default config;
