import {describe, it, expect} from 'vitest'

function distributeGifts(packOfGifts, reindeers) {
    const REINDEER_CAPACITY_MULTIPLIER = 2

    let numberOfBoxes = 0
    let weightOfGifts = 0
    let reindeersCapacity = 0
    
    // get weight of gifts
    packOfGifts.forEach((gift => {
        weightOfGifts += gift.length
    }))

    //get reindeers capacity
    reindeers.forEach( reindeer => {
        reindeersCapacity += reindeer.length * REINDEER_CAPACITY_MULTIPLIER
    })

    numberOfBoxes = Math.trunc(reindeersCapacity / weightOfGifts)

    return numberOfBoxes
  }

describe('reto3', () => {

    it('should return the number of boxes that fit in the sled', () => {
        const packOfGifts = ["book", "doll", "ball"]
        const reindeers = ["dasher", "dancer"]

        expect(distributeGifts(packOfGifts, reindeers)).toBe(2) // 2
    })

    it('shold not return a decimal', () => {
        const packOfGifts = ["book", "doll", "ball", "car"]
        const reindeers = ["dasher", "dancer"]

        expect(distributeGifts(packOfGifts, reindeers)).toBe(1) // 2
    })

})
