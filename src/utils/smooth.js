import Lenis from "@studio-freight/lenis";
import {ScrollTrigger, ScrollSmoother} from "gsap/ScrollTrigger";

function smooth() {
    const lenis = new Lenis({
        duration: 2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
    });

    function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    ScrollTrigger.config({autoRefreshEvents: "visibilitychange,DOMContentLoaded,load"});
    lenis.on("scroll", ScrollTrigger.update);


    // ScrollSmoother.normalizeScroll(true);
    // let smoother = ScrollSmoother.create({
    //    smooth: 2,
    //    effect: true,
    //    normalizeScroll: true
    // });
}

export default smooth;