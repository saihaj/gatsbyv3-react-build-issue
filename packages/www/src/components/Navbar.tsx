import Link from './Link'

const LINKS = [
  { name: 'Home', target: '/' },
  { name: 'Page 2', target: '/page-2' },
]

const Navbar = () => (
  <nav className="text-xl pt-6">
    <ul className="flex space-x-8">
      {LINKS.map( ( { name, target } ) => (
        <li className="list-none" key={name}>
          <Link to={target}>{name}</Link>
        </li>
      ) )}
    </ul>
  </nav>
)

export default Navbar
