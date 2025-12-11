// src/pages/PutusanDetailPage.jsx
import { useParams, Link } from "react-router-dom";

const DUMMY_DECISIONS = [
  {
    id: 1,
    court: "MAHKAMAH AGUNG",
    directory: "Pidana Khusus > Narkotika dan Psikotropika",
    register: "29-08-2025",
    decisionDate: "19-09-2025",
    uploadDate: "05-12-2025",
    number: "2645 PK/PID.SUS/2025",
    title: "Putusan MAHKAMAH AGUNG Nomor 2645 PK/PID.SUS/2025",
    dateText:
      "Tanggal 19 September 2025 — Penuntut Umum VS M. DENDI SAPUTRA Bin DEDDI SUTOMO (Terpidana)",
    views: 79,
    comments: 41,
  },
  {
    id: 2,
    court: "MAHKAMAH AGUNG",
    directory: "Pidana Khusus > Narkotika dan Psikotropika",
    register: "15-10-2025",
    decisionDate: "12-11-2025",
    uploadDate: "05-12-2025",
    number: "3289 PK/PID.SUS/2025",
    title: "Putusan MAHKAMAH AGUNG Nomor 3289 PK/PID.SUS/2025",
    dateText:
      "Tanggal 12 November 2025 — Penuntut Umum VS ARIS ALAMIN Bin M. SYUKRI (Alm) Alias INDRA alias SYARIEF (Terpidana)",
    views: 69,
    comments: 34,
  },
  {
    id: 3,
    court: "MAHKAMAH AGUNG",
    directory: "Pidana Khusus > Korupsi",
    register: "02-09-2025",
    decisionDate: "25-10-2025",
    uploadDate: "06-12-2025",
    number: "1102 K/PID.SUS/2025",
    title: "Putusan MAHKAMAH AGUNG Nomor 1102 K/PID.SUS/2025",
    dateText:
      "Tanggal 25 Oktober 2025 — Penuntut Umum VS DRS. H. AGUS SALIM, M.Si (Terdakwa)",
    views: 124,
    comments: 56,
  },
  {
    id: 4,
    court: "MAHKAMAH AGUNG",
    directory: "Pidana Khusus > Perlindungan Anak",
    register: "10-08-2025",
    decisionDate: "05-09-2025",
    uploadDate: "01-12-2025",
    number: "889 PK/PID.SUS/2025",
    title: "Putusan MAHKAMAH AGUNG Nomor 889 PK/PID.SUS/2025",
    dateText:
      "Tanggal 05 September 2025 — Penuntut Umum VS HERMANTO Bin SUPARMAN (Terpidana)",
    views: 45,
    comments: 12,
  },
  {
    id: 5,
    court: "MAHKAMAH AGUNG",
    directory: "Pidana Khusus > Narkotika dan Psikotropika",
    register: "20-09-2025",
    decisionDate: "15-10-2025",
    uploadDate: "07-12-2025",
    number: "2990 K/PID.SUS/2025",
    title: "Putusan MAHKAMAH AGUNG Nomor 2990 K/PID.SUS/2025",
    dateText:
      "Tanggal 15 Oktober 2025 — Penuntut Umum VS RICKY PRATAMA Alias KIKI (Terdakwa)",
    views: 88,
    comments: 20,
  },
  {
    id: 6,
    court: "MAHKAMAH AGUNG",
    directory: "Pidana Khusus > Lingkungan Hidup",
    register: "01-07-2025",
    decisionDate: "28-08-2025",
    uploadDate: "02-12-2025",
    number: "542 K/PID.SUS-LH/2025",
    title: "Putusan MAHKAMAH AGUNG Nomor 542 K/PID.SUS-LH/2025",
    dateText:
      "Tanggal 28 Agustus 2025 — Penuntut Umum VS PT. SAWIT MAKMUR ABADI (Terdakwa Korporasi)",
    views: 210,
    comments: 89,
  },
  {
    id: 7,
    court: "MAHKAMAH AGUNG",
    directory: "Pidana Khusus > ITE",
    register: "12-10-2025",
    decisionDate: "30-11-2025",
    uploadDate: "08-12-2025",
    number: "1450 K/PID.SUS/2025",
    title: "Putusan MAHKAMAH AGUNG Nomor 1450 K/PID.SUS/2025",
    dateText:
      "Tanggal 30 November 2025 — Penuntut Umum VS DONI SETIAWAN, S.Kom (Terdakwa)",
    views: 340,
    comments: 112,
  },
  {
    id: 8,
    court: "MAHKAMAH AGUNG",
    directory: "Pidana Khusus > Narkotika dan Psikotropika",
    register: "05-09-2025",
    decisionDate: "10-10-2025",
    uploadDate: "03-12-2025",
    number: "2771 PK/PID.SUS/2025",
    title: "Putusan MAHKAMAH AGUNG Nomor 2771 PK/PID.SUS/2025",
    dateText:
      "Tanggal 10 Oktober 2025 — Penuntut Umum VS SITI AMINAH Binti KASIM (Terpidana)",
    views: 55,
    comments: 8,
  },
  {
    id: 9,
    court: "MAHKAMAH AGUNG",
    directory: "Pidana Khusus > Korupsi",
    register: "18-08-2025",
    decisionDate: "22-09-2025",
    uploadDate: "04-12-2025",
    number: "1205 K/PID.SUS/2025",
    title: "Putusan MAHKAMAH AGUNG Nomor 1205 K/PID.SUS/2025",
    dateText:
      "Tanggal 22 September 2025 — Penuntut Umum VS IR. H. MOCHTAR LUBIS (Terdakwa)",
    views: 180,
    comments: 67,
  },
  {
    id: 10,
    court: "MAHKAMAH AGUNG",
    directory: "Pidana Khusus > Narkotika dan Psikotropika",
    register: "25-10-2025",
    decisionDate: "20-11-2025",
    uploadDate: "09-12-2025",
    number: "3301 PK/PID.SUS/2025",
    title: "Putusan MAHKAMAH AGUNG Nomor 3301 PK/PID.SUS/2025",
    dateText:
      "Tanggal 20 November 2025 — Penuntut Umum VS ANDI FIRMANSYAH Bin RUSLI (Terpidana)",
    views: 62,
    comments: 15,
  },
  {
    id: 11,
    court: "MAHKAMAH AGUNG",
    directory: "Pidana Khusus > Perikanan",
    register: "14-06-2025",
    decisionDate: "15-08-2025",
    uploadDate: "01-12-2025",
    number: "302 K/PID.SUS-PRK/2025",
    title: "Putusan MAHKAMAH AGUNG Nomor 302 K/PID.SUS-PRK/2025",
    dateText:
      "Tanggal 15 Agustus 2025 — Penuntut Umum VS NGUYEN VAN LONG (Terdakwa)",
    views: 95,
    comments: 22,
  },
  {
    id: 12,
    court: "MAHKAMAH AGUNG",
    directory: "Pidana Khusus > Narkotika dan Psikotropika",
    register: "30-09-2025",
    decisionDate: "28-10-2025",
    uploadDate: "06-12-2025",
    number: "3110 PK/PID.SUS/2025",
    title: "Putusan MAHKAMAH AGUNG Nomor 3110 PK/PID.SUS/2025",
    dateText:
      "Tanggal 28 Oktober 2025 — Penuntut Umum VS YULIA RAHMAWATI Alias YULI (Terpidana)",
    views: 70,
    comments: 29,
  },
  {
    id: 13,
    court: "MAHKAMAH AGUNG",
    directory: "Pidana Khusus > Pencucian Uang (TPPU)",
    register: "11-09-2025",
    decisionDate: "18-10-2025",
    uploadDate: "05-12-2025",
    number: "190 K/PID.SUS/2025",
    title: "Putusan MAHKAMAH AGUNG Nomor 190 K/PID.SUS/2025",
    dateText:
      "Tanggal 18 Oktober 2025 — Penuntut Umum VS BENNY SUDARSO (Terdakwa)",
    views: 250,
    comments: 99,
  },
  {
    id: 14,
    court: "MAHKAMAH AGUNG",
    directory: "Pidana Khusus > Narkotika dan Psikotropika",
    register: "08-11-2025",
    decisionDate: "02-12-2025",
    uploadDate: "10-12-2025",
    number: "3456 PK/PID.SUS/2025",
    title: "Putusan MAHKAMAH AGUNG Nomor 3456 PK/PID.SUS/2025",
    dateText:
      "Tanggal 02 Desember 2025 — Penuntut Umum VS KHAIRUL ANAM Bin ZAINUDDIN (Terpidana)",
    views: 58,
    comments: 10,
  },
  {
    id: 15,
    court: "MAHKAMAH AGUNG",
    directory: "Pidana Khusus > Kepabeanan",
    register: "22-07-2025",
    decisionDate: "14-09-2025",
    uploadDate: "03-12-2025",
    number: "776 K/PID.SUS/2025",
    title: "Putusan MAHKAMAH AGUNG Nomor 776 K/PID.SUS/2025",
    dateText:
      "Tanggal 14 September 2025 — Penuntut Umum VS CHEN WEI (Terdakwa)",
    views: 110,
    comments: 31,
  },
  {
    id: 16,
    court: "MAHKAMAH AGUNG",
    directory: "Pidana Khusus > Narkotika dan Psikotropika",
    register: "03-10-2025",
    decisionDate: "01-11-2025",
    uploadDate: "07-12-2025",
    number: "3188 PK/PID.SUS/2025",
    title: "Putusan MAHKAMAH AGUNG Nomor 3188 PK/PID.SUS/2025",
    dateText:
      "Tanggal 01 November 2025 — Penuntut Umum VS FERDIANSYAH Alias FERDI (Terpidana)",
    views: 82,
    comments: 44,
  },
  {
    id: 17,
    court: "MAHKAMAH AGUNG",
    directory: "Pidana Khusus > Kehutanan",
    register: "19-08-2025",
    decisionDate: "25-09-2025",
    uploadDate: "02-12-2025",
    number: "660 K/PID.SUS/2025",
    title: "Putusan MAHKAMAH AGUNG Nomor 660 K/PID.SUS/2025",
    dateText:
      "Tanggal 25 September 2025 — Penuntut Umum VS UDIN GAMBUT (Terdakwa)",
    views: 135,
    comments: 25,
  },
  {
    id: 18,
    court: "MAHKAMAH AGUNG",
    directory: "Pidana Khusus > Narkotika dan Psikotropika",
    register: "27-09-2025",
    decisionDate: "22-10-2025",
    uploadDate: "06-12-2025",
    number: "2905 PK/PID.SUS/2025",
    title: "Putusan MAHKAMAH AGUNG Nomor 2905 PK/PID.SUS/2025",
    dateText:
      "Tanggal 22 Oktober 2025 — Penuntut Umum VS RINI ANGGRAINI Binti JOKO (Terpidana)",
    views: 49,
    comments: 18,
  },
  {
    id: 19,
    court: "MAHKAMAH AGUNG",
    directory: "Pidana Khusus > Korupsi",
    register: "05-11-2025",
    decisionDate: "05-12-2025",
    uploadDate: "10-12-2025",
    number: "1355 K/PID.SUS/2025",
    title: "Putusan MAHKAMAH AGUNG Nomor 1355 K/PID.SUS/2025",
    dateText:
      "Tanggal 05 Desember 2025 — Penuntut Umum VS DR. H. SYAMSUL BAHRI, M.Pd (Terdakwa)",
    views: 305,
    comments: 140,
  },
  {
    id: 20,
    court: "MAHKAMAH AGUNG",
    directory: "Pidana Khusus > Narkotika dan Psikotropika",
    register: "12-09-2025",
    decisionDate: "08-10-2025",
    uploadDate: "04-12-2025",
    number: "2840 PK/PID.SUS/2025",
    title: "Putusan MAHKAMAH AGUNG Nomor 2840 PK/PID.SUS/2025",
    dateText:
      "Tanggal 08 Oktober 2025 — Penuntut Umum VS BAGAS KARAMOY (Terpidana)",
    views: 77,
    comments: 26,
  },
];

function PutusanDetailPage() {
  const { id } = useParams();
  const decisionId = Number(id);

  const decision = DUMMY_DECISIONS.find((d) => d.id === decisionId);

  if (!decision) {
    return (
      <section className="bg-slate-50 px-4 py-10">
        <div className="mx-auto max-w-4xl rounded-xl bg-white px-4 py-10 text-center shadow-sm">
          <p className="text-sm font-semibold text-slate-800">
            Putusan tidak ditemukan
          </p>
          <p className="mt-2 text-xs text-slate-500">
            Data putusan dengan ID {id} tidak tersedia di sistem dummy.
          </p>
          <Link
            to="/putusan"
            className="mt-4 inline-flex items-center justify-center rounded-lg bg-sky-600 px-4 py-2 text-xs font-semibold text-white hover:bg-sky-700"
          >
            ← Kembali ke daftar putusan
          </Link>
        </div>
      </section>
    );
  }

  const relatedDecisions = DUMMY_DECISIONS.filter(
    (d) => d.directory === decision.directory && d.id !== decision.id
  ).slice(0, 5);

  return (
    <section className="bg-slate-50 px-4 py-8">
      <div className="mx-auto max-w-5xl">
        {/* Breadcrumb + back */}
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
          <nav className="flex flex-wrap items-center gap-1">
            <Link to="/" className="hover:text-slate-700">
              Beranda
            </Link>
            <span>/</span>
            <Link to="/putusan" className="hover:text-slate-700">
              Putusan
            </Link>
            <span>/</span>
            <span className="text-slate-700">
              {decision.number || `ID ${decision.id}`}
            </span>
          </nav>

          <Link
            to="/putusan"
            className="inline-flex items-center gap-1 rounded-lg border border-slate-300 px-2 py-1 text-[11px] font-medium text-slate-700 hover:bg-slate-50"
          >
            ← Kembali ke daftar
          </Link>
        </div>

        {/* Layout: detail utama + sidebar */}
        <div className="flex flex-col gap-6 lg:flex-row">
          {/* Kolom kiri: konten utama */}
          <div className="w-full space-y-4 rounded-sm border bg-white p-4 shadow-sm md:p-5 lg:w-[68%]">
            {/* Header putusan */}
            <header className="border-b pb-3">
              <p className="text-[11px] uppercase tracking-wide text-slate-500">
                {decision.court} · {decision.directory}
              </p>
              <h1 className="mt-1 text-lg font-semibold text-slate-900 md:text-xl">
                {decision.title}
              </h1>
              <p className="mt-1 text-xs text-slate-600">
                Nomor:{" "}
                <span className="font-medium text-slate-800">
                  {decision.number}
                </span>
              </p>

              <div className="mt-2 flex flex-wrap items-center gap-4 text-[11px] text-slate-500">
                <span>
                  Register:{" "}
                  <span className="font-medium text-slate-700">
                    {decision.register}
                  </span>
                </span>
                <span>
                  Putus:{" "}
                  <span className="font-medium text-slate-700">
                    {decision.decisionDate}
                  </span>
                </span>
                <span>
                  Upload:{" "}
                  <span className="font-medium text-slate-700">
                    {decision.uploadDate}
                  </span>
                </span>
                <span className="inline-flex items-center gap-1">
                  👁️ <span>{decision.views}</span>
                </span>
                <span className="inline-flex items-center gap-1">
                  💬 <span>{decision.comments}</span>
                </span>
              </div>
            </header>

            {/* Ringkasan singkat */}
            <section className="rounded-lg bg-slate-50 px-3 py-3 text-xs text-slate-700">
              <h2 className="mb-1 text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                Ringkasan Singkat
              </h2>
              <p>{decision.dateText}</p>
            </section>

            {/* Metadata detail */}
            <section className="space-y-2 text-xs text-slate-700">
              <h2 className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                Metadata Putusan
              </h2>
              <div className="grid gap-2 md:grid-cols-2">
                <div>
                  <p className="text-[11px] text-slate-500">Pengadilan</p>
                  <p className="font-medium text-slate-800">
                    {decision.court}
                  </p>
                </div>
                <div>
                  <p className="text-[11px] text-slate-500">Direktori</p>
                  <p className="font-medium text-slate-800">
                    {decision.directory}
                  </p>
                </div>
                <div>
                  <p className="text-[11px] text-slate-500">Nomor Putusan</p>
                  <p className="font-medium text-slate-800">
                    {decision.number}
                  </p>
                </div>
                <div>
                  <p className="text-[11px] text-slate-500">
                    Tanggal Register
                  </p>
                  <p className="font-medium text-slate-800">
                    {decision.register}
                  </p>
                </div>
                <div>
                  <p className="text-[11px] text-slate-500">Tanggal Putusan</p>
                  <p className="font-medium text-slate-800">
                    {decision.decisionDate}
                  </p>
                </div>
                <div>
                  <p className="text-[11px] text-slate-500">
                    Tanggal Upload
                  </p>
                  <p className="font-medium text-slate-800">
                    {decision.uploadDate}
                  </p>
                </div>
                {/* placeholder untuk metadata lain nanti */}
                <div>
                  <p className="text-[11px] text-slate-500">Jenis Perkara</p>
                  <p className="font-medium text-slate-800">
                    {/* nanti bisa diisi field khusus */}
                    Pidana Khusus
                  </p>
                </div>
                <div>
                  <p className="text-[11px] text-slate-500">Status Putusan</p>
                  <p className="font-medium text-slate-800">Berkekuatan hukum tetap</p>
                </div>
              </div>
            </section>

            {/* Amar Putusan (placeholder) */}
            <section className="space-y-2 text-xs text-slate-700">
              <h2 className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                Amar Putusan
              </h2>
              <p className="rounded-lg border border-dashed border-slate-200 bg-slate-50 px-3 py-3">
                Konten amar putusan belum dihubungkan ke backend. Nanti bagian
                ini dapat diisi dengan ringkasan amar atau potongan penting dari
                dokumen PDF putusan yang disimpan pada server daerah.
              </p>
            </section>

            {/* Tombol PDF */}
            <section className="border-t pt-3">
              <p className="text-[11px] text-slate-500">
                Dokumen lengkap tersedia dalam bentuk PDF pada server pengadilan{" "}
                <span className="font-medium text-slate-700">
                  {decision.court}
                </span>
                .
              </p>
              <div className="mt-2 flex flex-wrap gap-2 text-xs">
                <button className="inline-flex items-center gap-2 rounded-lg bg-sky-600 px-3 py-2 font-semibold text-white shadow-sm hover:bg-sky-700">
                  📄 Lihat / Unduh PDF
                </button>
                <button className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-3 py-2 font-medium text-slate-700 hover:bg-slate-50">
                  🔗 Salin tautan putusan
                </button>
              </div>
            </section>
          </div>

          {/* Kolom kanan: putusan terkait */}
          <aside className="w-full space-y-3 lg:w-[32%]">
            <div className="rounded-sm border bg-white p-4 shadow-sm">
              <h2 className="text-xs font-semibold uppercase tracking-wide text-slate-600">
                Putusan Lain dalam Direktori Ini
              </h2>
              <p className="mt-1 text-[11px] text-slate-500">
                {decision.directory}
              </p>

              <div className="mt-3 space-y-2 text-xs">
                {relatedDecisions.length === 0 && (
                  <p className="text-slate-500">
                    Belum ada putusan lain dalam direktori yang sama pada data
                    dummy.
                  </p>
                )}

                {relatedDecisions.map((rel) => (
                  <Link
                    key={rel.id}
                    to={`/putusan/${rel.id}`}
                    className="block rounded-lg border border-slate-100 px-2 py-2 hover:border-sky-200 hover:bg-sky-50"
                  >
                    <p className="text-[11px] text-slate-500">
                      {rel.number}
                    </p>
                    <p className="text-xs font-semibold text-slate-800 line-clamp-2">
                      {rel.title}
                    </p>
                    <p className="mt-1 text-[11px] text-slate-500">
                      Putus: {rel.decisionDate} · 👁️ {rel.views}
                    </p>
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-sm border bg-white p-4 text-xs text-slate-600 shadow-sm">
              <h2 className="text-[11px] font-semibold uppercase tracking-wide text-slate-600">
                Catatan Sistem
              </h2>
              <p className="mt-1">
                Halaman ini menggunakan data dummy yang nantinya dapat
                digantikan dengan data nyata dari layanan backend gerbang
                putusan terdistribusi.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default PutusanDetailPage;
