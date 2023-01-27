var clones = 0;
const dartid = "dart";
var clonelist = new Array();
var x = []
var y = []

//center
//427 x
//270 y

function check() {
    //unfinished
    var num = 0;
    var final = 0;
    var count = 0;
    for(z in y) {
        count += 1
        var lastpoint = [x[z],y[z]]
        num = Math.sqrt(lastpoint[0] + x[z] **2 + lastpoint[1] + y[z]**2)
        final = final + num
    }
    final = final / count
    console.log(final)
    console.log(count)
}


function onloadfunction() {
    $("#dart").hide()
}

function onresetfunction() {
    for(cln in clonelist) {
        clonelist[cln].remove(); //Need help i cant get this to work.
    }
    clones = 0;
    x = []
    y = []
    clonelist = new Array();
}



function getmousepos() {
    if (clones <= 3 ) {
        clones += 1
        console.log(event.clientX)
        console.log(event.clientY)
        console.log(clones)
        var clone = $("#dart").clone().appendTo(".target1");
        clone.css('left', event.clientX-6 + "px")
        clone.css('top', event.clientY-6 + "px")
        clone.show(50)
        clonelist.push(clone)
        y.push(event.clientY-6)
        x.push(event.clientX-6)
        $("#dart").css('left', event.clientX-6 + "px")
        $("#dart").css('top', event.clientY-6 + "px")
    }
}