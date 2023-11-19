'use client';

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

import styles from './navbar.module.scss'

const navItemsRight = [
    {
        title: 'Articles',
        url: '/articles',
        icon: 'fas fa-chart-bar'
    },
    {
        title: 'News',
        url: '/news',
        icon: 'fas fa-bookmark'
    },
    {
        title: 'Tutorials',
        url: '/tutorials',
        icon: 'fas fa-book'
    },
    {
        title: 'Projects',
        url: '/projects',
        icon: 'fas fa-chart-bar'
    },
    {
        title: 'About',
        url: '/about',
        icon: 'fas fa-chart-bar'
    }
]

const NavBar: React.FC = () => {
    const pathname = usePathname();

    return (
        <nav className={styles.navbar}>
            <div className='left-side'>
                <Link href='/' className={pathname === '/' ? styles.active : ''}>
                    <i className="fas fa-home" />
                    <span> Control Panel </span>
                </Link>
            </div>
            <div className='right-side'>
                {
                    navItemsRight.map((item, index) => (
                        <Link key={index} href={item.url} className={pathname === item.url ? styles.active : ''}>
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
