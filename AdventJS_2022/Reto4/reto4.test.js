import {describe, it, expect} from 'vitest'

function fitsInOneBox(boxes) {

    boxes.sort((a, b) => b.l * b.w * b.h - a.l * a.w * a.h);

    for (let i = 0; i < boxes.length -1; i++) {
        const box = boxes[i];
        const nextBox = boxes[i + 1];
        
        if (box.l <= nextBox.l  
            || box.w <= nextBox.w  
            || box.h <= nextBox.h) {
          return false;
        }
    }
    
    return true;
}
describe('reto4', () => {

    it('should return true given two boxes, one bigger than the other', () => {
        expect(fitsInOneBox([
            { l: 1, w: 1, h: 1 },
            { l: 2, w: 2, h: 2 }
          ])).toBe(true)
    })
    it('should return false given two boxes, one equal than the other', () => {
        expect(fitsInOneBox([
            { l: 1, w: 1, h: 1 },
            { l: 1, w: 1, h: 1 }
          ])).toBe(false)
    })
    it('should return true given three boxes that fits ', () => {
        expect(fitsInOneBox([
            { l: 1, w: 1, h: 1 },
            { l: 3, w: 3, h: 3 },
            { l: 2, w: 2, h: 2 }
          ])).toBe(true)
    })

    it('should return false given three boxes that dont fits ', () => {
        expect(fitsInOneBox([
            { l: 1, w: 1, h: 1 },
            { l: 3, w: 1, h: 3 },
            { l: 2, w: 2, h: 2 }
          ])).toBe(false)
    })

})