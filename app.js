// =========================================================
// BASIS PENGETAHUAN & PARAMETER
// =========================================================

const NAMA_VARIABEL = {
    'F01': 'Cuaca',
    'F02': 'Kecepatan Angin',
    'F03': 'Visibilitas',
    'F04': 'Kondisi Fisik Tim',
    'F05': 'Pengalaman Tim',
    'F06': 'Kelengkapan Logistik',
    'F07': 'Musim',
    'F08': 'Jenis Jalur',
    'F09': 'Jam Keberangkatan',
    'F10': 'Ketinggian Lokasi',
    'F11': 'Jarak Tempuh'
};

const PILIHAN_VARIABEL = {
    'F01': {
        'cerah': { teks: 'Cerah', cf: [0.70, 0.00, 0.00] },
        'berawan': { teks: 'Berawan', cf: [0.40, 0.20, 0.00] },
        'hujan_ringan': { teks: 'Hujan Ringan', cf: [0.00, 0.55, 0.00] },
        'hujan_lebat': { teks: 'Hujan Lebat', cf: [0.00, 0.00, 0.85] },
        'badai': { teks: 'Badai', cf: [0.00, 0.00, 1.00] }
    },
    'F02': {
        'rendah': { teks: 'Rendah (<20 km/jam)', cf: [0.60, 0.00, 0.00] },
        'sedang': { teks: 'Sedang (20-40 km/jam)', cf: [0.00, 0.50, 0.00] },
        'tinggi': { teks: 'Tinggi (>40 km/jam)', cf: [0.00, 0.00, 0.85] }
    },
    'F03': {
        'baik': { teks: 'Baik / Jelas', cf: [0.55, 0.00, 0.00] },
        'sedang': { teks: 'Sedang / Berkabut Tipis', cf: [0.00, 0.45, 0.00] },
        'buruk': { teks: 'Buruk / Kabut Tebal', cf: [0.00, 0.30, 0.55] }
    },
    'F04': {
        'fit_semua': { teks: 'Fit Semua', cf: [0.65, 0.00, 0.00] },
        'ada_lelah': { teks: 'Ada Anggota Lelah', cf: [0.00, 0.55, 0.00] },
        'ada_sakit': { teks: 'Ada Anggota Sakit', cf: [0.00, 0.00, 0.85] }
    },
    'F05': {
        'mahir': { teks: 'Mahir (Sering mendaki)', cf: [0.60, 0.00, 0.00] },
        'menengah': { teks: 'Menengah', cf: [0.40, 0.20, 0.00] },
        'pemula': { teks: 'Pemula', cf: [0.00, 0.45, 0.30] },
        'campuran': { teks: 'Campuran', cf: [0.00, 0.50, 0.20] }
    },
    'F06': {
        'lengkap': { teks: 'Lengkap & Memadai', cf: [0.55, 0.00, 0.00] },
        'tidak_lengkap': { teks: 'Tidak Lengkap / Kurang', cf: [0.00, 0.00, 0.80] }
    },
    'F07': {
        'kemarau': { teks: 'Musim Kemarau', cf: [0.45, 0.00, 0.00] },
        'hujan': { teks: 'Musim Hujan', cf: [0.00, 0.40, 0.25] }
    },
    'F08': {
        'tanah_kering': { teks: 'Tanah Kering', cf: [0.50, 0.00, 0.00] },
        'landai': { teks: 'Landai / Jalur Terbuka', cf: [0.40, 0.00, 0.00] },
        'tanah_basah': { teks: 'Tanah Basah / Licin', cf: [0.00, 0.45, 0.00] },
        'bebatuan': { teks: 'Bebatuan / Kerikil', cf: [0.00, 0.40, 0.20] },
        'curam': { teks: 'Curam / Terjal', cf: [0.00, 0.30, 0.50] }
    },
    'F09': {
        'pagi': { teks: 'Pagi Hari (05.00-10.00)', cf: [0.45, 0.00, 0.00] },
        'siang': { teks: 'Siang Hari (10.00-15.00)', cf: [0.00, 0.35, 0.00] },
        'sore_malam': { teks: 'Sore atau Malam Hari', cf: [0.00, 0.20, 0.55] }
    },
    'F10': {
        'rendah': { teks: 'Rendah (<1500 mdpl)', cf: [0.45, 0.00, 0.00] },
        'menengah': { teks: 'Menengah (1500-2500 mdpl)', cf: [0.30, 0.25, 0.00] },
        'tinggi': { teks: 'Tinggi (>2500 mdpl)', cf: [0.00, 0.35, 0.40] }
    },
    'F11': {
        'pendek': { teks: 'Pendek (<3 km)', cf: [0.40, 0.00, 0.00] },
        'sedang': { teks: 'Sedang (3-6 km)', cf: [0.00, 0.35, 0.00] },
        'panjang': { teks: 'Panjang (>6 km)', cf: [0.00, 0.25, 0.40] }
    }
};

const AMBANG_OVERRIDE_H3 = 0.80;

const SKENARIO_TEST = {
    'ideal': {
        'F01': 'cerah', 'F02': 'rendah', 'F03': 'baik', 'F04': 'fit_semua',
        'F05': 'mahir', 'F06': 'lengkap', 'F07': 'kemarau', 'F08': 'landai',
        'F09': 'pagi', 'F10': 'rendah', 'F11': 'pendek'
    },
    'waspada': {
        'F01': 'berawan', 'F02': 'rendah', 'F03': 'sedang', 'F04': 'ada_lelah',
        'F05': 'menengah', 'F06': 'lengkap', 'F07': 'kemarau', 'F08': 'bebatuan',
        'F09': 'siang', 'F10': 'tinggi', 'F11': 'sedang'
    },
    'badai': {
        'F01': 'badai', 'F02': 'tinggi', 'F03': 'buruk', 'F04': 'fit_semua',
        'F05': 'mahir', 'F06': 'lengkap', 'F07': 'hujan', 'F08': 'curam',
        'F09': 'pagi', 'F10': 'tinggi', 'F11': 'panjang'
    },
    'logistik': {
        'F01': 'cerah', 'F02': 'rendah', 'F03': 'baik', 'F04': 'fit_semua',
        'F05': 'pemula', 'F06': 'tidak_lengkap', 'F07': 'kemarau', 'F08': 'landai',
        'F09': 'pagi', 'F10': 'rendah', 'F11': 'panjang'
    }
};

// =========================================================
// RUNTIME ENGINE
// =========================================================

function gabungCf(cfLama, cfBaru) {
    return cfLama + cfBaru * (1 - cfLama);
}

function hitungKelayakan() {
    let cfAman = 0.0;
    let cfWaspada = 0.0;
    let cfTidak = 0.0;
    
    let overrideAktif = false;
    let alasanOverride = [];
    let rincian = [];

    // Baca input saat ini
    const inputUser = {};
    for (const kode in NAMA_VARIABEL) {
        const selected = document.querySelector(`input[name="${kode}"]:checked`);
        if (selected) {
            inputUser[kode] = selected.value;
        }
    }

    // Hitung CF
    for (const kode in inputUser) {
        const nilai = inputUser[kode];
        const detail = PILIHAN_VARIABEL[kode][nilai];
        const [wAman, wWaspada, wTidak] = detail.cf;

        rincian.push({
            variabel: NAMA_VARIABEL[kode],
            nilai: detail.teks,
            aman: wAman,
            waspada: wWaspada,
            tidak: wTidak
        });

        if (wTidak >= AMBANG_OVERRIDE_H3) {
            overrideAktif = true;
            alasanOverride.push(`${NAMA_VARIABEL[kode]} = '${detail.teks}' (CF Tidak Disarankan = ${wTidak})`);
        }

        cfAman = gabungCf(cfAman, wAman);
        cfWaspada = gabungCf(cfWaspada, wWaspada);
        cfTidak = gabungCf(cfTidak, wTidak);
    }

    // Tentukan keputusan
    let keputusan = "AMAN";
    if (overrideAktif) {
        keputusan = "TIDAK DISARANKAN";
    } else {
        const maxCf = Math.max(cfAman, cfWaspada, cfTidak);
        if (maxCf === cfAman) {
            keputusan = "AMAN";
        } else if (maxCf === cfWaspada) {
            keputusan = "WASPADA";
        } else {
            keputusan = "TIDAK DISARANKAN";
        }
    }

    return {
        cfAman,
        cfWaspada,
        cfTidak,
        keputusan,
        overrideAktif,
        alasanOverride,
        rincian
    };
}

// =========================================================
// UI UPDATER
// =========================================================

function updateUI() {
    const hasil = hitungKelayakan();

    // 1. Update Box Keputusan Akhir
    const decisionSection = document.getElementById('decision-section');
    const decisionValue = document.getElementById('decision-value');
    const decisionDesc = document.getElementById('decision-desc');

    // Reset classes
    decisionSection.className = 'decision-section';

    if (hasil.keputusan === "AMAN") {
        decisionSection.classList.add('aman');
        decisionValue.textContent = "AMAN";
        decisionDesc.textContent = "Kondisi sangat mendukung untuk melakukan pendakian. Tetap persiapkan fisik dan logistik dengan baik.";
    } else if (hasil.keputusan === "WASPADA") {
        decisionSection.classList.add('waspada');
        decisionValue.textContent = "WASPADA";
        decisionDesc.textContent = "Ada beberapa faktor risiko sedang. Pendakian dapat dilakukan dengan ekstra hati-hati dan kesiapan tinggi.";
    } else {
        decisionSection.classList.add('tidak');
        decisionValue.textContent = "TIDAK DISARANKAN";
        decisionDesc.textContent = "Kondisi dinilai berbahaya untuk keselamatan pendaki. Sangat disarankan untuk menunda pendakian.";
    }

    // 2. Update Progress Bars
    updateBar('aman', hasil.cfAman);
    updateBar('waspada', hasil.cfWaspada);
    updateBar('tidak', hasil.cfTidak);

    // 3. Update Safety Override Banner
    const overrideBanner = document.getElementById('override-banner');
    const overrideReasons = document.getElementById('override-reasons');
    if (hasil.overrideAktif) {
        overrideBanner.style.display = 'block';
        overrideReasons.innerHTML = '';
        hasil.alasanOverride.forEach(alasan => {
            const li = document.createElement('li');
            li.textContent = alasan;
            overrideReasons.appendChild(li);
        });
    } else {
        overrideBanner.style.display = 'none';
    }

    // 4. Update Detail Table
    const tableBody = document.querySelector('#details-table tbody');
    tableBody.innerHTML = '';
    hasil.rincian.forEach(r => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${r.variabel}</td>
            <td>${r.nilai}</td>
            <td class="num" style="color: var(--color-aman)">${r.aman.toFixed(2)}</td>
            <td class="num" style="color: var(--color-waspada)">${r.waspada.toFixed(2)}</td>
            <td class="num" style="color: var(--color-tidak)">${r.tidak.toFixed(2)}</td>
        `;
        tableBody.appendChild(row);
    });
}

function updateBar(tipe, cfValue) {
    const pctText = document.getElementById(`cf-${tipe}-pct`);
    const valText = document.getElementById(`cf-${tipe}-val`);
    const fill = document.getElementById(`cf-${tipe}-fill`);

    const percentage = (cfValue * 100).toFixed(2);
    pctText.textContent = `${percentage}%`;
    valText.textContent = `CF: ${cfValue.toFixed(4)}`;
    fill.style.width = `${percentage}%`;
}

// Memuat skenario test
function loadSkenario(namaSkenario) {
    const data = SKENARIO_TEST[namaSkenario];
    if (!data) return;

    // Set radio buttons
    for (const kode in data) {
        const val = data[kode];
        const radio = document.querySelector(`input[name="${kode}"][value="${val}"]`);
        if (radio) {
            radio.checked = true;
        }
    }

    // Update active class on scenario buttons
    document.querySelectorAll('.btn-scenario').forEach(btn => {
        btn.classList.remove('active');
    });
    const clickedBtn = document.querySelector(`.btn-scenario[data-scenario="${namaSkenario}"]`);
    if (clickedBtn) {
        clickedBtn.classList.add('active');
    }

    updateUI();
}

// Inisialisasi Event Listener
document.addEventListener('DOMContentLoaded', () => {
    // Jalankan kalkulasi pertama kali
    loadSkenario('ideal');

    // Daftarkan event change ke seluruh radio button
    const radios = document.querySelectorAll('input[type="radio"]');
    radios.forEach(radio => {
        radio.addEventListener('change', () => {
            // Hapus status active pada tombol skenario jika pilihan diubah secara manual
            document.querySelectorAll('.btn-scenario').forEach(btn => {
                btn.classList.remove('active');
            });
            updateUI();
        });
    });

    // Daftarkan event click ke seluruh tombol skenario
    const scenarioBtns = document.querySelectorAll('.btn-scenario');
    scenarioBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const sc = e.currentTarget.getAttribute('data-scenario');
            loadSkenario(sc);
        });
    });
});
