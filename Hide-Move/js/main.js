var toggleValue = -1 ;
$(function(){
    play() ;
    addBtnEvent() ;
    init() ;
}) ;

function init(){
    $("#toggleArea").css("display", "none" ) ;
}

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

// movie play
function play(){
    (function localFileVideoPlayer() {
        'use strict' ;
        var URL = window.URL || window.webkitURL ;
        var playSelectedFile = function (event) {
            console.log(this) ;
            var file = this.files[0] ;
            var type = file.type ;
            var videoNode = document.querySelector('video') ;
            var canPlay = videoNode.canPlayType(type) ;

            if (canPlay === '') canPlay = 'no' ;
            var message = 'Can play type "' + type + '": ' + canPlay ;
            var isError = canPlay === 'no' ;

            if (isError) {
              return
            }

            var fileURL = URL.createObjectURL(file) ;
            videoNode.src = fileURL
         }
         var inputNode = document.getElementById("inputVideo") ;
         inputNode.addEventListener('change', playSelectedFile, false) ;
    })()
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
}

// video moving
function moveDiv(direct){
    var $videoDiv = $("#videoDiv") ;
    var val ;
    switch (direct) {
        case "right" :
            val = $videoDiv.css("margin-left") ;
            // alert("기존 val : " + val) ;
            val = val.substring(0, val.length-2);
            val = Number(val) + 1 ;
            $videoDiv.css("margin-left", val+"px") ;
            // alert("증가 val : " + val) ;
            break;
        case  "left" :
            val = $videoDiv.css("margin-left") ;
            // alert("기존 val : " + val) ;
            val = val.substring(0, val.length-2);
            val = Number(val) - 1 ;
            $videoDiv.css("margin-left", val+"px") ;
            // alert("증가 val : " + val) ;
            break;
        case  "up" :
            val = $videoDiv.css("margin-top") ;
            // alert("기존 val : " + val) ;
            val = val.substring(0, val.length-2);
            val = Number(val) - 1 ;
            $videoDiv.css("margin-top", val+"px") ;
            // alert("증가 val : " + val) ;
            break;
        case  "down":
            val = $videoDiv.css("margin-top") ;
            // alert("기존 val : " + val) ;
            val = val.substring(0, val.length-2);
            val = Number(val) + 1 ;
            $videoDiv.css("margin-top", val+"px") ;
            // alert("증가 val : " + val) ;
            break;
    }
}

function moveMul10(direct){
    for(var i = 0 ; i < 10 ; i++) {
        moveDiv(direct);
    }
}
