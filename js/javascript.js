var size = {
    width:0,
    height:0
}
var video;
var videoDuration;

function getElementSize(el) {
    var cs = getComputedStyle(el);
    w = parseInt(cs.getPropertyValue("width"), 10);
    h = parseInt(cs.getPropertyValue("height"), 10);
    return {width: w, height: h}
}


function mouseHandler(event) {
    var size = getElementSize(this);
    var scaleX = this.videoWidth / size.width;
    var scaleY = this.videoHeight / size.height;

    var rect = this.getBoundingClientRect();  // absolute position of element

    var x = ((event.clientX - rect.left));
    var y = ((event.clientY - rect.top ));

    xel.innerHTML = "x: " + x.toFixed(0);
    yel.innerHTML = "y: " + y.toFixed(0);
    video.currentTime = (x/size.width * videoDuration).toFixed(20);
    video.pause();

}

$( document ).ready(function() {

    video = $("#videoelement")[0];
    //Wait for video data to load otherwise video.duration will be Nan
    video.onloadeddata = function(){
        xel = $("#mouseposition #x")[0];
        yel = $("#mouseposition #y")[0];

        // Set width and height at top
        size = getElementSize(video);
        videoDuration = video.duration;
        console.log(videoDuration);
        $("#mouseposition #w")[0].innerHTML = " /" + size.width;
        $("#mouseposition #h")[0].innerHTML = " /" + size.height;

        video.addEventListener("mousemove",mouseHandler);
    }
});
