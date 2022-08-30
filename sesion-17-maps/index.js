let marker, map;
// Initialize and add the map
function initMap() {
    navigator.geolocation.lat
    const posicion1 = {lat:51.506485,lng:-0.088608};
    const posicion2 = {lat:39.86232,lng:-4.0694704};
    const posicion3 = {lat:45.6604208,lng:10.4136534};
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: posicion1,
    });
    const marker = new google.maps.Marker({
        position : posicion1,
        map: map,
        title:"London Bridge"
    })
    const marker2 = new google.maps.Marker({
        position : posicion2,
        map: map,
        title:"Toledo"
    })
    const marker3 = new google.maps.Marker({
        position : posicion3,
        map: map,
        title:"Lago di garda"
    })

    // Obtener la geolocalizacion
    //marker.setPosition({lat, lng})
    geoPosition()
}

function geoPosition() {
    if(navigator.geolocation){
        const geoloc = navigator.geolocation
        const options = { timeout : 60000 }
        const watchPos = geoloc.watchPosition(centraMapa, onError, options)
    } else {
        alert("Tu navegador no adminte geolocalizacion");
    }
}

function centraMapa(position){
    const nuevaPos = {
        lat : position.coords.latitude,
        lng : position.coords.longitude
    }
    console.log(nuevaPos)
    marker.setPosition(nuevaPos)
    map.setCenter(nuevaPos)
}

function onError(error) {
    alert("Tienes que dar permiso a la geolocalizacion")
    console.error(error)
}

window.initMap = initMap;