const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

let timer;
function skewCircle() {
    let prevX = 0;
    let prevY = 0;

    window.addEventListener("mousemove", function (dets) {
        clearTimeout(timer);
        let xscale = gsap.utils.clamp(0.8, 1.2, dets.clientX - prevX);
        let yscale = gsap.utils.clamp(0.8, 1.2, dets.clientY - prevY);

        prevX = dets.clientX;
        prevY = dets.clientY;
        // console.log(xscale, yscale);

        circlefollower(xscale, yscale);

        timer = setTimeout(() => {
            document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`
        }, 100);

    })
}

function circlefollower(xscale, yscale) {
    window.addEventListener("mousemove", function (dets) {
        // console.log(dets.clientX, dets.clientY);
        document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`
    })
}

function imgAnim() {
    document.querySelectorAll("#elem").forEach(function (elem) {

        let rotate;
        let diffrot;

        elem.addEventListener("mouseleave", function () {
            gsap.to(elem.querySelector("img"), {
                opacity: 0,
                ease: Power1,
                duration: 0.5,
            });
        });

        elem.addEventListener("mousemove", function (dets) {
            // console.log(dets);
            let diff = dets.clientY - elem.getBoundingClientRect().top
            diffrot = dets.clientX - rotate;
            rotate = dets.clientX

            gsap.to(elem.querySelector("img"), {
                opacity: 1,
                ease: Power3,
                duration: 0.5,
                top: diff,
                left: dets.clientX,
                rotate: gsap.utils.clamp(-20,20,diffrot) 
            });
        });
    });
};

skewCircle();
circlefollower();
imgAnim();