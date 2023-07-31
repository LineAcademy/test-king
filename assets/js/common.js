(function(a) {
    'use strict';

    function b() {
        a(".onovo-page").addClass("parallax--dark"), a(".onovo-header").removeClass("header--white"), a(".onovo-hero-parallax .onovo-prev").removeClass("nav--white"), a(".onovo-hero-parallax .onovo-next").removeClass("nav--white")
    }

    function c() {
        a(".onovo-page").removeClass("parallax--dark"), a(".onovo-header").addClass("header--white"), a(".onovo-hero-parallax .onovo-prev").addClass("nav--white"), a(".onovo-hero-parallax .onovo-next").addClass("nav--white")
    }

    function d(a) {
        var b = a.data("src");
        a.attr("src", b)
    }
    if (a(window).on("load", function() {
            var b = a(".preloader");
            a("body").hasClass("preloader-hide") ? (a("body").addClass("animated--active"), a("body").addClass("animated--swiper--active")) : (b.find(".preloader__spinner").fadeOut(500), setTimeout(function() {
                b.addClass("closed"), a("body").addClass("animated--swiper--active")
            }, 500), setTimeout(function() {
                b.addClass("loaded"), a("body").addClass("animated--active")
            }, 1500))
        }), Splitting({
            by: "lines"
        }), ScrollOut({
            targets: "[data-onovo-scroll]",
            once: !0
        }), a(".word").wrap("<span></span>"), a("[data-onovo-overlay]").append("<div class=\"onovo-overlay\"></div>"), a(".onovo-header").length) {
        var e, f = 0;
        a(window).on("scroll", function() {
            var b = a(".onovo-header");
            e = window.scrollY, f < e && 50 < e ? (b.removeClass("slideDown"), b.addClass("slideUp"), b.addClass("sticky")) : 50 > e ? (b.removeClass("slideDown"), b.removeClass("sticky")) : f > e && (b.removeClass("slideUp"), b.addClass("slideDown"), b.addClass("sticky")), f = e
        })
    }
    if (a(".onovo-menu-btn").on("click", function() {
            var b = a(this);
            return b.hasClass("btn--active") ? (a("body").removeClass("onovo--noscroll"), a(".onovo-header").removeClass("header--active"), b.removeClass("btn--active"), b.addClass("onovo--notouch"), b.parent().find(".onovo-menu-popup").removeClass("menu--ready"), b.parent().find(".onovo-menu-container").addClass("onovo--noscroll"), setTimeout(function() {
                b.parent().find(".onovo-menu-popup").removeClass("menu--open")
            }, 300), setTimeout(function() {
                b.removeClass("onovo--notouch"), b.parent().find(".onovo-menu-popup").removeClass("menu--visible")
            }, 1600)) : (a("body").addClass("onovo--noscroll"), a(".onovo-header").addClass("header--active"), b.addClass("btn--active"), b.addClass("onovo--notouch"), b.parent().find(".onovo-menu-popup").addClass("menu--visible"), b.parent().find(".onovo-menu-popup").addClass("menu--open"), setTimeout(function() {
                b.removeClass("onovo--notouch"), b.parent().find(".onovo-menu-container").removeClass("onovo--noscroll"), b.parent().find(".onovo-menu-popup").addClass("menu--ready")
            }, 600)), !1
        }), a(".onovo-menu").on("click", "a", function() {
            a(this).parent().hasClass("menu-item-has-children") || a(".onovo-header .onovo-menu-btn.btn--active").trigger("click")
        }), a(".onovo-menu").on("click", ".menu-item-has-children > .icon, .dropdown-link > a", function() {
            return a(this).closest("li").hasClass("opened") ? a(this).closest("li").removeClass("opened") : (a(this).closest("ul").find("> li").removeClass("opened"), a(this).closest("li").addClass("opened")), !1
        }), a(".footer--fixed").length) {
        var g = a(".footer--fixed .onovo-footer").height();
        a(".wrapper").css({
            "margin-bottom": g + "px"
        })
    }
    a(".onovo-intro.intro--black").length && a(".onovo-header").addClass("header--white"), a(".js-hero-parallax").each(function() {
        var d = a(this),
            e = d.attr("data-loop");
        d.pagepiling({
            direction: "vertical",
            scrollingSpeed: 700,
            easing: "swing",
            normalScrollElementTouchThreshold: 5,
            touchSensitivity: 10,
            css3: !0,
            loopTop: e,
            loopBottom: e,
            sectionSelector: ".onovo-hero-parallax-section",
            afterRender: function() {
                d.find(".onovo-hero-parallax-section.active").hasClass("section--dark") && b(), a("#pp-nav").append("<div class=\"pp-nav-active\"></div>"), a("#pp-nav").appendTo(d), a(".js-hero-parallax-navs").on("click", ".js-hero-parallax-prev", function() {
                    a.fn.pagepiling.moveSectionUp()
                }), a(".js-hero-parallax-navs").on("click", ".js-hero-parallax-next", function() {
                    a.fn.pagepiling.moveSectionDown()
                })
            },
            afterLoad: function() {
                var e = d.find(".onovo-hero-parallax-section.active"),
                    f = a("#pp-nav ul li a.active").position().top;
                a(".pp-nav-active").css({
                    top: f + "px"
                }), e.hasClass("section--dark") ? b() : c()
            }
        }), d.find(".image").each(function() {
            var b = a(this).attr("data-dimg"),
                c = a(this).attr("data-mimg");
            768 > a(window).width() ? 0 == c ? a(this).css({
                "background-image": "url(" + b + ")"
            }) : a(this).css({
                "background-image": "url(" + c + ")"
            }) : 0 != b && a(this).css({
                "background-image": "url(" + b + ")"
            })
        })
    }), a(".js-hero-slider").each(function() {
        var b = a(this),
            c = b.data("autoplay"),
            d = b.data("loop");
        if (1 < c) {
            var e = !0;
            b.find(".swiper-slide").attr("data-swiper-autoplay", c)
        } else var e = !1;
        d = !0 == d, b.find(".onovo-paginations-container").append("<div class=\"swiper-nav-active\"></div>");
        new Swiper(b, {
            slidesPerView: 1,
            spaceBetween: 0,
            loop: d,
            speed: 1200,
            parallax: !0,
            autoplay: e,
            grabCursor: !1,
            watchSlidesProgress: !0,
            pagination: {
                el: ".js-hero-pagination",
                type: "bullets",
                clickable: !0
            },
            navigation: {
                nextEl: ".js-hero-slider-next",
                prevEl: ".js-hero-slider-prev"
            },
            on: {
                progress: function() {
                    for (var a = this, b = 0; b < a.slides.length; b++) {
                        var c = a.slides[b].progress,
                            d = .5 * a.width;
                        a.slides[b].querySelector(".image").style.transform = "translateX(" + c * d + "px)"
                    }
                },
                touchStart: function() {
                    for (var a = this, b = 0; b < a.slides.length; b++) a.slides[b].style.transition = ""
                },
                setTransition: function(a) {
                    for (var b = this, c = 0; c < b.slides.length; c++) b.slides[c].style.transition = a + "ms", b.slides[c].querySelector(".image").style.transition = a + "ms"
                },
                slideChange: function() {
                    var a = b.find(".swiper-pagination-bullet-active").position().left;
                    b.find(".swiper-nav-active").css({
                        left: a + "px"
                    })
                }
            }
        });
        b.find(".image:not(.video)").each(function() {
            var b = a(this).attr("data-dimg"),
                c = a(this).attr("data-mimg");
            768 > a(window).width() ? 0 == c ? a(this).css({
                "background-image": "url(" + b + ")"
            }) : a(this).css({
                "background-image": "url(" + c + ")"
            }) : 0 != b && a(this).css({
                "background-image": "url(" + b + ")"
            })
        })
    }), a(".js-hero-carousel").each(function() {
        var b = a(this),
            c = b.data("mousewheel"),
            d = b.data("autoplay"),
            e = b.data("loop");
        if (1 < d) {
            var f = !0;
            b.find(".swiper-slide").attr("data-swiper-autoplay", d)
        } else var f = !1;
        e = !0 == e;
        new Swiper(".js-hero-carousel", {
            slidesPerView: "auto",
            rewind: !0,
            noSwipingSelector: "a",
            preventInteractionOnTransition: !0,
            loop: e,
            mousewheel: c,
            autoplay: f,
            spaceBetween: 20,
            pagination: !1,
            navigation: {
                nextEl: ".js-hero-carousel-next",
                prevEl: ".js-hero-carousel-prev"
            }
        })
    }), a(".js-blog-carousel").each(function() {
        var b = a(this),
            c = b.data("autoplay"),
            d = b.data("loop");
        if (1 < c) {
            var e = !0;
            b.find(".swiper-slide").attr("data-swiper-autoplay", c)
        } else var e = !1;
        d = !0 == d, b.parent().find(".onovo-paginations-container").append("<div class=\"swiper-nav-active\"></div>");
        new Swiper(b, {
            slidesPerView: "2",
            noSwipingSelector: "a",
            watchSlidesProgress: !0,
            watchSlidesVisibility: !0,
            loop: d,
            autoplay: e,
            spaceBetween: 20,
            pagination: {
                el: ".js-blog-pagination",
                type: "bullets",
                clickable: !0
            },
            navigation: {
                nextEl: ".js-blog-carousel-next",
                prevEl: ".js-blog-carousel-prev"
            },
            breakpoints: {
                0: {
                    slidesPerView: 1
                },
                1024: {
                    slidesPerView: 2
                }
            },
            on: {
                slideChange: function() {
                    var a = b.parent().find(".swiper-pagination-bullet-active").position().left;
                    b.parent().find(".swiper-nav-active").css({
                        left: a + "px"
                    })
                }
            }
        })
    });
    var h = a(".js-ticker-slider").data("autoplay"),
        i = new Swiper(".js-ticker-slider", {
            spaceBetween: 30,
            centeredSlides: !0,
            speed: h,
            autoplay: {
                delay: 0
            },
            loop: !0,
            slidesPerView: "auto",
            allowTouchMove: !1,
            disableOnInteraction: !0
        });
    a(".js-reviews-carousel").each(function() {
        var b = a(this),
            c = b.data("autoplay"),
            d = b.data("loop");
        if (1 < c) {
            var e = !0;
            b.find(".swiper-slide").attr("data-swiper-autoplay", c)
        } else var e = !1;
        d = !0 == d;
        new Swiper(b, {
            slidesPerView: 1,
            effect: "fade",
            loop: d,
            autoplay: e,
            spaceBetween: 50,
            pagination: !1,
            navigation: {
                nextEl: ".js-reviews-carousel-next",
                prevEl: ".js-reviews-carousel-prev"
            }
        })
    }), a(".js-history-slider").each(function() {
        var b = a(this),
            c = b.data("autoplay");
        if (1 < c) {
            var d = !0;
            b.find(".swiper-slide").attr("data-swiper-autoplay", c)
        } else var d = !1;
        b.find(".onovo-paginations-container").append("<div class=\"swiper-nav-active\"></div>");
        new Swiper(b, {
            slidesPerView: 1,
            noSwipingSelector: "a",
            watchSlidesProgress: !0,
            watchSlidesVisibility: !0,
            loop: !1,
            autoplay: d,
            spaceBetween: 20,
            pagination: {
                el: ".js-history-pagination",
                type: "bullets",
                clickable: !0
            },
            navigation: {
                nextEl: ".js-history-next",
                prevEl: ".js-history-prev"
            },
            on: {
                slideChange: function() {
                    var a = b.find(".swiper-pagination-bullet-active").position().left;
                    b.find(".swiper-nav-active").css({
                        left: a + "px"
                    })
                }
            }
        });
        b.find(".js-history-pagination .swiper-pagination-bullet").each(function() {
            var c = a(this).index() + 1,
                d = b.find(".swiper-slide:nth-child(" + c + ") .subtitle").text();
            a(this).append("<span>" + d + "</span>")
        })
    }), a(".onovo-play-btn").on("click", function() {
        return a(this).parent().parent().find("video").prop("muted") ? (a(this).parent().parent().find("video").prop("muted", !1), a(this).addClass("active")) : (a(this).parent().parent().find("video").prop("muted", !0), a(this).removeClass("active")), !1
    }), a(".onovo-service-grid-item.active--default").each(function() {
        a(this).closest(".onovo-services-grid-fw").hover(function() {
            a(this).find(".onovo-service-grid-item").hasClass("active--default") && a(this).find(".onovo-service-grid-item").removeClass("active")
        }, function() {
            a(this).find(".onovo-service-grid-item").hasClass("active--default") && a(this).find(".onovo-service-grid-item.active--default").addClass("active")
        })
    }), a(".onovo-circle-text .label").each(function() {
        a(this).html(a(this).text().split("").map((a, b) => `<span style="transform:rotate(${8.5*b}deg)">${a}</span>`).join(""))
    }), a(".onovo-showcase-items").length && a(".onovo-showcase-items").find(".onovo-showcase-item:first-child").addClass("hover"), a(".onovo-showcase-item").mouseenter(function() {
        var b = a(this);
        b.closest(".onovo-showcase-items").find(".onovo-showcase-item").removeClass("hover"), b.addClass("hover")
    }), 767 < a(window).width() && (a(".onovo-services-showcase").length && a(".onovo-services-showcase").find(".items ul li:first-child").addClass("hover"), a(".onovo-services-showcase .items ul li .title").mouseenter(function() {
        var b = a(this).closest("li");
        b.closest("ul").find("li").removeClass("hover"), b.addClass("hover")
    })), a(".onovo-video").on("click", ".play, .image", function() {
        a(this).closest(".onovo-video").addClass("active");
        var b = a(this).closest(".onovo-video").find(".js-video-iframe");
        return d(b), !1
    }), a(".onovo-counter").each(function() {
        function b() {
            c.each(function() {
                var b = parseInt(a(this).attr("data-end-value"), 10);
                a(this).easy_number_animate({
                    start_value: 0,
                    end_value: b,
                    duration: 2500
                })
            }), d = !0
        }
        var c = a(this).find(".js-counter"),
            d = !1,
            e = a(window).scrollTop() + a(window).height(),
            f = a(this).offset().top;
        !d && e >= f && b(), a(window).on("scroll", function() {
            e = a(window).scrollTop() + a(window).height(), !d && e >= f && b()
        })
    }), a("button.onovo-btn.onovo-hover-btn").each(function() {
        var b = a(this).text();
        a(this).html("<span>" + b + "</span>")
    }), a(".pager").each(function() {
        var b = a(this).find(".next"),
            c = a(this).find(".prev");
        b.html("<i></i>"), c.html("<i></i>"), b.addClass("onovo-next onovo-hover-2"), c.addClass("onovo-prev onovo-hover-2")
    });
    var j = a(".onovo-portfolio-items");
    j.imagesLoaded(function() {
        j.isotope({
            itemSelector: ".onovo-portfolio-col",
            percentPosition: !0
        })
    }), a(".onovo-filter-nav-active").each(function() {
        a(this).css({
            width: a(this).closest(".onovo-filter.filter--default").find(".item--active").parent().width() + 6 + "px"
        })
    }), a(".onovo-filter").on("click", "button", function() {
        var b = a(this).attr("data-filter");
        j.isotope({
            filter: b
        }), a(b).find(".image").attr("data-scroll", "in"), a(b).find(".splitting").attr("data-scroll", "in"), a(".onovo-filter button").removeClass("item--active"), a(this).addClass("item--active");
        var c = a(this).closest(".onovo-filter.filter--default").find(".item--active").parent().position().left,
            d = a(this).closest(".onovo-filter.filter--default").find(".item--active").parent().width();
        a(this).closest(".onovo-filter.filter--default").find(".onovo-filter-nav-active").css({
            width: d + 6 + "px"
        }), a(this).closest(".onovo-filter.filter--default").find(".onovo-filter-nav-active").css({
            left: c - 3 + "px"
        })
    }), a(".onovo-collapse-item").on("click", ".onovo-collapse-btn", function() {
        a(this).closest(".onovo-collapse-item").hasClass("opened") ? (a(this).closest(".onovo-collapse-item").removeClass("opened"), a(this).removeClass("active"), a(this).next().slideUp()) : (a(this).closest(".onovo-collapse-item").addClass("opened"), a(this).addClass("active"), a(this).next().slideDown())
    }), a(".mfp-image").magnificPopup(), a(".cform").length && a("#cform").validate({
        rules: {
            name: {
                required: !0
            },
            tel: {
                required: !0
            },
            email: {
                required: !0,
                email: !0
            },
            message: {
                required: !0
            }
        },
        success: "valid",
        submitHandler: function() {
            a.ajax({
                url: "mailer/feedback.php",
                type: "post",
                dataType: "json",
                data: "name=" + a("#cform").find("input[name=\"name\"]").val() + "&email=" + a("#cform").find("input[name=\"email\"]").val() + "&tel=" + a("#cform").find("input[name=\"tel\"]").val() + "&message=" + a("#cform").find("textarea[name=\"message\"]").val(),
                beforeSend: function() {},
                complete: function() {},
                success: function() {
                    a("#cform").fadeOut(), a(".alert-success").delay(1e3).fadeIn()
                }
            })
        }
    })
})(jQuery);