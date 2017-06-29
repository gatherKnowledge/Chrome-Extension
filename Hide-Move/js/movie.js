function play(){

(function localFileVideoPlayer() {
    'use strict'
  var URL = window.URL || window.webkitURL ;

  // var displayMessage = function (message, isError) {
  //   var element = document.querySelector('#message') ;
  //   element.innerHTML = message ;
  //   element.className = isError ? 'error' : 'info' ;
  // }

  var playSelectedFile = function (event) {
      
    var file = this.files[0] ;
    var type = file.type ;
    var videoNode = document.querySelector('video') ;
    var canPlay = videoNode.canPlayType(type) ;

    if (canPlay === '') canPlay = 'no' ;
    var message = 'Can play type "' + type + '": ' + canPlay ;
    var isError = canPlay === 'no' ;
    // displayMessage(message, isError) ;

    if (isError) {
      return
    }

    var fileURL = URL.createObjectURL(file) ;
    videoNode.src = fileURL
  }
  //해당 태그 중 첫 번째 태그
  // var inputNode = document.querySelector('input') ;
  var inputNode = document.getElementById("inputVideo") ;
  inputNode.addEventListener('change', playSelectedFile, false) ;
})()

}
