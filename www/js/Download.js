var xhttp = new XMLHttpRequest();
var list = [];
var download = false;

function download(url) {
    xhttp.open("GET", url, true);
    xhttp.send();
  	};

function gymlist() {
    new download("http://www.lectio.dk/lectio/login_list.aspx");
    xhttp.onreadystatechange = function () {
    	if (this.readyState === 4 && this.status === 200) {
        var html = $.parseHTML(this.responseText);
		var gyms = $(html).find("a");
		$(gyms).each(function(i, gym){
			list.push(gym.getAttribute("href").replace("/lectio/", "").replace("/default.aspx", "")+"=="+gym.text);
		})
		download = true;
		};
    }
}

function search() {
	if(download) {
		
	}
}

