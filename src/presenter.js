import esBisiesto from './esBisiesto.js';

document.getElementById('bisiesto-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const anio = parseInt(document.getElementById('anio').value);
  const resultado = esBisiesto(anio);
  document.getElementById('bisiesto-result').innerText = resultado
    ? `${anio} es un año bisiesto.`
    : `${anio} no es un año bisiesto.`;
});
