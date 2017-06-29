// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Search the bookmarks when entering the search keyword.
// $(document).ready(function () {
//     $("body").css("border", "3px solid red");
// });

$(function(){
    addBtnEvent() ;
    init() ;
}) ;
function init(){
    $("#setting").click() ;
}

function addBtnEvent(){
    var setting = document.getElementById("setting") ;
    var obj = {url : 'main.html'} ;
    setting.addEventListener('click', function() {
        chrome.tabs.create(obj) ;
    });

    $("#choice").change(function(){
        var file = this.files[0] ;
        var type = file.type ;

        var form = document.getElementById("upload_form");
        var formData = new FormData(form);
        var xhr = new XMLHttpRequest();
        xhr.open("POST" , "/upload/request_url" , true);
        xhr.send(formData);
        console.log(formData) ;
    }) ;
}
