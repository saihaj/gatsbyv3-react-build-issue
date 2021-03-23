import { DetailedHTMLProps, HTMLAttributes } from 'react'
import cx from 'classnames'

type LayoutProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

/**
 * Container for padding defaults on different viewport
 */
const Layout = ( { children, className, ...props }:LayoutProps ) => (
  <div className="flex">

    <div
      className={cx(
        'container px-4 lg:px-24',
        'mx-auto',
        className,
      )}
      {...props}
    >
      {children}
    </div>

  </div>
)

export default Layout

