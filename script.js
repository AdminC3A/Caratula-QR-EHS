async function validateCode(decodedText) {
  const response = await fetch(`https://script.google.com/macros/s/AKfycbxEbCiZ_uuzfB0hWTy-jof4b1DSu_Lu0zoquUwF53ryXfpbaWAV4KjDC/exec?code=${decodedText}`);
  const data = await response.json();
  document.getElementById("result").textContent = data.isValid ? "Código Aceptado" : "Código No Válido";
}

// Configuración del lector de QR
const scanner = new Html5QrcodeScanner("reader", { fps: 10, qrbox: 250 });

scanner.render(
  (decodedText) => {
    validateCode(decodedText); // Llama a la función para validar el código
  },
  (errorMessage) => {
    document.getElementById("camera-error").style.display = "block"; // Muestra el mensaje de error
    document.getElementById("activate-camera").style.display = "inline-block"; // Muestra el botón
    console.error("Error de cámara:", errorMessage);
  }
);

// Función para activar la cámara manualmente
function startCamera() {
  const scanner = new Html5QrcodeScanner("reader", { fps: 10, qrbox: 250 });
  scanner.render(
    (decodedText) => {
      validateCode(decodedText); // Procesa el QR escaneado
    },
    (errorMessage) => {
      console.error("Error de cámara:", errorMessage);
    }
  );
  document.getElementById("activate-camera").style.display = "none"; // Oculta el botón después de activarlo
}
