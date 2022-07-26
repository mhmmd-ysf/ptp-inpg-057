# Meet 9

# Class

```js
// Deklarasi
class NamaClass {
  constructor(param1, param2, paramN) {}
}

// Pengguaan (Instantiate)
let variable = new NamaClass()
```

# HTTP request
Bentuk komuniasi yang dilakukan antar 2 komputer

Jenis:
1. GET -> Meminta data dari server
2. POST -> Mengirim data ke server
3. PUT/PATCH -> Request perubahan data yang ada di server
4. DELETE -> Menghapus data


# API
Application Programming Interface

restoran
server -> restoran (dapur)

API -> Pelayan/Kasir

client -> kita (user) / pengunjung


# Promise
```js
promisePending.then(fn).then(fn).catch(fn) // Kalo sukses, jalanin function yang add di then
promisePending.catch(fn) // Kalo gagal
```