import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import Seo from '../components/Seo'

const Redirect = () => (
  <main className="flex">

    <Seo title="Oops" />

    <Layout>
      <Navbar />

      <h1 className="mt-44 font-title font-semibold text-purple-700 text-7xl mb-20">
        This Page is Under Construction!
      </h1>

    </Layout>

  </main>
)

export default Redirect
