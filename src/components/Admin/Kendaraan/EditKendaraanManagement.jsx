import Cookies from "js-cookie";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import backendApi from "../../../utils/api-config";
import { useState } from "react";

function EditKendaraanManagement({ onUpdateSuccess, value }) {
  const [selectedKendaraan, setselectedKendaraan] = useState(value);

  const updateKendaraan = async (e) => {
    e.preventDefault();
    try {
      const token = Cookies.get("token");
      if (!token) {
        throw new Error("Token is not available");
      }
      await backendApi.patch(
        `/kendaraan/${selectedKendaraan.id}`,
        {
          BLN_THN: selectedKendaraan.BLN_THN,
          Nopol: selectedKendaraan.Nopol,
          Nama: selectedKendaraan.Nama,
          Alamat: selectedKendaraan.Alamat,
          Kab_Kota: selectedKendaraan.Kab_Kota,
          Kecamatan: selectedKendaraan.Kecamatan,
          Merk: selectedKendaraan.Merk,
          Type: selectedKendaraan.Type,
          Tipe: selectedKendaraan.Tipe,
          Modell: selectedKendaraan.Modell,
          Jenis: selectedKendaraan.Jenis,
          Model: selectedKendaraan.x,
          Tahun: selectedKendaraan.Tahun,
          CC: selectedKendaraan.CC,
          No_Ka: selectedKendaraan.No_Ka,
          No_Mesin: selectedKendaraan.x,
          Warna: selectedKendaraan.Warna,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      // console.log("Berhasil Update");
      toast.success(`Data ${selectedKendaraan.Nopol} Updated!`, {
        position: "top-right",
      });
      onUpdateSuccess();
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  return (
    <div>
      {" "}
      <form onSubmit={updateKendaraan} className="grid grid-cols-2 gap-4">
        <div className="mb-2 col-span-2">
          <label htmlFor="bulan" className="block text-gray-700 font-bold mb-2">
            Bulan
          </label>
          <input
            type="text"
            id="bulan"
            value={selectedKendaraan.BLN_THN}
            onChange={(e) =>
              setselectedKendaraan({
                ...selectedKendaraan,
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
            value={selectedKendaraan.Nopol}
            onChange={(e) =>
              setselectedKendaraan({
                ...selectedKendaraan,
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
            value={selectedKendaraan.Nama}
            onChange={(e) =>
              setselectedKendaraan({
                ...selectedKendaraan,
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
            value={selectedKendaraan.Alamat}
            onChange={(e) =>
              setselectedKendaraan({
                ...selectedKendaraan,
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
            value={selectedKendaraan.Kab_Kota}
            onChange={(e) =>
              setselectedKendaraan({
                ...selectedKendaraan,
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
            value={selectedKendaraan.Kecamatan}
            onChange={(e) =>
              setselectedKendaraan({
                ...selectedKendaraan,
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
            value={selectedKendaraan.Merk}
            onChange={(e) =>
              setselectedKendaraan({
                ...selectedKendaraan,
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
            value={selectedKendaraan.Type}
            onChange={(e) =>
              setselectedKendaraan({
                ...selectedKendaraan,
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
            value={selectedKendaraan.Tipe}
            onChange={(e) =>
              setselectedKendaraan({
                ...selectedKendaraan,
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
            value={selectedKendaraan.Modell}
            onChange={(e) =>
              setselectedKendaraan({
                ...selectedKendaraan,
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
            value={selectedKendaraan.Jenis}
            onChange={(e) =>
              setselectedKendaraan({
                ...selectedKendaraan,
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
            value={selectedKendaraan.Model}
            onChange={(e) =>
              setselectedKendaraan({
                ...selectedKendaraan,
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
            value={selectedKendaraan.Tahun}
            onChange={(e) =>
              setselectedKendaraan({
                ...selectedKendaraan,
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
            value={selectedKendaraan.CC}
            onChange={(e) =>
              setselectedKendaraan({
                ...selectedKendaraan,
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
            value={selectedKendaraan.No_Ka}
            onChange={(e) =>
              setselectedKendaraan({
                ...selectedKendaraan,
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
            value={selectedKendaraan.No_Mesin}
            onChange={(e) =>
              setselectedKendaraan({
                ...selectedKendaraan,
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
            value={selectedKendaraan.Warna}
            onChange={(e) =>
              setselectedKendaraan({
                ...selectedKendaraan,
                Warna: e.target.value,
              })
            }
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="col-span-2">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          >
            Update Data Kendaraan
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditKendaraanManagement;
