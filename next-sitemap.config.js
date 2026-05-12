/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.dnadsresearch.com",

  generateRobotsTxt: true,

  sitemapSize: 7000,

  changefreq: "weekly",

  priority: 0.7,

  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },

  additionalPaths: async (config) => [
    await config.transform(config, "/journals"),
    await config.transform(config, "/journals/1"),
    await config.transform(config, "/journals/2"),
    await config.transform(config, "/journals/1/current-issue"),
    await config.transform(config, "/journals/2/current-issue"),
    await config.transform(config, "/journals/1/archive"),
    await config.transform(config, "/journals/2/archive"),
    await config.transform(config, "/journals/1/editorial"),
    await config.transform(config, "/journals/2/editorial"),
    await config.transform(config, "/journals/1/submission"),
    await config.transform(config, "/journals/2/submission"),
    await config.transform(config, "/journals/1/author-guidelines"),
    await config.transform(config, "/journals/2/author-guidelines"),
    await config.transform(config, "/journals/1/contact"),
    await config.transform(config, "/journals/2/contact"),
  ],
};