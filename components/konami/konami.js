// adapted from: http://www.gethifi.com/blog/konami-code-jquery-plugin-pointlessly-easy
//
// usage: 
// $(document).ready(function(){
//    __konami__.enable(function(){
//         alert('Konami Code Activated');
//    }, { replay: false });
// });

var __konami__ = (function($) {
  var _kkeys = [], _code, _replay, _callback;

  function enable(callback, opts) {
    opts = opts || {};

    if (opts.code == undefined)
      _code = "38,38,40,40,37,39,37,39,66,65";
    else
      _code = opts.scode;
    
    if (opts.replay == undefined)
      _replay = false;
    else
      _replay = opts.replay
    
    _callback = callback;

    $(window).keydown(_keydownHandler);
  }

  function _keydownHandler(e) {
    _kkeys.push( e.keyCode );
    while (_kkeys.length > _code.split(',').length) {
      _kkeys.shift();
    }
    if ( _kkeys.toString().indexOf( _code ) >= 0 ){
      if (_replay)
        _kkeys = [];
      else
        disable();
      
      _callback();
    }
  }

  function disable() {
    //console.log("disabling");
    $(window).unbind('keydown', _keydownHandler);
  }

  return {
    enable : enable,
    disable : disable
  }

})(jQuery);