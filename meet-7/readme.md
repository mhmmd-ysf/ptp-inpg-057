# Meet 7

## Array

Array:
- tipe data yang bisa menampung > 1 value
- Disimpan dalam bentuk list yg memiliki index/alamat
- Menyimpan 1 set data yang sama pada umumnya

## Array properties

1. Length
```js
arr.length
```

## Array methods

- isArray
```js
Array.isArray(arr)
```

- push -> menambahkan data ke akhir array
- pop -> Mengurangi 1 data dari akhir array
```js
arr.push(entryBaru)
arr.pop()
```

- unshift -> menambahkan data ke awal array
- shift -> Mengurangi 1 data dari awal array
```js
arr.unshift(entryBaru)
arr.shift()
```

// Perubahan tipe data antara string & array
- join -> array -digabung-> string
- split -> string -dipisah-> array
```js
arr.join(penghubung: String)
str.split(pemisah: String)
```

- splice
```js
arr.splice(startIndex)
arr.splice(startIndex, deleteCounts)
arr.splice(startIndex, deleteCounts, item1 [, item2...])
```

- sort
```js
arr.sort()
arr.sort(fnName)
arr.sort(function(a, b) { return a - b})
```

Extra:
- map
```js
arr.map(functionPengubah)
```

- filter
- reduce

# Latihan 2046
List array makanan (3)
tambahkan 2 makanan baru di akhir
kurangi 1 di akhir
tambahkan makanan favorit awal array
hapus makanan favorit

makanan favorit saya adalah:
makan1, makan2, makan3, dst.

(extra)
nambah data atau ganti makanan ke-2 (index 1)
