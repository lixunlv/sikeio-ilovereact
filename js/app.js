window.onload = function () {
    animateLogo();
    animateRobot();
    updateSliderControl();
    addSmoothScrolling();
};

window.onscroll = function () {
    updateSliderControl();
};

function updateSliderControl() {
    // get all the slider links
    var links = document.querySelectorAll("#slider-control a")

    for (var i = 0; i < links.length; i++) {
        var link = links[i];

        // Get the section pointed to by the link
        var section = document.querySelector(link.getAttribute('href'));
        var sectionTop = section.offsetTop;
        var sectionBottom = section.offsetTop + section.offsetHeight;

        // Check if window.scrollY is between the section.
        if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
            link.className = "active";
        } else {
            link.className = "";
        }
    }
}

function scrollToElement(element) {
    var topOfElement = element.offsetTop;

    TweenMax.to(window, 1, {
        scrollTo: {
            y: topOfElement,
        },

        ease: Power2.easeInOut,
    });
}

function addSmoothScrolling() {
    var links = document.querySelectorAll("#slider-control a");

    for (var i = 0; i < links.length; i++) {
        var link = links[i];

        link.addEventListener("click", function (wrapLink) {
            return function(event) {
                // `event` is the mouse click event
                event.preventDefault();

                // BUG WARNING! Fix with a closure or ES6 `let`.
                var href = wrapLink.getAttribute('href');

                scrollToElement(document.querySelector(href));
            };
        }(link));
    }
}

function animateLogo() {
    TweenMax.fromTo(".react-logo", 2, {
        // from
        css: {
            transform: "translate(0, -30px)"
            //top: "-30px"
        }
    }, {
        // to
        css: {
            transform: "translate(0, 30px)"
            //top: "30px"
        },

        // option to repeat animation forever
        repeat: -1,

        // option to reverse the animation and rerun
        yoyo: true,

        // change easing type
        ease: Power2.easeInOut,
    });

}

function animateRobot() {
    var t = new TimelineMax({repeat: -1});

    t.to("#android-robot", 0.5, {transform: "translate(100px, 120px) rotate(-50deg)"})
        .to("#android-robot", 0.3, {transform: "translate(100px, 120px) rotate(-50deg)"})
        .to("#android-robot", 0.5, {transform: "translate(100px, 120px) rotate(-60deg)"})
        .to("#android-robot", 0.5, {transform: "translate(100px, 120px) rotate(-40deg)"});

    //t.to("#android-robot", 0.5, {x: 100, y: 120, rotation: "-50deg"})
    //    .to("#android-robot", 0.3, {x: 100, y: 120, rotation: "-50deg"})
    //    .to("#android-robot", 0.5, {x: 100, y: 120, rotation: "-60deg"})
    //    .to("#android-robot", 0.5, {x: 100, y: 120, rotation: "-40deg"});
}
