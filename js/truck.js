$(function () {

  function calcRoute() {
  	 var directionDisplay;
      var directionsService = new google.maps.DirectionsService(); 
                directionsDisplay = new google.maps.DirectionsRenderer();
                directionsDisplay.setMap(map);
                directionsDisplay.setPanel(document.getElementById("directionsPanel"));	
      var start = document.getElementById("routeStart").value;
      var end = "40.437660, -3.681622";
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