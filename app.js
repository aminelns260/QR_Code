document.getElementById('generate-qr').addEventListener('click', generateQRCode);

function generateQRCode() {
    const qrText = document.getElementById('qr-text').value;
    const qrCodeDiv = document.getElementById('qr-code');

    // Videz l'élément qrCodeDiv avant de générer un nouveau QR Code
    qrCodeDiv.innerHTML = '';

    if (qrText) {
        const qrCode = new QRCode(qrCodeDiv, {
            text: qrText,
            width: 256,
            height: 256,
            colorDark: '#000000',
            colorLight: '#ffffff',
            correctLevel: QRCode.CorrectLevel.H,
        });
    } else {
        alert('Veuillez entrer un texte à transformer en QR Code.');
    }
}
