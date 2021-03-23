import Layout from '../../components/Layout'
import SectionNav from '../../components/SectionNav'
import Seo from '../../components/Seo'

const LINKS = [
  { name: 'Sub Link 1', target: '/page-2/child-1' },
  { name: 'Sub Link 2', target: '/page-2/child-2' },
]

const Market = () => (
  <main>

    <Seo title="Child 1" />

    <Layout>
      <SectionNav title="Some Cool Title" titleLink="/page-2" links={LINKS} />

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

export default Market
