var xhttp = new XMLHttpRequest();

function download(url) {
    xhttp.open("GET", url, true);
    xhttp.send();
  	};

function parse(item, index){
    console.log(item);
}

function gymlist() {
    new download("http://www.lectio.dk/lectio/login_list.aspx");
    xhttp.onreadystatechange = function () {
    	if (this.readyState === 4 && this.status === 200) {
        var html = $.parseHTML(this.responseText);
        console.log(html);
        html.forEach(parse)
	   };
    }
}