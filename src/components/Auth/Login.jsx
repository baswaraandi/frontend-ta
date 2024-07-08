import { useContext, useEffect, useState } from "react";
import backendApi from "../../utils/api-config";
import { AuthContext } from "./AuthContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import bandungLogo from "../../../assets/Logo Kota Bandung.png";
import unpadLogo from "../../../assets/Logo Unpad.png";
import AOS from "aos";
import "aos/dist/aos.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      const response = await backendApi.post("/login", { email, password });
      if (response.status === 200) {
        login(
          {
            email: response.data.data.email,
            fullname: response.data.data.fullname,
            role: response.data.data.role,
          },
          response.data.data.token
        );
        toast.success("Login Success !", {
          position: "top-right",
        });
        navigate("/");
      }
      console.log(response.data.data);
    } catch (error) {
      console.log("Error! Login failed.");
      toast.error("Invalid Email or Password!", {
        position: "top-right",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="flex flex-col items-center mb-6">
        <div className="flex items-center justify-center mb-4">
          <img src={bandungLogo} alt="Bandung Logo" className="h-16 mr-4" />
          <img src={unpadLogo} alt="UNPAD Logo" className="h-16" />
        </div>
        <h2 className="text-xl font-bold text-center mb-2">
          Sistem Informasi Geografis Berbasis Web Untuk Pemetaan Kendaraan Roda
          Empat di Kota Bandung
        </h2>
      </div>
      <div
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
        data-aos="fade-up"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input input-bordered w-full max-w-ws"
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input input-bordered w-full max-w-ws"
              required
            />
          </div>
          <button
            type="submit"
            className="btn btn-wide w-full flex justify-center items-center"
            disabled={loading}
            data-aos="fade-up"
          >
            {loading ? (
              <svg
                className="animate-spin h-5 w-5 mr-3 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C6.477 0 0 6.477 0 12h4z"
                ></path>
              </svg>
            ) : (
              "Login"
            )}
          </button>
        </form>
        <p className="mt-4 text-center">
          Belum punya akun?{" "}
          <Link to="/register" className="text-blue-500 hover:underline">
            Daftar di sini
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
