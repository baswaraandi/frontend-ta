const GwrComponent = () => {
  // Data hasil pelatihan (training)
  const trainingResults = [
    { id: 1, variable: 'Variabel 1', coefficient: 0.5 },
    { id: 2, variable: 'Variabel 2', coefficient: 0.3 },
    // Tambahkan data lainnya sesuai kebutuhan
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

      {/* Tabel hasil training */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-2">Hasil Pelatihan</h2>
        <table className="table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Variabel</th>
              <th className="px-4 py-2">Koefisien</th>
            </tr>
          </thead>
          <tbody>
            {trainingResults.map(result => (
              <tr key={result.id}>
                <td className="border px-4 py-2">{result.id}</td>
                <td className="border px-4 py-2">{result.variable}</td>
                <td className="border px-4 py-2">{result.coefficient}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Kesimpulan */}
      <div>
        <h2 className="text-lg font-semibold mb-2">Kesimpulan</h2>
        <p className="text-sm">{conclusion}</p>
      </div>
    </div>
  );
}

export default GwrComponent;
