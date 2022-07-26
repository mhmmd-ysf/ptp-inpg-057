function jikaSukses (response) {
  console.log("Berhasil dapat data")
  return response.json()
}

fetch("https://goweather.herokuapp.com/weather/jakarta")
  .then(jikaSukses)
  .then(function (data) {
    // console.log("Ini hasil fetch")
    // console.log(data)
  })


// promisePending.then()





let arr = [2, 4, 6, 8, ]
let arr2 = ['yusuf', 'laura', 'arham'] // 'kak yusuf', 'kak laura', 'kak arham'


function tambahKak (elemen, index, array) {
  console.log("ini elemen ->", elemen, index, array)
}
let listKakak = arr2.map(tambahKak)