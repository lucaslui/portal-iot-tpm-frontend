'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import styles from './header.module.scss'

import LogoImage from '../../assets/imgs/logo.svg'
import useWindowSize from '@/hooks/use-window-size'

const Header: React.FC = () => {

    const windowSize = useWindowSize()

    return (
        <header className={styles.header}>
            <Link href='/' className={styles.logo}>
                <Image src={LogoImage} alt="logo" />
                <main>
                    <h1> &lt; <span> {windowSize.width <= 700 ? 'IoT P-Library' : 'Internet of Things P-Library'} </span>/&gt; </h1>
                    <h2>
                        Aiming to disseminate knowledge about the Internet of Things in a simple, practical and objective way
                    </h2>
                </main>
            </Link>
            <Link href='/' className={styles.about}>
                <span> About </span>
            </Link>
        </header>
    )
}

export default Header
