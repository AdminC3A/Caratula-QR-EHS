async function validateCode(decodedText) {
  const response = await fetch(`https://script.google.com/macros/s/AKfycbxEbCiZ_uuzfBohWTy-jof4blDSu_Lu0zoquUwF53ryXfphaWAV4KjDcZdIk10zfDbD/exec?code=${decodedText}`);
  const data = await response.json();
  document.getElementById('result').textContent = data.isValid ? "Código Aceptado" : "Código No Válido";
}

const scanner = new Html5QrcodeScanner("reader", { fps: 10, qrbox: 250 });

scanner.render(
  (decodedText) => {
    validateCode(decodedText); // Llama a la función para validar el código
  },
  (errorMessage) => {
    document.getElementById("camera-error").style.display = "block";
    console.error("Error de cámara:", errorMessage);
  }
);
function startCamera() {
  const scanner = new Html5QrcodeScanner("reader", { fps: 10, qrbox: 250 });
  scanner.render(
    (decodedText) => {
      validateCode(decodedText);
    },
    (errorMessage) => {
      console.error("Error de cámara:", errorMessage);
    }
  );
  document.getElementById("activate-camera").style.display = "none"; // Oculta el botón después de activarlo
}

// Muestra el botón si hay un error en la cámara automáticamente
scanner.render(
  (decodedText) => {
    validateCode(decodedText); // Procesa el QR escaneado
  },
  (errorMessage) => {
    document.getElementById("camera-error").style.display = "block"; // Muestra el mensaje de error
    document.getElementById("activate-camera").style.display = "inline-block"; // Muestra el botón
    console.error("Error de cámara:", errorMessage);
  }
);
