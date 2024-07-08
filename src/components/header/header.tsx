import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Source_Code_Pro } from 'next/font/google'

import styles from './header.module.scss'

import LogoImage from '../../assets/imgs/logo.png'

const source_code = Source_Code_Pro({
    subsets: ['latin'],
    style: ["normal", "italic"],
    weight: ['400', '500', '600', '700', '800'],
})

const Header: React.FC = () => {

    return (
        <header className={styles.header}>
            <div className={styles.content}>
                <div className={styles.side}>
                    <Link href='/' className={styles.logo}>
                        <Image src={LogoImage} alt="logo" />
                        <div className={styles.title}>
                            <h1> Portal <strong className={source_code.className}>IoT-TpM</strong> Unicamp </h1>
                            <h2> Conteúdo sobre Internet das Coisas de forma simples, prática e objetiva </h2>
                        </div>
                    </Link>
                </div>
                <div className={styles.side}>
                    <div className={styles.social_list}>
                        <Link href='https://www.instagram.com/iot_tpm/' className={styles.item}>
                            <i className="fa-brands fa-instagram"></i>
                        </Link>
                        <Link href='https://www.linkedin.com/company/iot-tpm-unicamp/'>
                            <i className="fa-brands fa-linkedin"></i>
                        </Link>
                        <Link href='https://www.youtube.com/@iot-tpm-unicamp'>
                            <i className="fa-brands fa-youtube"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
