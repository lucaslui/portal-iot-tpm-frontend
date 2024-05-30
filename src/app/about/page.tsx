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
            <h1> Sobre o projeto </h1>
            <section className={`${poppins.className}`}>
                <p>
                    O principal objetivo do projeto é disseminar conhecimento sobre Internet das Coisas de forma simples, prática e objetiva.

                    <br /><br />

                    O projeto foi iniciado pelo desenvolvedor e entusiasta <a href="https://br.linkedin.com/in/lucas-lui-motta" target="_blank">Lucas Lui Motta</a>, que adora debater sobre o assunto e acredita no poder do ensino baseado em projetos.

                    <br /><br />

                    Os conteúdos encontrados na biblioteca estão divididos por conceitos, tutoriais, projetos e notícias.

                    <br /><br />

                    Para iniciar os estudos, recomendamos a leitura de <b>Introdução à Internet das Coisas</b>:
                </p>
                <ul>
                    <li><a href="/concepts/65c41bac7750e3ea07c83e69">Parte I</a></li>
                    <li><a href="/concepts/65c641aee21e7ad9a8e43f7d">Parte II</a></li>
                    <li><a href="/concepts/65c641b3e21e7ad9a8e43f7e">Parte III</a></li>
                    <li><a href="/concepts/65e0fdae7e49bb7e28d6b787">Parte IV</a></li>
                    <li><a href="/concepts/65e0fdae7e49bb7e28d6b787">Parte V</a></li>
                </ul>
                {/* <p>
                    Boa parte do conteúdo apresentado é fundamentado em minha opinião, a qual se baseia em experiências pessoais, além de referências devidamente citadas.
                </p> */}
            </section>
            <h3>
                Sinta-se à vontade para entrar em contato se tiver alguma dúvida ou sugestão.
            </h3>
        </div>
    )
}

export default About
