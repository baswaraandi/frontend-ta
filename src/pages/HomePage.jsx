function HomePage() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <img
          src="https://i.pinimg.com/originals/fc/dc/1e/fcdc1e30c711506b6b86b127031cb7c2.png"
          alt="Logo UNPAD"
          className="w-80 mb-5"
        />
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          INFORMASI WEBSITE
        </h1>
        <p className="text-gray-600 mt-4 mb-4">
          Topik Penelitian : Sistem Informasi Geografis Berbasis Web Untuk
          Pemetaan Kendaran Roda Empat Di Kota Bandung Menggunakan Metode
          Geographically Weighted Regression
        </p>
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          PROFILE MAHASISWA
        </h1>
        <p className="text-gray-600">
          Halaman ini dikembangkan oleh Andyka Baswara Putra dengan NPM
          140810200061.
        </p>
      </div>
    </div>
  );
}

export default HomePage;
