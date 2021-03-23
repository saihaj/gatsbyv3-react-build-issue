import { useWindowWidth } from '@react-hook/window-size'
import { useEffect } from 'react'

import useToggle from '../hooks/use-toggle'

import Link from './Link'

type SectionProps = {
  /**
   * Section title label
   */
  title: string,
  /**
   * Section title link
   */
  titleLink: string,
  /**
   * Nav links
   */
  links: { name: string, 'target':string }[],
}

const SectionNav = ( { title, titleLink, links }:SectionProps ) => {
  const [ nav, toggleNav ] = useToggle( false )
  const width = useWindowWidth()

  useEffect( () => {
    // `sm` size tailwind
    if ( width > 768 && !nav ) {
      toggleNav()
    }
  }, [ width ] )

  const MenuLinks = () => (
    <div className="md:flex sm:py-2 sm:divide-y-2 sm:divide-gray-400 md:space-x-8">
      {links.map( ( { name, target } ) => (
        <li className="list-none" key={name}>
          <Link to={target}>{name}</Link>
        </li>
      ) )}
    </div>
  )

  return (
    <nav className="text-xl pt-6 pb-2 md:border-b md:border-gray-300">
      <ul className="md:flex md:items-center md:justify-between">

        <div className="flex justify-between items-center">
          <Link className="text-purple-300 text-2xl font-medium" to={titleLink}>{title}</Link>
          <button type="button" onClick={() => toggleNav()}>
            <svg className="h-8 hover:text-purple-500 md:hidden cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        { nav && <MenuLinks />}

      </ul>
    </nav>
  )
}

export default SectionNav
