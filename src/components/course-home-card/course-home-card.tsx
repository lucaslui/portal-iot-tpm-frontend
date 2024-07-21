import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import styles from './course-home-card.module.scss'

import { CourseModel } from '@/model/course'
import { getShortDateFormat, getShortStringDateFormat } from '@/utils/date'
import courseI18N from '@/i18n/course'
import UnicampLogo from '@/assets/imgs/unicamp-logo-branco.png'

type Props = {
    course: CourseModel
}

const CourseHomeCard: React.FC<Props> = ({ course }: Props) => {
    const getMissingHoursCounter = () => {
        const today = new Date()
        const endDate = new Date(course.registrationPeriod.endDate)
        const diffTime = Math.abs(endDate.getTime() - today.getTime())
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
        return `${diffDays} dias restante` + (diffDays > 1 ? 's' : '')
    }

    return (
        <div key={course.id} className={styles.course_home_card}>
            <div className={styles.container}>
                <Image
                    className={styles.background_img}
                    src={course.imageUrl}
                    alt='Imagem de Capa do Curso'
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="auto"
                    priority
                    quality={80}
                />
                <span className={styles.missing_hours_counter}>{getMissingHoursCounter()}</span>
                <div className={styles.text_overlay}>
                    <div className={styles.type}>
                        <Image
                            src={UnicampLogo}
                            alt='Logo da Unicamp'
                            width={24}
                        />
                        <span className={styles.type_text}>{course.type}</span>
                    </div>
                    <h1 className={styles.title}>{course.title}</h1>
                    <div className={styles.price}>
                        <div className={styles.left}>
                            <span className={styles.price_info}>Até 10 de agosto - Bolsa de 40%</span>
                            <span className={styles.price_normal}>De 3x R$ 1200,00</span>
                            <span className={styles.price_discount}>para 3x R$ 720,00</span>
                        </div>
                        <div className={styles.right}>
                            <Link className={styles.link} href={course.landingPageUrl} target='_blank'>
                                Inscreva-se
                            </Link>
                        </div>
                    </div>
                    <span className={styles.observation2}>*Importante: A bolsa será aplicada diretamente nos boletos de pagamento (tanto no formulário quanto no termo de compromisso a ser assinado constará o valor integral)</span>
                    <span className={styles.observation}>{course.observation}</span>
                    <div className={styles.period_date}>
                        <span> Periodo de inscrição de <strong>{getShortDateFormat(course.registrationPeriod.startDate)} à {getShortDateFormat(course.registrationPeriod.endDate)}</strong> </span>
                        <span> Período do curso de <strong>{course.classPeriod.startDate && course.classPeriod.endDate ? `${getShortDateFormat(course.classPeriod.startDate)} à ${getShortDateFormat(course.classPeriod.endDate)}` : `${getShortStringDateFormat(course.classPeriod.dates[0])} à ${getShortStringDateFormat(course.classPeriod.dates[course.classPeriod.dates.length - 1])}`}, {courseI18N.pt.classSchedules[course.classSchedules.weekDay]} das {course.classSchedules.startTime}h às {course.classSchedules.endTime}h e Quartas-feiras, das 19h às 22h</strong>
                        </span>
                    </div>
                    <span className={styles.contact}>Dúvidas entre em contato por iottpmunicamp@gmail.com ou celular (19) 99655-9844</span>
                </div>
            </div>
        </div>
    )
}

export default CourseHomeCard