import {describe, it, expect} from 'vitest'
import {wrapper} from './reto1.js'


describe('reto1', () => {
    it('should be a function', () => {
        expect(typeof wrapper).toBe('function')
    })

    it('should throw if an array is not provided as parameter', () => {
        expect(() => wrapper(1)).toThrow()
    })

    it('should return an array ', () => {
        let result = wrapper(['a', 'b', 'c'])
        expect(Array.isArray(result)).toBe(true)
    })

    it('should envolve the gifts', () => {
        expect(wrapper(['cat', 'game', 'socks'])).toEqual([
            "*****\n*cat*\n*****",
            "******\n*game*\n******",
            "*******\n*socks*\n*******"
          ])
    })
})