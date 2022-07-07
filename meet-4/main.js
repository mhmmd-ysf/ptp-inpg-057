console.log("Hello World lagi dari main.js")
// alert("Hello World dari alert")

// SAVE pi EQUALS 3.14
// let, const, var <tidak direkomendasikan>
// let -> bisa di assign ulang (value-nya bisa diganti)
// const -> tidak bisa diubah
let pi = 3.14
pi = 3

// document.write("Ini dari document write")
let nama = "Muhammad Yusuf"

document.getElementById("yusuf").innerHTML = nama

// let hasil = confirm("Apakah kamu sedang belajar js?")
// let hasil = prompt("Siapa nama kamu?")

// console.log(hasil)
// document.getElementById("yusuf").innerHTML = hasil

// re-declaration
// const a = "satu"
// a = 2
// re-assign
// a = true

// var -> function scope

let a = "sini"
{
    let a = "situ"
}