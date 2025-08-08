document.addEventListener('DOMContentLoaded', () => {
    // Crear un overlay de carga que no afecte al contenido existente
    const loaderOverlay = document.createElement('div');
    loaderOverlay.id = 'auth-loader-overlay';
    loaderOverlay.style.position = 'fixed';
    loaderOverlay.style.top = '0';
    loaderOverlay.style.left = '0';
    loaderOverlay.style.width = '100%';
    loaderOverlay.style.height = '100%';
    loaderOverlay.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
    loaderOverlay.style.display = 'flex';
    loaderOverlay.style.flexDirection = 'column';
    loaderOverlay.style.justifyContent = 'center';
    loaderOverlay.style.alignItems = 'center';
    loaderOverlay.style.zIndex = '9999';
    loaderOverlay.style.gap = '20px';
    loaderOverlay.style.fontFamily = "'Roboto', sans-serif'";
    
    loaderOverlay.innerHTML = `
        <div class="loader" style="border: 5px solid #f3f3f3; border-top: 5px solid #6e8efb; border-radius: 50%; width: 50px; height: 50px; animation: spin 1s linear infinite;"></div>
        <style>
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
        </style>
        <p style="color: #555; font-size: 18px;">Verificando tu sesión...</p>
    `;
    
    // Añadir el overlay al body SIN reemplazar el contenido
    document.body.appendChild(loaderOverlay);

    // Esperar a que Firebase verifique el estado de autenticación
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
        // Detener el listener para evitar múltiples ejecuciones
        unsubscribe();
        
        // Eliminar el overlay de carga
        if (document.getElementById('auth-loader-overlay')) {
            document.getElementById('auth-loader-overlay').remove();
        }
        
        if (user) {
            // Crear un contenedor específico para el botón de cierre de sesión
            if (!document.getElementById('logout-container')) {
                const logoutContainer = document.createElement('div');
                logoutContainer.id = 'logout-container';
                document.body.appendChild(logoutContainer);
                
                const logoutBtn = document.createElement('button');
                logoutBtn.id = 'logout-btn';
                logoutBtn.textContent = 'Cerrar sesión';
                logoutContainer.appendChild(logoutBtn);
                
                logoutBtn.addEventListener('click', () => {
                    firebase.auth().signOut().then(() => {
                        window.location.href = '../../../index.html';
                    });
                });
            }
        } else {
            // No hay usuario autenticado - redirigir al login
            window.location.replace('../../../index.html');
        }
    }, (error) => {
        console.error("Error verificando autenticación:", error);
        
        // Eliminar el overlay de carga incluso si hay error
        if (document.getElementById('auth-loader-overlay')) {
            document.getElementById('auth-loader-overlay').remove();
        }
        
        window.location.replace('../../../index.html');
    });
});