// script.js

document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.querySelector(".login-box form");
    
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Mencegah pengiriman form secara default

        const email = loginForm.querySelector("input[type='email']").value;
        const password = loginForm.querySelector("input[type='password']").value;

        // Validasi input
        if (!email || !password) {
            alert("Mohon isi semua field!");
            return;
        }

        // Contoh logika untuk autentikasi
        // Di sini Anda dapat mengganti dengan pemanggilan API
        console.log("Email:", email);
        console.log("Password:", password);
        
        // Simulasi autentikasi sukses
        alert("Login berhasil!");
        
        // Reset form setelah login sukses (opsional)
        loginForm.reset();
    });
});
