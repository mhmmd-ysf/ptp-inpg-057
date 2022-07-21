// Mendeklarasikan object dan key:value
// cara 1
let obj = {
  nama: "Yusuf"
}

// console.log(obj)
// cara 2
obj["umur"] = 17
// console.log(obj)

// cara 3
obj.gender = "Laki-laki"
// console.log(obj)

obj.nama = "Muhammad Yusuf"
// console.log(obj)


function start() {
  console.log("bbrrrrmmm")
} // returns undefined

let car = {
  // Property
  name: "Toyota",
  model: "Avanza",
  // MEthod
  nyalain: start // start() -> pemanggilan function / function call / invocation
}

// console.log(car.name)
// console.log(car["model"])
// kita mau nyalain -> maka function perlu di-invoke
// console.log(car.nyalain)

// Cara menulis object.key
// 1. jangan diawlai oleh angka, bisa diubah menjadi string
// 2. jangan menggunakan spasi, bisa diubah menjadi string
//    atau menggunakan underscore

let sekolah = {
  "guru": "Yusuf",
  murid: {
    kelas_1: "laura",
    kelas_2: "ashil",
    kelas_3: "arham"
  }
}

// console.log(sekolah)
// console.log(sekolah.guru)
// console.log(sekolah.murid)
// console.log(sekolah.murid.kelas_1)
// console.log(sekolah.murid.kelas_2)
// console.log(sekolah.murid.kelas_3)


// Latihan
// Buat sebuah object apapun, dengan bentuk:
// 1. Memiliki properti dengan value angka, string, 
// dan boolean value masing-masing 1
// 2. Tambah dengan properti yang menyimpan sebuah array
// 3. Tambah dengan properti yang mengimpan sebuah object
// 4. tambahkan sebuah method



// Best practice pembuatan function
// scope prosedurnya sebatas apa yang ada di nama fungsi
function kali(num1, num2) {
  return num1 * num2
}
function bagi(num1, num2) {
  return num1 / num2
}
function tambah(num1, num2) {
  return num1 + num2
}
function kurang(num1, num2) {
  return num1 - num2
}

function kalkulator(num1, operator, num2) {
  // jika operator == 'tambah'
  if(operator == 'tambah') {
    return tambah(num1, num2)
  } else if(operator == 'kurang') {
    return kurang(num1, num2)
  } else if(operator == 'kali') {
    return kali(num1, num2)
  } else if(operator == 'bagi') {
    return bagi(num1, num2)
  } else {
    return null
  }
}
// console.log(kalkulator(1, "tambah", 5)) // 6
// console.log(kalkulator(2, "kurang", 2)) // 0
// console.log(kalkulator(2, "kali", 3)) // 6
// console.log(kalkulator(10, "bagi", 2)) // 5
// console.log(kalkulator(10, "bag", 2)) // null

// for ... in
// obj = {nama: 'Muhammad Yusuf', umur: 17, gender: 'Laki-laki'}


let arr = [6, 5, 4, 3, 2]

for (let key in obj) {
  // console.log(key)
  // console.log(obj[key])
  // obj["nama"], obj["umur"], obj["gender"]
}

function hapusSpasi(str) {
  let result = ""
  for(let index in str) {
    // console.log(str[index])
    if (str[index] !== " ") {
      result = result + str[index]
    }
  }
  return result
}

function balikKata(str) {
  let result = ""
  for (let index in str) {
    result = str[index] + result
  }
  return result
}


let str = "hello"
str[0] = "h"
str[1] = "e"
str[2] = "l"
str[3] = "l"
str[4] = "o"


for(let index in str) {
  // console.log(index)
  console.log(str[index])
}


for(let index = 0; index < str.length; index++) {
  // console.log(index)
  console.log(str[index])
}



// "" // result
// "M" // str[idx]
// str[idx] + ""
// "M" + ""


// "M" // result
// "u" // str[idx]
// "u" + "M"
// "uM"

// console.log(hapusSpasi("Muhammad Yusuf"))
// console.log(balikKata("MuhammadYusuf"))

let input = "laura, ashil & arham"
let tanpaSpasi = hapusSpasi(input)
let passFinal = balikKata(tanpaSpasi)

// console.log(passFinal)


// comparison Operators

// kiri == kanan -> sama dengan
// kiri != kanan -> tidak sama dengan
// kiri === kanan -> sama dengan strict (tipe datanya juga dicompare)
// kiri !== kanan -> tidak sama dengan strict
// >, <, >=, <=
