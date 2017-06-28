#### 참고자료
* html5 동영상 처리 소스
    * http://jsfiddle.net/dsbonev/cCCZ2/embedded/result,js,html,css/

```javascript
    (function localFileVideoPlayer() {
    	'use strict'
      var URL = window.URL || window.webkitURL ;

      var displayMessage = function (message, isError) {
        var element = document.querySelector('#message') ;
        element.innerHTML = message ;
        element.className = isError ? 'error' : 'info' ;
      }

      var playSelectedFile = function (event) {
        var file = this.files[0] ;
        var type = file.type ;
        var videoNode = document.querySelector('video') ;
        var canPlay = videoNode.canPlayType(type) ;

        if (canPlay === '') canPlay = 'no'
        var message = 'Can play type "' + type + '": ' + canPlay
        var isError = canPlay === 'no'
        displayMessage(message, isError)

        if (isError) {
          return
        }

        var fileURL = URL.createObjectURL(file) ;
        videoNode.src = fileURL
      }
      //해당 태그 중 첫 번째 태그
      var inputNode = document.querySelector('input') ;
      inputNode.addEventListener('change', playSelectedFile, false) ;
    })()
```

```html
<h1>HTML5 local video file player example</h1>
<div id="message"></div>
<input type="file" accept="video/*"/>
<video controls autoplay></video>
```
