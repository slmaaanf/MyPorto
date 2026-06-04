const Daftar_Kegiatan = [
    {
        kategori: "Achievement",
        judul: "Top 9 Business Analysis Track",
        organisasi: "CompFest",
        waktu: "April 2026",
        deskripsi: "Memimpin tim dalam merancang konsep Smart Trolley untuk efisiensi retail, menyusun analisis bisnis, dan mempresentasikannya di hadapan panel juri."
    },
    {
        kategori: "Experience",
        judul: "Dashboard Development Intern",
        organisasi: "PT Telekomunikasi Indonesia",
        waktu: "Mei - Juli 2025",
        deskripsi: "Membangun sistem manajemen magang internal menggunakan framework Laravel untuk efisiensi pelacakan performa peserta."
    },
    {
        kategori: "Community",
        judul: "Google Student Ambassador",
        organisasi: "Google",
        waktu: "2025",
        deskripsi: "Menjadi jembatan antara Google dan mahasiswa di kampus, menyelenggarakan event teknologi, dan mengedukasi ekosistem developer lokal."
    },
    {
        kategori: "Project",
        judul: "Visual Speech Recognition (ResNet50V2-BiGRU)",
        organisasi: "Tugas Akhir / Penelitian",
        waktu: "2026",
        deskripsi: "Mengembangkan aplikasi web pembaca gerakan bibir menggunakan arsitektur Deep Learning kombinasi ResNet50V2 dan Bidirectional GRU."
    }
];

const container = document.getElementById('portfolio-container');

function tampilkanPortofolio() {
    container.innerHTML = Daftar_Kegiatan.map(kegiatan => `
        <div class="card">
            <span class="badge">${kegiatan.kategori}</span>
            <h3 class="card-title">${kegiatan.judul}</h3>
            <div class="card-org">${kegiatan.organisasi}</div>
            <div class="card-date">🗓️ ${kegiatan.waktu}</div>
            <p class="card-desc">${kegiatan.deskripsi}</p>
        </div>
    `).join('');
}

// Jalankan fungsi saat web dibuka
tampilkanPortofolio();
