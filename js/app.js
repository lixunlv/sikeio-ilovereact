window.onload = function () {
    animateLogo();
    animateRobot();
};

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
