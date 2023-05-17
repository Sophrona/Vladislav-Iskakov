(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(2 == webP.height);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = true === support ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    $((function() {
        "use strict";
        const toggleCyberEye = () => {
            const homeSection = document.querySelector(".home");
            const eyeElement = document.querySelector(".cyber-eye");
            if (homeSection.classList.contains("active")) setTimeout((() => {
                eyeElement.classList.add("cyber-eye--active");
            }), 1e3); else eyeElement.classList.remove("cyber-eye--active");
        };
        $(window), $("html, body");
        var nav = $(".vertical-nav");
        $(".preloader").delay(200).fadeOut(700, (function() {
            $(this).remove();
        }));
        $(".switch-button").on("click", (function() {
            $(this).addClass("hide");
            $(".switched-styles").addClass("show");
        }));
        $(".switched-styles .hide-button").on("click", (function() {
            $(this).parent().removeClass("show");
            $(".switch-button").removeClass("hide");
        }));
        $(".switched-styles ul li").on("click", (function() {
            $("link[href*='color']").attr("href", "css/colors/" + $(this).data("color") + "_color.css");
        }));
        $(".vertical-nav .toggle-menu").on("click", (function() {
            nav.toggleClass("menu-active");
        }));
        $(".vertical-nav .mini-menu > ul li a").on("click", (function(e) {
            e.preventDefault();
            var selector = $(this);
            $(".vertical-nav").removeClass("menu-active");
            $(selector.attr("href")).addClass("active").siblings("section").removeClass("active");
            toggleCyberEye();
        }));
        $(".portfolio-link").on("click", (function(e) {
            e.preventDefault();
            $(".home").removeClass("active");
            $("#portfolio").addClass("active");
            toggleCyberEye();
        }));
        function skillsPogress() {
            $(".progress-container").each((function() {
                var progressBar = $(this).find(".progress-bar");
                progressBar.css("width", progressBar.attr("aria-valuenow") + "%");
            }));
        }
        $("#about").on("scroll", (function() {
            skillsPogress();
            true;
        }));
        $("#control li").on("click", (function() {
            $(this).addClass("active").siblings("li").removeClass("active");
        }));
        $("#filtr-container").filterizr({
            animationDuration: .4
        });
        $(".contact-form").on("submit", (function() {
            var myForm = $(this), data = {};
            myForm.find("[name]").each((function() {
                var that = $(this), name = that.attr("name"), value = that.val();
                data[name] = value;
            }));
            $.ajax({
                url: myForm.attr("action"),
                type: myForm.attr("method"),
                data,
                success: function(response) {
                    if ("success" == response) {
                        $(".contact-form").find(".form-message").addClass("success");
                        $(".form-message span").text("Message Sent!");
                    } else {
                        $(".contact-form").find(".form-message").addClass("error");
                        $(".form-message span").text("Error Sending!");
                    }
                }
            });
            return false;
        }));
    }));
    const getRandomNumber = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    const getRandomJoke = () => {
        const jokes = [ "Chuck Norris writes code...<br> that optimizes itself", "Programming is like sex: <br> one mistake and you have to support it for the rest of your life.", "Have you heard about the new Cray super computer? <br> It’s so fast, it executes an infinite loop in 6 seconds.", "Chuck Norris can take a screenshot of his blue screen", "Hide and seek champion... <br> ; <br> since 1958" ];
        return jokes[getRandomNumber(0, jokes.length - 1)];
    };
    (() => {
        const joke = getRandomJoke();
        const textElement = document.querySelector(".home-joke");
        if (!textElement) return;
        textElement.innerHTML = joke;
    })();
    window["FLS"] = true;
    isWebp();
})();