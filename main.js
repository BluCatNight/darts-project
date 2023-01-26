var clones = 0;
const dartid = "dart";

function onloadfunction() {
    $("#dart").hide()
}

function getmousepos() {
    if (clones <= 3 ) {
        clones += 1
        console.log(event.clientX)
        console.log(event.clientY)
        console.log(clones)
        var clone = $("#dart").clone().appendTo(".target1");
        clone.css('left', event.clientX-17 + "px")
        clone.css('top', event.clientY-17 + "px")
        clone.show(50)
        $("#dart").css('left', event.clientX-17 + "px")
        $("#dart").css('top', event.clientY-17 + "px")
    }
}