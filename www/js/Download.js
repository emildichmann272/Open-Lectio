var xhttp = new XMLHttpRequest();
var list = [];
var IDs = [];
var loaded = false;

function download(url) {
    xhttp.open("GET", url, true);
    xhttp.send();
}

function gymlist() {
    var wtf = new download("http://www.lectio.dk/lectio/login_list.aspx");
    xhttp.onreadystatechange = function () {
    	if (this.readyState === 4 && this.status === 200) {
        var html = $.parseHTML(this.responseText);
		var gyms = $(html).find("a");
		$(gyms).each(function(i, gym){
			list.push(gym.getAttribute("href").replace("/lectio/", "").replace("/default.aspx", "")+"=="+gym.text);
		})
		loaded = true;
		};
    }
}

function search() {
    var dupe = false;
    var search = $("#entrySearch").val();
    IDs = [];
    
	if(download && list != null && search != null) {
       for (var i = 0; i < list.length; i++) {
            var current = list[i].split("==");
            var patt = new RegExp(search, "i");
            if (patt.test(current[1])) { //calls on match
                IDs.push(current); //sets the ID of the match into StringArray
                //console.log(current);
            }
        }
    }
}