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
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro'
    ]
    return `${dayConverted} de ${months[month]} de ${ISODate.getFullYear()}`
}