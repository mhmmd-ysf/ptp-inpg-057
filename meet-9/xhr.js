// Mendefinisikan class/object pembuat HTTP request
xhr = new XMLHttpRequest();

// Prepare apa yang perlu dilakukan jika datanya sudah sampai
function prepare() {
  console.log("Ini hasil xhr")
  console.log(this.responseText);
}
xhr.onreadystatechange = prepare


// 1. Bentuk Request
// 2. Alamat

// xhr.open("get", "https://goweather.herokuapp.com/weather/jakarta")
// xhr.send()
