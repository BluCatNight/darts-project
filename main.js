var clones = 0;
var clonelist = new Array();
var x = []
var y = []
var list = []
//center
//427 x
//270 y

function check() {
    //unfinished
    // var num = 0;
    // var final = 0;
    // var count = 0;
    // for(z in y) {
    // }
    // final = final / count
    // console.log(final)
    // console.log(count)
    // if (final < 480) {
    //     $("#readable").html('Precise!')
    // }
    if(clones != 4) {
        alert("Not enough darts in the scene to calculate.")
    } 
    else {
        for(e in x) {
            list.push([x[e],y[e]])
        }

        // this clutter is temporary
        var result = 0
        var a = list[0][0] - list[1][0];
        var b = list[0][1] - list[1][1];
        result += Math.sqrt( a*a + b*b );
        var a = list[0][0] - list[2][0];
        var b = list[0][1] - list[2][1];
        result += Math.sqrt( a*a + b*b );
        var a = list[0][0] - list[3][0];
        var b = list[0][1] - list[3][1];
        result += Math.sqrt( a*a + b*b );

        var a = list[1][0] - list[2][0];
        var b = list[1][1] - list[2][1];
        result += Math.sqrt( a*a + b*b );
        var a = list[1][0] - list[3][0];
        var b = list[1][1] - list[3][1];
        result += Math.sqrt( a*a + b*b );

        var a = list[2][0] - list[1][0];
        var b = list[2][1] - list[1][1];
        result += Math.sqrt( a*a + b*b );
        var a = list[2][0] - list[3][0];
        var b = list[2][1] - list[3][1];
        result += Math.sqrt( a*a + b*b );

        var a = list[3][0] - list[1][0];
        var b = list[3][1] - list[1][1];
        result += Math.sqrt( a*a + b*b );
        var a = list[3][0] - list[2][0];
        var b = list[3][1] - list[2][1];
        result += Math.sqrt( a*a + b*b );

        result = result/9
        console.log(result)
        if(result < 23) {
            $("#readable").html('Precise!')
        } else {
            $("#readable").html('Not Precise..')
            
        }
        $("#raw").html("Pres:" + Math.round(result))
        var result = 0
        var $this = $("#target");
        var offset = $this.position();
        var width = $this.width();
        var height = $this.height();

        var centerX = offset.left + width / 2;
        var centerY = offset.top + height / 2;
        
        var extralist = [centerX,centerY]

        var a = list[0][0] - extralist[0];
        var b = list[0][1] - extralist[1];
        result += Math.sqrt( a*a + b*b );

        var a = list[1][0] - extralist[0];
        var b = list[1][1] - extralist[1];
        result += Math.sqrt( a*a + b*b );

        var a = list[2][0] - extralist[0];
        var b = list[2][1] - extralist[1];
        result += Math.sqrt( a*a + b*b );

        var a = list[3][0] - extralist[0];
        var b = list[3][1] - extralist[1];
        result += Math.sqrt( a*a + b*b );

        result = result/4
        console.log(result)
        if(result < 35) {
            $("#readable").html($("#readable").html() + " And Accurate!") 
        } else {
            $("#readable").html($("#readable").html() + " And Not Accurate...")
        }
        $("#raw").html($("#raw").html() + "\nAcc: " + Math.round(result))
    }
}


function onloadfunction() {
    $("#dart").hide()
    $("#readable").html('&nbsp;')
}

function onresetfunction() {
    for(cln in clonelist) {
        clonelist[cln].remove(); //Need help i cant get this to work.
    }
    clones = 0;
    x = []
    y = []
    list = []
    clonelist = new Array();
    $("#readable").html('&nbsp;')
    $("#raw").html('&nbsp;')
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
