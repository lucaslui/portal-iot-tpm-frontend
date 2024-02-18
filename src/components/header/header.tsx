import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import styles from './header.module.scss'

import LogoImage from '../../assets/imgs/logo.svg'

const Header: React.FC = () => {

    return (
        <header className={styles.header}>
            <Link href='/' className={styles.logo}>
                <Image src={LogoImage} alt="logo" />
                <main>
                    <h1> &lt; <strong>Internet of Things P-Library</strong> <strong className={styles.abbreviate}>IoT P-Library</strong>/&gt; </h1>
                    <h2>
                        Aiming to disseminate knowledge about the Internet of Things in a simple, practical and objective way
                    </h2>
                </main>
            </Link>
            <Link href={`/about`} className={styles.about}>
                <i className="fas fa-info-circle" />
                <span> About </span>
            </Link>
        </header>
    )
}

export default Header
