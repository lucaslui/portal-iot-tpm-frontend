import React from 'react'
import { Poppins } from 'next/font/google'

import styles from './page.module.scss'

const poppins = Poppins({
    subsets: ['latin'],
    style: ["normal"],
    weight: ['400', '500', '600', '700', '900'],
})

const About: React.FC = () => {
    return (
        <div className={styles.about}>
            <h1> About </h1>
            <section className={`${poppins.className}`}>
                <p>
                    The Internet of Things P-Library is a public library that aims to disseminate knowledge about
                    the Internet of Things in a simple, practical and objective way.

                    <br /><br />

                    The project was created by the developer and IoT enthusiast <a href="https://br.linkedin.com/in/lucas-lui-motta" target="_blank">Lucas Lui Motta</a> who loves to debate on the subject and believes that there is no single truth that cannot be discussed or questioned.

                    <br /><br />

                    Within the vast area that is the IoT there is a vast world of possibilities. Various verticals
                    such as agriculture, industry, health, smart cities, among others, can be explored and discussed in the library.

                    <br /><br />

                    Various content related to IoT such as concepts, guides, projects and news will be published.
                    Starting from adoptions of conceptual reference models to discussions about business, requirements and technology.
                </p>
            </section>
            <h3>
                Feel free to contact me if you have any questions or suggestions.
            </h3>
        </div>
    )
}

export default About
