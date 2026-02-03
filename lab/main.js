let fullName = "Heitor Silva Pereira"


let arrayString = fullName.split(" ")


let arrayCounter = arrayString.length

let name = arrayString[0]
let lastName = arrayString[arrayCounter - 1]

function NomeCOmpleto(fullName) {

    let arrayString = fullName.split(" ")
    let arrayCounter = arrayString.length

    let name = arrayString[0]
    let lastName = arrayString[arrayCounter - 1]

    return `O nome e sobrenome é ${name} ${lastName}`
    

}
console.log(NomeCOmpleto(fullName))

