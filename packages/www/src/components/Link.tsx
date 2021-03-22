import { Link } from 'gatsby'
import { ReactNode } from 'react'
import { OutboundLink } from 'gatsby-plugin-gtag'

type CustomLinkProps = {

  /**
   * The URL you want to link to
   */
  to: string,
  children: ReactNode,
  className?: string,
}

/**
 * Use `Link` from gatsby if local link otherwise `<a>` and open in new tab
 */
const CustomLink = ( { to, children, ...props }: CustomLinkProps ) => (
  to.startsWith( 'http' ) || to.startsWith( 'mailto' )
    ? <OutboundLink href={to} target="_blank" rel="noreferrer" {...props}>{children}</OutboundLink>
    : <Link to={to} {...props}>{children}</Link>
)

export default CustomLink
