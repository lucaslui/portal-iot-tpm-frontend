'use client';

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

import styles from './navbar.module.scss'

const navItemsRight = [
    {
        title: 'Concepts',
        url: '/concepts',
        icon: 'fas fa-lightbulb'
    },
    {
        title: 'Tutorials',
        url: '/tutorials',
        icon: 'fas fa-graduation-cap'
    },
    {
        title: 'Projects',
        url: '/projects',
        icon: 'fas fa-project-diagram'
    },
    {
        title: 'News',
        url: '/news',
        icon: 'fas fa-newspaper'
    },
]

const NavBar: React.FC = () => {
    const pathname = usePathname();

    return (
        <nav className={styles.navbar}>
            <div className='left-side'>
                <Link href='/' className={pathname === '/' ? styles.active : ''}>
                    <i className="fas fa-home" />
                    <span> Home </span>
                </Link>
            </div>
            <div className='right-side'>
                {
                    navItemsRight.map((item, index) => (
                        <Link key={index} href={item.url} className={pathname.includes(item.url) ? styles.active : ''}>
                            <i className={item.icon} />
                            <span> {item.title} </span>
                        </Link>
                    ))
                }
            </div>
        </nav>
    )
}

export default NavBar
