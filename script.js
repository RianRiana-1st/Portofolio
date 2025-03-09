// Data proyek
const projects = {
  1: {
    title: "RJFARMSHOP",
    description: "Saya telah berhasil mengoptimalkan strategi pemasaran digital untuk TikTok Shop.",
    stats: [
      "GMV Total: Rp 258,113,237",
      "Pendapatan Harian: Rp 2,398,116",
      "Pengunjung Harian: 641",
      "Kenaikan GMV Mingguan: 26.24%",
      "Peningkatan Jumlah Pembeli: 39.29%",
      "ROI Harian: 23.95"
    ],
    image: "/Source/Work/RJFSALL.png"
  },
  2: {
    title: "CV Ranz Jaya Yogyakarta",
    description: "Saya juga telah berhasil mengelola performa CV RANZ JAYA INDONESIA.",
    stats: [
      "GMV Total: Rp 916,883,248",
      "Penghasilan Bruto: Rp 1,18 miliar",
      "Pengunjung Harian: 1,035",
      "Kenaikan GMV Bulanan: 23.14%",
      "Peningkatan Jumlah Pembeli: 25.11%",
      "Peningkatan SKU Terjual: 29.27%",
      "ROI: 57.16"
    ],
    image: "/Source/Work/CVRALL.png"
  }
};

// Fungsi untuk menampilkan modal detail proyek dan gambar
function viewDetails(projectId) {
  const modal = document.getElementById("project-modal");
  const modalImage = document.getElementById("modal-image");
  const titleElement = document.getElementById("modal-title");
  const descriptionElement = document.getElementById("modal-description");
  const statsElement = document.getElementById("modal-stats");

  // Ambil data proyek berdasarkan ID
  const project = projects[projectId];

  // Mengisi konten modal
  modalImage.src = project.image;
  titleElement.textContent = project.title;
  descriptionElement.textContent = project.description;

  // Hapus dan tambahkan daftar statistik
  statsElement.innerHTML = ""; // Kosongkan isi sebelumnya
  project.stats.forEach(stat => {
    const li = document.createElement("li");
    li.textContent = stat;
    statsElement.appendChild(li);
  });

  // Tampilkan modal
  modal.style.display = "block";
}

// Fungsi untuk menutup modal
function closeModal() {
  const modal = document.getElementById("project-modal");
  modal.style.display = "none";
}

// Menutup modal jika area luar modal diklik
window.addEventListener("click", function(event) {
  const modal = document.getElementById("project-modal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
