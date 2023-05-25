const withSitemap = require('next-sitemap');

module.exports = withSitemap({
  /* configurações do sitemap */
  sitemap: {
    hostname: 'https://www.multsacch.com', // URL base do seu site
    pagesConfig: {
      '/': {
        priority: '1.0', // prioridade da página (0.0 a 1.0)
        changefreq: 'yearly' // frequência de alteração (always, hourly, daily, weekly, monthly, yearly, never)
      }
    }
  },
});