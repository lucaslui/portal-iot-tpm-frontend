export type CourseI18NModel = {
    en: {
        [key: string]: any
    },
    pt: {
        [key: string]: any
    }
}

const courseI18N: CourseI18NModel = {
    en: {
        classSchedules: {
            saturday: 'Saturday',
            sunday: 'Sunday',
            monday: 'Monday',
            tuesday: 'Tuesday',
            wednesday: 'Wednesday',
            thursday: 'Thursday',
            friday: 'Friday',
        }
    },
    pt: {
        classSchedules: {
            saturday: 'Sábado',
            sunday: 'Domingo',
            monday: 'Segunda-feira',
            tuesday: 'Terça-feira',
            wednesday: 'Quarta-feira',
            thursday: 'Quinta-feira',
            friday: 'Sexta-feira',
        }
    },
}

export default courseI18N