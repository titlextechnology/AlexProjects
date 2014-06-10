$(document).ready(function () {
    
    $('#ui-id-1').addClass('autoComplete');
   
    $(".navbar-header .navbar-toggle").click(function () {
        if ($(".navbar-collapse").hasClass("in")) {
            $("body").css("overflow", "auto")
        }
        else {
            $("body").css("overflow", "hidden")
        }
    });

    $(".sfimageWrp").find("img").addClass("img-responsive");

});


// IE placeholder
$(function () { $('input, textarea').placeholder(); });


// mCustomScrollbar
(function ($) {
    $(window).load(function () {


        $(".scrollContent").mCustomScrollbar();

        var url = window.location.href;

        if (url.toLowerCase().indexOf("riqas") >= 0) {
            $(".mCSB_dragger_bar").addClass("mCSB_scrollBarImageBlue");
        }
        else {
            $(".mCSB_dragger_bar").addClass("mCSB_scrollBarImage");
        }

    });
})(jQuery);
// mCustomScrollbar
/**
* uisearch.js v1.0.0
* http://www.codrops.com
*
* Licensed under the MIT license.
* http://www.opensource.org/licenses/mit-license.php
* 
* Copyright 2013, Codrops
* http://www.codrops.com
*/
; (function (window) {

    'use strict';

    // EventListener | @jon_neal | //github.com/jonathantneal/EventListener
    !window.addEventListener && window.Element && (function () {
        function addToPrototype(name, method) {
            Window.prototype[name] = HTMLDocument.prototype[name] = Element.prototype[name] = method;
        }

        var registry = [];

        addToPrototype("addEventListener", function (type, listener) {
            var target = this;

            registry.unshift({
                __listener: function (event) {
                    event.currentTarget = target;
                    event.pageX = event.clientX + document.documentElement.scrollLeft;
                    event.pageY = event.clientY + document.documentElement.scrollTop;
                    event.preventDefault = function () { event.returnValue = false };
                    event.relatedTarget = event.fromElement || null;
                    event.stopPropagation = function () { event.cancelBubble = true };
                    event.relatedTarget = event.fromElement || null;
                    event.target = event.srcElement || target;
                    event.timeStamp = +new Date;

                    listener.call(target, event);
                },
                listener: listener,
                target: target,
                type: type
            });

            this.attachEvent("on" + type, registry[0].__listener);
        });

        addToPrototype("removeEventListener", function (type, listener) {
            for (var index = 0, length = registry.length; index < length; ++index) {
                if (registry[index].target == this && registry[index].type == type && registry[index].listener == listener) {
                    return this.detachEvent("on" + type, registry.splice(index, 1)[0].__listener);
                }
            }
        });

        addToPrototype("dispatchEvent", function (eventObject) {
            try {
                return this.fireEvent("on" + eventObject.type, eventObject);
            } catch (error) {
                for (var index = 0, length = registry.length; index < length; ++index) {
                    if (registry[index].target == this && registry[index].type == eventObject.type) {
                        registry[index].call(this, eventObject);
                    }
                }
            }
        });
    })();

    // http://stackoverflow.com/a/11381730/989439
    function mobilecheck() {
        var check = false;
        (function (a) { if (/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true })(navigator.userAgent || navigator.vendor || window.opera);
        return check;
    }

    // http://www.jonathantneal.com/blog/polyfills-and-prototypes/
    !String.prototype.trim && (String.prototype.trim = function () {
        return this.replace(/^\s+|\s+$/g, '');
    });

    function UISearch(el, options) {
        this.el = el;
        this.inputEl = el.querySelector('div > input.sb-search-input');
        this._initEvents();
    }

    UISearch.prototype = {
        _initEvents: function () {
            var self = this,
      initSearchFn = function (ev) {


          if (self.inputEl.value != "") {
              var url = window.location.href;
              url = "http://" + url.split("/")[2] + "/resources/search/index/1/" + self.inputEl.value;
              self.inputEl.value = "";

              window.location.href = url;

              ev.preventDefault();

              return;

              $.ajax({
                  url: url,
                  async: false
              });

              return;
          } 
          
          ev.stopPropagation();
          // trim its value
          self.inputEl.value = self.inputEl.value.trim();

          if (!window.classie.has(self.el, 'sb-search-open')) { // open it
              ev.preventDefault();
              self.open();
          }
          else if (window.classie.has(self.el, 'sb-search-open') && /^\s*$/.test(self.inputEl.value)) { // close it
              ev.preventDefault();
              self.close();
          }
          
      }
      else if (selection) { 
              $('.autoComplete li').observe('click', respondToClick);
              var selection = document.getElementById("ui-id-1").onclick = initSearchFn();
          }

            this.el.addEventListener('click', initSearchFn);
            this.el.addEventListener('touchstart', initSearchFn);
            this.inputEl.addEventListener('click', function (ev) { ev.stopPropagation(); });
            this.inputEl.addEventListener('touchstart', function (ev) { ev.stopPropagation(); });
        },
        open: function () {
            var self = this;
            window.classie.add(this.el, 'sb-search-open');
            // focus the input
            if (!mobilecheck()) {
                this.inputEl.focus();
            }
            // close the search input if body is clicked
            var bodyFn = function (ev) {
                self.close();
                this.removeEventListener('click', bodyFn);
                this.removeEventListener('touchstart', bodyFn);
            };
            document.addEventListener('click', bodyFn);
            document.addEventListener('touchstart', bodyFn);
        },
        close: function () {
            this.inputEl.blur();
            window.classie.remove(this.el, 'sb-search-open');
        }
    }

    // add to global namespace
    window.UISearch = UISearch;

})(window);
/*!
* classie - class helper functions
* from bonzo https://github.com/ded/bonzo
* 
* classie.has( elem, 'my-class' ) -> true/false
* classie.add( elem, 'my-new-class' )
* classie.remove( elem, 'my-unwanted-class' )
* classie.toggle( elem, 'my-class' )
*/

/*jshint browser: true, strict: true, undef: true */
/*global define: false */

(function (window) {

    'use strict';

    // class helper functions from bonzo https://github.com/ded/bonzo

    function classReg(className) {
        return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
    }

    // classList support for class management
    // altho to be fair, the api sucks because it won't accept multiple classes at once
    var hasClass, addClass, removeClass;

    if ('classList' in document.documentElement) {
        hasClass = function (elem, c) {
            return elem.classList.contains(c);
        };
        addClass = function (elem, c) {
            elem.classList.add(c);
        };
        removeClass = function (elem, c) {
            elem.classList.remove(c);
        };
    }
    else {
        hasClass = function (elem, c) {
            return classReg(c).test(elem.className);
        };
        addClass = function (elem, c) {
            if (!hasClass(elem, c)) {
                elem.className = elem.className + ' ' + c;
            }
        };
        removeClass = function (elem, c) {
            elem.className = elem.className.replace(classReg(c), ' ');
        };
    }

    function toggleClass(elem, c) {
        var fn = hasClass(elem, c) ? removeClass : addClass;
        fn(elem, c);
    }

    window.classie = {
        // full names
        hasClass: hasClass,
        addClass: addClass,
        removeClass: removeClass,
        toggleClass: toggleClass,
        // short names
        has: hasClass,
        add: addClass,
        remove: removeClass,
        toggle: toggleClass
    };

    // transport
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(classie);
    } else {
        //browser global
        //window.classie = classie;
    }

})(window);

$(document).ready(function () {
    
    var docHeight = $(window).height();
    var footerHeight = $('.footer').height();
    var footerTop = $('.footer').position().top + footerHeight;

    if (footerTop < docHeight) {
        $('.footer').css('margin-top', 14 + (docHeight - footerTop) + 'px');
    }
    
    var maxHeight = 0;
    
    $('.infoDropdowns .dropdown').each(function () {
        if ($(this).height() > maxHeight) {
            maxHeight = $(this).height();
        }
    });
    $('.infoDropdowns .dropdown').height(maxHeight);

    /*!PLACEHOLDER for IE SCRIPT*/
    ; (function (f, h, $) { var a = 'placeholder' in h.createElement('input'), d = 'placeholder' in h.createElement('textarea'), i = $.fn, c = $.valHooks, k, j; if (a && d) { j = i.placeholder = function () { return this }; j.input = j.textarea = true } else { j = i.placeholder = function () { var l = this; l.filter((a ? 'textarea' : ':input') + '[placeholder]').not('.placeholder').bind({ 'focus.placeholder': b, 'blur.placeholder': e }).data('placeholder-enabled', true).trigger('blur.placeholder'); return l }; j.input = a; j.textarea = d; k = { get: function (m) { var l = $(m); return l.data('placeholder-enabled') && l.hasClass('placeholder') ? '' : m.value }, set: function (m, n) { var l = $(m); if (!l.data('placeholder-enabled')) { return m.value = n } if (n == '') { m.value = n; if (m != h.activeElement) { e.call(m) } } else { if (l.hasClass('placeholder')) { b.call(m, true, n) || (m.value = n) } else { m.value = n } } return l } }; a || (c.input = k); d || (c.textarea = k); $(function () { $(h).delegate('form', 'submit.placeholder', function () { var l = $('.placeholder', this).each(b); setTimeout(function () { l.each(e) }, 10) }) }); $(f).bind('beforeunload.placeholder', function () { $('.placeholder').each(function () { this.value = '' }) }) } function g(m) { var l = {}, n = /^jQuery\d+$/; $.each(m.attributes, function (p, o) { if (o.specified && !n.test(o.name)) { l[o.name] = o.value } }); return l } function b(m, n) { var l = this, o = $(l); if (l.value == o.attr('placeholder') && o.hasClass('placeholder')) { if (o.data('placeholder-password')) { o = o.hide().next().show().attr('id', o.removeAttr('id').data('placeholder-id')); if (m === true) { return o[0].value = n } o.focus() } else { l.value = ''; o.removeClass('placeholder'); l == h.activeElement && l.select() } } } function e() { var q, l = this, p = $(l), m = p, o = this.id; if (l.value == '') { if (l.type == 'password') { if (!p.data('placeholder-textinput')) { try { q = p.clone().attr({ type: 'text' }) } catch (n) { q = $('<input>').attr($.extend(g(this), { type: 'text' })) } q.removeAttr('name').data({ 'placeholder-password': true, 'placeholder-id': o }).bind('focus.placeholder', b); p.data({ 'placeholder-textinput': q, 'placeholder-id': o }).before(q) } p = p.removeAttr('id').hide().prev().attr('id', o).show() } p.addClass('placeholder'); p[0].value = p.attr('placeholder') } else { p.removeClass('placeholder') } } }(this, document, jQuery));
    // IE placeholder
    $(function () { $('input, textarea').placeholder(); });


});

