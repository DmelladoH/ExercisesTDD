export function wrapper(gifts) {
    if(!Array.isArray(gifts)){
        throw new Error('The parameter must be an array')
    }
    const wrapSymbol = '*'

    let result = []

    gifts.forEach(gift => {
        let wrap = wrapSymbol.repeat(gift.length + 2)
        let giftWrapped = `${wrap}\n${wrapSymbol}${gift}${wrapSymbol}\n${wrap}` 
        result.push(giftWrapped)
    })

    return result
}
