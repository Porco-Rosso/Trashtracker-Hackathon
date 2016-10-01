
  var directionDisplay;
  var directionsService = new google.maps.DirectionsService();
  var directionsDisplay = new google.maps.DirectionsRenderer();

var mapCanvas = document.getElementById('map');
var maporigin = new google.maps.LatLng(40.432759, -3.681806);
var mapOptions = {
					center: maporigin,
					zoom: 15,
					panControl: false,
					mapTypeId: google.maps.MapTypeId.ROADMAP
				};
var map = new google.maps.Map(mapCanvas, mapOptions);

    directionsDisplay.setMap(map);
    directionsDisplay.setPanel(document.getElementById("directionsPanel"));


  function calcRoute() {

    var start = "40.4379571, -3.6896047";	
		            var first = new google.maps.LatLng(40.436257, -3.685320);
                var second = new google.maps.LatLng(40.432049, -3.678102);
								var third = new google.maps.LatLng(40.425209, -3.684310);
		var end = "40.429244, -3.686070";
		

		
		
    var request = {
      origin:start,
      destination:end,
			waypoints: [{location: first, stopover: true},
									{location: second, stopover: true},
									{location: third, stopover: true}],
      travelMode: google.maps.DirectionsTravelMode.DRIVING,
			optimizeWaypoints: false
    };
    directionsService.route(request, function(response, status) {
      if (status == google.maps.DirectionsStatus.OK) {
        directionsDisplay.setDirections(response);
      }
			else{console.log("help!");}
    });
  }
                     