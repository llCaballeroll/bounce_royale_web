// Bounce Royale: botón de descarga inteligente.
// La página funciona completa sin este archivo; solo ajusta enlaces según el teléfono.
(function () {
  var IOS_URL = 'https://apps.apple.com/app/id6761583939';
  var ANDROID_URL = 'https://play.google.com/store/apps/details?id=com.luiscaballero.bounceroyale';

  var ua = navigator.userAgent || '';
  var isAndroid = /android/i.test(ua);
  var isIOS = /iPad|iPhone|iPod/.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  var mine = isIOS ? IOS_URL : isAndroid ? ANDROID_URL : '';

  // "Descargar" lleva directo a la tienda del teléfono; en computadora baja a las insignias.
  if (mine) {
    document.querySelectorAll('[data-smart-download]').forEach(function (btn) {
      btn.href = mine; btn.target = '_blank'; btn.rel = 'noopener';
    });
  }

  // En Android, Google Play va primero.
  if (isAndroid) {
    document.querySelectorAll('.stores').forEach(function (row) {
      var play = row.querySelector('[data-store="android"]');
      if (play) row.prepend(play);
    });
  }
})();
