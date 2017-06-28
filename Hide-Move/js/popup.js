// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Search the bookmarks when entering the search keyword.
// $(document).ready(function () {
//     $("body").css("border", "3px solid red");
// });

$(function(){
    addBtnEvent() ;
    play() ;
}) ;
function addBtnEvent(){
    var searchBtn = document.getElementById("searchBtn") ;
    var obj = {url : 'main.html'} ;

    searchBtn.addEventListener('click', function() {
        // alert("works") ;
        chrome.tabs.create(obj) ;
    });

    var inputVideo = document.getElementById("inputVideo") ;
    inputVideo.addEventListener('change', function() {
        console.log(inputVideo) ;
    });

}
