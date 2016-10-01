$(function () {

  var directionDisplay;
  var directionsService = new google.maps.DirectionsService();
  function initialize() {
    var latlng = new google.maps.LatLng(51.764696,5.526042);
    directionsDisplay = new google.maps.DirectionsRenderer();
    var myOptions = {
      zoom: 14,
      center: latlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      mapTypeControl: false
    };
    var map = new google.maps.Map(document.getElementById("map_canvas"),myOptions);
    directionsDisplay.setMap(map);
    directionsDisplay.setPanel(document.getElementById("directionsPanel"));
    var marker = new google.maps.Marker({
      position: latlng, 
      map: map, 
      title:"My location"
    }); 
  }
  function calcRoute() {
    //var start = document.getElementById("routeStart").value;
    var start = orders[0]; //??
    var end = orders[]; //??
    var request = {
      origin:start,
      destination:end,
      travelMode: google.maps.DirectionsTravelMode.DRIVING
    };
    directionsService.route(request, function(response, status) {
      if (status == google.maps.DirectionsStatus.OK) {
        directionsDisplay.setDirections(response);
      }
    });
  }
                      
});