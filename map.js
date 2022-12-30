x = navigator.geolocation;
x.getCurrentPosition(success, failure);
function success(position) {
    let newLat = position.coords.latitude;
    let newLong = position.coords.longitude;
    let coords = new google.maps.LatLng(newLat,newLong);

    let mapOption = {
        zoom:9,
        center:coords,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    let map = new google.maps.Map(document.getElementById("map"), mapOption);
    let marker = new google.maps.Marker({map:map, position:coords});
}
success(position);
function failure() {}