# Sistema de Autenticación con Firebase y Vanilla JS



Este proyecto es una implementación limpia y funcional de un sistema de autenticación de usuarios, construido desde cero utilizando solo tecnologías web fundamentales y Firebase para el backend. Demuestra cómo crear un flujo de login seguro y rutas protegidas en un sitio web estático.

**[Ver Demo en Vivo ](https://loginfuncionalfirebase.netlify.app/) **

---


##  Características Principales

-   **Autenticación de Usuarios:** Formulario de inicio de sesión seguro que se conecta con el servicio de Firebase Authentication.
-   **Rutas Protegidas:** La página de bienvenida (`validado.html`) solo es accesible para usuarios que han iniciado sesión correctamente. Los usuarios no autenticados son redirigidos.
-   **Manejo de Errores Específico:** Mensajes de error claros y amigables para el usuario, indicando si el problema es un email no registrado, una contraseña incorrecta, etc.
-   **Flujo de Cierre de Sesión:** Funcionalidad para que el usuario pueda cerrar su sesión de forma segura.
-   **Diseño Limpio y Responsivo:** Una interfaz de usuario sencilla y adaptable a distintos dispositivos.
-   **Despliegue sin Servidor:** Proyecto 100% funcional desplegado en una plataforma de hosting estático como Netlify.

---

##  Tecnologías y Herramientas

-   **Frontend:**
    -   HTML5
    -   CSS3
    -   **Vanilla JavaScript (ES6+):** Todo el manejo del DOM y la lógica de la aplicación están escritos en JavaScript puro, sin frameworks ni librerías externas.
-   **Backend como Servicio (BaaS):**
    -   [Firebase Authentication](https://firebase.google.com/docs/auth)

---

## 📂 Estructura del Proyecto

El proyecto está organizado de una manera lógica para facilitar el despliegue y el mantenimiento:

-   `index.html`: Se encuentra en la raíz para ser el punto de entrada principal del sitio.
-   `/pages`: Contiene las páginas secundarias como la de bienvenida (`validado.html`) y la de error (`error.html`).
-   `/css`, `/js`, `/img`: Carpetas en la raíz que contienen todos los recursos estáticos (estilos, scripts e imágenes).

---

##  Cómo Ejecutar este Proyecto Localmente

Si quieres probar o modificar este proyecto en tu propia máquina, sigue estos pasos:

1.  **Clona el repositorio:**
    ```bash
    git clone https://github.com/TU_NOMBRE_DE_USUARIO/firebase-auth-vanillajs.git
    ```
    *(Reemplaza con tu usuario y el nombre de tu repositorio)*

2.  **Navega a la carpeta del proyecto:**
    ```bash
    cd firebase-auth-vanillajs
    ```

3.  **Configura tus credenciales de Firebase:**
    -   Ve a la carpeta `js/config/`.
    -   Crea tu propio archivo `firebase-config.js` basado en el siguiente modelo y añade las credenciales de **tu propio proyecto de Firebase**.

    ```javascript
    // js/config/firebase-config.js

    const firebaseConfig = {
      apiKey: "TU_API_KEY",
      authDomain: "TU_AUTH_DOMAIN",
      projectId: "TU_PROJECT_ID",
      storageBucket: "TU_STORAGE_BUCKET",
      messagingSenderId: "TU_MESSAGING_SENDER_ID",
      appId: "TU_APP_ID"
    };

    // Inicializar Firebase
    firebase.initializeApp(firebaseConfig);
    ```

4.  **Abre `index.html`:**
    -   Simplemente abre el archivo `index.html` en tu navegador web. Para una mejor experiencia de desarrollo, puedes usar una extensión como "Live Server" en Visual Studio Code.

¡Y eso es todo! Ahora puedes probar el flujo de autenticación en tu entorno local.
```

---
