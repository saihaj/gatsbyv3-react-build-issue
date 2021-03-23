module.exports = {
  siteMetadata: {
    title: 'Bug Report',
    description: 'React components are not working in Gatsby build version compared to dev.',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Gatsby Issue',
        short_name: 'GatsbyJS',
        start_url: '/',
        display: 'standalone',
        icon: './static/images/favicon.ico',
      },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [ 'Montserrat:100,200,300,400,400i,500,600,700,800,900', 'Khula' ],
        display: 'swap',
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/images`,
        name: 'images',
      },
    },
  ],
}
