!
function(a) {
    "use strict";
    function b() {
        var a, b = document.createElement("fakeelement"),
        c = {
            transition: "transitionend",
            OTransition: "oTransitionEnd",
            MozTransition: "transitionend",
            WebkitTransition: "webkitTransitionEnd"
        };
        for (a in c) if (void 0 !== b.style[a]) return c[a]
    }
    function c(b) {
        var c = 0,
        d = 0;
        if (!b) var b = a.event;
        return b.pageX || b.pageY ? (c = b.pageX, d = b.pageY) : (b.clientX || b.clientY) && (c = b.clientX + document.body.scrollLeft + document.documentElement.scrollLeft, d = b.clientY + document.body.scrollTop + document.documentElement.scrollTop),
        {
            x: c,
            y: d
        }
    }
    function d(b) {
        var c = b.getBoundingClientRect(),
        d = document.body,
        e = document.documentElement,
        f = a.pageYOffset || e.scrollTop || d.scrollTop,
        g = a.pageXOffset || e.scrollLeft || d.scrollLeft,
        h = e.clientTop || d.clientTop || 0,
        i = e.clientLeft || d.clientLeft || 0,
        j = c.top + f - h,
        k = c.left + g - i;
        return {
            x: Math.round(k),
            y: Math.round(j)
        }
    }
    function e() {
        this.body = document.body,
        this.cem = document.querySelector("#cem"),
        this.toggle = document.querySelector("#top7"),
        this.menu = document.querySelector("#top6"),
        this.menuItems = this.menu.querySelectorAll("li"),
        this.menuItemLinks = this.menu.querySelectorAll("a"),
        this.menuPosition = "off",
        this.mask = document.createElement("div"),
        this.mask.className = "top6-mask",
        document.body.appendChild(this.mask),
        this._init()
    }
    var f = b();
    e.prototype._init = function() {
        this._initToggleEvents(),
        this._initItemTransitions(),
        this._initTouchEffect(),
        this._initMaskEvents()
    },
    e.prototype._initToggleEvents = function() {
        var a = this;
        this.toggle.addEventListener("click",
        function() {
            "off" == a.menuPosition ? a._toggleMenuOn() : a._toggleMenuOff()
        })
    },
    e.prototype._toggleMenuOn = function() {
        var a = this;
        this.body.classList.add("top6-open"),
        this.cem.classList.add("top6-open"),
        this.toggle.classList.add("active"),
        this.menu.classList.add("active");
        for (var b = 0; b < a.menuItems.length; b++) {
            var c = a.menuItems[b]; !
            function(a) {
                a.classList.add("in-view")
            } (c)
        }
        this.mask.classList.add("active"),
        this.menuPosition = "on"
    },
    e.prototype._toggleMenuOff = function() {
        var a = this;
        this.body.classList.remove("top6-open"),
        this.cem.classList.remove("top6-open"),
        this.toggle.classList.remove("active"),
        this.menu.classList.remove("active");
        for (var b = 0; b < a.menuItems.length; b++) {
            var c = a.menuItems[b]; !
            function(a) {
                a.classList.remove("in-view")
            } (c)
        }
        this.mask.classList.remove("active"),
        this.menuPosition = "off"
    },
    e.prototype._initItemTransitions = function() {
        for (var a = this.menuItems.length,
        b = 0; a > b; b++) {
            var c = b + 1,
            d = this.menuItems[b];
            this._itemTransitionHandler(d, c)
        }
    },
    e.prototype._itemTransitionHandler = function(a, b) {
        a.classList.add("item-" + b)
    },
    e.prototype._initTouchEffect = function() {
        for (var a = this.menuItemLinks.length,
        b = 0; a > b; b++) {
            var c = this.menuItemLinks[b];
            this._touchEffectHandler(c)
        }
    },
    e.prototype._touchEffectHandler = function(a) {
        var b = a.offsetWidth,
        e = a.offsetHeight,
        g = 2 * Math.max(b, e),
        h = document.createElement("span");
        h.className = "top6__link--touch-effect",
        h.style.width = g + "px",
        h.style.height = g + "px",
        a.insertBefore(h, a.firstChild),
        a.addEventListener("click",
        function(a) {
            var b = c(a).x - d(this).x,
            e = c(a).y - d(this).y;
            h.style.top = e + "px",
            h.style.left = b + "px",
            h.style.marginTop = -(g / 2) + "px",
            h.style.marginLeft = -(g / 2) + "px",
            h.classList.add("animating")
        }),
        h.addEventListener(f,
        function() {
            this.classList.remove("animating")
        })
    },
    e.prototype._initMaskEvents = function() {
        var a = this;
        this.mask.addEventListener("click",
        function(b) {
            b.preventDefault(),
            "on" == a.menuPosition ? a._toggleMenuOff() : !1
        })
    },
    a.Menu = e
} (window);







/*****************************/
/**********/

function show_runtime(){window.setTimeout("show_runtime()",1000);X=new Date("04/12/2019 00:01:00");Y=new Date();T=(Y.getTime()-X.getTime());M=24*60*60*1000;a=T/M;A=Math.floor(a);b=(a-A)*24;B=Math.floor(b);c=(b-B)*60;C=Math.floor((b-B)*60);D=Math.floor((c-C)*60);runtm.innerHTML="本站勉强运行: "+A+"天"+B+"小时"+C+"分"+D+"秒"}show_runtime();



/*****************************/
/**********/



  fetch('https://v1.hitokoto.cn')
    .then(function (res){
      return res.json();
    })
    .then(function (data) {
      var hitokoto = document.getElementById('hitokoto');
      hitokoto.innerText = data.hitokoto; 
    })
    .catch(function (err) {
      console.error(err);
    })

/*****************************/
/**********/




!function(e, t, a) {
	function r() {
		for (var e = 0; e < s.length; e++) s[e].alpha <= 0 ? (t.body.removeChild(s[e].el), s.splice(e, 1)) : (s[e].y--, s[e].scale += .004, s[e].alpha -= .013, s[e].el.style.cssText = "left:" + s[e].x + "px;top:" + s[e].y + "px;opacity:" + s[e].alpha + ";transform:scale(" + s[e].scale + "," + s[e].scale + ") rotate(45deg);background:" + s[e].color + ";z-index:99999");
		requestAnimationFrame(r)
	}
	function n() {
		var t = "function" == typeof e.onclick && e.onclick;
		e.onclick = function(e) {
			t && t(),
				o(e)
		}
	}
	function o(e) {
		var a = t.createElement("div");
		a.className = "heart",
			s.push({
					   el: a,
					   x: e.clientX - 5,
					   y: e.clientY - 5,
					   scale: 1,
					   alpha: 1,
					   color: c()
				   }),
			t.body.appendChild(a)
	}
	function i(e) {
		var a = t.createElement("style");
		a.type = "text/css";
		try
		{
			a.appendChild(t.createTextNode(e))
		} catch(t) {
			a.styleSheet.cssText = e
		}
		t.getElementsByTagName("head")[0].appendChild(a)
	}
	function c() {
		return "rgb(" + ~~ (255 * Math.random()) + "," + ~~ (255 * Math.random()) + "," + ~~ (255 * Math.random()) + ")"
	}
	var s = [];
	e.requestAnimationFrame = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame || e.msRequestAnimationFrame ||
		function(e) {
		setTimeout(e, 1e3 / 60)
	},
		i(".heart{width: 10px;height: 10px;position: fixed;background: #f00;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);}.heart:after,.heart:before{content: '';width: inherit;height: inherit;background: inherit;border-radius: 50%;-webkit-border-radius: 50%;-moz-border-radius: 50%;position: fixed;}.heart:after{top: -5px;}.heart:before{left: -5px;}"),
		n(),
		r()
}(window, document);






  
  
