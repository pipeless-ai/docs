/** @type {import('next-sitemap').IConfig} */
// Trick the URL to point to the main site
const siteUrl = 'https://pipeless.ai/docs';
module.exports = {
    siteUrl,
    generateRobotsTxt: true,
    sitemapSize: 3000,
}
