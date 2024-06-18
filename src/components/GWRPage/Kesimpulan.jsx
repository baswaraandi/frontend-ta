function Kesimpulan() {
  return (
    <div>
      <div className="collapse collapse-plus bg-blue-950 mb-4">
        <input type="radio" name="my-accordion-3" defaultChecked />
        <div className="collapse-title text-xl font-medium text-white">
          Kecocokan Model
        </div>
        <div className="collapse-content text-white">
          <p className="mb-2">
            R-squared yang Sangat Tinggi: Model GWR menunjukkan R-squared yang
            sangat tinggi (1.000000), yang mengindikasikan bahwa model ini mampu
            menjelaskan hampir seluruh variasi dalam data. Namun, R-squared yang
            sempurna juga perlu diwaspadai sebagai potensi overfitting.
          </p>
          <p>
            Residual Sum of Squares (RSS): Nilai RSS untuk model GWR adalah 0,
            yang menunjukkan tidak ada kesalahan residu. Meskipun ini
            menunjukkan kecocokan yang sangat baik, hal ini juga perlu diperiksa
            lebih lanjut untuk memastikan tidak terjadi overfitting.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-blue-950 mb-4">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium text-white">
          Perbandingan dengan Model Global
        </div>
        <div className="collapse-content text-white">
          <p className="mb-2">
            AIC dan AICc: Nilai AIC dan AICc model GWR jauh lebih rendah
            dibandingkan model global, yang menunjukkan bahwa model GWR lebih
            cocok dengan data dibandingkan model global.
          </p>
          <p>
            Cross-validation (CV): Nilai CV untuk model GWR juga lebih rendah
            dibandingkan model global, yang mengindikasikan bahwa model GWR
            memiliki kinerja prediktif yang lebih baik.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-blue-950 mb-4">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium text-white">
          Bandwidth Optimal
        </div>
        <div className="collapse-content text-white">
          <p>
            Bandwidth optimal yang ditemukan adalah 30, yang menunjukkan bahwa
            model GWR menggunakan semua titik data yang tersedia untuk setiap
            prediksi lokal. Ini mengindikasikan sedikit atau tidak adanya
            variasi spasial yang signifikan dalam data, atau bahwa model mungkin
            terlalu kompleks.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-blue-950 mb-4">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium text-white">
          Variasi Spasial Koefisien
        </div>
        <div className="collapse-content text-white">
          <p>
            Standar deviasi yang sangat kecil pada koefisien lokal menunjukkan
            bahwa tidak ada banyak variasi geografis dalam data. Hal ini
            menunjukkan bahwa model GWR mungkin tidak memberikan banyak
            informasi tambahan dibandingkan dengan model global.
          </p>
        </div>
      </div>
      <p className="mb-2">
        Oleh karena itu, disimpulkan bahwa model GWR ini tidak cocok untuk
        digunakan terhadap data yang diujikan. Disarankan untuk mempertimbangkan
        model lain atau melakukan evaluasi lebih lanjut dengan validasi tambahan
        dan penyederhanaan model.
      </p>
      <p>
        Model GWR memberikan hasil yang jauh lebih baik dibandingkan model
        global dengan R-squared sempurna dan tidak ada kesalahan residu.
        Bandwidth optimal yang ditemukan adalah 30, yang menunjukkan model GWR
        mampu menangkap variabilitas spasial dengan baik. Koefisien variabel
        menunjukkan adanya pengaruh yang signifikan pada beberapa variabel
        independen seperti X3 (Ayla), X5(Mobilio), X6(Calya), dan X7(Ertiga)
        dalam model global, sementara dalam model GWR semua koefisien
        menunjukkan variasi yang sangat kecil secara geografis.
      </p>
    </div>
  );
}

export default Kesimpulan;
