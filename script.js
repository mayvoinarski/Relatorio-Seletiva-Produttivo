var map = L.map('mapid').setView([-22.96070000,-47.05390000], 5);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([-25.42942, -49.29094],1150).addTo(map)
    .bindPopup('Produttivo, Curitiba.');

/* Não foi possível encontrar outros endereços da empresa na base de dados do Google ou Google Maps.
    Logo, os endereços a seguir são fictícios. 
*/

L.marker([ -22.96070000,-47.05390000 ]).addTo(map)
    .bindPopup('Produttivo, Campinas');

L.marker([ -23.7684, -53.3065 ]).addTo(map)
    .bindPopup('Produttivo, Umuarama');