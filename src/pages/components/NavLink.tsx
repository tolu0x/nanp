import { FC, ReactNode } from 'react';


interface NavLinkProps {
  href: string,
  children: ReactNode
}

const NavLink: FC<NavLinkProps> = ({href, children}: NavLinkProps) => {
  return (
      <a
          href={href}
          className="pr-4 py-1 text-white text-2xl lg:py-0 hover:text-opacity-60 hover:transition-all"
      >
          {children}
      </a>
  )
}

export default NavLink