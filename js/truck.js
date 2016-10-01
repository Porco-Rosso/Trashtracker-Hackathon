$(function () {

			function truck() {

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
					icon: 'http://maps.google.com/mapfiles/ms/icons/truck.png'
            		//animation: google.maps.Animation.DROP
				});
     }   
              
});