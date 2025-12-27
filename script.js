function navigateTo(process) {
    const routes = {
        entradas: "https://cta-qracceso2026-2565.netlify.app/", // Cambia a la URL real
        salidas: "https://exitc3aeleqrquivira.netlify.app",   // Cambia a la URL real
        credenciales: "https://idcasatresaguas.netlify.app", // Cambia a la URL real
        reportes: "https://c3a-reportes-bos.netlify.app"  // Cambia a la URL real
    };

    // Redirigir al proceso correspondiente
    if (routes[process]) {
        window.location.href = routes[process];
    } else {
        console.error("Ruta no encontrada:", process);
    }
}



