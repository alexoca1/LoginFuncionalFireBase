console.log('entrando en login');
// js/auth/login.js

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    
    // Si no estamos en una página con el formulario de login, no hacemos nada.
    if (!loginForm) return;
    
    loginForm.addEventListener('submit', (e) => {
        // Prevenir que el formulario se envíe de la forma tradicional.
        e.preventDefault();
        
        const email = document.querySelector('.email').value;
        const password = document.querySelector('.password').value;
        
        // Usar Firebase para intentar iniciar sesión.
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                // SI EL LOGIN ES EXITOSO:
                // Redirigir a la página de 'validado.html' dentro de la carpeta 'public'.
                window.location.href = '../LoginFuncional - Firebase/assets/app/pages/validado.html';
            })
            .catch((error) => {
                // SI EL LOGIN FALLA:
                // Redirigir a la página de 'error.html' dentro de la carpeta 'public',
                // pasando el código de error en la URL.
                window.location.href = '../LoginFuncional - Firebase/assets/app/pages/error.html?code=' + encodeURIComponent(error.code);
            });
    });
});