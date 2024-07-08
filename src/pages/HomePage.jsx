import { useState, useEffect } from "react";
import ChartTotal from "../components/Admin/ChartTotal";
import Carousel from "../components/Carrousel";
import backendApi from "../utils/api-config";
import AOS from "aos";
import "aos/dist/aos.css";

function HomePage() {
  const [dataKendaraan, setDataKendaraan] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init();

    const fetchData = async () => {
      try {
        const response = await backendApi.get("/total-kendaraan");
        setDataKendaraan(response.data);
      } catch (error) {
        console.error("Error:", error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-4 grid-rows-6 m-2 gap-4 sm:col-span-1">
      <div className="card bg-base-100 shadow-xl row-span-3" data-aos="fade-up">
        <figure>
          <img
            src="https://th.bing.com/th/id/OIP.vjmhQMrKzadHoPWz9tsfCQHaEu?rs=1&pid=ImgDetMain"
            alt="GIS"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Sistem Informasi Geografis Berbasis Web
            <div className="badge badge-secondary">GIS</div>
          </h2>
          <p>Pemodelan Menggunakan Metode Geographicaly Weighted Regression</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Tugas Akhir</div>
            <div className="badge badge-outline">GWR</div>
          </div>
        </div>
      </div>
      <div className="card bg-blue-950 shadow-xl p-4 h-36" data-aos="fade-up">
        <div className="avatar">
          <div className="w-24 rounded-full h-24">
            <img src="https://media.licdn.com/dms/image/D5603AQE0AtsFkVyQ0Q/profile-displayphoto-shrink_100_100/0/1696408634855?e=1723680000&v=beta&t=bx2SIwdXWQiWZiLBAvLTq20nHFmUbgGetjX-DN1t-ZA" />
          </div>
          <div className="ml-4">
            <h2 className="font-semibold mb-2 text-white">
              Andyka Baswara Putra
            </h2>
            <p className="mb-3 text-white">140810200061</p>
            <div className="card-actions justify-start">
              <div className="badge badge-outline text-white">Mahasiswa</div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="card bg-base-100 shadow-xl p-4 h-36 col-start-2 row-start-2"
        data-aos="fade-up"
      >
        <div className="avatar">
          <div className="w-24 rounded-full h-24">
            <img src="https://v2-students.unpad.ac.id/_next/image?url=https%3A%2F%2Fmedia.unpad.ac.id%2Fphoto%2Fpegawai%2F197607232008121001.jpg&w=64&q=75" />
          </div>
          <div className="ml-4">
            <h2 className="font-semibold mb-2">Rudi Rosadi S.Si., M.Kom.</h2>
            <p className="mb-3">r.rosadi@unpad.ac.id</p>
            <div className="card-actions justify-start">
              <div className="badge badge-outline">Dosen Pembimbing 1</div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="card bg-base-100 shadow-xl p-4 h-36 col-start-2 row-start-3"
        data-aos="fade-up"
      >
        <div className="avatar">
          <div className="w-24 rounded-full h-24">
            <img src="https://v2-students.unpad.ac.id/_next/image?url=https%3A%2F%2Fmedia.unpad.ac.id%2Fphoto%2Fpegawai%2F196704031993031002.jpg&w=64&q=75" />
          </div>
          <div className="ml-4">
            <h2 className="font-semibold mb-2">Dr. Drs. Asep Sholahuddin MT</h2>
            <p className="mb-3">asep.sholahuddin@unpad.ac.id</p>
            <div className="card-actions justify-start">
              <div className="badge badge-outline">Dosen Pembimbing 2</div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="card bg-base-100 shadow-xl col-span-2 row-span-3 col-start-1 row-start-4 place-content-center p-5"
        data-aos="fade-up"
      >
        {loading === true ? (
          <div>Loading....</div>
        ) : (
          <ChartTotal arrayTotalKendaran={dataKendaraan} />
        )}
      </div>
      <div
        className="card bg-base-100 shadow-xl row-span-3 col-start-3 row-start-1 place-content-center h-full"
        data-aos="fade-up"
      >
        <Carousel />
      </div>
      <div
        className="card bg-base-100 shadow-xl col-span-2 row-span-3 col-start-3 row-start-4 place-content-center overflow-x-scroll p-8"
        data-aos="fade-up"
      >
        <h2 className="font-bold place-self-center card-title sticky left-1/2 transform -translate-x-1/2 mb-8">
          FITUR
        </h2>
        <ul className="timeline">
          <li>
            <div className="timeline-start timeline-box">
              Halaman Home atau Beranda
            </div>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
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
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end timeline-box">
              Management Database (Untuk Admin)
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-start timeline-box">Peta Cloropleth</div>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
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
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end timeline-box">Peta Kendaraan</div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-start timeline-box">
              Analisis Model GWR
            </div>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </li>
        </ul>
      </div>
      <div
        className="card bg-base-100 shadow-xl row-span-3 col-start-4 row-start-1 p-4"
        data-aos="fade-up"
      >
        <div className="chat chat-start">
          <div className="chat-bubble">
            Saya ingin melihat peta kendaraan di Kota Bandung.
          </div>
        </div>
        <div className="chat chat-end">
          <div className="chat-bubble">
            Tentu! Kami memiliki peta kendaraan dan peta Cloropleth. Silakan
            kunjungi website ini untuk melihatnya.
          </div>
        </div>
        <div className="chat chat-start">
          <div className="chat-bubble">Bagaimana cara mengaksesnya?</div>
        </div>
        <div className="chat chat-end">
          <div className="chat-bubble">
            Anda dapat mengunjungi website ini dan mengklik menu yang sesuai.
          </div>
        </div>
        <div className="chat chat-start">
          <div className="chat-bubble">Apakah ada fitur lain yang menarik?</div>
        </div>
        <div className="chat chat-end">
          <div className="chat-bubble">
            Selain peta, disini juga menyediakan halaman analisis Geographically
            Weighted Regression (GWR). Semoga bermanfaat!
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
