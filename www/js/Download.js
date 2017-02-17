var list = [];
var loaded = false;
var alphabet = "abcdefghijklmnopqrstuvwxyzæøå";
var IDs = [];
var gym = false;

function download(url) {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, true);
    xhttp.send();
    return xhttp;
}

function gymlist() {
    var xhttp = new download("http://www.lectio.dk/lectio/login_list.aspx");
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

function namelist(ID) {
    var search = $("#entrySearch").val().split("")[0];
	var request = new download("https://www.lectio.dk/lectio/"+ID+"/FindSkema.aspx?type=elev&forbogstav="+search)
    request.onreadystatechange = function () {
       if (this.readyState === 4 && this.status === 200) {
           var html = $.parseHTML(this.responseText);
           var content = $("#m_Content_listecontainer", html);
           console.log(content);
           var gyms = $(content).find("a");
		   console.log(gyms);
	       $(gyms).each(function(i, gym){
	       list.push(gym.getAttribute("href").replace("/lectio/"+ID+"/SkemaNy.aspx?type=elev&elevid=", "")+"=="+gym.text);
		   })
        console.log(list);
        }
        loaded = true;
    }
}

function search() {
    var dupe = false;
    var search = $("#entrySearch").val();
    IDs = [];
    
	if(loaded && list != null && search != null) {
       for (var i = 0; i < list.length; i++) {
            var current = list[i].split("==");
            var patt = new RegExp(search, "i");
            if (patt.test(current[1])) { //calls on match
                IDs.push(current); //sets the ID of the match into StringArray
            }
        }
    }
}