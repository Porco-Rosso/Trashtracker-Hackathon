$(function () {
	var html = "";
	// Do something with the returned Parse.Object values
	html += '<table class="table"><thead><tr><th>Name</th><th>Latitude</th><th>Longitude</th><th>Percentage full</th></tr></thead>';
	for (var i = 0; i < placemarkers.length; i++) {

		html += "<tr><td>" + placemarkers[i][0] + "</td>";
		html += "<td>" + placemarkers[i][1] + "</td>";
		html += "<td>" + placemarkers[i][2] + "</td>";
		if (placemarkers[i][3] > 79) {
			html += '<td><div class="progress"><div class="progress-bar progress-bar-striped progress-bar-danger" role="progressbar" style="min-width: 2em; width: ' + placemarkers[i][3] + '%;">' + placemarkers[i][3] + '%</div>';
		} else {

			if (placemarkers[i][3] > 69) {
				html += '<td><div class="progress"><div class="progress-bar progress-bar-striped progress-bar-warning" role="progressbar" style="min-width: 2em; width: ' + placemarkers[i][3] + '%;">' + placemarkers[i][3] + '%</div>';
			} else {
				html += '<td><div class="progress"><div class="progress-bar progress-bar-striped" role="progressbar" style="min-width: 2em; width: ' + placemarkers[i][3] + '%;">' + placemarkers[i][3] + '%</div>';
			}
		}
		
		var cumulative = '<div class="progress-bar progress-bar-striped cumulativeelement" style="min-width: 2em; width: '+ placemarkers[i][3]/placemarkers.length +'%"><span>'+placemarkers[i][3]+'</span>';
		
		$("#cumulativebar").append(cumulative);
		
	}
	html += '</table>';
	$("#trashtable").html(html)


});