# MapBox

a web application that allows users to search for a specified city on a map using HTML, CSS and JavaScript.

Mapbox api where used to get the map on the HTML page.
- by clicking on: https://www.mapbox.com/install/javascript and chosing to use the Mapbox CDN.
![image](https://user-images.githubusercontent.com/107326194/210187889-1ec74a2b-e12d-4630-8820-b5cf0e246758.png)

- after that all we need to do is to include the GL JS JavaScript and CSS files in the <head> of the HTML file, then we click next.
![image](https://user-images.githubusercontent.com/107326194/210187912-0c4f4af6-6845-4063-86d1-7c58e8c0e183.png)

- final step is to add this JavaScript code into the body of the HTML file.
(I just simply copied the code into the script.js file, and then I include it in the HTML file just to make my code more clean and easy to deal with).
![image](https://user-images.githubusercontent.com/107326194/210187945-bb41a55f-9dbb-44cb-a8b7-00d60d9ba4fe.png)

This is the map style and how it looks at the web page.
![image](https://user-images.githubusercontent.com/107326194/210188004-fd36c4cf-b081-4909-9385-ad7b29ef1a24.png)
________________________________________________________________________________________________________________

- after installing Mapbox CDN, we can choose to add a feature to the map which is "Add controls"
(it is just to provide the ability to zoom in or out and to rotate the map)
![image](https://user-images.githubusercontent.com/107326194/210188119-f11437f9-0a5e-4fc8-95c2-180920f154f7.png)
________________________________________________________________________________________________________________

- Then I added this js code in order to get the search box for the location
map.addControl(
    new MapboxGeocoder({
        accessToken: 'pk.eyJ1IjoibWFoYWZkaGFoIiwiYSI6ImNsY2RocWFqMTJ1czQzcHQ4eG9ubjRzd3EifQ.DiDKPn23Z4GkvKJlQtw2vA',
        mapboxgl: mapboxgl,
        marker: { color: 'red' }        
    })
)
