// input to JSON storage -------------------------------------------------------
function affirm() {
  var nam = document.querySelector("#name");
  var mal = document.querySelector("#email");
  var tel = document.querySelector("#phone");
  var msg = document.querySelector("#msg");

  var currentData = [nam.value, mal.value, tel.value, msg.value];

  var jsonData = JSON.stringify(currentData);
  localStorage.setItem("collectedData", jsonData);

// snackbar on send button -----------------------------------------------------

  // locating and assigning "message" id to x
  var x = document.getElementById("message");
  // Adding the "show" class to x (#message)
  x.className = "show";
  // After 3 seconds, run function
  setTimeout(
    // remove ".show" from x
    function() {
      x.className = x.className.replace("show", "");
    }
    , 6000);
};
// googlemaps ------------------------------------------------------------------
// Initialize and add the map
function initMap() {
  // The location of Billum Friskole
  var billumskole = {lat: 55.609352, lng: 8.31839};
  // The map centered
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 9, center: billumskole});
  // The marker
  var marker = new google.maps.Marker({position: billumskole, map: map});
};
