let xhr = new XMLHttpRequest()
// Declaration
class Person {
  constructor(inputNama, inputAlamat, inputUmur, inputGender, inputPekerjaan, inputKesehatan) {
    // console.log("proses pembuatan class person sedang berlangsung")
    this.nama = inputNama
    this.alamat =inputAlamat
    this.umur =inputUmur
    this.gender = inputGender
    this.pekerjaan = inputPekerjaan
    this.kesehatan = inputKesehatan
  }
}

// Instantiate/Initiate/Initialize
let yusuf = new Person("yusuf", "jakarta DKI", 15, "Laki", "dev", "sehat")
let hafiz = new Person("hafiz", "bogor", 20, "laki", "guru", "sehat")
// console.log(yusuf)

// Ketika sudah dapat data dari server, ini baru jalan
xhr.onreadystatechange = function () {
  console.log("readystatechange")
  console.log(this.responseText)
}

// 1. MEmbuat sebuah HTTP request
// Get Request -> minta data dari url yang dituju
// URL -> Server yg akan kita tuju
// is_asynchronous? -> false
// xhr.open("get", "https://icanhazdadjoke.com/", false)
// Pembuatan header -> mengatur format data yang dikirim dari server
// xhr.setRequestHeader("Accept", "text/plain")
// Mengirim request
// xhr.send()


// Promise -> janji

// Order Gofood
// Cari driver (pending)
// -> Sukses, Dapat driver, jalan ke restoran (fulfilled)
// -> Gagal (kita cancel, driver cancel) (rejected)

// fetch('https://foodish-api.herokuapp.com/api/')
//   // .then(function (response) { return response.json() })
//   .then(response => response.json())
//   .then(data => {
//     console.log(data)
//   });