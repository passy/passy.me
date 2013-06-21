!function(a,b){"use strict";var c,d=a.document,e=a.Modernizr,f=function(a){return a.charAt(0).toUpperCase()+a.slice(1)},g="Moz Webkit O Ms".split(" "),h=function(a){var b,c=d.documentElement.style;if("string"==typeof c[a])return a;a=f(a);for(var e=0,h=g.length;h>e;e++)if(b=g[e]+a,"string"==typeof c[b])return b},i=h("transform"),j=h("transitionProperty"),k={csstransforms:function(){return!!i},csstransforms3d:function(){var a=!!h("perspective");if(a){var c=" -o- -moz- -ms- -webkit- -khtml- ".split(" "),d="@media ("+c.join("transform-3d),(")+"modernizr)",e=b("<style>"+d+"{#modernizr{height:3px}}"+"</style>").appendTo("head"),f=b('<div id="modernizr" />').appendTo("html");a=3===f.height(),f.remove(),e.remove()}return a},csstransitions:function(){return!!j}};if(e)for(c in k)e.hasOwnProperty(c)||e.addTest(c,k[c]);else{e=a.Modernizr={_version:"1.6ish: miniModernizr for Isotope"};var l,m=" ";for(c in k)l=k[c](),e[c]=l,m+=" "+(l?"":"no-")+c;b("html").addClass(m)}if(e.csstransforms){var n=e.csstransforms3d?{translate:function(a){return"translate3d("+a[0]+"px, "+a[1]+"px, 0) "},scale:function(a){return"scale3d("+a+", "+a+", 1) "}}:{translate:function(a){return"translate("+a[0]+"px, "+a[1]+"px) "},scale:function(a){return"scale("+a+") "}},o=function(a,c,d){var e,f,g=b.data(a,"isoTransform")||{},h={},j={};h[c]=d,b.extend(g,h);for(e in g)f=g[e],j[e]=n[e](f);var k=j.translate||"",l=j.scale||"",m=k+l;b.data(a,"isoTransform",g),a.style[i]=m};b.cssNumber.scale=!0,b.cssHooks.scale={set:function(a,b){o(a,"scale",b)},get:function(a){var c=b.data(a,"isoTransform");return c&&c.scale?c.scale:1}},b.fx.step.scale=function(a){b.cssHooks.scale.set(a.elem,a.now+a.unit)},b.cssNumber.translate=!0,b.cssHooks.translate={set:function(a,b){o(a,"translate",b)},get:function(a){var c=b.data(a,"isoTransform");return c&&c.translate?c.translate:[0,0]}}}var p,q;e.csstransitions&&(p={WebkitTransitionProperty:"webkitTransitionEnd",MozTransitionProperty:"transitionend",OTransitionProperty:"oTransitionEnd otransitionend",transitionProperty:"transitionend"}[j],q=h("transitionDuration"));var r,s=b.event,t=b.event.handle?"handle":"dispatch";s.special.smartresize={setup:function(){b(this).bind("resize",s.special.smartresize.handler)},teardown:function(){b(this).unbind("resize",s.special.smartresize.handler)},handler:function(a,b){var c=this,d=arguments;a.type="smartresize",r&&clearTimeout(r),r=setTimeout(function(){s[t].apply(c,d)},"execAsap"===b?0:100)}},b.fn.smartresize=function(a){return a?this.bind("smartresize",a):this.trigger("smartresize",["execAsap"])},b.Isotope=function(a,c,d){this.element=b(c),this._create(a),this._init(d)};var u=["width","height"],v=b(a);b.Isotope.settings={resizable:!0,layoutMode:"masonry",containerClass:"isotope",itemClass:"isotope-item",hiddenClass:"isotope-hidden",hiddenStyle:{opacity:0,scale:.001},visibleStyle:{opacity:1,scale:1},containerStyle:{position:"relative",overflow:"hidden"},animationEngine:"best-available",animationOptions:{queue:!1,duration:800},sortBy:"original-order",sortAscending:!0,resizesContainer:!0,transformsEnabled:!0,itemPositionDataEnabled:!1},b.Isotope.prototype={_create:function(a){this.options=b.extend({},b.Isotope.settings,a),this.styleQueue=[],this.elemCount=0;var c=this.element[0].style;this.originalStyle={};var d=u.slice(0);for(var e in this.options.containerStyle)d.push(e);for(var f=0,g=d.length;g>f;f++)e=d[f],this.originalStyle[e]=c[e]||"";this.element.css(this.options.containerStyle),this._updateAnimationEngine(),this._updateUsingTransforms();var h={"original-order":function(a,b){return b.elemCount++,b.elemCount},random:function(){return Math.random()}};this.options.getSortData=b.extend(this.options.getSortData,h),this.reloadItems(),this.offset={left:parseInt(this.element.css("padding-left")||0,10),top:parseInt(this.element.css("padding-top")||0,10)};var i=this;setTimeout(function(){i.element.addClass(i.options.containerClass)},0),this.options.resizable&&v.bind("smartresize.isotope",function(){i.resize()}),this.element.delegate("."+this.options.hiddenClass,"click",function(){return!1})},_getAtoms:function(a){var b=this.options.itemSelector,c=b?a.filter(b).add(a.find(b)):a,d={position:"absolute"};return c=c.filter(function(a,b){return 1===b.nodeType}),this.usingTransforms&&(d.left=0,d.top=0),c.css(d).addClass(this.options.itemClass),this.updateSortData(c,!0),c},_init:function(a){this.$filteredAtoms=this._filter(this.$allAtoms),this._sort(),this.reLayout(a)},option:function(a){if(b.isPlainObject(a)){this.options=b.extend(!0,this.options,a);var c;for(var d in a)c="_update"+f(d),this[c]&&this[c]()}},_updateAnimationEngine:function(){var a,b=this.options.animationEngine.toLowerCase().replace(/[ _\-]/g,"");switch(b){case"css":case"none":a=!1;break;case"jquery":a=!0;break;default:a=!e.csstransitions}this.isUsingJQueryAnimation=a,this._updateUsingTransforms()},_updateTransformsEnabled:function(){this._updateUsingTransforms()},_updateUsingTransforms:function(){var a=this.usingTransforms=this.options.transformsEnabled&&e.csstransforms&&e.csstransitions&&!this.isUsingJQueryAnimation;a||(delete this.options.hiddenStyle.scale,delete this.options.visibleStyle.scale),this.getPositionStyles=a?this._translate:this._positionAbs},_filter:function(a){var b=""===this.options.filter?"*":this.options.filter;if(!b)return a;var c=this.options.hiddenClass,d="."+c,e=a.filter(d),f=e;if("*"!==b){f=e.filter(b);var g=a.not(d).not(b).addClass(c);this.styleQueue.push({$el:g,style:this.options.hiddenStyle})}return this.styleQueue.push({$el:f,style:this.options.visibleStyle}),f.removeClass(c),a.filter(b)},updateSortData:function(a,c){var d,e,f=this,g=this.options.getSortData;a.each(function(){d=b(this),e={};for(var a in g)e[a]=c||"original-order"!==a?g[a](d,f):b.data(this,"isotope-sort-data")[a];b.data(this,"isotope-sort-data",e)})},_sort:function(){var a=this.options.sortBy,b=this._getSorter,c=this.options.sortAscending?1:-1,d=function(d,e){var f=b(d,a),g=b(e,a);return f===g&&"original-order"!==a&&(f=b(d,"original-order"),g=b(e,"original-order")),(f>g?1:g>f?-1:0)*c};this.$filteredAtoms.sort(d)},_getSorter:function(a,c){return b.data(a,"isotope-sort-data")[c]},_translate:function(a,b){return{translate:[a,b]}},_positionAbs:function(a,b){return{left:a,top:b}},_pushPosition:function(a,b,c){b=Math.round(b+this.offset.left),c=Math.round(c+this.offset.top);var d=this.getPositionStyles(b,c);this.styleQueue.push({$el:a,style:d}),this.options.itemPositionDataEnabled&&a.data("isotope-item-position",{x:b,y:c})},layout:function(a,b){var c=this.options.layoutMode;if(this["_"+c+"Layout"](a),this.options.resizesContainer){var d=this["_"+c+"GetContainerSize"]();this.styleQueue.push({$el:this.element,style:d})}this._processStyleQueue(a,b),this.isLaidOut=!0},_processStyleQueue:function(a,c){var d,f,g,h,i=this.isLaidOut?this.isUsingJQueryAnimation?"animate":"css":"css",j=this.options.animationOptions,k=this.options.onLayout;if(f=function(a,b){b.$el[i](b.style,j)},this._isInserting&&this.isUsingJQueryAnimation)f=function(a,b){d=b.$el.hasClass("no-transition")?"css":i,b.$el[d](b.style,j)};else if(c||k||j.complete){var l=!1,m=[c,k,j.complete],n=this;if(g=!0,h=function(){if(!l){for(var b,c=0,d=m.length;d>c;c++)b=m[c],"function"==typeof b&&b.call(n.element,a,n);l=!0}},this.isUsingJQueryAnimation&&"animate"===i)j.complete=h,g=!1;else if(e.csstransitions){for(var o,r=0,s=this.styleQueue[0],t=s&&s.$el;!t||!t.length;){if(o=this.styleQueue[r++],!o)return;t=o.$el}var u=parseFloat(getComputedStyle(t[0])[q]);u>0&&(f=function(a,b){b.$el[i](b.style,j).one(p,h)},g=!1)}}b.each(this.styleQueue,f),g&&h(),this.styleQueue=[]},resize:function(){this["_"+this.options.layoutMode+"ResizeChanged"]()&&this.reLayout()},reLayout:function(a){this["_"+this.options.layoutMode+"Reset"](),this.layout(this.$filteredAtoms,a)},addItems:function(a,b){var c=this._getAtoms(a);this.$allAtoms=this.$allAtoms.add(c),b&&b(c)},insert:function(a,b){this.element.append(a);var c=this;this.addItems(a,function(a){var d=c._filter(a);c._addHideAppended(d),c._sort(),c.reLayout(),c._revealAppended(d,b)})},appended:function(a,b){var c=this;this.addItems(a,function(a){c._addHideAppended(a),c.layout(a),c._revealAppended(a,b)})},_addHideAppended:function(a){this.$filteredAtoms=this.$filteredAtoms.add(a),a.addClass("no-transition"),this._isInserting=!0,this.styleQueue.push({$el:a,style:this.options.hiddenStyle})},_revealAppended:function(a,b){var c=this;setTimeout(function(){a.removeClass("no-transition"),c.styleQueue.push({$el:a,style:c.options.visibleStyle}),c._isInserting=!1,c._processStyleQueue(a,b)},10)},reloadItems:function(){this.$allAtoms=this._getAtoms(this.element.children())},remove:function(a,b){this.$allAtoms=this.$allAtoms.not(a),this.$filteredAtoms=this.$filteredAtoms.not(a);var c=this,d=function(){a.remove(),b&&b.call(c.element)};a.filter(":not(."+this.options.hiddenClass+")").length?(this.styleQueue.push({$el:a,style:this.options.hiddenStyle}),this._sort(),this.reLayout(d)):d()},shuffle:function(a){this.updateSortData(this.$allAtoms),this.options.sortBy="random",this._sort(),this.reLayout(a)},destroy:function(){var a=this.usingTransforms,b=this.options;this.$allAtoms.removeClass(b.hiddenClass+" "+b.itemClass).each(function(){var b=this.style;b.position="",b.top="",b.left="",b.opacity="",a&&(b[i]="")});var c=this.element[0].style;for(var d in this.originalStyle)c[d]=this.originalStyle[d];this.element.unbind(".isotope").undelegate("."+b.hiddenClass,"click").removeClass(b.containerClass).removeData("isotope"),v.unbind(".isotope")},_getSegments:function(a){var b,c=this.options.layoutMode,d=a?"rowHeight":"columnWidth",e=a?"height":"width",g=a?"rows":"cols",h=this.element[e](),i=this.options[c]&&this.options[c][d]||this.$filteredAtoms["outer"+f(e)](!0)||h;b=Math.floor(h/i),b=Math.max(b,1),this[c][g]=b,this[c][d]=i},_checkIfSegmentsChanged:function(a){var b=this.options.layoutMode,c=a?"rows":"cols",d=this[b][c];return this._getSegments(a),this[b][c]!==d},_masonryReset:function(){this.masonry={},this._getSegments();var a=this.masonry.cols;for(this.masonry.colYs=[];a--;)this.masonry.colYs.push(0)},_masonryLayout:function(a){var c=this,d=c.masonry;a.each(function(){var a=b(this),e=Math.ceil(a.outerWidth(!0)/d.columnWidth);if(e=Math.min(e,d.cols),1===e)c._masonryPlaceBrick(a,d.colYs);else{var f,g,h=d.cols+1-e,i=[];for(g=0;h>g;g++)f=d.colYs.slice(g,g+e),i[g]=Math.max.apply(Math,f);c._masonryPlaceBrick(a,i)}})},_masonryPlaceBrick:function(a,b){for(var c=Math.min.apply(Math,b),d=0,e=0,f=b.length;f>e;e++)if(b[e]===c){d=e;break}var g=this.masonry.columnWidth*d,h=c;this._pushPosition(a,g,h);var i=c+a.outerHeight(!0),j=this.masonry.cols+1-f;for(e=0;j>e;e++)this.masonry.colYs[d+e]=i},_masonryGetContainerSize:function(){var a=Math.max.apply(Math,this.masonry.colYs);return{height:a}},_masonryResizeChanged:function(){return this._checkIfSegmentsChanged()},_fitRowsReset:function(){this.fitRows={x:0,y:0,height:0}},_fitRowsLayout:function(a){var c=this,d=this.element.width(),e=this.fitRows;a.each(function(){var a=b(this),f=a.outerWidth(!0),g=a.outerHeight(!0);0!==e.x&&f+e.x>d&&(e.x=0,e.y=e.height),c._pushPosition(a,e.x,e.y),e.height=Math.max(e.y+g,e.height),e.x+=f})},_fitRowsGetContainerSize:function(){return{height:this.fitRows.height}},_fitRowsResizeChanged:function(){return!0},_cellsByRowReset:function(){this.cellsByRow={index:0},this._getSegments(),this._getSegments(!0)},_cellsByRowLayout:function(a){var c=this,d=this.cellsByRow;a.each(function(){var a=b(this),e=d.index%d.cols,f=Math.floor(d.index/d.cols),g=(e+.5)*d.columnWidth-a.outerWidth(!0)/2,h=(f+.5)*d.rowHeight-a.outerHeight(!0)/2;c._pushPosition(a,g,h),d.index++})},_cellsByRowGetContainerSize:function(){return{height:Math.ceil(this.$filteredAtoms.length/this.cellsByRow.cols)*this.cellsByRow.rowHeight+this.offset.top}},_cellsByRowResizeChanged:function(){return this._checkIfSegmentsChanged()},_straightDownReset:function(){this.straightDown={y:0}},_straightDownLayout:function(a){var c=this;a.each(function(){var a=b(this);c._pushPosition(a,0,c.straightDown.y),c.straightDown.y+=a.outerHeight(!0)})},_straightDownGetContainerSize:function(){return{height:this.straightDown.y}},_straightDownResizeChanged:function(){return!0},_masonryHorizontalReset:function(){this.masonryHorizontal={},this._getSegments(!0);var a=this.masonryHorizontal.rows;for(this.masonryHorizontal.rowXs=[];a--;)this.masonryHorizontal.rowXs.push(0)},_masonryHorizontalLayout:function(a){var c=this,d=c.masonryHorizontal;a.each(function(){var a=b(this),e=Math.ceil(a.outerHeight(!0)/d.rowHeight);if(e=Math.min(e,d.rows),1===e)c._masonryHorizontalPlaceBrick(a,d.rowXs);else{var f,g,h=d.rows+1-e,i=[];for(g=0;h>g;g++)f=d.rowXs.slice(g,g+e),i[g]=Math.max.apply(Math,f);c._masonryHorizontalPlaceBrick(a,i)}})},_masonryHorizontalPlaceBrick:function(a,b){for(var c=Math.min.apply(Math,b),d=0,e=0,f=b.length;f>e;e++)if(b[e]===c){d=e;break}var g=c,h=this.masonryHorizontal.rowHeight*d;this._pushPosition(a,g,h);var i=c+a.outerWidth(!0),j=this.masonryHorizontal.rows+1-f;for(e=0;j>e;e++)this.masonryHorizontal.rowXs[d+e]=i},_masonryHorizontalGetContainerSize:function(){var a=Math.max.apply(Math,this.masonryHorizontal.rowXs);return{width:a}},_masonryHorizontalResizeChanged:function(){return this._checkIfSegmentsChanged(!0)},_fitColumnsReset:function(){this.fitColumns={x:0,y:0,width:0}},_fitColumnsLayout:function(a){var c=this,d=this.element.height(),e=this.fitColumns;a.each(function(){var a=b(this),f=a.outerWidth(!0),g=a.outerHeight(!0);0!==e.y&&g+e.y>d&&(e.x=e.width,e.y=0),c._pushPosition(a,e.x,e.y),e.width=Math.max(e.x+f,e.width),e.y+=g})},_fitColumnsGetContainerSize:function(){return{width:this.fitColumns.width}},_fitColumnsResizeChanged:function(){return!0},_cellsByColumnReset:function(){this.cellsByColumn={index:0},this._getSegments(),this._getSegments(!0)},_cellsByColumnLayout:function(a){var c=this,d=this.cellsByColumn;a.each(function(){var a=b(this),e=Math.floor(d.index/d.rows),f=d.index%d.rows,g=(e+.5)*d.columnWidth-a.outerWidth(!0)/2,h=(f+.5)*d.rowHeight-a.outerHeight(!0)/2;c._pushPosition(a,g,h),d.index++})},_cellsByColumnGetContainerSize:function(){return{width:Math.ceil(this.$filteredAtoms.length/this.cellsByColumn.rows)*this.cellsByColumn.columnWidth}},_cellsByColumnResizeChanged:function(){return this._checkIfSegmentsChanged(!0)},_straightAcrossReset:function(){this.straightAcross={x:0}},_straightAcrossLayout:function(a){var c=this;a.each(function(){var a=b(this);c._pushPosition(a,c.straightAcross.x,0),c.straightAcross.x+=a.outerWidth(!0)})},_straightAcrossGetContainerSize:function(){return{width:this.straightAcross.x}},_straightAcrossResizeChanged:function(){return!0}},b.fn.imagesLoaded=function(a){function c(){a.call(e,f)}function d(a){var e=a.target;e.src!==h&&-1===b.inArray(e,i)&&(i.push(e),--g<=0&&(setTimeout(c),f.unbind(".imagesLoaded",d)))}var e=this,f=e.find("img").add(e.filter("img")),g=f.length,h="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",i=[];return g||c(),f.bind("load.imagesLoaded error.imagesLoaded",d).each(function(){var a=this.src;this.src=h,this.src=a}),e};var w=function(b){a.console&&a.console.error(b)};b.fn.isotope=function(a,c){if("string"==typeof a){var d=Array.prototype.slice.call(arguments,1);this.each(function(){var c=b.data(this,"isotope");return c?b.isFunction(c[a])&&"_"!==a.charAt(0)?(c[a].apply(c,d),void 0):(w("no such method '"+a+"' for isotope instance"),void 0):(w("cannot call methods on isotope prior to initialization; attempted to call method '"+a+"'"),void 0)})}else this.each(function(){var d=b.data(this,"isotope");d?(d.option(a),d._init(c)):b.data(this,"isotope",new b.Isotope(a,this,c))});return this}}(window,jQuery),function(a){a.fn.portamento=function(b){function c(){var a=document.body;if(document.createElement&&a&&a.appendChild&&a.removeChild){var b=document.createElement("div");if(!b.getBoundingClientRect)return null;b.innerHTML="x",b.style.cssText="position:fixed;top:100px;",a.appendChild(b);var c=a.style.height,d=a.scrollTop;a.style.height="3000px",a.scrollTop=500;var e=b.getBoundingClientRect().top;a.style.height=c;var f=100===e;return a.removeChild(b),a.scrollTop=d,f}return null}function d(){var a=null,b=null,c=0,d=0;return a=document.createElement("div"),a.style.position="absolute",a.style.top="-1000px",a.style.left="-1000px",a.style.width="100px",a.style.height="50px",a.style.overflow="hidden",b=document.createElement("div"),b.style.width="100%",b.style.height="200px",a.appendChild(b),document.body.appendChild(a),c=b.offsetWidth,a.style.overflow="auto",d=b.offsetWidth,document.body.removeChild(document.body.lastChild),c-d}var e=a(window),f=a(document);a.fn.viewportOffset=function(){var b=a(window),c=a(this).offset();return{left:c.left-b.scrollLeft(),top:c.top-b.scrollTop()}};var g=a.extend({},a.fn.portamento.defaults,b),h=this,i=g.wrapper,j=g.gap,k=g.disableWorkaround,l=c();if(1!=h.length)return this;if(!l&&k)return this;h.wrap('<div id="portamento_container" />');var m=a("#portamento_container");m.css({"min-height":h.outerHeight(),width:h.outerWidth()});var n=h.offset().top,o=parseFloat(h.css("marginTop").replace(/auto/,0)),p=n-o,q=p-j,r=parseFloat(i.css("paddingTop").replace(/auto/,0));parseFloat(m.css("marginTop").replace(/auto/,0));var s=0,t=0;return t&&(s=d()+4),e.bind("scroll.portamento",function(){if(e.height()>h.outerHeight()&&e.width()>=f.width()-s){var a=f.scrollTop();a>=q?h.innerHeight()-i.viewportOffset().top-r+j>=i.height()?(h.hasClass("fixed")||e.height()>=h.outerHeight())&&(h.removeClass("fixed"),h.css("top",i.height()-h.innerHeight()+"px")):(h.addClass("fixed"),l?h.css("top",j+"px"):(h.clearQueue(),h.css("position","absolute").animate({top:0-m.viewportOffset().top+j}))):(h.removeClass("fixed"),h.css("top","0"))}else h.removeClass("fixed")}),e.bind("resize.portamento",function(){e.height()<=h.outerHeight()||e.width()<f.width()?h.hasClass("fixed")&&(h.removeClass("fixed"),h.css("top","0")):e.trigger("scroll.portamento")}),e.bind("orientationchange.portamento",function(){e.trigger("resize.portamento")}),e.trigger("scroll.portamento"),this},a.fn.portamento.defaults={wrapper:a("body"),gap:10,disableWorkaround:!1}}(jQuery),function(a){"use strict";a.passy=angular.module("passy",[],["$routeProvider","$locationProvider",function(a,b){a.when("/",{templateUrl:"pages/index.html"}).when("/projects.html",{templateUrl:"pages/projects.html"}),["impress","changelog"].forEach(function(b){a.when(["/",b,".html"].join(""),{templateUrl:["pages/",b,".html"].join("")})}),b.html5Mode(!0)}])}(this),function(){"use strict";passy.controller("IndexCtrl",["$scope",function(a){a.doMagic=function(a){a.attr("src","http://i.imgur.com/MGXqGQe.gif")}}])}(),function(){"use strict";window.passy.directive("passyIsotope",["$timeout",function(a){return function(b,c){var d=c.isotope({itemSelector:"li",layoutMode:"fitRows"});a(function(){d.isotope("reLayout")}),c.find("li").click(function(){this.classList.toggle("large"),d.isotope("reLayout")})}}])}(),function(){"use strict";window.passy.directive("passyFloatingmenu",[function(){return function(){}}])}(),function(){"use strict";window.passy.directive("passyKonami",[function(){var a="38,38,40,40,37,39,37,39,66,65";return function(b,c){var d=[];c.on("keydown",function(c){var e;d.push(c.keyCode),e=d.toString(),a.indexOf(e.toString())>=0?e.toString()===a&&b.$broadcast("konami"):d=[]})}}]).directive("passyOnkonami",["$parse",function(a){return function(b,c,d){b.$on("konami",function(){var e=b.$new();b.$element=c,a(d.passyOnkonami)(e)})}}])}();