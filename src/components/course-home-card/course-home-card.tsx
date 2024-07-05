import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import styles from './course-home-card.module.scss'

import { CourseModel } from '@/model/course'
import { getShortDateFormat, getShortStringDateFormat } from '@/utils/date'
import courseI18N from '@/i18n/course'

type Props = {
    course: CourseModel
}

const CourseHomeCard: React.FC<Props> = ({ course }: Props) => {

    const getMissingHoursCounter = () => {
        const today = new Date()
        const endDate = new Date(course.registrationPeriod.endDate)
        const diffTime = Math.abs(endDate.getTime() - today.getTime())
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
        return `${diffDays} dias restantes`
    }

    return (
        <div key={course.id} className={styles.course_home_card}>
            <div className={styles.image_container}>
                <Image
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
                    <span className={styles.type}>{course.type}</span>
                    <h1 className={styles.title}>{course.title}</h1>
                    <span className={styles.observation}>{course.observation}</span>
                    <div className={styles.footer}>
                        <div className={styles.period_date}>
                            <span> Periodo de inscrição de <strong>{getShortDateFormat(course.registrationPeriod.startDate)} à {getShortDateFormat(course.registrationPeriod.endDate)}</strong> </span>
                            <span> Período do curso de <strong>{course.classPeriod.startDate && course.classPeriod.endDate ? `${getShortDateFormat(course.classPeriod.startDate)} à ${getShortDateFormat(course.classPeriod.endDate)}` : `${getShortStringDateFormat(course.classPeriod.dates[0])} à ${getShortStringDateFormat(course.classPeriod.dates[course.classPeriod.dates.length - 1])}`}, {courseI18N.pt.classSchedules[course.classSchedules.weekDay]} das {course.classSchedules.startTime}h às {course.classSchedules.endTime}h</strong>
                            </span>
                        </div>
                        <Link className={styles.link} href={course.landingPageUrl} target='_blank'>
                            Inscreva-se
                        </Link>
                    </div>
                </div>
            </div>
            <div className={styles.text_container}>
                <div className={styles.top}>
                    <p className={styles.description}>{course.description}</p>
                </div>
            </div>
        </div>
    )
}

export default CourseHomeCard