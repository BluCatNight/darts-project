var clones = 0;
const dartid = "dart";


function show(object) {
    object.style.display = "block";
}
function hide(object) {
    object.style.display = "none";
}

function onloadfunction() {
    //hide(document.getElementById("dart"))
}

function getmousepos() {
    if (clones <= 3 ) {
        clones += 1
        console.log(event.clientX)
        console.log(event.clientY)
        console.log(clones)
        var clone = $("#dart").clone()
        clone.css('left', event.clientX-17 + "px")
        clone.css('top', event.clientY-17 + "px")
        $("#dart").css('left', event.clientX-17 + "px")
        $("#dart").css('top', event.clientY-17 + "px")
    }
}