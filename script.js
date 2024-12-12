document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("dataForm");
    const responseMessage = document.getElementById("responseMessage");

    // URL de tu Web App en Google Apps Script
    const webAppURL = "https://script.google.com/macros/s/AKfycbxTRHSTYWJu0nRwUgWSNM5sKkFTGVyn1YxQvKpfPL9rIjuCXFtf96n8RfVQClMlPhxHaw/exec"; // Reemplázala con la URL de tu Web App

    form.addEventListener("submit", async (event) => {
        event.preventDefault(); // Evita el envío del formulario por defecto

        // Capturar los datos del formulario
        const data = {
            Nombre: document.getElementById("nombre").value.trim(),
            Puesto: document.getElementById("puesto").value.trim(),
            NSS: document.getElementById("nss").value.trim(),
            FechaNacimiento: document.getElementById("fechaNacimiento").value.trim(),
            Empresa: document.getElementById("empresa").value.trim(),
            CodigoQR: document.getElementById("codigoQR").value.trim(),
        };

        try {
            // Enviar los datos al Web App
            await fetch(webAppURL, {
                method: "POST",
                mode: "no-cors", // Configuración para evitar problemas de CORS
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            // Mensaje de confirmación
            responseMessage.textContent = "Datos enviados correctamente. Verifica en Google Sheets.";
            responseMessage.style.color = "green";
        } catch (error) {
            console.error("Error al enviar los datos:", error);
            responseMessage.textContent = "No se pudo enviar la información. Revisa la consola.";
            responseMessage.style.color = "red";
        }
    });
});
