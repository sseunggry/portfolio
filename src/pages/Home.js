import {useEffect, useRef, useState} from "react";
import Layout from "../components/_inc/Layout";
import {TweenMax, gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import MainVisual from "../components/MainVisual";
import MainProject from "../components/MainProject";
import MainCareer from "../components/MainCareer";
import MainContact from "../components/MainContact";
import theme from "../styles/theme";

function Home(){
    const appRef = useRef();

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // const $secKvTit = document.querySelector('.sec-kv h2');
        const h2 = ".sec-kv h2";
        const desc = ".sec-kv p";
        const img = ".sec-kv img";
        const sec03Tit = ".sec-03 h3";
        const sec03Txt = ".sec-03 .txt-box";
        const sec03Info = ".sec-03 .info";
        const decoTxt = ".sec-03 .deco-txt";

        gsap.set(h2, {scale: 1.5, yPercent: 20, opacity: 1});
        gsap.set(img, {scale: 0.5, top: "30%", opacity: 1});
        gsap.set(desc, {yPercent: 20, opacity: 0});
        // gsap.set(".sec-01", {translateX : 0});
        // gsap.set(".sec-02", {});
        gsap.set(sec03Tit, {opacity : 0, yPercent: 30});
        gsap.set(sec03Txt, {opacity : 0, yPercent: 20});
        gsap.set(sec03Info, {opacity : 0, yPercent: 20});

        let ctx = gsap.context(() => {
            const ani1 = gsap.timeline();
            ani1.to(h2, {scale: 1, yPercent: 0, opacity: 1})
                .to(h2, { color: theme.color.white})
                .to(desc,{yPercent: 0, opacity: 1});

            ScrollTrigger.create({
                animation: ani1,
                trigger: ".sec-kv",
                start: "top top",
                // end: `+=${document.querySelector(".sec-kv").offsetHeight}`,
                end: "bottom+=300%",
                scrub: 1,
                pin: true,
                anticipatePin: 1,
                pinSpacing: true,
                endTrigger: img,
                // markers: true
            });

            const ani2 = gsap.timeline();
            ani2.to(img, {scale: 1, top: 0, opacity: 1});

            ScrollTrigger.create({
                animation: ani2,
                scrub: 1,
                endTrigger: img,
                // markers: true
            });

            const ani3 = gsap.timeline();
            ani3.to(".sec-01", {x: "-100%"});

            ScrollTrigger.create({
                animation: ani3,
                trigger: ".sec-01",
                start: "top top",
                end: "bottom+=300%",
                scrub: 1,
                pin: true,
                anticipatePin: 1,
                pinSpacing: true,
                endTrigger: ".sec-01 .list",
            })


        }, appRef);

        return () => ctx.revert();

    }, []);

    return(
        <div ref={appRef}>
            <Layout header={{active: -1}} >
                <MainVisual />
                <MainProject />
                <MainCareer />
                <MainContact />
            </Layout>
        </div>
    )
}

export default Home;