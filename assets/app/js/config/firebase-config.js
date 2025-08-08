// ¡Estas credenciales son públicas por diseño! La seguridad se gestiona en la consola de Firebase.
const firebaseConfig = {
    apiKey: "AIzaSyB6N5m-UGK9C8aixP-CkGF08TD6e9QtGsU", // Reemplaza si generaste una nueva
    authDomain: "loginfuncionalalex.firebaseapp.com",
    projectId: "loginfuncionalalex",
    storageBucket: "loginfuncionalalex.appspot.com",
    messagingSenderId: "747517380503",
    appId: "1:747517380503:web:aeab968af774264611a6d2"
};

// Mensaje de depuración para confirmar que este archivo se ejecuta
console.log("Cargando configuración de Firebase...");

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);

// Mensaje de confirmación
console.log("¡Firebase inicializado con éxito!");