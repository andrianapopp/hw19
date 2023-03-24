const borsch = 48
const weightOfOnePotato = 0.075
const potatoes = 4
const price = 13
function priceOfPotato (){
const weight = borsch * potatoes * weightOfOnePotato
    const fullPrice = Math.round(weight) * price
    return fullPrice
}
priceOfPotato()
const result = priceOfPotato()
alert(`${result}`)