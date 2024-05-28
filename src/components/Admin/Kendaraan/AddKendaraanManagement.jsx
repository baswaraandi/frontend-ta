import Cookies from "js-cookie";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import backendApi from "../../../utils/api-config";
import { useState } from "react";

function AddKendaraanManagement({ onAddSuccess }) {
  const [newKendaraan, setNewKendaraan] = useState({
    Nopol: "",
    Nama: "",
    Alamat: "",
    Kab_Kota: "",
    Kecamatan: "",
    Merk: "",
    Type: "",
    Tipe: "",
    Modell: "",
    Jenis: "",
    Model: "",
    Tahun: "",
    CC: "",
    No_Ka: "",
    No_Mesin: "",
    Warna: "",
  });

  const addKendaraan = async (e) => {
    e.preventDefault();
    try {
      const token = Cookies.get("token");
      if (!token) {
        throw new Error("Token is not available");
      }

      const data = newKendaraan;

      await backendApi.post("/kendaraan", data, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      toast.success(`Data ${newKendaraan.Nopol} Added!`, {
        position: "top-right",
      });

      onAddSuccess();
    } catch (error) {
      console.error("Error adding kendaraan:", error);
      toast.error("Failed to add kendaraan. Please try again.", {
        position: "top-right",
      });
    }
  };

  return (
    <div>
      <form onSubmit={addKendaraan} className="grid grid-cols-2 gap-4">
        <div className="mb-2 col-span-2">
          <label htmlFor="bulan" className="block text-gray-700 font-bold mb-2">
            Bulan
          </label>
          <input
            type="text"
            id="bulan"
            value={newKendaraan.BLN_THN}
            onChange={(e) =>
              setNewKendaraan({
                ...newKendaraan,
                BLN_THN: e.target.value,
              })
            }
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="Nopol" className="block text-gray-700 font-bold mb-2">
            Nomor Polisi
          </label>
          <input
            type="text"
            id="nopol"
            value={newKendaraan.Nopol}
            onChange={(e) =>
              setNewKendaraan({
                ...newKendaraan,
                Nopol: e.target.value,
              })
            }
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="Nama" className="block text-gray-700 font-bold mb-2">
            Nama
          </label>
          <input
            type="Nama"
            id="Nama"
            value={newKendaraan.Nama}
            onChange={(e) =>
              setNewKendaraan({
                ...newKendaraan,
                Nama: e.target.value,
              })
            }
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-2">
          <label
            htmlFor="Alamat"
            className="block text-gray-700 font-bold mb-2"
          >
            Alamat
          </label>
          <input
            type="Alamat"
            id="Alamat"
            value={newKendaraan.Alamat}
            onChange={(e) =>
              setNewKendaraan({
                ...newKendaraan,
                Alamat: e.target.value,
              })
            }
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-2">
          <label
            htmlFor="Kab_Kota"
            className="block text-gray-700 font-bold mb-2"
          >
            Kota atau Kabupaten
          </label>
          <input
            type="Kab_Kota"
            id="Kab_Kota"
            value={newKendaraan.Kab_Kota}
            onChange={(e) =>
              setNewKendaraan({
                ...newKendaraan,
                Kab_Kota: e.target.value,
              })
            }
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-2">
          <label
            htmlFor="Kecamatan"
            className="block text-gray-700 font-bold mb-2"
          >
            Kecamatan
          </label>
          <input
            type="Kecamatan"
            id="Kecamatan"
            value={newKendaraan.Kecamatan}
            onChange={(e) =>
              setNewKendaraan({
                ...newKendaraan,
                Kecamatan: e.target.value,
              })
            }
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="Merk" className="block text-gray-700 font-bold mb-2">
            Merk
          </label>
          <input
            type="Merk"
            id="Merk"
            value={newKendaraan.Merk}
            onChange={(e) =>
              setNewKendaraan({
                ...newKendaraan,
                Merk: e.target.value,
              })
            }
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="Type" className="block text-gray-700 font-bold mb-2">
            Type
          </label>
          <input
            type="Type"
            id="Type"
            value={newKendaraan.Type}
            onChange={(e) =>
              setNewKendaraan({
                ...newKendaraan,
                Type: e.target.value,
              })
            }
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="Tipe" className="block text-gray-700 font-bold mb-2">
            Tipe
          </label>
          <input
            type="Tipe"
            id="Tipe"
            value={newKendaraan.Tipe}
            onChange={(e) =>
              setNewKendaraan({
                ...newKendaraan,
                Tipe: e.target.value,
              })
            }
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-2">
          <label
            htmlFor="Modell"
            className="block text-gray-700 font-bold mb-2"
          >
            Modell
          </label>
          <input
            type="Modell"
            id="Modell"
            value={newKendaraan.Modell}
            onChange={(e) =>
              setNewKendaraan({
                ...newKendaraan,
                Modell: e.target.value,
              })
            }
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="Jenis" className="block text-gray-700 font-bold mb-2">
            Jenis
          </label>
          <input
            type="Jenis"
            id="Jenis"
            value={newKendaraan.Jenis}
            onChange={(e) =>
              setNewKendaraan({
                ...newKendaraan,
                Jenis: e.target.value,
              })
            }
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="Model" className="block text-gray-700 font-bold mb-2">
            Model
          </label>
          <input
            type="Model"
            id="Model"
            value={newKendaraan.Model}
            onChange={(e) =>
              setNewKendaraan({
                ...newKendaraan,
                Model: e.target.value,
              })
            }
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="Tahun" className="block text-gray-700 font-bold mb-2">
            Tahun
          </label>
          <input
            type="Tahun"
            id="Tahun"
            value={newKendaraan.Tahun}
            onChange={(e) =>
              setNewKendaraan({
                ...newKendaraan,
                Tahun: e.target.value,
              })
            }
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="CC" className="block text-gray-700 font-bold mb-2">
            CC
          </label>
          <input
            type="CC"
            id="CC"
            value={newKendaraan.CC}
            onChange={(e) =>
              setNewKendaraan({
                ...newKendaraan,
                CC: e.target.value,
              })
            }
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="No_Ka" className="block text-gray-700 font-bold mb-2">
            No_Ka
          </label>
          <input
            type="No_Ka"
            id="No_Ka"
            value={newKendaraan.No_Ka}
            onChange={(e) =>
              setNewKendaraan({
                ...newKendaraan,
                No_Ka: e.target.value,
              })
            }
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-2">
          <label
            htmlFor="No_Mesin"
            className="block text-gray-700 font-bold mb-2"
          >
            No_Mesin
          </label>
          <input
            type="No_Mesin"
            id="No_Mesin"
            value={newKendaraan.No_Mesin}
            onChange={(e) =>
              setNewKendaraan({
                ...newKendaraan,
                No_Mesin: e.target.value,
              })
            }
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="Warna" className="block text-gray-700 font-bold mb-2">
            Warna
          </label>
          <input
            type="Warna"
            id="Warna"
            value={newKendaraan.Warna}
            onChange={(e) =>
              setNewKendaraan({
                ...newKendaraan,
                Warna: e.target.value,
              })
            }
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="col-span-2">
          <button
            type="submit"
            className="bg-blue-950 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          >
            Tambah Kendaraan
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddKendaraanManagement;
