$(function () {
    var html = "";
    // Do something with the returned Parse.Object values
    html += '<table class="table">';
    for (var i = 0; i < placemarkers.length; i++) {

      html += "<tr><td>" + placemarkers[i][0] + "</td>";
				html += "<td>" + placemarkers[i][1] + "</td>";
				html += "<td>" + placemarkers[i][2] + "</td>";
				html += "<td>" + placemarkers[i][3] + "</td>";
      html += "<td>" + placemarkers[i][4] + "</td></tr>";

    }

    html += '</table>';
//    document.body.innerHTML += html;
	$( "#trashtable" ).html(html)
});
