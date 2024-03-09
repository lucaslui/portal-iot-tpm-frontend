'use client';

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

import styles from './navbar.module.scss'

const navItemsRight = [
    {
        title: 'Conceitos',
        url: '/concepts',
        icon: 'fas fa-graduation-cap'
    },
    {
        title: 'Tutoriais',
        url: '/tutorials',
        icon: 'fas fa-book-open'
    },
    {
        title: 'Projetos',
        url: '/projects',
        icon: 'fas fa-project-diagram'
    },
    {
        title: 'Notícias',
        url: '/news',
        icon: 'fas fa-newspaper'
    },
]

const NavBar: React.FC = () => {
    const pathname = usePathname();

    return (
        <nav className={styles.navbar}>
            <div className={styles.left_side}>
                <Link href='/' className={pathname === '/' ? styles.active : ''}>
                    <i className="fas fa-home" />
                    <span> Home </span>
                </Link>
            </div>
            <div className={styles.right_side}>
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
