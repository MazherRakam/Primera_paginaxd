let myVariable = 7
let n = 45
let c = "45"
let velda=true
let lista = [50, 77, 29, 100, 47, "Miguel", "Blanca"]
let objeto= {
    name: "Miguel",
    email: "askldjalksdj@gmail.com",
    pass: "1234"
}
// operador ternario
// console.log(
//     4 > 6 ? "Se cumple" : "No se cumple"
// )
// Condicional
// if(true) console.log("Se cumplio")
// else console.log("No se cumplio")

// Funcion normal
// function EsPar(n){
//     return (n % 2) ? "Impar" : "Par"
// }
// // Funcion tipo flecha
// let EsParFlecha = (n) => n % 2 ? "Impar" : "Par"


// console.log(EsParFlecha(7))


// let Callback = ( ) => console.log("Se ejecuto el callback")
// setTimeout( Callback, 5000 )

axios.get("https://leonardoapi.onrender.com/music")
    .then((res) => {
        res.data.map((song) => {
            console.log(song.title)
        })
    } )