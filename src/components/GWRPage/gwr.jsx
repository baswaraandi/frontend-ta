const GwrComponent = () => {
  // Data hasil pelatihan (training)
  const trainingResults = [
    {
      id: 1,
      kecamatan: "Andir",
      intercept: -39.7959,
      x1: -7.74541,
      x2: 0.537971,
      x3: -2.00514,
      x4: 6.623611,
    },
    {
      id: 2,
      kecamatan: "Antapani",
      intercept: -51.7746,
      x1: -10.5039,
      x2: 0.512606,
      x3: -1.86131,
      x4: 7.21731,
    },
    {
      id: 3,
      kecamatan: "Arcamanik",
      intercept: -56.0449,
      x1: -11.2614,
      x2: 0.510182,
      x3: -1.86252,
      x4: 7.437524,
    },
    {
      id: 4,
      kecamatan: "Astanaanyar",
      intercept: -45.3848,
      x1: -8.76223,
      x2: 0.532885,
      x3: -1.99426,
      x4: 6.903853,
    },
    {
      id: 5,
      kecamatan: "Babakan Ciparay",
      intercept: -43.5347,
      x1: -8.29061,
      x2: 0.538115,
      x3: -2.04891,
      x4: 6.819788,
    },
    {
      id: 6,
      kecamatan: "Bandung Kidul",
      intercept: -53.3385,
      x1: -10.1712,
      x2: 0.527514,
      x3: -1.96824,
      x4: 7.30093,
    },
    {
      id: 7,
      kecamatan: "Bandung Kulon",
      intercept: -41.3731,
      x1: -7.92312,
      x2: 0.539414,
      x3: -2.04822,
      x4: 6.711263,
    },
    {
      id: 8,
      kecamatan: "Bandung Wetan",
      intercept: -39.0248,
      x1: -7.6572,
      x2: 0.537309,
      x3: -1.9826,
      x4: 6.580189,
    },
    {
      id: 9,
      kecamatan: "Batununggal",
      intercept: -42.1791,
      x1: -8.01262,
      x2: 0.540195,
      x3: -2.06875,
      x4: 6.755487,
    },
    {
      id: 10,
      kecamatan: "Bojongloa Kaler",
      intercept: -44.8845,
      x1: -8.57037,
      x2: 0.536001,
      x3: -2.02978,
      x4: 6.884264,
    },
    {
      id: 11,
      kecamatan: "Bojongloa Kidul",
      intercept: -46.228,
      x1: -8.85178,
      x2: 0.533854,
      x3: -2.01137,
      x4: 6.948883,
    },
    {
      id: 12,
      kecamatan: "Buahbatu",
      intercept: -57.2754,
      x1: -11.0362,
      x2: 0.520913,
      x3: -1.91933,
      x4: 7.496582,
    },
    {
      id: 13,
      kecamatan: "Cibeunying Kaler",
      intercept: -45.9365,
      x1: -9.26148,
      x2: 0.521857,
      x3: -1.88537,
      x4: 6.917043,
    },
    {
      id: 14,
      kecamatan: "Cibeunying Kidul",
      intercept: -48.034,
      x1: -9.63646,
      x2: 0.520328,
      x3: -1.89057,
      x4: 7.025665,
    },
    {
      id: 15,
      kecamatan: "Cibiru",
      intercept: -60.6362,
      x1: -12.2237,
      x2: 0.504156,
      x3: -1.84115,
      x4: 7.675779,
    },
    {
      id: 16,
      kecamatan: "Cicendo",
      intercept: -43.7334,
      x1: -8.58432,
      x2: 0.531071,
      x3: -1.95808,
      x4: 6.814587,
    },
    {
      id: 17,
      kecamatan: "Cidadap",
      intercept: -40.5699,
      x1: -8.23352,
      x2: 0.527928,
      x3: -1.87793,
      x4: 6.639326,
    },
    {
      id: 18,
      kecamatan: "Cinambo",
      intercept: -57.268,
      x1: -11.5528,
      x2: 0.507637,
      x3: -1.8532,
      x4: 7.501362,
    },
    {
      id: 19,
      kecamatan: "Coblong",
      intercept: -42.6077,
      x1: -8.60356,
      x2: 0.526103,
      x3: -1.8881,
      x4: 6.745915,
    },
    {
      id: 20,
      kecamatan: "Gedebage",
      intercept: -59.8403,
      x1: -11.6161,
      x2: 0.516385,
      x3: -1.89027,
      x4: 7.62639,
    },
    {
      id: 21,
      kecamatan: "Kiaracondong",
      intercept: -53.0008,
      x1: -10.7947,
      x2: 0.509982,
      x3: -1.85287,
      x4: 7.281046,
    },
    {
      id: 22,
      kecamatan: "Lengkong",
      intercept: -48.026,
      x1: -9.32959,
      x2: 0.52837,
      x3: -1.96185,
      x4: 7.032884,
    },
    {
      id: 23,
      kecamatan: "Mandalajati",
      intercept: -53.0008,
      x1: -10.7947,
      x2: 0.509982,
      x3: -1.85287,
      x4: 7.281046,
    },
    {
      id: 24,
      kecamatan: "Panyileukan",
      intercept: -59.1629,
      x1: -11.7291,
      x2: 0.510776,
      x3: -1.86617,
      x4: 7.595677,
    },
    {
      id: 25,
      kecamatan: "Rancasari",
      intercept: -57.6084,
      x1: -11.2366,
      x2: 0.517109,
      x3: -1.89737,
      x4: 7.514175,
    },
    {
      id: 26,
      kecamatan: "Regol",
      intercept: -48.4312,
      x1: -9.22463,
      x2: 0.532746,
      x3: -2.009,
      x4: 7.059157,
    },
    {
      id: 27,
      kecamatan: "Sukajadi",
      intercept: -40.8459,
      x1: -8.12673,
      x2: 0.531876,
      x3: -1.93197,
      x4: 6.663098,
    },
    {
      id: 28,
      kecamatan: "Sukasari",
      intercept: -38.0484,
      x1: -7.6728,
      x2: 0.533052,
      x3: -1.89933,
      x4: 6.513954,
    },
    {
      id: 29,
      kecamatan: "Sumur Bandung",
      intercept: -46.3269,
      x1: -9.15179,
      x2: 0.526307,
      x3: -1.9302,
      x4: 6.942606,
    },
    {
      id: 30,
      kecamatan: "Ujungberung",
      intercept: -56.3378,
      x1: -11.4651,
      x2: 0.506131,
      x3: -1.84583,
      x4: 7.454596,
    },
  ];

  // Kesimpulan
  const conclusion = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ullamcorper, risus ac
    feugiat efficitur, dolor metus fringilla elit, nec dignissim diam massa vitae urna.
    Vestibulum ut pulvinar orci. Nulla facilisi. Donec eu dolor vitae augue tincidunt
    tempus non vitae libero. Maecenas ac massa scelerisque, sagittis turpis vel,
    consequat odio. Proin at ipsum nec nulla fringilla convallis nec at dui. Duis vel
    magna nec libero tristique vehicula sed vel lacus. Nunc sit amet turpis in eros
    dictum malesuada a sit amet est.
  `;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Halaman Analisis GWR</h1>

      {/* Diagram Alur */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-2">Alur Analisis Model GWR</h2>
        <img
          src="/mnt/data/image.png"
          alt="Alur Analisis Model GWR"
          className="w-full mb-4"
        />
      </div>

      {/* Informasi tambahan */}
      <div className="shadow-lg p-6 bg-white rounded-lg mb-6">
        <h2 className="text-lg font-semibold mb-2">Informasi Tambahan</h2>
        <p className="text-gray-600 mb-4">
          Data pemodelan GWR yang dapat dilihat pada tabel 3.8 memiliki beberapa
          komponen, yaitu jumlah kendaraan per kecamatan, kepadatan penduduk,
          longitude, dan latitude. Penelitian ini menganalisis data pemodelan
          GWR pada tabel 3.8 memiliki pengaruh spasial. Model spasial yang akan
          diterapkan kepada data adalah Geographically Weighted Regression
          (GWR). Pada gambar 3.1 akan ditunjukan alur dari analisis model GWR
          yang digunakan dalam penelitian ini.
        </p>
        <p className="text-gray-600 mb-4">
          Dari hasil eksekusi tersebut didapatkan p-value untuk pemodelan GWR
          dengan fixed bandwith sebesar 0.4327 dan untuk adaptive bandwith
          sebesar 0.4979, nilai p-value dari kedua pemodelan ini sangat jauh
          diatas nilai standar tingkat kepercayaan yaitu 95% atau batas
          kesalahan maksimal 5% atau 0.05, maka kedua pemodelan GWR ini dinilai
          Tidak Cocok untuk digunakan terhadap data yang diujikan.
        </p>
        <p className="text-gray-600 mb-4">
          Kemudian dilakukan regresi global untuk melihat apakah data yang
          diujikan memiliki nilai p-value dibawah batas kesalahan maksimal.
          Berikut potongan code dari regresi global yang diujikan.
        </p>
        <pre className="bg-gray-100 p-4 mb-4 overflow-x-auto">
          <code>
            # Membuat model regresi global{"\n"}
            model_global &lt;- lm(Y1 ~ X1 + X2 + X3 + X4 + X5 + X6 + X7 + X8 +
            X9 + X10 + X11 + X12 + X13 + X14 + X15 + X16 + X17 + X18 + X19 + X20
            + X21 + X22 + X23 + X24 + X25, data = data){"\n"}# Menampilkan
            ringkasan model regresi global{"\n"}
            summary(model_global)
          </code>
        </pre>
        <p className="text-gray-600 mb-4">
          Dari hasil eksekusi regresi global didapatkan p-value sebesar 0.498,
          nilai p-value dari pemodelan ini sama jauhnya dengan pemodelan GWR
          diatas nilai standar tingkat kepercayaan yaitu 95% atau batas
          kesalahan maksimal 5% atau 0.05, maka ketiga pemodelan ini dinilai
          Tidak Cocok untuk digunakan terhadap data yang diujikan.
        </p>
        <p className="text-gray-600 mb-4">
          Pemilihan model terbaik dilakukan terhadapa data yang diujikan
          walaupun model GWR tidak cocok terhadap data tersebut. Hal ini
          bertujuan untuk melihat model yang setidaknya paling baik digunakan
          untuk data lain yang memiliki karakter tidak begitu berbeda jauh
          dengan data yang diujikan di penelitian ini. Pemilihan model terbaik
          dilakukan dengan membandingkan model GWR fixed dan model GWR adaptive
          dengan melihat nilai Akaike Information Criterion (AIC) dan Koefisien
          Determinan (R²) pada kedua model. Kedua nilai ini didapatkan dengan
          memanggil variabel fixed¬_gwr dan adapt_gwr pada code pemodelan
          sebelumnya. Berikut ini merupakan perbandingan model untuk melihat
          nilai AIC dan R².
        </p>
        <table className="table-auto mb-4">
          <thead>
            <tr>
              <th className="px-4 py-2">Pemodelan</th>
              <th className="px-4 py-2">AIC</th>
              <th className="px-4 py-2">R²</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">Fixed GWR</td>
              <td className="border px-4 py-2">299.89</td>
              <td className="border px-4 py-2">0.9034563</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Adaptive GWR</td>
              <td className="border px-4 py-2">306.10</td>
              <td className="border px-4 py-2">0.8799864</td>
            </tr>
          </tbody>
        </table>
        <p className="text-gray-600">
          Berdasarkan Tabel 3.1, nilai R² pada fixed lebih besar daripada nilai
          R² pada adaptive, dan pada nilai AIC, fixed GWR memiliki nilai yang
          lebih kecil dari nilai adaptive GWR. Dari hasil tersebut didapatkan
          kesimpulan bahwa model fixed GWR adalah model yang lebih baik karena
          memiliki nilai AIC yang lebih kecil namun memiliki nilai R² yang lebih
          besar.
        </p>
      </div>

      {/* Tabel hasil training */}
      <div className="shadow-lg p-6 bg-white rounded-lg mb-6">
        <h2 className="text-lg font-semibold mb-2">Hasil Pelatihan</h2>
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">No</th>
              <th className="px-4 py-2">Kecamatan</th>
              <th className="px-4 py-2">Intercept</th>
              <th className="px-4 py-2">X1</th>
              <th className="px-4 py-2">X2</th>
              <th className="px-4 py-2">X3</th>
              <th className="px-4 py-2">X4</th>
            </tr>
          </thead>
          <tbody>
            {trainingResults.map((result) => (
              <tr key={result.id}>
                <td className="border px-4 py-2">{result.id}</td>
                <td className="border px-4 py-2">{result.kecamatan}</td>
                <td className="border px-4 py-2">{result.intercept}</td>
                <td className="border px-4 py-2">{result.x1}</td>
                <td className="border px-4 py-2">{result.x2}</td>
                <td className="border px-4 py-2">{result.x3}</td>
                <td className="border px-4 py-2">{result.x4}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Kesimpulan */}
      <div className="shadow-lg p-6 bg-white rounded-lg">
        <h2 className="text-lg font-semibold mb-2">Kesimpulan</h2>
        <p className="text-sm">{conclusion}</p>
      </div>
    </div>
  );
};

export default GwrComponent;
