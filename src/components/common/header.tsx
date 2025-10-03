"use client"

import Link from 'next/link'

const navigation = [
  { name: 'About', href: '#about' },
  { name: 'Media', href: '#media' },
  { name: 'Resume', href: '#resume' },
  { name: 'Contact', href: '#contact' },
]

export function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <Link href="/" className="logo">
          Seth Karallis
        </Link>
        
        <nav>
          <ul className="nav">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link href={item.href} className="nav-link">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}