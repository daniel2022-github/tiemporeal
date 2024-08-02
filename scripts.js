function updateTime() {
  const now = new Date();
  const time = now.toLocaleTimeString();
  const date = now.toLocaleDateString();
  document.getElementById("time").textContent = `Hora: ${time}`;
  document.getElementById("date").textContent = `Fecha: ${date}`;
}

function updateLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    document.getElementById("location").textContent =
      "Geolocalización no es soportada por este navegador.";
  }
}

function showPosition(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  document.getElementById(
    "location"
  ).textContent = `Ubicación: Latitud ${lat.toFixed(2)}, Longitud ${lon.toFixed(
    2
  )}`;
}

// Actualizar la hora y fecha cada segundo
setInterval(updateTime, 1000);

// Llamar a updateTime al cargar la página para mostrar la hora inmediatamente
updateTime();

// Obtener la ubicación al cargar la página
updateLocation();
