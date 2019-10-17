$(document).ready(function () {
    !function () {
        var e = $(".header-logo-show-menu"), i = $(".b-slidemenu"), t = "slidemenu-active";
        e.on("click", function (e) {
            e.preventDefault(), e.stopPropagation(), i.toggleClass(t)
        }), $(document).on("click", ".b-slidemenu.slidemenu-active", function (i) {
            e.trigger("click")
        })
    }(), function () {
        var e = $(".js-popup-form");
        e.on("click", function (e) {
            e.preventDefault(), e.stopPropagation(), $.magnificPopup.open({
                items: {
                    src: $(".b-popup.popup-form"),
                    type: "inline"
                }
            })
        })
    }(), function () {
        function e(e, i) {
            var t = $("<div>").html(e).delay(5e3).fadeOut();
            i.append(t)
        }

        var t = $(".js-form");
        t.on("submit", function (i) {
            i.preventDefault(), i.stopPropagation();
            var s = $(this), n = s.closest(t).first(), o = n.find(".form-errors").first(), a = i.target.action, l = i.target.method;
            $.ajax({method: l, url: a, data: s.serialize(), dataType: "json"}).done(function (t, i, s) {
                $.magnificPopup.open({items: {src: $(".b-popup.popup-wellcome"), type: "inline"}});
            }).fail(function (t, i, s) {
                $.magnificPopup.open({items: {src: $(".b-popup.popup-wellcome"), type: "inline"}});
                e(s, o)
            })
        })
    }(), function () {
        var e = $(".js-popup-chm");
        e.on("click", function (e) {
            e.preventDefault(), $.magnificPopup.open({items: {src: $(".b-popup.popup-chm"), type: "inline"}})
        })
    }(), function () {
        var e = $(".b-webdev .b-slider");
        $sliderSwitcher = $(".webdev-slider-switcher .switcher-item"), e.each(function (i) {
            var t, o = $(this), s = {asNavFor: e, arrows: !1};
            o.hasClass("slider-phone") ? t = {
                    vertical: !0,
                    verticalSwiping: !0,
                    autoplay: !0,
                    speed: 300,
                    autoplaySpeed: 5300
                } : o.hasClass("slider-tab") ? t = {fade: !0} : o.hasClass("slider-switcher") && (t = {
                        slidesToShow: 1,
                        centerMode: !0,
                        centerPadding: 0,
                        dots: !1,
                        focusOnSelect: !0,
                        arrows: !0,
                        prevArrow: '<div class="slider-nav nav-left"></div>',
                        nextArrow: '<div class="slider-nav nav-right"></div>',
                        autoplay: !0,
                        speed: 300,
                        autoplaySpeed: 5300,
                        pauseOnHover: !1,
                        responsive: [{breakpoint: 768, settings: {slidesToShow: 1}}]
                    }), s = $.extend(s, t), o.slick(s), o.hasClass("slider-notebook") && ($sliderSwitcher.eq(0).addClass("is-active"), o.on("beforeChange", function (e, i, t, o) {
                $sliderSwitcher.removeClass("is-active"), $sliderSwitcher.eq(o).addClass("is-active")
            })), $sliderSwitcher.each(function (i, t) {
                $(t).on("click", function () {
                    var t = ($(this), e.first());
                    i !== t.slick("slickCurrentSlide") && t.slick("slickGoTo", i)
                })
            })
        })
    }(), function () {
        var e = $(".b-slider.slider-chm-partners .slider-items");
        e.slick({
            slidesToShow: 6,
            slidesToScroll: 6,
            arrows: !0,
            slide: ".slider-item",
            prevArrow: '<div class="slider-nav nav-left"></div>',
            nextArrow: '<div class="slider-nav nav-right"></div>',
            appendArrows: e.parent(),
            autoplay: !0,
            autoplaySpeed: 2500,
            responsive: [{breakpoint: 1024, settings: {slidesToShow: 3, slidesToScroll: 3}}, {
                breakpoint: 600,
                settings: {slidesToShow: 2, slidesToScroll: 2}
            }, {breakpoint: 480, settings: {slidesToShow: 1, slidesToScroll: 1}}]
        })
    }(), function () {
        var e = $(".b-slider.slider-super");
        e.slick({
            centerMode: !0,
            centerPadding: "0px",
            slidesToShow: 3,
            focusOnSelect: !0,
            nextArrow: '<div class="super-navigation icon-super-right"></div>',
            prevArrow: '<div class="super-navigation icon-super-left"></div>',
            responsive: [{breakpoint: 640, settings: {arrows: !1, slidesToShow: 1}}]
        })
    }(), function () {
        var e = $(".b-slider.feedback-slider");
        e.slick({
            centerPadding: "100px",
            slidesToShow: 1,
            dots: !0,
            arrows: !0,
            autoplay: !0,
            autoplaySpeed: 3500,
            prevArrow: '<div class="slider-nav nav-left"></div>',
            nextArrow: '<div class="slider-nav nav-right"></div>',
            responsive: [{breakpoint: 640, settings: {arrows: !1, slidesToShow: 1}}]
        })
    }(), function () {
        var e = $(".b-slider.slider-reviews"), i = $(".b-review.review-slider-switcher"), t = i.find(".switcher-item"), o = $(".b-review .switcher-action"), s = "is-active";
        e.slick({
            arrows: !1,
            slidesToShow: 1,
            adaptiveHeight: !0
        }), t.eq(0).addClass(s), e.on("beforeChange", function (e, i, n, a) {
            var l = {};
            t.removeClass(s), t.eq(a).addClass(s), l = {
                width: t.eq(a).outerWidth(),
                left: t.eq(a).position().left
            }, o.css(l)
        }), t.each(function (e, i) {
            var t = $(this);
            t.attr("data-to-slide", e)
        }), t.on("click", function () {
            var i = ($(this), $(this).data("to-slide"));
            e.slick("slickGoTo", i), i !== e.slick("slickCurrentSlide") && e.slick("slickGoTo", i)
        }), t.first().trigger("click")
    }(), function () {
        var e = $(".b-tabs"), i = location;
        if ("#rs" == i.hash || "#cm" == i.hash || "#webpms" == i.hash) {
            topelement = $("#solutions").offset().top, $("html,body").animate({scrollTop: topelement}, "slow");
            var t = i.hash.substr(1), o = $(this), s = t, n = $('[data-switch-target="' + s + '"]'), a = 1e3 * o.data("switch-delay");
            window.setTimeout(function () {
                n.trigger("click")
            }, a)
        }
        $("[data-switch-to]").on("click", function () {
            var e = $(this), i = e.data("switch-to"), t = $('[data-switch-target="' + i + '"]'), o = 1e3 * e.data("switch-delay");
            window.setTimeout(function () {
                t.trigger("click")
            }, o)
        }), e.each(function () {
            var e = $(this), i = e.find(".tab-switcher-item"), t = e.find(".tab-content-item"), o = e.find(".tab-action-underline"), s = e.find(".tab-action-triangle");
            i.on("click", function (e) {
                e.preventDefault();
                var n = this, a = $(this), l = a.find(".tab-switcher-title");
                a.attr("id");
                a.hasClass("state-active") || (i.removeClass("state-active"), a.addClass("state-active"), t.removeClass("state-active"), i.each(function (e, i) {
                    i == n && t.eq(e).addClass("state-active")
                }), s.css({top: a.position().top}), o.css({
                    left: a.position().left + l.position().left,
                    width: l.width()
                }))
            }), i.first().trigger("click"), e.addClass("tab-is-init")
        }), $(window).on("resize", Foundation.utils.throttle(function (i) {
            var t = $(".tab-switcher-link.state-active", e), o = $(".tab-switcher-subtitle", e), s = $(".tab-action-underline", e), n = $(".tab-action-triangle", e);
            n.css({left: t.position().left, width: t.outerWidth()}), s.css({
                left: t.position().left + o.position().left,
                width: o.width()
            })
        }, 300))
    }(), function () {
        $('[href^="#"]').on("click", function (e) {
            var i = this.hash, t = $(i), o = 0, s = $(window);
            t.length && (e.preventDefault(), history.pushState ? (history.pushState(null, null, i), o = t.position().top, TweenLite.to(s, 1, {
                    scrollTo: {
                        y: o,
                        autoKill: !0
                    }, ease: Power4.easeInOut, overwrite: 5
                })) : location.hash = i)
        })
    }(), function () {
        var e = $(".b-lang"), i = "is-active", t = e.find(".lang-item").first();
        t.on("click", function (t) {
            t.preventDefault(), e.toggleClass(i)
        })
    }()
});
var spider_detect = function (e) {
    for (var i = [["Aport", "Aport robot"], ["Google", "Google"], ["msnbot", "MSN"], ["Rambler", "Rambler"], ["Yahoo", "Yahoo"], ["AbachoBOT", "AbachoBOT"], ["accoona", "Accoona"], ["AcoiRobot", "AcoiRobot"], ["ASPSeek", "ASPSeek"], ["CrocCrawler", "CrocCrawler"], ["Dumbot", "Dumbot"], ["FAST-WebCrawler", "FAST-WebCrawler"], ["GeonaBot", "GeonaBot"], ["Gigabot", "Gigabot"], ["Lycos", "Lycos spider"], ["MSRBOT", "MSRBOT"], ["Scooter", "Altavista robot"], ["AltaVista", "Altavista robot"], ["WebAlta", "WebAlta"], ["IDBot", "ID-Search Bot"], ["eStyle", "eStyle Bot"], ["Mail.Ru", "Mail.Ru Bot"], ["Scrubby", "Scrubby robot"], ["Yandex", "Yandex"], ["Mediapartners-Google", "Mediapartners-Google (Adsense)"], ["Slurp", "Hot Bot search"], ["WebCrawler", "WebCrawler search"], ["ZyBorg", "Wisenut search"], ["ia_archiver", "Alexa search engine"], ["FAST", "AllTheWeb"], ["YaDirectBot", "Yandex Direct"]], t = 0; t < i.length; t++)if (e.toLowerCase().indexOf(i[t][0].toLowerCase()) != -1)return i[t][1];
    return !1
};
$(window).load(function () {
    !function () {
        var e = $(".b-slider.slider-first-screen");
        window.setTimeout(function () {
            e.slick({lazyLoad: "progressive", slide: ".slider-item", autoplay: !0, autoplaySpeed: 2500, arrows: !1})
        }, 5e3)
    }()
}), $(".media-online-form").onScreen({
    container: window, direction: "vertical", doIn: function () {
        $(this).addClass("onScreen")
    }, tolerance: 0, throttle: 50, toggleClass: "onVisible animate fadeInUp", lazyAttr: null, debug: !1
}), $(function () {
    $(".js-popup-form").on("click", function () {
        button = $(this).attr("id"), $(".from-button").val(button)
    })
}), $(document).ready(function () {
    function e() {
        $(window).width() <= 500 ? ($(".tab-mobile-title").children(".icon-hotel-big").addClass("icon-hotel"), $(".tab-mobile-title").children(".icon-chm-big").addClass("icon-chm"), $(".tab-mobile-title").children(".icon-rh-big").addClass("icon-rh"), $(".tab-mobile-title").children(".icon-webpms-big").addClass("icon-webpms"), $(".tab-mobile-title").children(".icon-reputation-big").addClass("icon-reputation")) : ($(".tab-mobile-title").children(".icon-hotel-big").removeClass("icon-hotel"), $(".tab-mobile-title").children(".icon-chm-big").removeClass("icon-chm"), $(".tab-mobile-title").children(".icon-rh-big").removeClass("icon-rh"), $(".tab-mobile-title").children(".icon-webpms-big").removeClass("icon-webpms"), $(".tab-mobile-title").children(".icon-reputation-big").removeClass("icon-reputation"))
    }

    $(".plus-click").click(function () {
        $(this).is(".open-click") ? ($(this).parent().parent().children(".tab-content-main").show(400), $(this).parent().parent().children(".tab-mobile").hide(400), $(this).children(".b-icon").removeClass("icon-plus"), $(this).children(".b-icon").addClass("icon-close"), $(this).removeClass("open-click"), $(this).addClass("close-click"), $(this).children(".text-open").css("display", "none"), $(this).children(".text-close").css("display", "block")) : ($(".tab-content-main").hide(400), $(this).parent().parent().children(".tab-mobile").show(400), $(this).addClass("open-click"), $(this).children("span").removeClass("icon-close"), $(this).children("span").addClass("icon-plus"), $(this).children(".text-open").css("display", "block"), $(this).children(".text-close").css("display", "none"))
    }), $(".left-menu").hover(function () {
        $(".icon-left-menu").css("left", "200px"), $(".icon-left-menu").children(".text").css("display", "block"), $(".left-img-menu").css("left", "0px")
    }, function () {
        $(".icon-left-menu").css("left", "69px"), $(".icon-left-menu").children(".text").css("display", "none"), $(".left-img-menu").css("left", "-209px")
    }), $(".icon-left-menu").hover(function () {
        $(".icon-left-menu").css("left", "200px"), $(".icon-left-menu").children(".text").css("display", "block"), $(".left-img-menu").css("left", "0px")
    }, function () {
        $(".icon-left-menu").css("left", "69px"), $(".icon-left-menu").children(".text").css("display", "none"), $(".left-img-menu").css("left", "-209px")
    }), e(), $(window).resize(function () {
        e()
    })
});