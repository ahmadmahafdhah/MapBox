// MapBox access token
mapboxgl.accessToken = 'pk.eyJ1IjoibWFoYWZkaGFoIiwiYSI6ImNsY2RocWFqMTJ1czQzcHQ4eG9ubjRzd3EifQ.DiDKPn23Z4GkvKJlQtw2vA';

// Add Map Box to the web page 
const map = new mapboxgl.Map({
    container: 'map', // container ID from html file
    // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: [35.930359, 31.963158], // starting position: putting longitude and latitude of Amman
    zoom: 9 // starting zoom
});

// Add search box to the map
map.addControl(
    new MapboxGeocoder({
        accessToken: 'pk.eyJ1IjoibWFoYWZkaGFoIiwiYSI6ImNsY2RocWFqMTJ1czQzcHQ4eG9ubjRzd3EifQ.DiDKPn23Z4GkvKJlQtw2vA',
        mapboxgl: mapboxgl,
        marker: { color: 'red' }        
    })
)

// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());