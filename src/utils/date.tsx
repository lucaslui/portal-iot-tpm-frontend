export const getShortDateFormat = (date: Date | string): string => {
    const ISODate = new Date(date)
    const day = ISODate.getDay()
    const dayConverted = day < 10 ? `0${day}` : day
    const month = ISODate.getMonth() + 1
    const monthConverter = month < 10 ? `0${month}` : month
    return `${dayConverted}/${(monthConverter)}/${ISODate.getFullYear()}`
}

export const getLongDateFormat = (date: Date | string): string => {
    const ISODate = new Date(date)
    const day = ISODate.getDay()
    const dayConverted = day < 10 ? `0${day}` : day
    const month = ISODate.getMonth() + 1
    const months = [
        'janeiro',
        'fevereiro',
        'março',
        'abril',
        'maio',
        'junho',
        'julho',
        'agosto',
        'setembro',
        'outubro',
        'novembro',
        'dezembro'
    ]
    return `${dayConverted} de ${months[month]} de ${ISODate.getFullYear()}`
}