import Navbar from '../components/Navbar'
import Layout from '../components/Layout'
import Seo from '../components/Seo'

const Home = () => (
  <Layout>

    <Seo title="Home" />

    <Navbar />

    <main>
      <h1 className="text-4xl text-center font-bold pt-10">Homepage</h1>
    </main>

  </Layout>
)

export default Home
