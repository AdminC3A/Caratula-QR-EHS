// URL del Google Apps Script
const postUrl = "https://script.google.com/macros/s/AKfycbwSSYR7qq4vHyvqPOV_ThS2cWSGfitklgGE1_cnJx4BnHq-Z8rL_NhaYJ9nQSLObOn8/exec";

// Función para enviar el POST
function sendPost() {
    const qrCode = "A7DhWBBm"; // Código QR simulado
    const result = "Permitido"; // Resultado simulado
    const timestamp = new Date().toISOString();

    fetch(postUrl, {
        method: "POST",
        mode: "no-cors", // Permitir envío sin verificar la respuesta
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            qrCode: qrCode,
            result: result,
            timestamp: timestamp,
        }),
    })
    .then(() => {
        // Mostrar mensaje indicando que la solicitud fue enviada
        document.getElementById("result").innerText = "Registro enviado. Verifica en Google Sheets.";
    })
    .catch((error) => {
        // Mostrar error en caso de fallo
        document.getElementById("result").innerText = "Error al conectar.";
        console.error("Error al enviar la solicitud:", error);
    });
}

// Agregar evento al botón
document.getElementById("sendPost").addEventListener("click", sendPost);
