// boolean : either true or false
// let boolean = false
// console.log(!boolean)

// number / string : 
// let number = 2 === "2"
// let string = "hello" === "hello"

// console.log("nilai boolean ->", number)

// Logical operators
// Apakah dua-duanya betul?
// Semua harus true -> true, sisanya false
// console.log("nilai and ->", number && string)

// Apakah salah satunya betul?
// Salah satunya harus true -> true, jika false -> false
// console.log("nilai or ->", number || string || number && string)

// Kondisional
// let nilai = 71
// let kkm = 70

/**
 * nilai > kkm -> lulus
 * nilai < kkm -> gagal
 * nilai == kkm -> remedial
 */

// if(nilai > kkm) {
//   console.log("Lulus")
//   if(string) {
//     console.log("Lulus dan masuk nested if")
//   }
// } else if(nilai < kkm) {
//   console.log("Gagal")
// } else if(nilai == kkm) {
//   console.log("Remedial")
// } else {
//   console.log("Nilai invalid")
// }
// console.log("lanjut")

// Shorthand
// nilai > kkm ? console.log("lulus") : console.log("gagal")
// console.log(nilai > kkm ? "lulus" : "gagal")


// 1. pengecekan password
// let input = "654321"
// let passwordReal = "654321"
// if(input === passwordReal) {
//   console.log("Betul, selamat datang")
// } else if(input !== passwordReal) {
//   console.log("Password salah")
// }

// 2. Menampilkan nilai
// nilai = 101
// let grade = ""

// nilai >= 80 dan nilai <= 100
// if(nilai <= 100 && nilai >= 80) {
//   grade = "A"
// } else if(nilai <= 80 && nilai >= 60) {
//   grade = "B"
// } else if(nilai <= 60 && nilai >= 40) {
//   grade = "C"
// } else if(nilai <= 40 && nilai >= 0) {
//   grade = "D"
// } else {
//   grade = "Cannot calculate grade"
// }
// console.log(grade)

// const logic = true
// if(logic) {
//   console.log("true 1")
// } else if(logic) {
//   console.log("true 2")
// }

// 1. countable loop
for(let i = 0; i < 5; i = i + 1) {
  // console.log("HEllo")
}

// 2. uncountable loop
let rand = Math.random()
// console.log(rand)
let limit = 0

// while(rand < limit) {
  // console.log("nilai kurang dari:", limit, rand)
  // rand = Math.random()
// }
// console.log("Nilai akhir rand ->", rand)


// let i = 0
// while(i < 5) {
//   // console.log("Hello dari while")
//   i++
// }



// nested loop

// debugger
for(let i = 1; i < 6; i++) {
  // console.log("Nilai i:", i)
  // for(let j = 1; j < 4; j++) {
  //   console.log("  Nilai j:", j)
  // }
}

// ! sampai 2050
// while 20x -> ('Halo saya orang ke-', urutan)
let urutan = 1
while(urutan <= 20) {
  // console.log('Halo saya orang ke-', urutan)
  urutan++
}

// while -> for
for(let urutan = 1; urutan <= 20; urutan++) {
  // console.log('Halo saya orang ke-', urutan)
}

// OOOO OOOO OOOO OOOO
let result = ""
for(let i = 0; i < 4; i++) {
  for(let j = 0; j < 4; j++) {
    result = result + "O"
  }
  result = result + " "
}
console.log(result)

// OOOO
// OOOO
// OOOO
// OOOO

// Output:
// Halo saya orang ke-1
// Halo saya orang ke-2
// Halo saya orang ke-3
// ...
// Halo saya orang ke-20

// OOOO OOOO OOOO OOOO

// OOOO
// OOOO
// OOOO
// OOOO