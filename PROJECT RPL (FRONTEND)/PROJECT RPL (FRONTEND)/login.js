import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api/auth";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password.length < 8) {
      alert("Password minimal 8 karakter");
      return;
    }

    try {
      const res = await loginUser({ username, password });
      if (res.success) {
        localStorage.setItem("token", res.token);
        navigate("/home");
      } else {
        alert(res.message || "Login gagal");
      }
    } catch (err) {
      alert("Terjadi kesalahan server");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <h2 className="text-xl font-bold mb-4">Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full border px-3 py-2 mb-2 rounded"
          required
        />
        <input
          type="password"
          placeholder="Kata Sandi"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border px-3 py-2 mb-4 rounded"
          required
        />
        <button type="submit" className="w-full bg-teal-600 text-white py-2 rounded hover:bg-teal-700">
          Masuk
        </button>
        <p className="mt-4 text-sm">
          Belum punya akun? <a href="/register" className="text-blue-500 underline">Daftar</a>
        </p>
      </form>
    </div>
  );
}


  



// document.addEventListener("DOMContentLoaded", function () {
//     const form = document.getElementById("loginForm");
  
//     form.addEventListener("submit", function (event) {
//       event.preventDefault();
  
//       const username = document.getElementById("username").value;
//       const password = document.getElementById("password").value;
  
//       // Kirim ke backend (misalnya login.php)
//       fetch("login.php", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/x-www-form-urlencoded",
//         },
//         body: `username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`
//       })
//       .then(response => response.json())
//       .then(data => {
//         if (data.success) {
//           window.location.href = "homepage.html";
//         } else {
//           alert("Login gagal: " + data.message);
//         }
//       })
//       .catch(error => {
//         console.error("Error:", error);
//         alert("Terjadi kesalahan koneksi.");
//       });
//     });
//   });
  