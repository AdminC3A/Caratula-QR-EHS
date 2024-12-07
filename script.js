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
