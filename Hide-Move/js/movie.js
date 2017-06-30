$(function(){
    play() ;
}) ; 
// movie play
function play(){
    (function localFileVideoPlayer() {
        'use strict' ;
        var URL = window.URL || window.webkitURL ;
        var playSelectedFile = function (event) {
            var file = this.files[0] ;
            var type = file.type ;
            var videoNode = document.querySelector('video') ;
            var canPlay = videoNode.canPlayType(type) ;

            if (canPlay === '') canPlay = 'no' ;
            var message = 'Can play type "' + type + '": ' + canPlay ;
            var isError = canPlay === 'no' ;

            if (isError) {
              return ;
            }
            var fileURL = URL.createObjectURL(file) ;
            videoNode.src = fileURL ;
         }
         var inputNode = document.getElementById("inputVideo") ;
         inputNode.addEventListener('change', playSelectedFile, false) ;
    })()
}
