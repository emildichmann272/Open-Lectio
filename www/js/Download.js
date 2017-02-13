document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    console.log(download("http://www.lectio.dk"));
}

function download(url) {
    var fileTransfer = new FileTransfer();
    var uri = encodeURI(url);
    
    fileTransfer.download(
        uri,
        fileURL,
        function(entry) {
            console.log("download complete: " + entry.toURL());
        },
        function(error) {
            console.log("download error source " + error.source);
            console.log("download error target " + error.target);
            console.log("download error code" + error.code);
        },
        false,
        {
            headers: {
            }
        }
    );
}