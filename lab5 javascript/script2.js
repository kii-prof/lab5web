// ==========================================
// 1. FUNGSI LOGIKA PERHITUNGAN (Terpisah)
// ==========================================

function hitungNilaiAkhir(tugas, uts, uas) {
    return tugas * 0.30 + uts * 0.30 + uas * 0.40;
}

function tentukanPredikat(nilai) {
    if (nilai >= 85) return "A";
    if (nilai >= 75) return "B";
    if (nilai >= 60) return "C";
    if (nilai >= 50) return "D";
    return "E";
}

function tentukanStatus(nilai) {
    return nilai >= 60 ? "Lulus" : "Belum lulus";
}


// ==========================================
// 2. FUNGSI UNTUK MENANGANI FORM HTML
// ==========================================

function prosesPenilaian() {
    const inputTugas = document.getElementById("tugas").value;
    const inputUts = document.getElementById("uts").value;
    const inputUas = document.getElementById("uas").value;

    // Validasi agar kolom tidak kosong
    if (inputTugas.trim() === "" || inputUts.trim() === "" || inputUas.trim() === "") {
        alert("Semua kolom nilai harus diisi!");
        return;
    }

    const tugas = Number(inputTugas);
    const uts = Number(inputUts);
    const uas = Number(inputUas);

    // Validasi agar setiap nilai berada pada rentang 0 - 100
    if (
        tugas < 0 || tugas > 100 ||
        uts < 0 || uts > 100 ||
        uas < 0 || uas > 100 ||
        Number.isNaN(tugas) || Number.isNaN(uts) || Number.isNaN(uas)
    ) {
        alert("Nilai tidak valid! Masukkan angka antara 0 sampai 100.");
        return;
    }

    // Proses perhitungan menggunakan fungsi
    const nilaiAkhir = hitungNilaiAkhir(tugas, uts, uas);
    const predikat = tentukanPredikat(nilaiAkhir);
    const status = tentukanStatus(nilaiAkhir);

    // Tampilkan hasil ke halaman HTML, bukan hanya console
    document.getElementById("resNilaiAkhir").textContent = nilaiAkhir.toFixed(2);
    document.getElementById("resPredikat").textContent = predikat;
    document.getElementById("resStatus").textContent = status;
}


// ==========================================
// 3. UJI SEKURANG-KURANGNYA 3 SKENARIO BERBEDA
// ==========================================

console.log("=== PENGUJIAN 3 SKENARIO NILAI BERBEDA ===");

// Skenario 1 (Contoh dari soal awal)
const t1 = 85, u1 = 78, us1 = 88;
const akhir1 = hitungNilaiAkhir(t1, u1, us1);
console.log(`Skenario 1 -> Tugas: ${t1}, UTS: ${u1}, UAS: ${us1}`);
console.log(`Hasil: Nilai Akhir = ${akhir1.toFixed(2)}, Predikat = ${tentukanPredikat(akhir1)}, Status = ${tentukanStatus(akhir1)}`);

// Skenario 2 (Nilai Tinggi / A)
const t2 = 90, u2 = 95, us2 = 92;
const akhir2 = hitungNilaiAkhir(t2, u2, us2);
console.log(`Skenario 2 -> Tugas: ${t2}, UTS: ${u2}, UAS: ${us2}`);
console.log(`Hasil: Nilai Akhir = ${akhir2.toFixed(2)}, Predikat = ${tentukanPredikat(akhir2)}, Status = ${tentukanStatus(akhir2)}`);

// Skenario 3 (Nilai Rendah / Tidak Lulus)
const t3 = 45, u3 = 50, us3 = 40;
const akhir3 = hitungNilaiAkhir(t3, u3, us3);
console.log(`Skenario 3 -> Tugas: ${t3}, UTS: ${u3}, UAS: ${us3}`);
console.log(`Hasil: Nilai Akhir = ${akhir3.toFixed(2)}, Predikat = ${tentukanPredikat(akhir3)}, Status = ${tentukanStatus(akhir3)}`);