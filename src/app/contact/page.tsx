import React from 'react'
import Image from 'next/image'
import { Poppins } from 'next/font/google'

import styles from './page.module.scss'

import TitleBackgroung from '../../assets/imgs/contact-background.jpg'

const poppins = Poppins({
    subsets: ['latin'],
    style: ["normal"],
    weight: ['400', '500', '600', '700', '900'],
})

const ContactPage: React.FC = () => {
    return (
        <div className={`${poppins.className} ${styles.contact_page}`}>
            <div className={styles.title_container}>
                <Image
                    src={TitleBackgroung}
                    alt="title-background"
                    className={styles.image}
                    fill
                    style={{ objectFit: 'cover' }}
                />
                <h1> Contato </h1>
            </div>
            <p>
                Entre em contato conosco para mais informações sobre nossos serviços, projetos e parcerias.
            </p>
            <div className={styles.container}>
                <section>
                    <i className="fas fa-envelope"></i>
                    <span> <strong>Email:</strong> iottpmunicamp@gmail.com</span>
                </section>
                <section>
                    <i className="fas fa-phone"></i>
                    <span> <strong>Telefone:</strong> (19) 99655-9844</span>
                </section>
                <section>
                    <i className="fas fa-map-marker-alt"></i>
                    <span> <strong>Endereço:</strong> Av. Albert Einstein, 400, Cidade Universitária, Campinas, SP, Brasil</span>
                </section>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14709.989078432536!2d-47.066406!3d-22.8210849!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8c7672a66bf5d%3A0xe2ac1445ada25c91!2sFaculdade%20de%20Engenharia%20El%C3%A9trica%20e%20de%20Computa%C3%A7%C3%A3o%20da%20Universidade%20Estadual%20de%20Campinas%20-%20FEEC%2FUNICAMP!5e0!3m2!1spt-BR!2sbr!4v1722258535978!5m2!1spt-BR!2sbr"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>
    )
}

export default ContactPage
