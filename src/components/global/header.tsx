'use client'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import { useSession } from 'next-auth/react'
import { Sign } from 'crypto'
import SignoutAlert from '../alerts/signout-alert'


type Links = {
    label: string
    href: string
}

type LinkProps = {
    links: Links[]
    
}

const Header = () => {

    const { data: session, status } = useSession()

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
            {session ? (
                <SignoutAlert />
            ) : (
                <Link href='/signin'>
                    <Button className='text-md'>Sign In</Button>
                </Link>
            )}
        </nav>
    </div>
  )
}

export default Header