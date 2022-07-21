let arr = [
  true, 1, 'string',
  [false, 2, 'str', []]
]

// console.log(Array.isArray(arr))
// console.log(arr)

let ganjil = [1, 3, 5, 7]
let nama = []
//   'yusuf',
//   'arham',
//   'jokowi',
//   'hafiz',
//   'ashil',
//   // 'laura',
//   // 'Yogi',
//   // 'Dafi',
//   // 'fahmi',
//   // 'lutfi',
//   // 'cantika',
// ]























// cari index jokowi
// berapa yang mau dihapus?
// data pengganti?
nama.splice(3, 0, 'Maruf Amin')


// Only edit below this line

// push
// console.log(nama.length)
// nama.shift()
arr.push('ikan', 'jagung');

arr.push('ikan')
arr.push('jagung')
// console.log(nama.length)

// debugger
for(let i = 0; i < nama.length; i++) {
  // console.log(nama[i])
  // console.log(i)
}

// i++ -> i = i + 1
// arr.join(penghubung: String)
// str.split(pemisah: String)

// console.log("nama-nama ini adalah murid INPG")
// console.log(nama.join(" dan "))

// jokowidanyusuf

let hewan = "kucing buaya singa gajah"
// ['kucing', 'buaya', 'singa', 'gajah' ]
// console.log(hewan.split("a"))

// arr = ['nasi', 'mie', 'ayam'];

// arr.push('ikan', 'jagung');
// arr.pop();
// arr.unshift('batagor');
// arr.shift();

// console.log(arr);



let makanan = [ 'ketoprak', "gado-gado", 'nasi goreng', 'bubur']
makanan.sort()
// console.log(makanan)

let genap = [6, 8, 12, 4, 2, 10, 20]

function compareNumbers(a, b) {
  return a - b;
  // hasil = -, a kiri, b kanan
  // hasil = +, a kanan, b kiri
  // hasil = 0, tidak ada perubahan
}

genap.sort(compareNumbers)
// console.log(genap)


// Map
let sisi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// [0.5, 1, 1.5, 2, 2.5, ..., 5]
let volume = []
for(let i = 0; i < sisi.length; i++) {
  volume.push(sisi[i] * sisi[i] * sisi[i])
}
// console.log(volume)



let volumeMap = sisi.map(function (el) {
  // console.log('value el ->', el)
  return el * el * el
})
// console.log(volumeMap)

nama = [
  'yusuf',
  'arham',
  'jokowi',
  'hafiz',
  'ashil',
  // 'laura',
  // 'Yogi',
  // 'Dafi',
  // 'fahmi',
  // 'lutfi',
  // 'cantika',
]

// Filter
// dari arr volume, hanya pilih yang genap saja
let filter = []

for(let i = 0; i < volume.length; i++) {
  if(volume[i] % 2 === 0) {
    filter.push(volume[i])
  }
}
console.log(filter)

let filterMap = volume.filter(function (el) {
  return el % 2 === 1
  // hanya menerima return true / false
  // true -> masuk ke arr baru
  // false -> tidak
})
console.log(filterMap)