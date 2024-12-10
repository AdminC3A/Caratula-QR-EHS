function onScanSuccess(decodedText, decodedResult) {
    // Manejar el texto decodificado
    document.getElementById('scan-result').innerText = `Código detectado: ${decodedText}`;
    // Detener el escaneo después de un resultado exitoso
    html5QrcodeScanner.clear();
}

function onScanFailure(error) {
    // Ignorar errores de escaneo y continuar
    console.warn(`Error de escaneo: ${error}`);
}

const html5QrcodeScanner = new Html5QrcodeScanner(
    "reader",
    { fps: 10, qrbox: { width: 250, height: 250 } },
    false
);
html5QrcodeScanner.render(onScanSuccess, onScanFailure);
