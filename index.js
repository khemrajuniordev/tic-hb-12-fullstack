const guitar = {
    title: 'Guitarra Fender',
    price: 1.500,
    description: 'Guitarra modelo nova, nunca usada',
    descount: 0.2
}

const guitar2 = {
    title: 'Guitarra Tajima',
    price: 5.000,
    description: 'Guitarra semi usada, porem muito nova',
    descount: .01
}

const cartPrice = guitar.price + guitar2.price


console.log(cartPrice, "Valor total do carrinho")
