# Praktikum JavaScript

Proyek praktikum dasar JavaScript yang terdiri dari dua halaman web statis (HTML, CSS, dan JavaScript murni, tanpa framework maupun dependensi tambahan). Halaman pertama membahas dasar-dasar JavaScript dan manipulasi DOM, sedangkan halaman kedua berisi form perhitungan nilai akhir mahasiswa.

## Struktur Proyek

```
.
├── index.html     # Halaman 1: Pengenalan JavaScript
├── script.js      # Logika untuk Halaman 1
├── index2.html    # Halaman 2: Form Perhitungan Nilai Akhir
├── script2.js     # Logika untuk Halaman 2
└── README.md
```

## Cara Menjalankan

1. Unduh atau salin seluruh file ke dalam satu folder.
2. Buka `index.html` di browser (Chrome, Firefox, Edge, dan sejenisnya). Tidak perlu server atau instalasi apa pun.
3. Gunakan navigasi di bagian atas untuk berpindah antara **Halaman 1** dan **Halaman 2**.
4. Buka **Developer Tools → Console** (tekan `F12`) untuk melihat keluaran `console.log`.

> **Catatan:** Saat Halaman 1 dibuka, browser akan menampilkan beberapa dialog `prompt` dan `alert` secara berurutan. Jawab satu per satu agar seluruh bagian program berjalan.

## Halaman 1 — Pengenalan JavaScript

File: `index.html` + `script.js`

### Fitur pada halaman

| Fitur | Deskripsi |
|-------|-----------|
| Pesan sambutan | Teks pada elemen `#pesan` diubah lewat DOM menjadi "Hello World", lalu menjadi sapaan sesuai nama yang diinput. |
| Cek bilangan genap/ganjil | Input bilangan bulat divalidasi (tidak boleh kosong dan harus bilangan bulat), lalu hasilnya ditampilkan. |
| Ubah warna latar | Tiga tombol untuk mengganti warna latar halaman (hijau, putih, kuning). |
| Sembunyikan/Tampilkan pesan | Tombol toggle untuk menampilkan atau menyembunyikan elemen pesan. |
| Daftar menu makanan | Checkbox menu dengan total harga yang diperbarui otomatis (format Rupiah, `id-ID`). |

### Fungsi pada `script.js`

- `operasiDasar(a, b)` — menampilkan hasil penjumlahan, pengurangan, perkalian, pembagian, dan modulus di console.
- `cekGenap(angka)` — mengembalikan `true` jika angka genap.
- `cekBilangan()` — memeriksa bilangan genap/ganjil dari input form.
- `ubahWarnaLatar(warna)` — mengubah `backgroundColor` pada `body`.
- `togglePesan()` — menyembunyikan atau menampilkan elemen `#pesan`.
- `hitungTotal()` — menjumlahkan harga menu yang dicentang.

### Dialog prompt saat halaman dimuat

1. **Nama pengguna** — ditampilkan dalam `alert` dan pesan sambutan.
2. **Dua angka** — dipakai untuk operasi aritmatika dasar (hasil di console).
3. **Nilai 0–100** — seleksi kondisi `if / else if / else` (Lulus bila nilai ≥ 60).
4. **Angka 1–5** — seleksi kondisi dengan `switch`.

Selain itu, console juga menampilkan tabel perkalian 7 (perulangan `for`) dan pengujian fungsi `cekGenap`.

## Halaman 2 — Form Perhitungan Nilai Akhir

File: `index2.html` + `script2.js`

Pengguna memasukkan nilai **Tugas**, **UTS**, dan **UAS** (masing-masing 0–100), lalu menekan **Hitung Nilai**. Hasil ditampilkan langsung di halaman.

### Rumus nilai akhir

```
Nilai Akhir = (Tugas × 30%) + (UTS × 30%) + (UAS × 40%)
```

### Predikat dan status

| Nilai Akhir | Predikat |
|-------------|----------|
| ≥ 85 | A |
| ≥ 75 | B |
| ≥ 60 | C |
| ≥ 50 | D |
| < 50 | E |

- **Status:** `Lulus` jika nilai akhir ≥ 60, selain itu `Belum lulus`.

### Validasi input

- Seluruh kolom wajib diisi.
- Setiap nilai harus berupa angka dalam rentang 0–100.

### Fungsi pada `script2.js`

- `hitungNilaiAkhir(tugas, uts, uas)` — menghitung nilai akhir berbobot.
- `tentukanPredikat(nilai)` — menentukan predikat A–E.
- `tentukanStatus(nilai)` — menentukan status kelulusan.
- `prosesPenilaian()` — membaca form, memvalidasi, menghitung, lalu menampilkan hasil ke halaman.

### Pengujian 3 skenario (console)

Saat halaman dibuka, console menampilkan tiga skenario uji:

| Skenario | Tugas | UTS | UAS | Nilai Akhir | Predikat | Status |
|----------|-------|-----|-----|-------------|----------|--------|
| 1 | 85 | 78 | 88 | 84.10 | B | Lulus |
| 2 | 90 | 95 | 92 | 92.30 | A | Lulus |
| 3 | 45 | 50 | 40 | 44.50 | E | Belum lulus |

## Konsep JavaScript yang Dipelajari

- Deklarasi variabel (`const`, `let`) dan tipe data
- Operator aritmatika dan perbandingan
- Seleksi kondisi (`if`, `else if`, `else`, `switch`)
- Perulangan (`for`, `forEach`)
- Fungsi (deklarasi, parameter, nilai kembalian)
- Manipulasi DOM (`getElementById`, `querySelectorAll`, `textContent`, `style`)
- Penanganan event (`onclick`, `addEventListener`)
- Validasi input dan konversi tipe (`Number`, `Number.isInteger`, `Number.isNaN`)
- Dialog bawaan browser (`prompt`, `alert`) dan `console.log`

## Teknologi

- HTML5
- CSS3
- JavaScript (ES6+)
