function autoPlay(){var a=$(settings.datesDiv).find("a."+settings.datesSelectedClass);"forward"==settings.autoPlayDirection?a.parent().is("li:last-child")?$(settings.datesDiv+" li:first-child").find("a").trigger("click"):a.parent().next().find("a").trigger("click"):"backward"==settings.autoPlayDirection&&(a.parent().is("li:first-child")?$(settings.datesDiv+" li:last-child").find("a").trigger("click"):a.parent().prev().find("a").trigger("click"))}!function(a,b,c){"use strict";var d,e,f=a.event;d=f.special.debouncedresize={setup:function(){a(this).on("resize",d.handler)},teardown:function(){a(this).off("resize",d.handler)},handler:function(a,b){var c=this,g=arguments,h=function(){a.type="debouncedresize",f.dispatch.apply(c,g)};e&&clearTimeout(e),b?h():e=setTimeout(h,d.threshold)},threshold:150};var g="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";a.fn.imagesLoaded=function(b){function d(){var c=a(l),d=a(m);h&&(m.length?h.reject(j,c,d):h.resolve(j)),a.isFunction(b)&&b.call(f,j,c,d)}function e(b,c){b.src!==g&&a.inArray(b,k)===-1&&(k.push(b),c?m.push(b):l.push(b),a.data(b,"imagesLoaded",{isBroken:c,src:b.src}),i&&h.notifyWith(a(b),[c,j,a(l),a(m)]),j.length===k.length&&(setTimeout(d),j.unbind(".imagesLoaded")))}var f=this,h=a.isFunction(a.Deferred)?a.Deferred():0,i=a.isFunction(h.notify),j=f.find("img").add(f.filter("img")),k=[],l=[],m=[];return a.isPlainObject(b)&&a.each(b,function(a,c){"callback"===a?b=c:h&&h[a](c)}),j.length?j.bind("load.imagesLoaded error.imagesLoaded",function(a){e(a.target,"error"===a.type)}).each(function(b,d){var f=d.src,h=a.data(d,"imagesLoaded");return h&&h.src===f?void e(d,h.isBroken):d.complete&&d.naturalWidth!==c?void e(d,0===d.naturalWidth||0===d.naturalHeight):void((d.readyState||d.complete)&&(d.src=g,d.src=f))}):d(),h?h.promise(f):f};var h=a(b),i=b.Modernizr;a.Elastislide=function(b,c){this.$el=a(c),this._init(b)},a.Elastislide.defaults={orientation:"horizontal",speed:500,easing:"ease-in-out",minItems:3,start:0,onClick:function(a,b,c){return!1},onReady:function(){return!1},onBeforeSlide:function(){return!1},onAfterSlide:function(){return!1}},a.Elastislide.prototype={_init:function(b){this.options=a.extend(!0,{},a.Elastislide.defaults,b);var c=this,d={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",msTransition:"MSTransitionEnd",transition:"transitionend"};return this.transEndEventName=d[i.prefixed("transition")],this.support=i.csstransitions&&i.csstransforms,this.current=this.options.start,this.isSliding=!1,this.$items=this.$el.children("li"),this.itemsCount=this.$items.length,0!==this.itemsCount&&(this._validate(),this.$items.detach(),this.$el.empty(),this.$el.append(this.$items),this.$el.wrap('<div class="elastislide-wrapper elastislide-loading elastislide-'+this.options.orientation+'"></div>'),this.hasTransition=!1,this.hasTransitionTimeout=setTimeout(function(){c._addTransition()},100),void this.$el.imagesLoaded(function(){c.$el.show(),c._layout(),c._configure(),c.hasTransition?(c._removeTransition(),c._slideToItem(c.current),c.$el.on(c.transEndEventName,function(){c.$el.off(c.transEndEventName),c._setWrapperSize(),c._addTransition(),c._initEvents()})):(clearTimeout(c.hasTransitionTimeout),c._setWrapperSize(),c._initEvents(),c._slideToItem(c.current),setTimeout(function(){c._addTransition()},25)),c.options.onReady()}))},_validate:function(){this.options.speed<0&&(this.options.speed=500),(this.options.minItems<1||this.options.minItems>this.itemsCount)&&(this.options.minItems=1),(this.options.start<0||this.options.start>this.itemsCount-1)&&(this.options.start=0),"horizontal"!=this.options.orientation&&"vertical"!=this.options.orientation&&(this.options.orientation="horizontal")},_layout:function(){this.$el.wrap('<div class="elastislide-carousel"></div>'),this.$carousel=this.$el.parent(),this.$wrapper=this.$carousel.parent().removeClass("elastislide-loading");var a=this.$items.find("img:first");this.imgSize={width:a.outerWidth(!0),height:a.outerHeight(!0)},this._setItemsSize(),"horizontal"===this.options.orientation?this.$el.css("max-height",this.imgSize.height):this.$el.css("height",this.options.minItems*this.imgSize.height),this._addControls()},_addTransition:function(){this.support&&this.$el.css("transition","all "+this.options.speed+"ms "+this.options.easing),this.hasTransition=!0},_removeTransition:function(){this.support&&this.$el.css("transition","all 0s"),this.hasTransition=!1},_addControls:function(){var b=this;this.$navigation=a('<nav><span class="elastislide-prev">Previous</span><span class="elastislide-next">Next</span></nav>').appendTo(this.$wrapper),this.$navPrev=this.$navigation.find("span.elastislide-prev").on("mousedown.elastislide",function(a){return b._slide("prev"),!1}),this.$navNext=this.$navigation.find("span.elastislide-next").on("mousedown.elastislide",function(a){return b._slide("next"),!1})},_setItemsSize:function(){var a="horizontal"===this.options.orientation?100*Math.floor(this.$carousel.width()/this.options.minItems)/this.$carousel.width():100;this.$items.css({width:a+"%","max-width":this.imgSize.width,"max-height":this.imgSize.height}),"vertical"===this.options.orientation&&this.$wrapper.css("max-width",this.imgSize.width+parseInt(this.$wrapper.css("padding-left"))+parseInt(this.$wrapper.css("padding-right")))},_setWrapperSize:function(){"vertical"===this.options.orientation&&this.$wrapper.css({height:this.options.minItems*this.imgSize.height+parseInt(this.$wrapper.css("padding-top"))+parseInt(this.$wrapper.css("padding-bottom"))})},_configure:function(){this.fitCount="horizontal"===this.options.orientation?this.$carousel.width()<this.options.minItems*this.imgSize.width?this.options.minItems:Math.floor(this.$carousel.width()/this.imgSize.width):this.$carousel.height()<this.options.minItems*this.imgSize.height?this.options.minItems:Math.floor(this.$carousel.height()/this.imgSize.height)},_initEvents:function(){var b=this;h.on("debouncedresize.elastislide",function(){b._setItemsSize(),b._configure(),b._slideToItem(b.current)}),this.$el.on(this.transEndEventName,function(){b._onEndTransition()}),"horizontal"===this.options.orientation?this.$el.on({swipeleft:function(){b._slide("next")},swiperight:function(){b._slide("prev")}}):this.$el.on({swipeup:function(){b._slide("next")},swipedown:function(){b._slide("prev")}}),this.$el.on("click.elastislide","li",function(c){var d=a(this);b.options.onClick(d,d.index(),c)})},_destroy:function(a){this.$el.off(this.transEndEventName).off("swipeleft swiperight swipeup swipedown .elastislide"),h.off(".elastislide"),this.$el.css({"max-height":"none",transition:"none"}).unwrap(this.$carousel).unwrap(this.$wrapper),this.$items.css({width:"auto","max-width":"none","max-height":"none"}),this.$navigation.remove(),this.$wrapper.remove(),a&&a.call()},_toggleControls:function(a,b){b?"next"===a?this.$navNext.show():this.$navPrev.show():"next"===a?this.$navNext.hide():this.$navPrev.hide()},_slide:function(b,d){if(this.isSliding)return!1;this.options.onBeforeSlide(),this.isSliding=!0;var e=this,f=this.translation||0,g="horizontal"===this.options.orientation?this.$items.outerWidth(!0):this.$items.outerHeight(!0),h=this.itemsCount*g,i="horizontal"===this.options.orientation?this.$carousel.width():this.$carousel.height();if(d===c){var j=this.fitCount*g;if(j<0)return!1;if("next"===b&&h-(Math.abs(f)+j)<i)j=h-(Math.abs(f)+i),this._toggleControls("next",!1),this._toggleControls("prev",!0);else if("prev"===b&&Math.abs(f)-j<0)j=Math.abs(f),this._toggleControls("next",!0),this._toggleControls("prev",!1);else{var k="next"===b?Math.abs(f)+Math.abs(j):Math.abs(f)-Math.abs(j);k>0?this._toggleControls("prev",!0):this._toggleControls("prev",!1),k<h-i?this._toggleControls("next",!0):this._toggleControls("next",!1)}d="next"===b?f-j:f+j}else{var j=Math.abs(d);Math.max(h,i)-j<i&&(d=-(Math.max(h,i)-i)),j>0?this._toggleControls("prev",!0):this._toggleControls("prev",!1),Math.max(h,i)-i>j?this._toggleControls("next",!0):this._toggleControls("next",!1)}if(this.translation=d,f===d)return this._onEndTransition(),!1;if(this.support)"horizontal"===this.options.orientation?this.$el.css("transform","translateX("+d+"px)"):this.$el.css("transform","translateY("+d+"px)");else{a.fn.applyStyle=this.hasTransition?a.fn.animate:a.fn.css;var l="horizontal"===this.options.orientation?{left:d}:{top:d};this.$el.stop().applyStyle(l,a.extend(!0,[],{duration:this.options.speed,complete:function(){e._onEndTransition()}}))}this.hasTransition||this._onEndTransition()},_onEndTransition:function(){this.isSliding=!1,this.options.onAfterSlide()},_slideTo:function(a){var a=a||this.current,b=Math.abs(this.translation)||0,c="horizontal"===this.options.orientation?this.$items.outerWidth(!0):this.$items.outerHeight(!0),d=b+this.$carousel.width(),e=Math.abs(a*c);(e+c>d||e<b)&&this._slideToItem(a)},_slideToItem:function(a){var b="horizontal"===this.options.orientation?a*this.$items.outerWidth(!0):a*this.$items.outerHeight(!0);this._slide("",-b)},add:function(a){var b=this,c=this.current,d=this.$items.eq(this.current);this.$items=this.$el.children("li"),this.itemsCount=this.$items.length,this.current=d.index(),this._setItemsSize(),this._configure(),this._removeTransition(),c<this.current?this._slideToItem(this.current):this._slide("next",this.translation),setTimeout(function(){b._addTransition()},25),a&&a.call()},setCurrent:function(a,b){this.current=a,this._slideTo(),b&&b.call()},next:function(){self._slide("next")},previous:function(){self._slide("prev")},slideStart:function(){this._slideTo(0)},slideEnd:function(){this._slideTo(this.itemsCount-1)},destroy:function(a){this._destroy(a)}};var j=function(a){b.console&&b.console.error(a)};a.fn.elastislide=function(b){var c=a.data(this,"elastislide");if("string"==typeof b){var d=Array.prototype.slice.call(arguments,1);this.each(function(){return c?a.isFunction(c[b])&&"_"!==b.charAt(0)?void c[b].apply(c,d):void j("no such method '"+b+"' for elastislide self"):void j("cannot call methods on elastislide prior to initialization; attempted to call method '"+b+"'")})}else this.each(function(){c?c._init():c=a.data(this,"elastislide",new a.Elastislide(b,this))});return c}}(jQuery,window),function(a,b,c){"use strict";a.HoverDir=function(b,c){this.$el=a(c),this._init(b)},a.HoverDir.defaults={speed:300,easing:"ease",hoverDelay:0,inverse:!1},a.HoverDir.prototype={_init:function(b){this.options=a.extend(!0,{},a.HoverDir.defaults,b),this.transitionProp="all "+this.options.speed+"ms "+this.options.easing,this.support=Modernizr.csstransitions,this._loadEvents()},_loadEvents:function(){var b=this;this.$el.on("mouseenter.hoverdir, mouseleave.hoverdir",function(c){var d=a(this),e=d.find("figure"),f=b._getDir(d,{x:c.pageX,y:c.pageY}),g=b._getStyle(f);"mouseenter"===c.type?(e.hide().css(g.from),clearTimeout(b.tmhover),b.tmhover=setTimeout(function(){e.show(0,function(){var c=a(this);b.support&&c.css("transition",b.transitionProp),b._applyAnimation(c,g.to,b.options.speed)})},b.options.hoverDelay)):(b.support&&e.css("transition",b.transitionProp),clearTimeout(b.tmhover),b._applyAnimation(e,g.from,b.options.speed))})},_getDir:function(a,b){var c=a.width(),d=a.height(),e=(b.x-a.offset().left-c/2)*(c>d?d/c:1),f=(b.y-a.offset().top-d/2)*(d>c?c/d:1),g=Math.round((Math.atan2(f,e)*(180/Math.PI)+180)/90+3)%4;return g},_getStyle:function(a){var b,c,d={left:"0px",top:"-100%"},e={left:"0px",top:"100%"},f={left:"-100%",top:"0px"},g={left:"100%",top:"0px"},h={top:"0px"},i={left:"0px"};switch(a){case 0:b=this.options.inverse?e:d,c=h;break;case 1:b=this.options.inverse?f:g,c=i;break;case 2:b=this.options.inverse?d:e,c=h;break;case 3:b=this.options.inverse?g:f,c=i}return{from:b,to:c}},_applyAnimation:function(b,c,d){a.fn.applyStyle=this.support?a.fn.css:a.fn.animate,b.stop().applyStyle(c,a.extend(!0,[],{duration:d+"ms"}))}};var d=function(a){b.console&&b.console.error(a)};a.fn.hoverdir=function(b){var c=a.data(this,"hoverdir");if("string"==typeof b){var e=Array.prototype.slice.call(arguments,1);this.each(function(){return c?a.isFunction(c[b])&&"_"!==b.charAt(0)?void c[b].apply(c,e):void d("no such method '"+b+"' for hoverdir instance"):void d("cannot call methods on hoverdir prior to initialization; attempted to call method '"+b+"'")})}else this.each(function(){c?c._init():c=a.data(this,"hoverdir",new a.HoverDir(b,this))});return c}}(jQuery,window),function(a){"use strict";a.fn.prettySocial=function(){var b={pinterest:{url:"http://pinterest.com/pin/create/button/?url={{url}}&media={{media}}&description={{description}}",popup:{width:685,height:500}},facebook:{url:"https://www.facebook.com/sharer/sharer.php?s=100&p[title]={{title}}&p[summary]={{description}}&p[url]={{url}}&p[images][0]={{media}}",popup:{width:626,height:436}},twitter:{url:"https://twitter.com/share?url={{url}}&via={{via}}&text={{description}}",popup:{width:685,height:500}},googleplus:{url:"https://plus.google.com/share?url={{url}}",popup:{width:600,height:600}},linkedin:{url:"https://www.linkedin.com/shareArticle?mini=true&url={{url}}&title={{title}}&summary={{description}}+&source={{via}}",popup:{width:600,height:600}}},c=function(a,b){var c=window.innerWidth/2-a.popup.width/2,d=window.innerHeight/2-a.popup.height/2;return window.open(b,"","toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width="+a.popup.width+", height="+a.popup.height+", top="+d+", left="+c)},d=function(a,b){var c=a.url.replace(/{{url}}/g,encodeURIComponent(b.url)).replace(/{{title}}/g,encodeURIComponent(b.title)).replace(/{{description}}/g,encodeURIComponent(b.description)).replace(/{{media}}/g,encodeURIComponent(b.media)).replace(/{{via}}/g,encodeURIComponent(b.via));return c};return this.each(function(){var e=a(this),f=e.data("type"),g=b[f]||null;g||a.error("Social site is not set.");var h={url:e.data("url")||"",title:e.data("title")||"",description:e.data("description")||"",media:e.data("media")||"",via:e.data("via")||""},i=d(g,h);navigator.userAgent.match(/Android|IEMobile|BlackBerry|iPhone|iPad|iPod|Opera Mini/i)?e.bind("touchstart",function(a){a.originalEvent.touches.length>1||e.data("touchWithoutScroll",!0)}).bind("touchmove",function(){e.data("touchWithoutScroll",!1)}).bind("touchend",function(a){a.preventDefault();var b=e.data("touchWithoutScroll");a.originalEvent.touches.length>1||!b||c(g,i)}):e.bind("click",function(a){a.preventDefault(),c(g,i)})})}}(jQuery),jQuery.fn.timelinr=function(a){settings=jQuery.extend({orientation:"horizontal",containerDiv:"#timeline",datesDiv:"#dates",datesSelectedClass:"selected",datesSpeed:500,issuesDiv:"#issues",issuesSelectedClass:"selected",issuesSpeed:200,issuesTransparency:.2,issuesTransparencySpeed:500,prevButton:"#prev",nextButton:"#next",arrowKeys:"false",startAt:1},a),$(function(){var a=$(settings.datesDiv+" li").length,b=$(settings.issuesDiv+" li").length,c=($(settings.datesDiv).find("a."+settings.datesSelectedClass),$(settings.issuesDiv).find("li."+settings.issuesSelectedClass),$(settings.containerDiv).width()),d=$(settings.containerDiv).height(),e=($(settings.issuesDiv).width(),$(settings.issuesDiv).height(),$(settings.issuesDiv+" li").width()),f=$(settings.issuesDiv+" li").height(),g=($(settings.datesDiv).width(),$(settings.datesDiv).height(),$(settings.datesDiv+" li").width()),h=$(settings.datesDiv+" li").height();if("horizontal"==settings.orientation){$(settings.issuesDiv).width(e*b),$(settings.datesDiv).width(g*a).css("marginLeft",c/2-g/2);var i=parseInt($(settings.datesDiv).css("marginLeft").substring(0,$(settings.datesDiv).css("marginLeft").indexOf("px")))}else if("vertical"==settings.orientation){$(settings.issuesDiv).height(f*b),$(settings.datesDiv).height(h*a).css("marginTop",d/2-h/2);var i=parseInt($(settings.datesDiv).css("marginTop").substring(0,$(settings.datesDiv).css("marginTop").indexOf("px")))}$(settings.datesDiv+" a").click(function(a){a.preventDefault();var b=($(this).text(),$(this).parent().prevAll().length);"horizontal"==settings.orientation?$(settings.issuesDiv).animate({marginLeft:-e*b},{queue:!1,duration:settings.issuesSpeed}):"vertical"==settings.orientation&&$(settings.issuesDiv).animate({marginTop:-f*b},{queue:!1,duration:settings.issuesSpeed}),$(settings.issuesDiv+" li").animate({opacity:settings.issuesTransparency},{queue:!1,duration:settings.issuesSpeed}).removeClass(settings.issuesSelectedClass).eq(b).addClass(settings.issuesSelectedClass).fadeTo(settings.issuesTransparencySpeed,1),$(settings.datesDiv+" a").removeClass(settings.datesSelectedClass),$(this).addClass(settings.datesSelectedClass),"horizontal"==settings.orientation?$(settings.datesDiv).animate({marginLeft:i-g*b},{queue:!1,duration:settings.datesSpeed}):"vertical"==settings.orientation&&$(settings.datesDiv).animate({marginTop:i-h*b},{queue:!1,duration:settings.datesSpeed})}),$(settings.nextButton).bind("click",function(a){if(a.preventDefault(),"horizontal"==settings.orientation){var c=parseInt($(settings.issuesDiv).css("marginLeft").substring(0,$(settings.issuesDiv).css("marginLeft").indexOf("px"))),d=parseInt($(settings.datesDiv).css("marginLeft").substring(0,$(settings.datesDiv).css("marginLeft").indexOf("px"))),i=d-g;c<=-(e*b-e)?($(settings.issuesDiv).stop(),$(settings.datesDiv+" li:last-child a").click()):$(settings.issuesDiv).is(":animated")||($(settings.issuesDiv).animate({marginLeft:c-e},{queue:!1,duration:settings.issuesSpeed}),$(settings.issuesDiv+" li").animate({opacity:settings.issuesTransparency},{queue:!1,duration:settings.issuesSpeed}),$(settings.issuesDiv+" li."+settings.issuesSelectedClass).removeClass(settings.issuesSelectedClass).next().fadeTo(settings.issuesTransparencySpeed,1).addClass(settings.issuesSelectedClass),$(settings.datesDiv).animate({marginLeft:i},{queue:!1,duration:settings.datesSpeed}),$(settings.datesDiv+" a."+settings.datesSelectedClass).removeClass(settings.datesSelectedClass).parent().next().children().addClass(settings.datesSelectedClass))}else if("vertical"==settings.orientation){var c=parseInt($(settings.issuesDiv).css("marginTop").substring(0,$(settings.issuesDiv).css("marginTop").indexOf("px"))),d=parseInt($(settings.datesDiv).css("marginTop").substring(0,$(settings.datesDiv).css("marginTop").indexOf("px"))),i=d-h;c<=-(f*b-f)?($(settings.issuesDiv).stop(),$(settings.datesDiv+" li:last-child a").click()):$(settings.issuesDiv).is(":animated")||($(settings.issuesDiv).animate({marginTop:c-f},{queue:!1,duration:settings.issuesSpeed}),$(settings.issuesDiv+" li").animate({opacity:settings.issuesTransparency},{queue:!1,duration:settings.issuesSpeed}),$(settings.issuesDiv+" li."+settings.issuesSelectedClass).removeClass(settings.issuesSelectedClass).next().fadeTo(settings.issuesTransparencySpeed,1).addClass(settings.issuesSelectedClass),$(settings.datesDiv).animate({marginTop:i},{queue:!1,duration:settings.datesSpeed}),$(settings.datesDiv+" a."+settings.datesSelectedClass).removeClass(settings.datesSelectedClass).parent().next().children().addClass(settings.datesSelectedClass))}}),$(settings.prevButton).click(function(a){if(a.preventDefault(),"horizontal"==settings.orientation){var b=parseInt($(settings.issuesDiv).css("marginLeft").substring(0,$(settings.issuesDiv).css("marginLeft").indexOf("px"))),c=parseInt($(settings.datesDiv).css("marginLeft").substring(0,$(settings.datesDiv).css("marginLeft").indexOf("px"))),d=c+g;b>=0?($(settings.issuesDiv).stop(),$(settings.datesDiv+" li:first-child a").click()):$(settings.issuesDiv).is(":animated")||($(settings.issuesDiv).animate({marginLeft:b+e},{queue:!1,duration:settings.issuesSpeed}),$(settings.issuesDiv+" li").animate({opacity:settings.issuesTransparency},{queue:!1,duration:settings.issuesSpeed}),$(settings.issuesDiv+" li."+settings.issuesSelectedClass).removeClass(settings.issuesSelectedClass).prev().fadeTo(settings.issuesTransparencySpeed,1).addClass(settings.issuesSelectedClass),$(settings.datesDiv).animate({marginLeft:d},{queue:!1,duration:settings.datesSpeed}),$(settings.datesDiv+" a."+settings.datesSelectedClass).removeClass(settings.datesSelectedClass).parent().prev().children().addClass(settings.datesSelectedClass))}else if("vertical"==settings.orientation){var b=parseInt($(settings.issuesDiv).css("marginTop").substring(0,$(settings.issuesDiv).css("marginTop").indexOf("px"))),c=parseInt($(settings.datesDiv).css("marginTop").substring(0,$(settings.datesDiv).css("marginTop").indexOf("px"))),d=c+h;b>=0?($(settings.issuesDiv).stop(),$(settings.datesDiv+" li:first-child a").click()):$(settings.issuesDiv).is(":animated")||($(settings.issuesDiv).animate({marginTop:b+f},{queue:!1,duration:settings.issuesSpeed}),$(settings.issuesDiv+" li").animate({opacity:settings.issuesTransparency},{queue:!1,duration:settings.issuesSpeed}),$(settings.issuesDiv+" li."+settings.issuesSelectedClass).removeClass(settings.issuesSelectedClass).prev().fadeTo(settings.issuesTransparencySpeed,1).addClass(settings.issuesSelectedClass),$(settings.datesDiv).animate({marginTop:d},{queue:!1,duration:settings.datesSpeed},{queue:!1,duration:settings.issuesSpeed}),$(settings.datesDiv+" a."+settings.datesSelectedClass).removeClass(settings.datesSelectedClass).parent().prev().children().addClass(settings.datesSelectedClass))}}),"true"==settings.arrowKeys&&("horizontal"==settings.orientation?$(document).keydown(function(a){39==a.keyCode&&$(settings.nextButton).click(),37==a.keyCode&&$(settings.prevButton).click()}):"vertical"==settings.orientation&&$(document).keydown(function(a){40==a.keyCode&&$(settings.nextButton).click(),38==a.keyCode&&$(settings.prevButton).click()})),$(settings.datesDiv+" li").eq(settings.startAt-1).find("a").trigger("click")})},jQuery.fn.timelinr=function(a){settings=jQuery.extend({orientation:"horizontal",containerDiv:"#timeline",datesDiv:"#dates",datesSelectedClass:"selected",datesSpeed:"normal",issuesDiv:"#issues",issuesSelectedClass:"selected",issuesSpeed:"fast",issuesTransparency:.2,issuesTransparencySpeed:500,prevButton:"#prev",nextButton:"#next",arrowKeys:"false",startAt:1,autoPlay:"false",autoPlayDirection:"forward",autoPlayPause:2e3},a),$(function(){if($(settings.datesDiv).length>0&&$(settings.issuesDiv).length>0){var a=$(settings.datesDiv+" li").length,b=$(settings.issuesDiv+" li").length,c=($(settings.datesDiv).find("a."+settings.datesSelectedClass),$(settings.issuesDiv).find("li."+settings.issuesSelectedClass),$(settings.containerDiv).width()),d=$(settings.containerDiv).height(),e=($(settings.issuesDiv).width(),$(settings.issuesDiv).height(),$(settings.issuesDiv+" li").width()),f=$(settings.issuesDiv+" li").height(),g=($(settings.datesDiv).width(),$(settings.datesDiv).height(),$(settings.datesDiv+" li").width()),h=$(settings.datesDiv+" li").height();if("horizontal"==settings.orientation){$(settings.issuesDiv).width(e*b),$(settings.datesDiv).width(g*a).css("marginLeft",c/2-g/2);var i=parseInt($(settings.datesDiv).css("marginLeft").substring(0,$(settings.datesDiv).css("marginLeft").indexOf("px")))}else if("vertical"==settings.orientation){$(settings.issuesDiv).height(f*b),$(settings.datesDiv).height(h*a).css("marginTop",d/2-h/2);var i=parseInt($(settings.datesDiv).css("marginTop").substring(0,$(settings.datesDiv).css("marginTop").indexOf("px")))}$(settings.datesDiv+" a").click(function(b){b.preventDefault();var c=($(this).text(),$(this).parent().prevAll().length);"horizontal"==settings.orientation?$(settings.issuesDiv).animate({marginLeft:-e*c},{queue:!1,duration:settings.issuesSpeed}):"vertical"==settings.orientation&&$(settings.issuesDiv).animate({marginTop:-f*c},{queue:!1,duration:settings.issuesSpeed}),$(settings.issuesDiv+" li").animate({opacity:settings.issuesTransparency},{queue:!1,duration:settings.issuesSpeed}).removeClass(settings.issuesSelectedClass).eq(c).addClass(settings.issuesSelectedClass).fadeTo(settings.issuesTransparencySpeed,1),1==a?$(settings.prevButton+","+settings.nextButton).fadeOut("fast"):2==a?$(settings.issuesDiv+" li:first-child").hasClass(settings.issuesSelectedClass)?($(settings.prevButton).fadeOut("fast"),$(settings.nextButton).fadeIn("fast")):$(settings.issuesDiv+" li:last-child").hasClass(settings.issuesSelectedClass)&&($(settings.nextButton).fadeOut("fast"),$(settings.prevButton).fadeIn("fast")):$(settings.issuesDiv+" li:first-child").hasClass(settings.issuesSelectedClass)?($(settings.nextButton).fadeIn("fast"),$(settings.prevButton).fadeOut("fast")):$(settings.issuesDiv+" li:last-child").hasClass(settings.issuesSelectedClass)?($(settings.prevButton).fadeIn("fast"),$(settings.nextButton).fadeOut("fast")):$(settings.nextButton+","+settings.prevButton).fadeIn("slow"),$(settings.datesDiv+" a").removeClass(settings.datesSelectedClass),$(this).addClass(settings.datesSelectedClass),"horizontal"==settings.orientation?$(settings.datesDiv).animate({marginLeft:i-g*c},{queue:!1,duration:"settings.datesSpeed"}):"vertical"==settings.orientation&&$(settings.datesDiv).animate({marginTop:i-h*c},{queue:!1,duration:"settings.datesSpeed"})}),$(settings.nextButton).bind("click",function(c){c.preventDefault();var d=$(settings.issuesDiv).find("li."+settings.issuesSelectedClass).index();if("horizontal"==settings.orientation){var g=parseInt($(settings.issuesDiv).css("marginLeft").substring(0,$(settings.issuesDiv).css("marginLeft").indexOf("px")));parseInt($(settings.datesDiv).css("marginLeft").substring(0,$(settings.datesDiv).css("marginLeft").indexOf("px")));g<=-(e*b-e)?($(settings.issuesDiv).stop(),$(settings.datesDiv+" li:last-child a").click()):$(settings.issuesDiv).is(":animated")||$(settings.datesDiv+" li").eq(d+1).find("a").trigger("click")}else if("vertical"==settings.orientation){var g=parseInt($(settings.issuesDiv).css("marginTop").substring(0,$(settings.issuesDiv).css("marginTop").indexOf("px")));parseInt($(settings.datesDiv).css("marginTop").substring(0,$(settings.datesDiv).css("marginTop").indexOf("px")));g<=-(f*b-f)?($(settings.issuesDiv).stop(),$(settings.datesDiv+" li:last-child a").click()):$(settings.issuesDiv).is(":animated")||$(settings.datesDiv+" li").eq(d+1).find("a").trigger("click")}1==a?$(settings.prevButton+","+settings.nextButton).fadeOut("fast"):2==a?$(settings.issuesDiv+" li:first-child").hasClass(settings.issuesSelectedClass)?($(settings.prevButton).fadeOut("fast"),$(settings.nextButton).fadeIn("fast")):$(settings.issuesDiv+" li:last-child").hasClass(settings.issuesSelectedClass)&&($(settings.nextButton).fadeOut("fast"),$(settings.prevButton).fadeIn("fast")):$(settings.issuesDiv+" li:first-child").hasClass(settings.issuesSelectedClass)?$(settings.prevButton).fadeOut("fast"):$(settings.issuesDiv+" li:last-child").hasClass(settings.issuesSelectedClass)?$(settings.nextButton).fadeOut("fast"):$(settings.nextButton+","+settings.prevButton).fadeIn("slow")}),$(settings.prevButton).click(function(b){b.preventDefault();var c=$(settings.issuesDiv).find("li."+settings.issuesSelectedClass).index();if("horizontal"==settings.orientation){var d=parseInt($(settings.issuesDiv).css("marginLeft").substring(0,$(settings.issuesDiv).css("marginLeft").indexOf("px")));parseInt($(settings.datesDiv).css("marginLeft").substring(0,$(settings.datesDiv).css("marginLeft").indexOf("px")));d>=0?($(settings.issuesDiv).stop(),$(settings.datesDiv+" li:first-child a").click()):$(settings.issuesDiv).is(":animated")||$(settings.datesDiv+" li").eq(c-1).find("a").trigger("click")}else if("vertical"==settings.orientation){var d=parseInt($(settings.issuesDiv).css("marginTop").substring(0,$(settings.issuesDiv).css("marginTop").indexOf("px")));parseInt($(settings.datesDiv).css("marginTop").substring(0,$(settings.datesDiv).css("marginTop").indexOf("px")));d>=0?($(settings.issuesDiv).stop(),$(settings.datesDiv+" li:first-child a").click()):$(settings.issuesDiv).is(":animated")||$(settings.datesDiv+" li").eq(c-1).find("a").trigger("click")}1==a?$(settings.prevButton+","+settings.nextButton).fadeOut("fast"):2==a?$(settings.issuesDiv+" li:first-child").hasClass(settings.issuesSelectedClass)?($(settings.prevButton).fadeOut("fast"),$(settings.nextButton).fadeIn("fast")):$(settings.issuesDiv+" li:last-child").hasClass(settings.issuesSelectedClass)&&($(settings.nextButton).fadeOut("fast"),$(settings.prevButton).fadeIn("fast")):$(settings.issuesDiv+" li:first-child").hasClass(settings.issuesSelectedClass)?$(settings.prevButton).fadeOut("fast"):$(settings.issuesDiv+" li:last-child").hasClass(settings.issuesSelectedClass)?$(settings.nextButton).fadeOut("fast"):$(settings.nextButton+","+settings.prevButton).fadeIn("slow")}),"true"==settings.arrowKeys&&("horizontal"==settings.orientation?$(document).keydown(function(a){39==a.keyCode&&$(settings.nextButton).click(),37==a.keyCode&&$(settings.prevButton).click()}):"vertical"==settings.orientation&&$(document).keydown(function(a){40==a.keyCode&&$(settings.nextButton).click(),38==a.keyCode&&$(settings.prevButton).click()})),$(settings.datesDiv+" li").eq(settings.startAt-1).find("a").trigger("click"),"true"==settings.autoPlay&&setInterval("autoPlay()",settings.autoPlayPause)}})};