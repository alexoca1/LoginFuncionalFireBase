# Sistema de Autenticación con Firebase y Vanilla JS



Este proyecto es una implementación limpia y funcional de un sistema de autenticación de usuarios, construido desde cero utilizando solo tecnologías web fundamentales y Firebase para el backend.

**Importante:** El repositorio utiliza dos ramas principales para gestionar las diferencias entre el entorno de desarrollo local y el despliegue en producción. Por favor, lee la sección **"Estrategia de Ramas"** para más detalles.

** [Ver Demo en Vivo 🚀](https://loginfuncionalfirebase.netlify.app/) **

---

##  Usuarios de Prueba

Puedes probar el flujo de inicio de sesión con los siguientes usuarios de demostración, que han sido creados en el proyecto de Firebase:

-   **Email:** `usuario1@test.com`
-   **Contraseña:** `123456`

-   **Email:** `usuario2@test.com`
-   **Contraseña:** `123456`

---

##  Estrategia de Ramas: Local vs. Despliegue

Este proyecto utiliza una estrategia de dos ramas principales debido a las diferencias en la estructura de archivos y la resolución de rutas entre un servidor local (como XAMPP) y la plataforma de despliegue (Netlify).

### Rama `main` (Para Desarrollo Local)
-   **Propósito:** Diseñada para funcionar perfectamente en un entorno de desarrollo local.
-   **Estructura:** Mantiene los recursos (`css`, `js`, etc.) dentro de una carpeta `assets/` para una mejor organización durante el desarrollo.
-   **Uso:** **Usa esta rama si clonas el proyecto para experimentar en tu propia computadora.**

### Rama `NetiflyDeploy` (Para Despliegue en Netlify)
-   **Propósito:** Contiene la estructura de archivos exacta que Netlify necesita para un despliegue exitoso.
-   **Estructura:** Reorganiza el proyecto para que todos los recursos (`css`, `js`, `pages`, etc.) estén en la **raíz del repositorio**, junto al `index.html`.
-   **Uso:** **Esta es la rama que Netlify debe tener configurada como "Production branch" para que el sitio en vivo funcione correctamente.**

---

##  Tecnologías y Herramientas

-   **Frontend:** HTML5, CSS3, **Vanilla JavaScript (ES6+)**
-   **Backend como Servicio (BaaS):** Firebase Authentication
-   **Despliegue:** Netlify
