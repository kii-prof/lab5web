// ==========================================
// 1. DEKLARASI FUNGSI (FUNCTION DEFINITIONS)
// ==========================================

// Fungsi operasi aritmatika dasar
function operasiDasar(a, b) {
  console.log("Penjumlahan:", a + b);
  console.log("Pengurangan:", a - b);
  console.log("Perkalian:", a * b);
  console.log("Pembagian:", b !== 0 ? a / b : "Tidak dapat dibagi nol");
  console.log("Modulus:", a % b);
}

// Fungsi memeriksa angka genap (mengembalikan boolean)
function cekGenap(angka) {
  return angka % 2 === 0;
}

// Fungsi memeriksa bilangan bulat genap/ganjil pada Form HTML
function cekBilangan() {
  const input = document.getElementById("bilangan").value;
  const hasil = document.getElementById("hasilBilangan");

  // Validasi kolom tidak boleh kosong
  if (input.trim() === "") {
    hasil.textContent = "Kolom tidak boleh kosong!";
    return;
  }

  const angka = Number(input);
  if (!Number.isInteger(angka)) {
    hasil.textContent = "Masukkan bilangan bulat yang valid.";
  } else if (angka % 2 === 0) {
    hasil.textContent = "Bilangan genap";
  } else {
    hasil.textContent = "Bilangan ganjil";
  }
}

// Fungsi mengubah warna latar belakang halaman
function ubahWarnaLatar(warna) {
  document.body.style.backgroundColor = warna;
}

// Fungsi menyembunyikan atau menampilkan elemen pesan
function togglePesan() {
  const pesanEl = document.getElementById("pesan");
  if (pesanEl.style.display === "none") {
    pesanEl.style.display = "block";
  } else {
    pesanEl.style.display = "none";
  }
}

// Fungsi menghitung total belanja dari checkbox menu
function hitungTotal() {
  let total = 0;
  daftarMenu.forEach((item) => {
    if (item.checked) total += Number(item.value);
  });
  document.getElementById("total").textContent = total.toLocaleString("id-ID");
}


// ==========================================
// 2. EVENT LISTENERS
// ==========================================

const daftarMenu = document.querySelectorAll(".menu");
daftarMenu.forEach((item) => {
  item.addEventListener("change", hitungTotal);
});


// ==========================================
// 3. EKSEKUSI PROGRAM & DIALOG PROMPT
// ==========================================

document.getElementById("pesan").textContent = "Hello World";
console.log("Hello World");

// Prompt 1: Nama Pengguna
const namaPengguna = prompt("Masukkan nama Anda:", "");
if (namaPengguna && namaPengguna.trim() !== "") {
  alert("Halo, " + namaPengguna + "!");
  document.getElementById("pesan").textContent = "Selamat datang, " + namaPengguna + ".";
} else {
  alert("Nama belum diisi.");
}

// Prompt 2: Operasi Aritmatika
const inputPertama = prompt("Masukkan nilai pertama untuk aritmatika:");
const inputKedua = prompt("Masukkan nilai kedua untuk aritmatika:");

const angka1 = Number(inputPertama);
const angka2 = Number(inputKedua);

if (!Number.isNaN(angka1) && !Number.isNaN(angka2)) {
  operasiDasar(angka1, angka2);
} else {
  alert("Masukkan angka yang valid untuk operasi aritmatika.");
}

// Prompt 3: Seleksi Kondisi Nilai Mahasiswa
const inputNilai = prompt("Masukkan nilai (0–100):");
const nilaiMahasiswa = Number(inputNilai);
if (
  inputNilai === null ||
  inputNilai.trim() === "" ||
  Number.isNaN(nilaiMahasiswa) ||
  nilaiMahasiswa < 0 ||
  nilaiMahasiswa > 100
) {
  alert("Input nilai tidak valid.");
} else if (nilaiMahasiswa >= 60) {
  alert("Lulus");
} else {
  alert("Belum lulus");
}

// Prompt 4: Seleksi Kondisi Switch
const inputPilihan = prompt("Masukkan angka 1–5:");
switch (inputPilihan) {
  case "1": alert("Bilangan satu"); break;
  case "2": alert("Bilangan dua"); break;
  case "3": alert("Bilangan tiga"); break;
  case "4": alert("Bilangan empat"); break;
  case "5": alert("Bilangan lima"); break;
  default: alert("Pilihan tidak tersedia");
}

// Log Tabel Perkalian 7 di Console
console.log("--- Tabel Perkalian 7 ---");
for (let i = 1; i <= 10; i++) {
  console.log(`7 x ${i} = ${7 * i}`);
}

// Pengujian fungsi cekGenap di Console
console.log("Cek 4 genap?:", cekGenap(4)); // true
console.log("Cek 7 genap?:", cekGenap(7)); // false