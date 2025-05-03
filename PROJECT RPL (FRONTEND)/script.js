document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Mencegah form dikirim secara default
  
      const username = form.querySelector('input[type="text"]').value;
      const password = form.querySelector('input[type="password"]').value;
  
      // Validasi sederhana: ubah sesuai kebutuhan
      if (username === "admin" && password === "123") {
        // Redirect ke homepage
        window.location.href = "homepage.html";
      } else {
        alert("Username atau password salah!");
      }
    });
  });
  



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
  