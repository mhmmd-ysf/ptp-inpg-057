# 1.Algoritma Luas_Keliling_Lingkaran (ini merupakan judul algoritma)
{Menghitung luas dan keliling untuk ukuran jari-jari tertentu. Algoritma menerima masukkan jari-jari lingkaran, menghitung luas dan kelilingnya, dan mencetak  luas lingkaran ke pirantikeluaran} (ini spesifikasi algoritma)

# 2.Deklarasi
const phi = 3.14 {nilai konstanta phi}  R : real {jari-jari lingkaran}
Luas : real {luas lingkaran}  Keliling : real {keliling lingkaran}

# 3.Deskripsi
Read (R)Luas = phi * R * R  Keliling = 2 * phi * R  Write (luas, keliling)


## Pseudocode Latihan

SAVE jarijari from INPUT
SAVE pi with value 3.14159265358979323846264
SAVE luas without value
SAVE keliling without value

2 Cara untuk calculate
CALCULATE luas EQUALS pi TIMES jarijari TIMES jarijari, SET result to luas
SET result to CALCULATE luas EQUALS pi TIMES jarijari TIMES jarijari

CALCULATE keliling EQUALS pi TIMES 2 TIMES jarijari

jarijari, pi, luas, keliling
Variable = ???

## Cara Menampilkan output di javascript:

1. console.log()
2. alert -> not recommended
3. document.write -> not recommended
4. innerHTML

## Dialog Box:

1. alert -> Menampilkan informasi
2. confirm -> Menerima input ya/tidak
3. prompt -> Menerima input yang bervariasi

## var, let & const

| nama  | re-declaration | re-assignment | scope    |
| ----- | -------------- | ------------- | -------- |
| var   | yes            | yes           | function | * tidak direkomendasikan
| let   | no             | yes           | block    |
| const | no             | no            | block    |