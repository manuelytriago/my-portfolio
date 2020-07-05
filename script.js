function myMap() {
var mapProp= {
  center:new google.maps.LatLng(26.170834,-80.272361),
  zoom:15,
};
var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
}