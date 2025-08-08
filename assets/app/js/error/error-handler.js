// Manejador de errores para la página de error
document.addEventListener('DOMContentLoaded', () => {
    // Obtener el código de error de la URL
    const urlParams = new URLSearchParams(window.location.search);
    const errorCode = urlParams.get('code');
    
    // Definir mensajes personalizados para diferentes códigos de error
    const errorMessages = {
        'auth/user-not-found': {
            title: 'Usuario no encontrado',
            message: 'El correo electrónico ingresado no está registrado. Por favor, verifica tus credenciales o crea una cuenta nueva.'
        },
        'auth/wrong-password': {
            title: 'Contraseña incorrecta',
            message: 'La contraseña ingresada es incorrecta. Por favor, verifica tus credenciales e intenta nuevamente.'
        },
        'auth/invalid-email': {
            title: 'Correo electrónico inválido',
            message: 'El formato del correo electrónico no es válido. Por favor, ingresa un correo electrónico válido.'
        },
        'auth/invalid-login-credentials': {
            title: 'Credenciales inválidas',
            message: 'El usuario o la contraseña son incorrectos. Por favor, verifica tus credenciales e intenta nuevamente.'
        },
        'auth/invalid-credential': {
            title: 'Credenciales inválidas',
            message: 'El usuario o la contraseña son incorrectos. Por favor, verifica tus credenciales e intenta nuevamente.'
        }
    };
    
    // Elementos del DOM
    const errorTitle = document.getElementById('error-title');
    const errorMessage = document.getElementById('error-message');
    
    // Actualizar el mensaje de error según el código
    if (errorCode && errorMessages[errorCode] && errorTitle && errorMessage) {
        errorTitle.textContent = errorMessages[errorCode].title;
        errorMessage.textContent = errorMessages[errorCode].message;
    }
    // Si no hay código de error específico, mostrar mensaje genérico
    else if (errorTitle && errorMessage) {
        errorTitle.textContent = 'Error de Autenticación';
        errorMessage.textContent = 'El usuario o la contraseña son incorrectos. Por favor, verifica tus credenciales e intenta nuevamente.';
    }
});