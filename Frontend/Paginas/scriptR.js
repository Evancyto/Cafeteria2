
const parametros = new URLSearchParams(window.location.search);

const nombre = parametros.get('nombre') || '';
const correo = parametros.get('correo') || '';
const producto = parametros.get('producto') || '';
const cantidad = parametros.get('cantidad') || '';
const tamano = parametros.get('tamano') || '';
const llevar = parametros.get('llevar') || 'No';
const observaciones = parametros.get('observaciones') || '';

document.getElementById('nombre').textContent = nombre;
document.getElementById('correo').textContent = correo;
document.getElementById('producto').textContent = producto;
document.getElementById('cantidad').textContent = cantidad;
document.getElementById('tamano').textContent = tamano;
document.getElementById('llevar').textContent = llevar;
document.getElementById('observaciones').textContent = observaciones;

document.getElementById('nombreInput').value = nombre;
document.getElementById('correoInput').value = correo;
document.getElementById('productoInput').value = producto;
document.getElementById('cantidadInput').value = cantidad;
document.getElementById('tamanoInput').value = tamano;
document.getElementById('llevarInput').value = llevar;
document.getElementById('observacionesInput').value = observaciones;

