import AICTable from "./AicComparison";
import Kesimpulan from "./Kesimpulan";
import ModelTable from "./Model";
import ParameterTable from "./Parameter";
import TabelAdaptiveBw from "./TabelAdaptiveBw";
import TabelAnalisis from "./TabelAnalisis";
import TabelFixedBw from "./TabelFixedBw";

const GWRResult = () => {
  return (
    <div className="grid grid-cols-4 grid-rows-6 gap-4 p-4">
      <div className="card bg-base-100 shadow-xl col-span-2 row-span-2 p-4 max-h-screen">
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          <li>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start md:text-end mb-10">
              <time className="font-mono italic">Tahap Pertama</time>
              <div className="text-lg font-black">Menentukan Bandwith</div>
              Nilai bandwith yang optimal dapat diperoleh dengan menggunakan
              rumus yang menghasilkan CV Score minimum. Perhitungan bandwith
              dilakukan menggunakan dua cara, yaitu fixed bandwith dan adapted
              bandwith.
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end mb-10">
              <time className="font-mono italic">Tahap Kedua</time>
              <div className="text-lg font-black">Estimasi Parameter</div>
              Hasil dari kedua nilai bandwith yang telah didapatkan akan
              digunakan untuk mencari estimasi pada setiap parameter pemodelan
              dengan fixed dan adaptive bandwith dengan pembobotan menggunakan
              fungsi kernel gaussian.
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start md:text-end mb-10">
              <time className="font-mono italic">Tahap Ketiga</time>
              <div className="text-lg font-black">
                Pengujian Kecocokan Model GWR
              </div>
              Pengujian model GWR akan menghasilkan nilai p-value yang
              menentukan kecocokan model GWR cocok pada data yang diujikan.
              Pengujian dilakukan pada dua pemodelan GWR yaitu fixed dan
              adaptive.
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end mb-10">
              <time className="font-mono italic">Tahap Keempat</time>
              <div className="text-lg font-black">Pemilihan Model Terbaik</div>
              Pemilihan model terbaik dilakukan terhadapa data yang diujikan
              walaupun model GWR tidak cocok terhadap data tersebut. Hal ini
              bertujuan untuk melihat model yang setidaknya paling baik
              digunakan untuk data lain yang memiliki karakter tidak begitu
              berbeda jauh dengan data yang diujikan di penelitian ini.
            </div>
          </li>
        </ul>
      </div>
      <div className="card bg-blue-950 col-start-3 shadow-xl p-4 max-h-[450px]">
        <h2 className="font-bold text-white text-2xl">Bandwith</h2>
        <div className="overflow-x-auto">
          <table className="table text-white">
            <thead className="text-white">
              <tr>
                <th>Adaptive</th>
                <th>Fixed</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>0.9999339</td>
                <td>0.1748785 </td>
              </tr>
            </tbody>
          </table>
        </div>
        <img src="" alt="" />
      </div>
      <div className="card bg-base-10 col-start-3 shadow-xl row-start-2 p-4 overflow-y-auto max-h-[450px]">
        <h2 className="font-bold text-2xl">Estimasi Parameter</h2>
        <ParameterTable />
      </div>
      <div className="card bg-base-10 col-start-4 shadow-xl row-start-1 p-4 max-h-[450px]">
        <h2 className="font-bold text-2xl">Uji Kecocokan Model</h2>
        <ModelTable />
      </div>
      <div className="card bg-blue-950 col-start-4 shadow-xl row-start-2 p-4 max-h-[450px]">
        <h2 className="font-bold text-2xl text-white">
          Pemilihan Model Terbaik
        </h2>
        <AICTable />
        <div className="text-white p-4 overflow-y-scroll">
          Berdasarkan Tabel, nilai R^2 pada fixed lebih besar daripada nilai R^2
          pada adaptive, dan pada nilai AIC, fixed GWR memiliki nilai yang lebih
          kecil dari nilai adaptive GWR. Dari hasil tersebut didapatkan
          kesimpulan bahwa model fixed GWR adalah model yang lebih baik karena
          memiliki nilai AIC yang lebih kecil namun memiliki nilai R^2 yang
          lebih besar.
        </div>
      </div>
      <div className="card bg-base-10 shadow-xl col-span-4 row-start-3 overflow-x-scroll overflow-y-scroll max-h-[450px] px-8">
        <h2 className="font-bold text-2xl text-blue-950 p-4">
          Tabel Data Analisis
        </h2>
        <TabelAnalisis />
      </div>
      <div className="card bg-base-10 shadow-xl col-span-2 row-start-4 overflow-x-scroll overflow-y-scroll max-h-[450px] px-8">
        <h2 className="font-bold text-2xl text-blue-950 p-4">
          Tabel Estimasi Data Fixed Bandwith
        </h2>
        <TabelFixedBw />
      </div>
      <div className="card bg-base-10 shadow-xl col-span-2 row-start-4 overflow-x-scroll overflow-y-scroll max-h-[450px] px-8">
        <h2 className="font-bold text-2xl text-blue-950 p-4">
          Tabel Estimasi Data Adaptive Bandwith
        </h2>
        <TabelAdaptiveBw />
      </div>
      <div className="card bg-base-10 shadow-xl col-span-4 row-span-2 row-start-5 p-8">
        <h2 className="font-bold text-2xl text-blue-950 mb-4">Kesimpulan</h2>
        <p className="mb-4">
          Penelitian ini bertujuan untuk menguji kecocokan model Geographically
          Weighted Regression (GWR) terhadap data yang telah dikumpulkan
          mengenai berbagai variabel yang mempengaruhi suatu fenomena di 30
          Kecamatan. Berdasarkan hasil analisis yang dilakukan, beberapa
          kesimpulan penting dapat diambil:
        </p>
        <Kesimpulan />
      </div>
    </div>
  );
};

export default GWRResult;
