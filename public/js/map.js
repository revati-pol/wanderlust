mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: "mapbox://styles/mapbox/streets-v12",
    center: listing.geometry.coordinates, // starting position [lng, lat]. Note that lat must be set between -90 and 90
    zoom: 10 // starting zoom
});

const marker = new mapboxgl.Marker({color: "red"})
.setLngLat(listing.geometry.coordinates)  //Listing.geometry.coordinates
.setPopup(
    new mapboxgl.Popup({offset: 25}).setHTML(
        `<h4> ${listing.title} </h4> <p> Exact location provided after booking. </p>`
    )
)
.addTo(map);