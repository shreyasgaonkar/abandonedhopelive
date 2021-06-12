require(`dotenv`).config()

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE
const googleAnalyticsTrackingId = process.env.GOOGLE_ANALYTICS_ID

module.exports = {
  siteMetadata: {
      title: "AbandonedHopeLive - The world’s first remote band",
      author: "Admin",
      description: "The world’s first remote band. Follow us for covers & original tracks.",
      siteUrl: "https://abandonedhopelive.gatsbyjs.io/",
      social: [
        {
          name: "twitter",
          url: "https://twitter.com/_AbandonedHope",
        },
        {
          name: "facebook",
          url: "https://www.facebook.com/AbandonedHopeLive",
        },
        {
          name: "instagram",
          url: "https://www.instagram.com/abandonedhopelive/",
        },
        {
          name: "youtube",
          url: "https://www.youtube.com/AbandonedHopeLive",
        }
      ],
    },
  flags: {
    FAST_DEV: true,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-cara`,
      // See the theme's README for all available options
      options: {},
    },
    googleAnalyticsTrackingId && {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `AbandonedHopeLive - The world’s first remote band`,
        short_name: `AbandonedHopeLive`,
        description: `The world’s first remote band. Follow us for covers & original tracks. DM us for requests & collaborations`,
        start_url: `/`,
        background_color: `#141821`,
        theme_color: `#f6ad55`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-netlify`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
}
