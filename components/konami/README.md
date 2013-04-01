konami
======

Run a callback when the Konami code is entered

usage: 

    $(document).ready(function(){
       __konami__.enable(function(){
            alert('Konami Code Activated');
       }, { replay: false });
    });