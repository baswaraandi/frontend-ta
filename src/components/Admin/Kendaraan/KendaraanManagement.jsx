import { useEffect, useState } from "react";
import backendApi from "../../../utils/api-config";
import Cookies from "js-cookie";
import { Edit2, Trash } from "react-feather";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EditKendaraanManagement from "./EditKendaraanManagement";
import AddKendaraanManagement from "./AddKendaraanManagement";

function KendaraanManagement() {
  const [kendaraan, setKendaraan] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedKendaraan, setselectedKendaraan] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);

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
      setKendaraan(response.data.data);
      setTotalPages(response.data.totalPages);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching kendaraan:", error);
      setLoading(false);
    }
  };

  const onUpdateSuccess = () => {
    setselectedKendaraan(null);
    getKendaraan();
  };

  const onAddSuccess = () => {
    setShowAddForm(false);
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
    <div className="bg-white p-4 rounded shadow-md mx-4 max-w-screen-2xl border border-blue-950">
      <h2 className="text-xl font-bold mb-2">Manajemen Kendaraan</h2>
      {loading ? (
        <p>Loading kendaraan...</p>
      ) : (
        <>
          {selectedKendaraan ? (
            <EditKendaraanManagement
              onUpdateSuccess={onUpdateSuccess}
              value={selectedKendaraan}
            />
          ) : showAddForm ? (
            <AddKendaraanManagement onAddSuccess={onAddSuccess} />
          ) : (
            <>
              <div className="flex items-center">
                <form
                  onSubmit={handleSearchSubmit}
                  className="mb-4 flex items-center max-w-96"
                >
                  <input
                    type="text"
                    value={search}
                    onChange={handleSearchChange}
                    className="px-4 py-2 border rounded-md w-full"
                    placeholder="Search by type"
                  />
                  <button
                    type="submit"
                    className="ml-2 px-4 py-2 bg-blue-950 text-white rounded-md hover:bg-blue-500"
                  >
                    Search
                  </button>
                </form>
                <button
                  className="flex items-center justify-center w-10 h-10 bg-blue-950 text-white rounded-full hover:bg-blue-700 focus:outline-none mb-4 ml-2"
                  aria-label="Add"
                  onClick={() => setShowAddForm(true)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </button>
              </div>
              <div className="max-h-[700px] overflow-y-auto">
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
