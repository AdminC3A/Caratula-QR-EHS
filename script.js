// Función para activar la cámara manualmente
function startCamera() {
    const scanner = new Html5QrcodeScanner("reader", { fps: 10, qrbox: 250 });
    scanner.render(
        (decodedText) => {
            console.log("QR Code:", decodedText);
            document.getElementById("result").textContent = `QR Code: ${decodedText}`;
        },
        (errorMessage) => {
            console.error("Error de cámara:", errorMessage);
        }
    );
    document.getElementById("activate-camera").style.display = "none"; // Oculta el botón después de activarlo
}
