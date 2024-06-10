function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="flex justify-end w-full max-w-2xl mb-6">
        <div className="shadow-lg p-6 bg-white rounded-lg w-full">
          <img
            src="https://i.pinimg.com/originals/fc/dc/1e/fcdc1e30c711506b6b86b127031cb7c2.png"
            alt="Logo UNPAD"
            className="w-80 mb-5 mx-auto"
          />
          <h1 className="text-2xl font-bold text-gray-800 mb-2 text-center">
            INFORMASI WEBSITE
          </h1>
          <p className="text-gray-600 mt-4 mb-4 text-center">
            Topik Penelitian: Sistem Informasi Geografis Berbasis Web Untuk
            Pemetaan Kendaran Roda Empat Di Kota Bandung Menggunakan Metode
            Geographically Weighted Regression
          </p>
        </div>
      </div>

      <div className="flex justify-start w-full max-w-2xl mb-6">
        <div className="shadow-lg p-6 bg-white rounded-lg w-full">
          <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            FITUR
          </h1>
          <p className="text-gray-600 text-center">
            Website ini membantu analisis kendaraan roda empat di Kota Bandung.
            Fitur utama dari website ini meliputi:
          </p>
          <ul className="text-gray-600 list-disc list-inside">
            <li>
              Menampilkan peta interaktif untuk melihat distribusi kendaraan di
              berbagai wilayah Kota Bandung.
            </li>
            <li>
              Memungkinkan pengguna untuk mencari dan melihat informasi detail
              tentang kendaraan tertentu.
            </li>
            <li>
              Menyediakan halaman analisis Geographically Weighted Regression
              (GWR) untuk membantu penelitian dan analisis lebih lanjut mengenai
              distribusi kendaraan.
            </li>
          </ul>
          <p className="text-gray-600 text-center mt-4">
            Dengan fitur-fitur ini, website diharapkan dapat membantu para
            peneliti dan pemangku kepentingan dalam memahami dan menganalisis
            distribusi kendaraan roda empat di Kota Bandung secara lebih
            efektif.
          </p>
        </div>
      </div>

      <div className="flex justify-end w-full max-w-2xl mb-6">
        <div className="shadow-lg p-6 bg-white rounded-lg w-full">
          <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            PROFILE MAHASISWA
          </h1>
          <p className="text-gray-600 text-center">
            Halaman ini dikembangkan oleh Andyka Baswara Putra dengan NPM
            140810200061.
          </p>
        </div>
      </div>

      <div className="flex justify-start w-full max-w-2xl mb-6">
        <div className="shadow-lg p-6 bg-white rounded-lg w-full">
          <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            LECTURER
          </h1>
          <div className="mb-4">
            <h2 className="text-xl font-semibold text-gray-800">
              Rudi Rosadi S.Si., M.Kom.
            </h2>
            <p className="text-gray-600">Dosen Pembimbing Tugas Akhir</p>
            <p className="text-gray-600">r.rosadi@unpad.ac.id</p>
            <p className="text-gray-600">085229019556 / 082130863190</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-800">
              Dr. Drs. Asep Sholahuddin MT
            </h2>
            <p className="text-gray-600">Dosen Pembimbing Tugas Akhir</p>
            <p className="text-gray-600">asep.sholahuddin@unpad.ac.id</p>
            <p className="text-gray-600">08122336844</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
