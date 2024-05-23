import { useEffect, useState } from "react";
import backendApi from "../../utils/api-config";
import Cookies from "js-cookie";
import { Edit2, Plus, Trash } from "react-feather";
// import { useNavigate } from "react-router-dom";

function UserManagement() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedUser, setSelectedUser] = useState(null);
  const roles = ["mahasiswa", "consultant"];
  // const navigate = useNavigate();

  useEffect(() => {
    getUsers();
  }, []);

  const refreshUsers = async () => {
    setLoading(true);
    await getUsers();
  };

  const getUsers = async () => {
    try {
      const token = Cookies.get("token");
      if (!token) {
        throw new Error("Token is not available");
      }
      // console.log("Using token:", token);
      const response = await backendApi.get("/user", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
    setLoading(false);
  };

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      const token = Cookies.get("token");
      if (!token) {
        throw new Error("Token is not available");
      }
      await backendApi.patch(
        `/user/${selectedUser.id}`,
        {
          username: selectedUser.username,
          fullname: selectedUser.fullname,
          email: selectedUser.email,
          role: selectedUser.role,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      // console.log("Berhasil Update");
      setSelectedUser(null);
      getUsers();
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  const deleteUsers = async (id) => {
    try {
      const token = Cookies.get("token");
      if (!token) {
        throw new Error("Token is not available");
      }
      await backendApi.delete(`/user/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-white p-4 rounded shadow-md mx-4 max-w-6xl">
      <h2 className="text-xl font-bold mb-4">Manajemen Pengguna</h2>
      <div className="p-4 border-slate-600 border-2 rounded-lg max-w-16">
        <Plus onClick={() => setSelectedUser(null)}></Plus>
      </div>
      {loading ? (
        <p>Loading users...</p>
      ) : (
        <>
          {selectedUser ? (
            <form onSubmit={updateUser}>
              <div className="mb-4">
                <label
                  htmlFor="username"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  value={selectedUser.username}
                  onChange={(e) =>
                    setSelectedUser({
                      ...selectedUser,
                      username: e.target.value,
                    })
                  }
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="fullname"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullname"
                  value={selectedUser.fullname}
                  onChange={(e) =>
                    setSelectedUser({
                      ...selectedUser,
                      fullname: e.target.value,
                    })
                  }
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={selectedUser.email}
                  onChange={(e) =>
                    setSelectedUser({ ...selectedUser, email: e.target.value })
                  }
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="role"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Role
                </label>
                <select
                  id="role"
                  value={selectedUser.role}
                  onChange={(e) =>
                    setSelectedUser({ ...selectedUser, role: e.target.value })
                  }
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                  {roles.map((role) => (
                    <option key={role} value={role}>
                      {role}
                    </option>
                  ))}
                </select>
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Update User
              </button>
            </form>
          ) : (
            <table className="w-full justify-center divide-y">
              <thead>
                <tr>
                  <th className="p-2">ID</th>
                  <th className="p-2">Username</th>
                  <th className="p-2">Password</th>
                  <th className="p-2">FullName</th>
                  <th className="p-2">Email</th>
                  <th className="p-2">Role</th>
                  <th className="p-2">Action</th>
                </tr>
              </thead>
              <tbody className="text-center divide-y">
                {Array.isArray(users) &&
                  users.map((user) => (
                    <tr key={user.id}>
                      <td className="p-2">{user.id}</td>
                      <td className="p-2">{user.username}</td>
                      <td className="p-2">-</td>
                      <td className="p-2">{user.fullname}</td>
                      <td className="p-2">{user.email}</td>
                      <td className="p-2">{user.role}</td>
                      <td className="p-2 flex justify-between">
                        <button onClick={() => setSelectedUser(user)}>
                          <Edit2></Edit2>
                        </button>
                        <button onClick={() => deleteUsers(user.id)}>
                          <Trash></Trash>
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          )}
          <button
            onClick={refreshUsers}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
          >
            Refresh users
          </button>
        </>
      )}
    </div>
  );
}

export default UserManagement;
