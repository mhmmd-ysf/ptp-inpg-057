let p = document.getElementById("date")

p.addEventListener("click", function() {
  p.innerHTML = new Date()
})

// Function biasa
function kelilingLingkaran(jari) {
  return 3.14 * 2 * jari
}

// Arrow function
// const kelilingLingkaran = (jari) => {
//   return 3.14 * jari * 2
// }

// 1. Bisa tidak menggunakan parentheses jika argumen hanya 1
// const kelilingLingkaran = jari => {
//   return 3.14 * jari * 2
// }

// 2. Jika isi function hanya return, keyword return & kurung kurawal bisa dihapus
// const kelilingLingkaran = jari => 3.14 * jari * 2

// 3. Bisa anonimus -> tanpa nama
console.log(jari => 3.14 * jari * 2)
// console.log(kelilingLingkaran)







// Menghitung luas & keliling lingkaran

function luasLingkaran(jari) {
  return 3.14 * jari * jari
}

let input = 7
// console.log("Luas lingkaran:", luasLingkaran(input))
// input = 10
// console.log("Luas lingkaran:", luasLingkaran(input))
// input = 15
// console.log("Luas lingkaran:", luasLingkaran(input))


function tanpaReturn() {
  console.log("ini function tanpa input")
  console.log("dan juga tanpa output")
  return "ini return"
}

// console.log(tanpaReturn)

// console.log("Main.js masuk")
// console.log('9', '<- ini string')
// console.log(9, '<- ini number')
// console.log('true', '<- ini string')
// console.log(false, '<- ini boolean')

let arr = [9, 'halo', true]
// console.log(arr[0], '<- ini array isi ke-0')

// Kenapa mulai dari 0? Baca jarak dari item pertama

let kardus = [
  undefined, "botol", undefined,
  undefined, "botol", undefined,
]
// console.log(kardus)

// let kendaraan = "motor"
// console.log(kendaraan)
// kendaraan = "kapal"
// console.log(kendaraan)

let obj = {
  angka: 9,
  string: "halo world",
  boolean: true
  // <key>:<value>,
}
// console.log(obj["boolean"]) // true
// console.log(obj.string) // "halo world"

// console.log(5 / "lima")