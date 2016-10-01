$(function () {

			function initMap() {

				var maporigin = new google.maps.LatLng(40.4379571, -3.6896047);

				var mapCanvas = document.getElementById('map');
				var mapOptions = {
					center: maporigin,
					zoom: 16,
					panControl: false,
					mapTypeId: google.maps.MapTypeId.ROADMAP
				};
				var map = new google.maps.Map(mapCanvas, mapOptions);


				var marker = new google.maps.Marker({
					position: maporigin,
					map: map,
				});
        
                var infowindow = new google.maps.InfoWindow();        
                var marker, i;

				for (i = 0; i < placemarkers.length; i++) {
                    
                    var marker_name  = placemarkers[i][0];
                    var marker_lat   = placemarkers[i][1];
                    var marker_lng   = placemarkers[i][2];
                    var marker_state = placemarkers[i][3];

					marker = new google.maps.Marker({
						position: new google.maps.LatLng(marker_lat, marker_lng),
						map: map
					});
				
                google.maps.event.addListener(marker, 'click', (function(marker, i) {
                    return function() {
                        infowindow.setContent(marker_name + '<br/>' + marker_state);
                        //infowindow.setContent(marker_state);
                        infowindow.open(map, marker);
                    }
                })(marker, i));
                }	
        }
		google.maps.event.addDomListener(window, 'load', initMap);
});
