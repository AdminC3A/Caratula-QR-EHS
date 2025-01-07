function navigateTo(process) {
    const routes = {
        entradas: "https://turepositorio.com/entradas", // Cambia a la URL real
        salidas: "https://turepositorio.com/salidas",   // Cambia a la URL real
        credenciales: "https://turepositorio.com/credenciales", // Cambia a la URL real
        reportes: "https://turepositorio.com/reportes"  // Cambia a la URL real
    };

    // Redirigir al proceso correspondiente
    if (routes[process]) {
        window.location.href = routes[process];
    } else {
        console.error("Ruta no encontrada:", process);
    }
}
