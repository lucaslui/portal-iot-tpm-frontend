import React from 'react'
import Script from 'next/script'
import { Montserrat } from 'next/font/google'

import styles from './page.module.scss'

const montserrat = Montserrat({
    subsets: ['latin'],
    style: ["normal"],
    weight: ['400', '500', '600', '700', '900'],
})

const About: React.FC = () => {
    return (
        <div className={styles.about}>
            <h1> About </h1>
            <section>
                <p className={montserrat.className}>
                    The Internet of Things P-Library is a public library that aims to disseminate knowledge about
                    the Internet of Things in a simple, practical and objective way.

                    <br /><br />

                    The project was created by the developer and IoT enthusiast
                    <a href="https://github.com/lucaslui" target="_blank"> Lucas Lui Motta </a>
                    who loves to debate on the subject and believes that there is no single truth that cannot be discussed or questioned.

                    <br /><br />

                    Within the vast area that is the Internet of Things there is a vast world of possibilities. Various verticals
                    such as agriculture, industry, health, smart cities, among others, can be explored and discussed in the library.

                    <br /><br />

                    Various content related to IoT such as concepts, guides, projects and news will be published.
                    Starting from adoptions of conceptual reference models to discussions about business, requirements and technology.
                </p>
                <div className="badge-base LI-profile-badge" data-locale="en_US" data-size="large" data-theme="dark" data-type="HORIZONTAL" data-vanity="lucas-lui-motta" data-version="v1">
                    <a className="badge-base__link LI-simple-link" href="https://br.linkedin.com/in/lucas-lui-motta?trk=profile-badge"></a>
                </div>
            </section>
            <h2>
                Feel free to contact me if you have any questions or suggestions.
            </h2>
            <Script src="https://platform.linkedin.com/badges/js/profile.js" async defer type="text/javascript" />
        </div>
    )
}

export default About
