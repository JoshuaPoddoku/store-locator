var map;
var markers = [];
function initMap() {    
    var losAngeles = {
        lat: 34.063380,
        lng: -118.358080
    }

map = new google.maps.Map(document.getElementById('map'), {
    center: losAngeles,
    zoom: 8
});

var marker = new google.maps.Marker({
    position: losAngeles,
    map: map,
    title: 'Hello World!'
    });


    displayStores();
    showStoresMarkers();

}


function displayStores(){

    var storesHtml = "";

    stores.forEach(function(store, index){

        var address = store.addressLines;
        var phone =  store.phoneNumber;
        storesHtml+= `
    <div class="store-container">
        <div class="store-info">
            <div class="address">
            <span> ${address[0]}</span>
                   <span>${address[1]}</span>
            </div>
            <div class="phone-number">${phone}</div>
        </div>
            <div class="store-number-container">
                <div class="store-number">
                    ${index+1}
                </div>
            </div>
        </div>`
    });

    document.querySelector('.stores-list').innerHTML = storesHtml;

    
}


function showStoresMarkers(){
    var bounds = new google.maps.LatLngBounds();
    stores.forEach(function (store, index){
        var latlng = new google.maps.LatLng(
            stores.coordinates.latitude,
            stores.coordinates.longitude); 
        var name = store.name;
        var address = store.addressLines[0];
        createMarker(latlng, name, address);
        
})

bounds.extend(latlng);
}

function createMarker(latlng, name, address) {
    var html = "<b>" + name + "</b> <br/>" + address;
    var marker = new google.maps.Marker({
      map: map,
      position: latlng
    });
    // google.maps.event.addListener(marker, 'click', function() {
    //   infoWindow.setContent(html);
    //   infoWindow.open(map, marker);
    // });
    markers.push(marker);
  }
