import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../api/auth";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password.length < 8) return alert("Password minimal 8 karakter");
    if (password !== confirm) return alert("Konfirmasi tidak cocok");

    try {
      const res = await registerUser({ username, password });
      if (res.success) {
        alert("Registrasi berhasil!");
        navigate("/login");
      } else {
        alert(res.message || "Gagal daftar");
      }
    } catch (err) {
      alert("Gagal terhubung ke server");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <h2 className="text-xl font-bold mb-4">Daftar Akun</h2>
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
          className="w-full border px-3 py-2 mb-2 rounded"
          required
        />
        <input
          type="password"
          placeholder="Konfirmasi Kata Sandi"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          className="w-full border px-3 py-2 mb-4 rounded"
          required
        />
        <button type="submit" className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
          Daftar
        </button>
      </form>
    </div>
  );
}
