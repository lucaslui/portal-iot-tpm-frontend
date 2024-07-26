import React from 'react'
import { Poppins } from 'next/font/google'

import styles from './page.module.scss'

const poppins = Poppins({
    subsets: ['latin'],
    style: ["normal"],
    weight: ['400', '500', '600', '700', '900'],
})

const ServicesPage: React.FC = () => {
    return (
        <div className={`${poppins.className} ${styles.services_page}`}>
            <h1> Serviços </h1>
            <p>
                A comunidade <strong>IoT-Tpm Unicamp</strong>, em comunhão com o laboratório do <strong>WissTek</strong>, oferece diversos serviços para a comunidade acadêmica e empresarial.
            </p>
            <section>
                <h2>Ensino</h2>
                <p>
                    Nosso compromisso com a educação se reflete na oferta de disciplinas especializadas e projetos de iniciação científica, proporcionando uma formação sólida e atualizada em tecnologias emergentes.
                </p>
                <ul>
                    <li> <strong>Disciplina Tópicos em Comunicações VI (IE-309):</strong> Explorando os fundamentos e avanços nas comunicações modernas.</li>
                    <li> <strong>Projetos de Iniciação Científica:</strong> Incentivando a pesquisa e a inovação desde o início da carreira acadêmica.</li>
                </ul>
            </section>
            <section>
                <h2>Pesquisa Científica</h2>
                <p>
                    Nosso foco em pesquisa científica busca avançar o conhecimento nas áreas de Internet das Coisas (IoT), Blockchain, Inteligência Artifial (AI) e Redes de Sensores sem Fio (RSSF), contribuindo para o desenvolvimento de novas tecnologias e soluções inovadoras.
                </p>
                <ul>
                    <li><strong>IoT:</strong> Investigação de novas aplicações e tecnologias para conectar dispositivos e sistemas.</li>
                    <li><strong>IoT e Blockchain:</strong> Investigação da integração de IoT com Blockchain para criar soluções seguras e automatizadas.</li>
                    <li><strong>IoT e AI:</strong> Investigação de IoT com IA para aumentar o conhecimento e extrair o máximo os dados gerados pelo IoT.</li>
                    <li><strong>IoT e RSSF:</strong> Investigação de redes eficientes e escaláveis para suportar a comunicação entre dispositivos IoT.</li>
                </ul>
            </section>
            <section>
                <h2>Cursos de Extensão</h2>
                <p>
                    Nossos cursos de extensão são projetados para fornecer conhecimentos práticos e teóricos sobre as tecnologias mais recentes, capacitando profissionais para enfrentar os desafios do mercado.
                </p>
                <ul>
                    <li><strong>Metodologia para criar soluções IoT-TpM:</strong> Abordagens práticas para desenvolver soluções IoT eficientes.</li>
                    <li><strong>IoT & Blockchain para suporte a contratos inteligente (FEE-0244):</strong> Como utilizar Blockchain para melhorar a segurança e a eficiência em sistemas IoT.</li>
                    <li><strong>Redes de Comunicação sem Fio para Internet das coisas (FEE-0230):</strong> Princípios e técnicas para implementar redes de comunicação robustas para IoT.</li>
                </ul>
            </section>
            <section>
                <h2>Consultoria</h2>
                <p>
                    Oferecemos serviços de consultoria especializados para empresas que buscam implementar ou aprimorar suas soluções de IoT, Blockchain e RSSF, garantindo a entrega de projetos inovadores e bem-sucedidos.
                </p>
                <ul>
                    <li><strong>Desenvolvimento de soluções IoT:</strong> Consultoria completa para criação e implementação de soluções IoT personalizadas.</li>
                    <li><strong>Desenvolvimento de soluções IoT, Blockchain e Contrato Inteligente:</strong> Integração de tecnologias emergentes para aumentar a segurança e a eficiência.</li>
                    <li><strong>Desenvolvimento de soluções IoT e Inteligência Artificial:</strong> Utilização de técnicas de IA para aumentar o nível de conhecimento dos dados gerados por sistemas IoT.</li>
                    <li><strong>Desenvolvimento de soluções RSSF para IoT:</strong> Projetos de redes de sensores sem fio eficientes e escaláveis para suportar diversas aplicações IoT.</li>
                </ul>
            </section>
            <p>
                Nosso compromisso é fornecer serviços de alta qualidade que atendam às necessidades específicas de nossos clientes, promovendo inovação e excelência em cada projeto. A colaboração com a comunidade acadêmica e empresarial nos permite estar na vanguarda das tecnologias emergentes, garantindo que nossos serviços sejam sempre relevantes e impactantes.
            </p>
        </div>
    )
}

export default ServicesPage
