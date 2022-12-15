import {describe, it, expect} from 'vitest'


// Crea una función getGiftsToRefill que reciba tres Array como parámetros.
// La función debe devolver un Array con los regalos que hay que reponer.
// Un regalo se debe reponer cuando sólo hay stock en uno de los tres almacenes.
// Si no hay ningún regalo que reponer, la función debe devolver un Array vacío.
// Si hay más de un regalo que reponer, la función debe devolver un Array con todos los regalos que hay que reponer.

function getGiftsToRefill(a1, a2, a3) {

    const giftsMap = new Map()
    const result = []

    let set1 = new Set(a1)
    let set2 = new Set(a2)
    let set3 = new Set(a3)

    set1.forEach(elem => {
        if(giftsMap.has(elem)){
            const currentValue = giftsMap.get(elem)
            giftsMap.set(elem, currentValue + 1)
        }else{
            giftsMap.set(elem, 1)
       }
    })

    set2.forEach(elem => {
        if(giftsMap.has(elem)){
            const currentValue = giftsMap.get(elem)
            giftsMap.set(elem, currentValue + 1)
        }else{
            giftsMap.set(elem, 1)
       }
    })

    set3.forEach(elem => {
        if(giftsMap.has(elem)){
            const currentValue = giftsMap.get(elem)
            giftsMap.set(elem, currentValue + 1)
        }else{
            giftsMap.set(elem, 1)
       }
    })

    giftsMap.forEach((value, key) => {
        if( value === 1){
            result.push(key)
        }
    })

    return result
}

describe('reto 7', () => {

    it('should return the gifts needed to restore', () => {
        const a1 = ['bici', 'coche', 'bici', 'bici']
        const a2 = ['coche', 'bici', 'muñeca', 'coche']
        const a3 = ['bici', 'pc', 'pc']
        expect(getGiftsToRefill(a1, a2, a3)).toEqual(['muñeca', 'pc'])
    })

    it('should return an empty array if there is not gifts to restore', () => {
        const a1 = ['bici', 'coche', 'bici', 'bici']
        const a2 = ['coche', 'bici', 'pc', 'coche']
        const a3 = ['bici', 'pc', 'pc']
        expect(getGiftsToRefill(a1, a2, a3)).toEqual([])
    })

    it('should return an empty array if there is not gifts to restore', () => {
        const a1 = ['bici', 'coche', 'bici', 'bici']
        const a2 = ['coche', 'bici', 'pc', 'coche']
        const a3 = ['bici', 'pc', 'pc']
        expect(getGiftsToRefill(a1, a2, a3)).toEqual([])
    })
})
