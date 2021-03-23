/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { graphql, useStaticQuery } from 'gatsby'
import { Helmet, HelmetProps } from 'react-helmet'

type SeoProps = {

  /**
   * Title of the object
   */
  title: string,

  /**
   * A one to two sentence description.
   */
  description?: string,

  /**
   * Language of page
   * Default: en
   */
  lang?: string,

  /**
   * List of keywords helps to search content helps search engines
   */
  keywords?: [string],
} & HelmetProps

const Seo = ( { description, meta = [], lang = 'en', keywords, title, ...props }:SeoProps ) => {
  const { site } = useStaticQuery( graphql`
    query SeoMetadata {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
  ` )

  const metaDescription = description || site.siteMetadata.description

  const metaTags = [
    {
      name: 'description',
      content: metaDescription,
    },
    {
      property: 'og:title',
      content: title,
    },
    {
      property: 'og:description',
      content: metaDescription,
    },
    {
      property: 'og:type',
      content: 'website',
    },
  ] as HelmetProps['meta']

  const keywordTag = keywords && keywords.length > 0 ? {
    name: 'keywords',
    content: keywords.join( ', ' ),
  } : []

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={metaTags?.concat( meta ).concat( keywordTag )}
      {...props}
    />
  )
}

export default Seo
