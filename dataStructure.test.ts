import {describe, it, expect} from 'vitest'

// a class
// insert a value no duplicate 
// remove value
// get a random value
// all of this methods must run in constant time
class DateStructure {

    indexMap: Map<any, number>;
    array: any[];

    constructor(){
        this.indexMap = new Map();
        this.array = []
    }

    insert(element: any){
        if(this.indexMap.has(element)){         //O(1)
            return
        }
        
        this.array.push(element)                //O(1)
        this.indexMap.set(element, this.array.length - 1)      // O(1)
    }

    getRandom(){
        return this.array[Math.floor(Math.random() * this.array.length)] // O(1)
    }

    //function to delete an element in constant time


    delete(element: any){

        if(!this.indexMap.has(element)){
            return 
        }
        
        let lastElenent: any = this.array[this.array.length - 1]
        let elementToDeleteIndex: any = this.indexMap.get(element)
 
        this.array[elementToDeleteIndex] = lastElenent
        this.array[this.array.length - 1] = element

        this.array.pop()
        this.indexMap.delete(element) // O(1)
    }


}

describe('dataStructure', () => {

    it('should insert a value', () => {        
        const dataStructure = new DateStructure();
        dataStructure.insert(1)
        expect(dataStructure.getRandom()).toBe(1)
    })

    it('should delete and element', () => {        
        const ds = new DateStructure()
        ds.insert(1)
        ds.delete(1)
        expect(ds.getRandom()).toBe(undefined)
    })

    it('should return a random number', () => {        
        const dataStructure = new DateStructure();
        dataStructure.insert(1)
        dataStructure.insert(2)
        dataStructure.insert(3)

        const results = [...Array(10)].map(() => dataStructure.getRandom())

        expect(new Set(results).size).toBeGreaterThan(1)
    })

    it('should return undefind if there is not elements to delete', () => {
        const ds = new DateStructure()
        ds.delete(1)
        expect(ds.getRandom()).toBe(undefined)
    })

})