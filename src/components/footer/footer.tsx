import React from 'react'
import Link from 'next/link'

import styles from './footer.module.scss'

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.top}>
                <div className={styles.information}>
                    <h2>Informações</h2>
                    <ul>
                        <li>
                            <Link href="/about">
                                Sobre nós
                            </Link>
                        </li>
                        <li><Link href="https://portal-iot-tpm-frontend-cms.vercel.app/" target={"_blank"}>Acesso de Autores</Link></li>
                        <li><Link href="/services">Serviços</Link></li>
                        <li><Link href="/contact">Contato</Link></li>
                    </ul>
                </div>
                <div className={styles.social}>
                    <h2>Siga-nos</h2>
                    <ul>
                        <li>
                            <Link href="https://www.instagram.com/iot_tpm/">
                                <i className="fa-brands fa-instagram" style={{ "paddingLeft": "2px" }}></i>
                                <span>instagram.com/iot_tpm</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="https://www.linkedin.com/company/iot-tpm-unicamp/">
                                <i className="fa-brands fa-linkedin" style={{ "paddingLeft": "2px" }}></i>
                                <span>company/iot-tpm-unicamp</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="https://www.youtube.com/@iot-tpm-unicamp">
                                <i className="fa-brands fa-youtube"></i>
                                <span>@iot-tpm-unicamp</span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={styles.newsletter}>
                    <h2>Notícias</h2>
                    <div className={styles.content}>
                        <p>Assine para receber todas as atualizações de novas publicações.</p>
                        <form>
                            <input type="email" placeholder="Entre com seu email" />
                            <button type="submit">Assinar</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className={styles.bottom}>
                <span>© {new Date().getFullYear()} - IoT-TpM Unicamp. Todos os direitos reservados. </span>
            </div>
        </footer >
    )
}

export default Footer
