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
    setPage(3360); // Reset to first page when searching
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
                    className="input input-bordered flex items-center gap-2"
                    placeholder="Search by type"
                  />
                  <button
                    type="submit"
                    className="ml-4 btn btn-outline btn-primary"
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
                <table className="table table-zebra">
                  <thead className="bg-gray-50 sticky top-0">
                    <tr>
                      <th>ID</th>
                      <th>Bulan</th>
                      <th>Nopol</th>
                      <th>Nama</th>
                      <th>Alamat</th>
                      <th>Kota / Kab</th>
                      <th>Kecamatan</th>
                      <th>Merk</th>
                      <th>Type</th>
                      <th>Tipe</th>
                      <th>Modell</th>
                      <th>Jenis</th>
                      <th>Model</th>
                      <th>Tahun</th>
                      <th>CC</th>
                      <th>Nomor Rangka</th>
                      <th>Nomor Mesin</th>
                      <th>Warna</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 text-center">
                    {Array.isArray(kendaraan) &&
                      kendaraan.map((data) => (
                        <tr key={data.id}>
                          <td>{data.id}</td>
                          <td>{data.BLN_THN}</td>
                          <td className="truncate">{data.Nopol}</td>
                          <td className="truncate max-w-60">{data.Nama}</td>
                          <td className="truncate overflow-hidden max-w-40">
                            {data.Alamat}
                          </td>
                          <td>{data.Kab_Kota}</td>
                          <td>{data.Kecamatan}</td>
                          <td>{data.Merk}</td>
                          <td className="truncate overflow-hidden max-w-40">
                            {data.Type}
                          </td>
                          <td>{data.Tipe}</td>
                          <td>{data.Modell}</td>
                          <td>{data.Jenis}</td>
                          <td>{data.Model}</td>
                          <td>{data.Tahun}</td>
                          <td>{data.CC}</td>
                          <td>{data.No_Ka}</td>
                          <td>{data.No_Mesin}</td>
                          <td>{data.Warna}</td>
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
              <div className="join mt-4">
                {Array.from({ length: totalPages }, (_, index) => {
                  if (index < 2 || index > totalPages - 3) {
                    return (
                      <button
                        key={index}
                        onClick={() => handlePageChange(index + 1)}
                        disabled={page === index + 1}
                        className={`join-item btn ${
                          page === index + 1 ? "btn-disabled" : ""
                        }`}
                      >
                        {index + 1}
                      </button>
                    );
                  } else if (index === 2 || index === totalPages - 3) {
                    return (
                      <button
                        key={index}
                        onClick={() => handlePageChange(index + 1)}
                        className="join-item btn"
                      >
                        ...
                      </button>
                    );
                  } else if (
                    index === page - 1 ||
                    index === page ||
                    index === page + 1
                  ) {
                    return (
                      <button
                        key={index}
                        onClick={() => handlePageChange(index + 1)}
                        className={`join-item btn ${
                          page === index + 1 ? "btn-disabled" : ""
                        }`}
                      >
                        {index + 1}
                      </button>
                    );
                  }
                  return null;
                })}
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default KendaraanManagement;
