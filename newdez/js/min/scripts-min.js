$(document).ready(function() {
    $(".wp1").waypoint(function() {
        $(".wp1").addClass("animated fadeInUp")
    }, {
        offset: "75%"
    }), $(".wp2").waypoint(function() {
        $(".wp2").addClass("animated fadeInUp")
    }, {
        offset: "75%"
    }), $(".wp3").waypoint(function() {
        $(".wp3").addClass("animated fadeInRight")
    }, {
        offset: "75%"
    }), $(".flexslider").flexslider({
        animation: "slide"
    }), $(".single_image").fancybox({
        padding: 4
    }), $('[data-toggle="tooltip"]').tooltip(), $(".nav-toggle").click(function() {
        $(this).toggleClass("active"), $(".header-nav").toggleClass("open"), event.preventDefault()
    }), $(".header-nav li a").click(function() {
        $(".nav-toggle").toggleClass("active"), $(".header-nav").toggleClass("open")
    }), $(function() {
        $(window).scroll(function() {
            var e = $(window).scrollTop();
            e >= 20 ? ($("section.navigation").addClass("fixed"), $("header").css({
                "border-bottom": "none",
                /*padding: "35px 0"*/
            }), $("header .member-actions").css({
                top: "26px"
            }), $("header .navicon").css({
                top: "34px"
            })) : ($("section.navigation").removeClass("fixed"), $("header").css({
                "border-bottom": "solid 1px rgba(255, 255, 255, 0.2)",
                /*padding: "50px 0"*/
            }), $("header .member-actions").css({
                top: "41px"
            }), $("header .navicon").css({
                top: "48px"
            }))
        })
    }), $(function() {
        $("a[href*=#]:not([href=#])").click(function() {
            if (location.pathname.replace(/^\//, "") === this.pathname.replace(/^\//, "") && location.hostname === this.hostname) {
                var e = $(this.hash);
                if (e = e.length ? e : $("[name=" + this.hash.slice(1) + "]"), e.length) return $("html,body").animate({
                    scrollTop: e.offset().top
                }, 2e3), !1
            }
        })
    })
});