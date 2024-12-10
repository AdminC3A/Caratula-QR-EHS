// Función que se ejecuta al escanear con éxito un código
function onScanSuccess(decodedText, decodedResult) {
    // Actualiza el contenido del elemento con el resultado del escaneo
    document.getElementById('scan-result').innerText = `Código detectado: ${decodedText}`;
    // Detiene el escaneo después de un resultado exitoso
    html5QrcodeScanner.clear();
}

// Función que se ejecuta al fallar el escaneo
function onScanFailure(error) {
    // Se puede ignorar o manejar el error según sea necesario
    console.warn(`Error de escaneo: ${error}`);
}

// Inicializa el escáner con configuraciones específicas
const html5QrcodeScanner = new Html5QrcodeScanner(
    "reader", // ID del elemento donde se renderizará el escáner
    { fps: 10, qrbox: { width: 250, height: 250 } }, // Configuraciones de escaneo
    false // Modo verboso desactivado
);
// Renderiza el escáner y establece las funciones de éxito y fallo
html5QrcodeScanner.render(onScanSuccess, onScanFailure);
