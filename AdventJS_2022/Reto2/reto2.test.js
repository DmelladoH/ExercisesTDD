import {describe, it, expect} from 'vitest'



function countHours(year, holidays){
    if (typeof year !== 'number') throw new Error('first parameter must be a number')
    if(!Array.isArray(holidays)) throw new Error('second parameter must be an array')

    const HOUR_PER_HOLIDAY = 2;
    let hourCounter = 0;

    holidays.forEach((day) => {
        const date = new Date(`${day}/${year}`)
        if(!isWeekend(date)){
            hourCounter += HOUR_PER_HOLIDAY;
        }
    }) 

    return hourCounter
}

function isWeekend(day){
    if(!(day instanceof Date)) throw new Error('parameter must be a Date')

    const dayOfWeek = day.getDay()
    
    return dayOfWeek === 0 || dayOfWeek === 6
}


describe('reto1', () => {

    it('should be a function', () => {
        expect(typeof countHours).toBe('function')
    })

    it('should throw if first parameter is not a number', () => {
        expect(() => countHours('a', [])).toThrow()
    })

    it('should throw if the second parater is not an array', () => {
        expect(() => countHours(2020, 'a')).toThrow()    
    })

    it('should return the extra hours for a given year and a given holidays', () => {
        expect(countHours(2022, ['01/06', '04/01', '12/25'])).toBe(4)
    })


})

describe('is weekendDay method: ', () => {
    it('should throw if the parameter is not a date', () => {
        expect(()=> isWeekend('a')).toThrow()
    })

    it('should return if a given day is a weekend day', () => {
        const weekendDay = new Date('12/10/2022')
        const weekDay = new Date('12/08/2022')

        expect(isWeekend(weekendDay)).toBe(true)
        expect(isWeekend(weekDay)).toBe(false)
    })
})