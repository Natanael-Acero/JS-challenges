// imprimir los numeros del 1 al 100, pero si el numero es multiplo de 3 imprimir Fizz, si es multiplo de 5 imprimir Buzz, si es multiplo de 3 y 5 imprimir FizzBuzz

for (let i = 0; i < 100; i++) {
    let number = i + 1;
    if (number % 3 === 0 && number % 5 === 0) {
        console.log('FizzBuzz')
    } else if (number % 5 === 0) {
        console.log('Buzz')
    } else if (number % 3 === 0) {
        console.log('Fizz')
    } else {
        console.log(number)
    }
}