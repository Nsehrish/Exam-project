// Initialize and add the map
function initMap() {
  // The location of Billum Friskole
  var billumskole = {lat: 55.609352, lng: 8.31839};
  // The map centered
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 9, center: billumskole});
  // The marker
  var marker = new google.maps.Marker({position: billumskole, map: map});
}
