$(function () {

			function initMap() {

				var maporigin = new google.maps.LatLng(40.432759, -3.681806);
				var trucklocation = new google.maps.LatLng(40.4379571, -3.6896047);

				var mapCanvas = document.getElementById('map');
				var mapOptions = {
					center: maporigin,
					zoom: 15,
					panControl: false,
					mapTypeId: google.maps.MapTypeId.ROADMAP
				};
				
        var map = new google.maps.Map(mapCanvas, mapOptions);

				var truck = new google.maps.Marker({
				position: trucklocation,
				map: map,
				icon: 'images/truck-logo-small.png'
                });
        


                var infowindow = new google.maps.InfoWindow();        
                var marker, i;
				for (i = 0; i < placemarkers.length; i++) {                   
                    //var marker_name  = placemarkers[i][0];
                    //var marker_lat   = placemarkers[i][1];
                    //var marker_lng   = placemarkers[i][2];
                    //var marker_state = placemarkers[i][3];
                    //var marker_color = placemarkers[i][4];

					marker = new google.maps.Marker({
						position: new google.maps.LatLng(placemarkers[i][1], placemarkers[i][2]),
            icon: 'http://maps.google.com/mapfiles/ms/icons/'+placemarkers[i][4]+'-dot.png',
						map: map
					});
				
                    google.maps.event.addListener(marker, 'click', (function(marker, i) {
                        return function() {
                            infowindow.setContent(placemarkers[i][0]+ '<br/>' + placemarkers[i][3] +'%');
                            infowindow.open(map, marker);
                        }
                    
                        })(marker, i));
                
                }

            }

		google.maps.event.addDomListener(window, 'load', initMap);
});
