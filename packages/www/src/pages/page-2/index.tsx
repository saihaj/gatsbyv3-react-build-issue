/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
// import { getImage } from 'gatsby-plugin-image'
// import { convertToBgImage } from 'gbimage-bridge'
// import BackgroundImage from 'gatsby-background-image'
import { graphql, useStaticQuery } from 'gatsby'

import Layout from '../../components/Layout'
import SectionNav from '../../components/SectionNav'
import Seo from '../../components/Seo'
import Link from '../../components/Link'

const LINKS = [
  { name: 'Home', target: '/page-2' },
  { name: 'Sub Link 1', target: '/page-2/child-1' },
  { name: 'Sub Link 2', target: '/page-2/child-2' },
]

type HeroProps = {
  backgroundImage:any,
}

const Hero = ( { backgroundImage }:HeroProps ) =>
// @ts-expect-error this is temporary bridge for bringing gatsby-background-image to Gatsby 3
// const bgImage = convertToBgImage( getImage( backgroundImage ) )

  (
    // <BackgroundImage
    //   Tag="section"
    //   preserveStackingContext
    //   {...bgImage}
    // >
      <Layout className="h-80 pb-2 text-center flex flex-col justify-between items-center">
        <div />
        <div>
          <h3 className="text-xl font-medium">Tagline</h3>
          <h1 className="text-6xl font-semibold text-purple-300 mt-4">Page 2 Title</h1>
        </div>
        <p className="max-w-xl">
          <Link to="/disclaimer">
            <span className="underline">
              Disclaimer:
            </span>
          </Link>
          {' '}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. F
          acere accusamus minima optio, voluptas harum, dicta inventore
          impedit vitae doloribus, dignissimos consequatur quas
          fugiat! Illo iste accusamus nemo quam quos quaerat!
        </p>
      </Layout>
    {/* </BackgroundImage> */}
  )

const Market = () => {
  const { backgroundImage } = useStaticQuery( graphql`
    query Page2HeroHeader {
      backgroundImage: file(
        sourceInstanceName: {eq: "images"}
        name: {eq: "hero"}
      ) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
    ` )

  return (
    <main>

      <Seo title="Page 2" />

      <Layout>
        <SectionNav title="Page 2" titleLink="/" links={LINKS} />
      </Layout>

      <Hero backgroundImage={backgroundImage} />

      <Layout className="mb-8">

        <section className="h-80 my-6 md:space-x-8 md:flex items-center flex sm:flex-col justify-around">
          <p className="max-w-sm text-2xl font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Incidunt, quam eaque inventore molestias voluptatibus corrupti! Autem
          </p>
          <p className="max-w-sm text-xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora, corrupti!
          </p>
        </section>

      </Layout>

    </main>
  )
}

export default Market
