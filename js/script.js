// ini file js
function celsiusFahrenheit() {
  let input = document.getElementById('celsius').value;
  let hasil = (input * 9) / 5 + 32;
  document.getElementById('fahrenheit').value = hasil;
  document.getElementById('metode').innerHTML = document
    .getElementById('metode')
    .innerHTML.replace('S', input);
  document.getElementById('metode').innerHTML = document
    .getElementById('metode')
    .innerHTML.replace('S', hasil);
}
function fahrenheitCelsius() {
  let input = document.getElementById('fahrenheit').value;
  let hasil = ((input - 32) * 5) / 9;
  document.getElementById('celsius').value = hasil;
  document.getElementById('metode').innerHTML = document
    .getElementById('metode')
    .innerHTML.replace('S', input);
  document.getElementById('metode').innerHTML = document
    .getElementById('metode')
    .innerHTML.replace('S', hasil);
}
