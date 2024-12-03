// Fungsi untuk menampilkan form login
function showLogin() {
    document.getElementById('loginContainer').classList.remove('hidden');
    document.getElementById('registerContainer').classList.add('hidden');
}

// Fungsi untuk menampilkan form registrasi
function showRegister() {
    document.getElementById('registerContainer').classList.remove('hidden');
    document.getElementById('loginContainer').classList.add('hidden');
}

// Menangani pengiriman form login
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const message = document.getElementById('loginMessage');

    // Simulasi validasi login
    if (email === 'user@example.com' && password === 'password') {
        message.textContent = 'Login berhasil!';
        message.style.color = 'green';
    } else {
        message.textContent = 'Email atau password salah!';
        message.style.color = 'red';
    }
});

// Menangani pengiriman form registrasi
document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const message = document.getElementById('registerMessage');

    // Validasi registrasi
    if (password !== confirmPassword) {
        message.textContent = 'Password tidak cocok!';
        message.style.color = 'red';
        return;
    }

    // Simulasi pendaftaran berhasil
    message.textContent = 'Registrasi berhasil! Silakan login.';
    message.style.color = 'green';

    // Reset form
    document.getElementById('registerForm').reset();
});

// Event listener untuk tautan
document.getElementById('showRegister').addEventListener('click', function(event) {
    event.preventDefault();
    showRegister();
});

document.getElementById('showLogin').addEventListener('click', function(event) {
    event.preventDefault();
    showLogin();
});
