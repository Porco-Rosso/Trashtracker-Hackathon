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

<<<<<<< Updated upstream
				var marker = new google.maps.Marker({
					position: maporigin,
					map: map,
				});
=======
        
        var infowindow = new google.maps.InfoWindow();        
        var marker, i;
        for (i = 0; i < placemarkers.length; i++) {  
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(marcadores[i][1], marcadores[i][2]),
                map: map
            });
            google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infowindow.setContent(marcadores[i][0]);
                infowindow.open(map, marker);
            }
        })(marker, i));
      }


    }
>>>>>>> Stashed changes

				var marker, i;

				for (i = 0; i < placemarkers.length; i++) {
					marker = new google.maps.Marker({
						position: new google.maps.LatLng(placemarkers[i][1], placemarkers[i][2]),
						map: map
					});
				}




				}

				google.maps.event.addDomListener(window, 'load', initMap);
			});