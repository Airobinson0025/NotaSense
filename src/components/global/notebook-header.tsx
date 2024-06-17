import React from 'react'
import { useSession } from 'next-auth/react'
import { link } from 'fs'
import Link from 'next/link'


type Links = {
    name: string
    href: string
}

type Props = {
    links: Links[]
}

const NotebookHeader = () => {
    const { data: session, status } = useSession()

    const firstName = session?.user?.name?.split(' ')[0]

    const links: Links[] = [
        {
            name: 'Dashboard',
            href: '/notebook'
        },
        {
            name: 'Notes',
            href: '/notebook/notes'
        },
        {
            name: 'Journal',
            href: '/notebook/journal'
        },
        {
            name: 'Settings',
            href: '/notebook/settings'
        }
    ]
    
  return (
    <div className='flex items-center justify-between p-3'>
        <div>
            <h3>
                <Link href='/'>NotaSense</Link>
            </h3>
        </div>
        <nav>
            <ul className='flex items-center gap-7'>
                {links.map((link, index) => (
                    <li key={index}>
                        <Link className='text-lg' href={link.href}>{link.name}</Link>
                    </li>
                ))}
            </ul>
        </nav>
        <div>
            <h4 className='font-medium'>Welcome, {firstName}</h4>
        </div>
    </div>
  )
}

export default NotebookHeader