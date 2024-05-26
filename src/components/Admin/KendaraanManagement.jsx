import { useEffect, useState } from "react";
import backendApi from "../../utils/api-config";
import Cookies from "js-cookie";
import { Edit2, Trash } from "react-feather";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { useNavigate } from "react-router-dom";

function KendaraanManagement() {
  const [kendaraan, setKendaraan] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedKendaraan, setselectedKendaraan] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getKendaraan(page, 20);
  }, [page]);

  const getKendaraan = async (page = 1, limit = 10, tipe) => {
    try {
      const token = Cookies.get("token");
      if (!token) {
        throw new Error("Token is not available");
      }
      const response = await backendApi.get("/kendaraan", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        params: {
          tipe: tipe || null,
          page: page,
          limit: limit,
        },
      });
      setKendaraan(response.data.data); // Assuming the data is in response.data.data
      setTotalPages(response.data.totalPages); // Assuming the total pages is in response.data.totalPages
      setLoading(false);
    } catch (error) {
      console.error("Error fetching kendaraan:", error);
      setLoading(false);
    }
  };

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
      setselectedKendaraan(null);
      getKendaraan();
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  const deletekendaraan = async (id) => {
    try {
      const token = Cookies.get("token");
      if (!token) {
        throw new Error("Token is not available");
      }
      await backendApi.delete(`/kendaraan/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      getKendaraan();
      toast.error(`Data ${selectedKendaraan.Nopol} Deleted!`, {
        position: "top-right",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    setPage(1); // Reset to first page when searching
    getKendaraan(1, 10, search);
  };

  return (
    <div className="bg-white p-4 rounded shadow-md mx-4 max-w-screen-2xl">
      <h2 className="text-xl font-bold mb-2">Manajemen Kendaraan</h2>
      {loading ? (
        <p>Loading kendaraan...</p>
      ) : (
        <>
          {selectedKendaraan ? (
            <form onSubmit={updateKendaraan} className="grid grid-cols-2 gap-4">
              <div className="mb-2 col-span-2">
                <label
                  htmlFor="bulan"
                  className="block text-gray-700 font-bold mb-2"
                >
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
                <label
                  htmlFor="Nopol"
                  className="block text-gray-700 font-bold mb-2"
                >
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
                <label
                  htmlFor="Nama"
                  className="block text-gray-700 font-bold mb-2"
                >
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
                <label
                  htmlFor="Merk"
                  className="block text-gray-700 font-bold mb-2"
                >
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
                <label
                  htmlFor="Type"
                  className="block text-gray-700 font-bold mb-2"
                >
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
                <label
                  htmlFor="Tipe"
                  className="block text-gray-700 font-bold mb-2"
                >
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
                <label
                  htmlFor="Jenis"
                  className="block text-gray-700 font-bold mb-2"
                >
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
                <label
                  htmlFor="Model"
                  className="block text-gray-700 font-bold mb-2"
                >
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
                <label
                  htmlFor="Tahun"
                  className="block text-gray-700 font-bold mb-2"
                >
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
                <label
                  htmlFor="CC"
                  className="block text-gray-700 font-bold mb-2"
                >
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
                <label
                  htmlFor="No_Ka"
                  className="block text-gray-700 font-bold mb-2"
                >
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
                <label
                  htmlFor="Warna"
                  className="block text-gray-700 font-bold mb-2"
                >
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
          ) : (
            <>
              <form onSubmit={handleSearchSubmit} className="mb-4">
                <input
                  type="text"
                  value={search}
                  onChange={handleSearchChange}
                  className="px-4 py-2 border rounded-md w-full"
                  placeholder="Search by type"
                />
                <button
                  type="submit"
                  className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
                >
                  Search
                </button>
              </form>
              <div className="max-h-[800px] overflow-y-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50 sticky top-0">
                    <tr>
                      <th className="p-4 text-xs font-medium text-slate-800 uppercase tracking-wider">
                        ID
                      </th>
                      <th className="p-4 text-xs font-medium text-slate-800 uppercase tracking-wider">
                        Bulan
                      </th>
                      <th className="p-4 text-xs font-medium text-slate-800 uppercase tracking-wider">
                        Nopol
                      </th>
                      <th className="p-4 text-xs font-medium text-slate-800 uppercase tracking-wider">
                        Nama
                      </th>
                      <th className="p-4 text-xs font-medium text-slate-800 uppercase tracking-wider">
                        Alamat
                      </th>
                      <th className="p-4 text-xs font-medium text-slate-800 uppercase tracking-wider">
                        Kota / Kab
                      </th>
                      <th className="p-4 text-xs font-medium text-slate-800 uppercase tracking-wider">
                        Kecamatan
                      </th>
                      <th className="p-4 text-xs font-medium text-slate-800 uppercase tracking-wider">
                        Merk
                      </th>
                      <th className="p-4 text-xs font-medium text-slate-800 uppercase tracking-wider">
                        Type
                      </th>
                      <th className="p-4 text-xs font-medium text-slate-800 uppercase tracking-wider">
                        Tipe
                      </th>
                      <th className="p-4 text-xs font-medium text-slate-800 uppercase tracking-wider">
                        Modell
                      </th>
                      <th className="p-4 text-xs font-medium text-slate-800 uppercase tracking-wider">
                        Jenis
                      </th>
                      <th className="p-4 text-xs font-medium text-slate-800 uppercase tracking-wider">
                        Model
                      </th>
                      <th className="p-4 text-xs font-medium text-slate-800 uppercase tracking-wider">
                        Tahun
                      </th>
                      <th className="p-4 text-xs font-medium text-slate-800 uppercase tracking-wider">
                        CC
                      </th>
                      <th className="p-4 text-xs font-medium text-slate-800 uppercase tracking-wider">
                        Nomor Rangka
                      </th>
                      <th className="p-4 text-xs font-medium text-slate-800 uppercase tracking-wider">
                        Nomor Mesin
                      </th>
                      <th className="p-4 text-xs font-medium text-slate-800 uppercase tracking-wider">
                        Warna
                      </th>
                      <th className="p-4 text-xs font-medium text-slate-800 uppercase tracking-wider">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 text-center">
                    {Array.isArray(kendaraan) &&
                      kendaraan.map((data) => (
                        <tr key={data.id}>
                          <td className="p-4 text-sm text-slate-800">
                            {data.id}
                          </td>
                          <td className="p-4 text-sm text-slate-800">
                            {data.BLN_THN}
                          </td>
                          <td className="p-4 text-sm text-slate-800 truncate">
                            {data.Nopol}
                          </td>
                          <td className="p-4 text-sm text-slate-800 truncate max-w-60">
                            {data.Nama}
                          </td>
                          <td className="p-4 text-sm text-slate-800 truncate overflow-hidden max-w-40">
                            {data.Alamat}
                          </td>
                          <td className="p-4 text-sm text-slate-800">
                            {data.Kab_Kota}
                          </td>
                          <td className="p-4 text-sm text-slate-800">
                            {data.Kecamatan}
                          </td>
                          <td className="p-4 text-sm text-slate-800">
                            {data.Merk}
                          </td>
                          <td className="p-4 text-sm text-slate-800 truncate overflow-hidden max-w-40">
                            {data.Type}
                          </td>
                          <td className="p-4 text-sm text-slate-800">
                            {data.Tipe}
                          </td>
                          <td className="p-4 text-sm text-slate-800">
                            {data.Modell}
                          </td>
                          <td className="p-4 text-sm text-slate-800">
                            {data.Jenis}
                          </td>
                          <td className="p-4 text-sm text-slate-800">
                            {data.Model}
                          </td>
                          <td className="p-4 text-sm text-slate-800">
                            {data.Tahun}
                          </td>
                          <td className="p-4 text-sm text-slate-800">
                            {data.CC}
                          </td>
                          <td className="p-4 text-sm text-slate-800">
                            {data.No_Ka}
                          </td>
                          <td className="p-4 text-sm text-slate-800">
                            {data.No_Mesin}
                          </td>
                          <td className="p-4 text-sm text-slate-800">
                            {data.Warna}
                          </td>
                          <td className="p-4">
                            <div className="flex items-center justify-center">
                              <button
                                className="text-blue-500 hover:text-blue-700"
                                onClick={() => setselectedKendaraan(data)}
                              >
                                <Edit2 className="h-5 w-5" />
                              </button>
                              <button
                                className="text-red-500 hover:text-red-700"
                                onClick={() => deletekendaraan(data.id)}
                              >
                                <Trash className="h-5 w-5" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
                <div></div>
              </div>
              <div className="pagination flex items-center justify-end space-x-4 mt-4">
                <button
                  onClick={() => handlePageChange(page - 1)}
                  disabled={page === 1}
                  className={`px-4 py-2 border rounded ${
                    page === 1
                      ? "bg-gray-300 cursor-not-allowed"
                      : "bg-blue-500 text-white hover:bg-blue-700"
                  }`}
                >
                  Previous
                </button>
                <span className="text-sm font-medium">
                  Page {page} of {totalPages}
                </span>
                <button
                  onClick={() => handlePageChange(page + 1)}
                  disabled={page === totalPages}
                  className={`px-7 py-2 border rounded ${
                    page === totalPages
                      ? "bg-gray-300 cursor-not-allowed"
                      : "bg-blue-500 text-white hover:bg-blue-700"
                  }`}
                >
                  Next
                </button>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default KendaraanManagement;
