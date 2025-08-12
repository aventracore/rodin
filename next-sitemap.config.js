/***** next-sitemap config *****/
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://pulsetrack.app',
  generateRobotsTxt: true,
  sitemapSize: 7000,
};