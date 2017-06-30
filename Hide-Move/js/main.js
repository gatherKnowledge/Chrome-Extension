$(function(){
    addBtnEvent() ;
    init() ;
}) ;

// Mouse over toggle control
function init(){
    $("#toggleArea").css("display", "none" ) ;
}

// toggle control flag
var toggleValue = -1 ;

// navigation Control hide/show
function toggleNavi(){
    setTimeout(function(){
        toggleValue = toggleValue * -1 ;
    }, "600") ;
    $("#naviDiv").css("display",
        function(){
            return $("#naviDiv").css("display") == "none" ? "block" : "none" ;
        }
    ) ;
    $("#toggleArea").css("display",
        function(){
            return $("#toggleArea").css("display") == "none" ? "block" : "none" ;
        }
    )
}

function toggleHover(){
    $("#toggleArea").css("display", "none") ;
    $("#naviDiv").css("display", "block") ;
}

// Add Button event
function addBtnEvent(){
    var $btnRight = $("#btnRight") ;
    var $btnRight10 = $("#btnRight10") ;
    var $btnLeft = $("#btnLeft") ;
    var $btnLeft10 = $("#btnLeft10") ;
    var $btnUp = $("#btnUp") ;
    var $btnUp10 = $("#btnUp10") ;
    var $btnDown = $("#btnDown") ;
    var $btnDown10 = $("#btnDown10") ;

    $("#toggleArea").hover(function(){
        if( toggleValue < 0 ) {
            toggleHover() ;
        }
    }) ;
    $("#switch").click(function(){
        toggleValue = toggleValue * -1 ;
        toggleNavi() ;
    }) ;
    $("#inputVideo").click(function(){
        $("#inputVideo").css("display", "none") ;
    }) ;
    //right
    $btnRight.click(function(){
        moveDiv($btnRight.attr("class")) ;}) ;
    $btnRight10.click(function(){
        moveMul10($btnRight10.attr("class")) ;}) ;
    //left
    $btnLeft.click(function(){
        moveDiv($btnLeft.attr("class")) ;}) ;
    $btnLeft10.click(function(){
        moveMul10($btnLeft10.attr("class")) ;}) ;
    //up
    $btnUp.click(function(){
        moveDiv($btnUp.attr("class")) ;}) ;
    $btnUp10.click(function(){
        moveMul10($btnUp10.attr("class")) ;}) ;
    //left
    $btnDown.click(function(){
        moveDiv($btnDown.attr("class")) ;}) ;
    $btnDown10.click(function(){
        moveMul10($btnDown10.attr("class")) ;}) ;

    // SCALE
    var $controlScale = $("#controlScale") ;
    $controlScale.click(function(){
        controlScale() ;
    } ) ;
    var $controlScale10 = $("#controlScale10") ;
    $controlScale10.click(function(){
        controlMul10() ;
    } ) ;

    // size control
    var $btnWidth = $("#btnWidth") ;
    var $btnHeight = $("#btnHeight") ;
    var $controlScaleMinusWidth = $("#controlScaleMinusWidth") ;
    var $controlScaleMinusHeight = $("#controlScaleMinusHeight") ;

    $btnWidth.click(function(){
        widthControl() ;
    } ) ;
    $btnHeight.click(function(){
        heightControl() ;
    } ) ;
    $controlScaleMinusWidth.click(function(){
        widthMinusControl() ;
    } ) ;
    $controlScaleMinusHeight.click(function(){
        heightMinusControl() ;
    } ) ;
}

// video moving
function moveDiv(direct){
    var $videoDiv = $("#videoDiv") ;
    var val ;
    switch (direct) {
        case "right" :
            val = $videoDiv.css("margin-left") ;
            val = removePx(val) ;
            val = Number(val) + 1 ;
            $videoDiv.css("margin-left", val+"px") ;
            break;
        case  "left" :
            val = $videoDiv.css("margin-left") ;
            val = removePx(val) ;
            val = Number(val) - 1 ;
            $videoDiv.css("margin-left", val+"px") ;
            break;
        case  "up" :
            val = $videoDiv.css("margin-top") ;
            val = removePx(val) ;
            val = Number(val) - 1 ;
            $videoDiv.css("margin-top", val+"px") ;
            break;
        case  "down":
            val = $videoDiv.css("margin-top") ;
            val = removePx(val) ;
            val = Number(val) + 1 ;
            $videoDiv.css("margin-top", val+"px") ;
            break;
    }
}

// x10 times
function moveMul10(direct){
    for(var i = 0 ; i < 10 ; i++) {
        moveDiv(direct);
    }
}

function widthControl() {
    var $videoDiv = $("#videoDiv") ;
    var width = $videoDiv.css("width") ;
    width = removePx(width) ;
    width = Number(width) + 10 ;
    $videoDiv.css("width", width + "px") ;
}
function heightControl() {
    var $videoDiv = $("#videoDiv") ;
    var height = $videoDiv.css("height") ;
    height = removePx(height) ;
    height = Number(height) + 10 ;
    $videoDiv.css("height", height + "px") ;
}
function widthMinusControl() {
    var $videoDiv = $("#videoDiv") ;
    var width = $videoDiv.css("width") ;
    width = removePx(width) ;
    width = Number(width) - 10 ;
    $videoDiv.css("width", width + "px") ;
}
function heightMinusControl() {
    var $videoDiv = $("#videoDiv") ;
    var height = $videoDiv.css("height") ;
    height = removePx(height) ;
    height = Number(height) - 10 ;
    $videoDiv.css("height", height + "px") ;
}
// Size up
function controlScale() {
    widthControl() ;
    heightControl() ;
}

// x10 times
function controlMul10() {
    for(var i = 0 ; i < 10 ; i++) {
        controlScale() ;
    }
}
// input 100px -> 100
function removePx(str) {
    str = str.substr(0, str.length - 2) ;
    return str ;
}
