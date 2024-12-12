document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("dataForm");
    const responseMessage = document.getElementById("responseMessage");

    // URL de tu Web App en Google Apps Script
    const webAppURL = "https://script.google.com/a/macros/casatresaguas.com/s/AKfycbzLJHWf8qglQv4JJeR8a7SMS3YN9G6aE5PMvTVTWljiywR9kA3xNkdYuP9FkcfvcNIsmw/exec"; // Reemplázala con la URL del Web App generado

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
            const response = await fetch(webAppURL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            // Validar si la respuesta es del tipo JSON
            if (!response.ok) {
                throw new Error(`Error HTTP: ${response.status}`);
            }

            const result = await response.json();

            // Manejar la respuesta del servidor
            if (result.status === "success") {
                responseMessage.textContent = "Datos enviados correctamente a Google Sheets.";
                responseMessage.style.color = "green";
            } else {
                responseMessage.textContent = `Error: ${result.message}`;
                responseMessage.style.color = "red";
            }
        } catch (error) {
            console.error("Error al enviar los datos:", error);
            responseMessage.textContent = "No se pudo enviar la información. Revisa la consola.";
            responseMessage.style.color = "red";
        }
    });
});
