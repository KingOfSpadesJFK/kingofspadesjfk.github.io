import * as React from 'react'
import { Link } from 'gatsby'
import { navbar, navbarItem, navbarActive } from './layout.module.css'

const navigation = [
  { href: '/', title: 'Home' },
  { href: '/about/', title: 'About' },
  { href: '/work/', title: 'Work' },
  { href: '/contact/', title: 'Contact' },
];

const TopBar = () => {
    return (
      <ul className={navbar}>
        {navigation.map((item) => (
          <li key={item.href}>
            <Link
              to={item.href}
              className={navbarItem}
              activeClassName={navbarActive}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    )
}

export default TopBar