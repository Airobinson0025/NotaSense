import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'

type Links = {
    label: string
    href: string
}

type LinkProps = {
    links: Links[]
    
}

const Header = () => {

    const links: Links[] = [
        {
            label: 'Demo',
            href: '/demo'
        },
        {
            label: 'Notebook',
            href: '/notebook'
        },
        {
            label: 'Pricing',
            href: '/pricing'
        },
        {
            label: 'About',
            href: '/about'
        }
    ]
  return (
    <div className='flex items-center justify-between fixed w-full p-3'>
        <div>
            <h3>NotaSense</h3>
        </div>

        <nav className='hidden lg:flex items-center gap-7'>
            <ul className='flex items-center gap-8'>
                {links.map((link, index) => (
                    <li key={index}>
                        <Link href={link.href} className='text-lg'>{link.label}</Link>
                    </li>
                ))}
            </ul>
            <Link href='/signup'>
                <Button className='text-lg'>Join</Button>
            </Link>
        </nav>
    </div>
  )
}

export default Header