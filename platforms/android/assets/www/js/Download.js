function download(url) {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, true);
    xhttp.send();
	xhttp.onreadystatechange = function() {
    	if (this.readyState == 4 && this.status == 200) {
			document.getElementById("entrySearch").text = this.responseText;
			return this.responseXML;
			});
    	}
  	};
}

function gymlist() {
	var html = new download("http://www.lectio.dk/lectio/login_list.aspx")
}