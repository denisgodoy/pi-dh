const qr = require('qr-image');

const QrCodeService = {
    qrCode: (data) => {
    const qrcode = qr.image(data, {type: 'svg'});
    return qrcode;
  }
};

module.exports = QrCodeService;