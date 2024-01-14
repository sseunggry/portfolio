import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';

import Layout from "../components/_inc/Layout";
import MainVisual from "../components/MainVisual";
import MainProject from "../components/MainProject";
import MainCareer from "../components/MainCareer";
import MainContact from "../components/MainContact";
import {useEffect} from "react";

import {gsap} from "gsap";
import styled from "styled-components";
import MainVisual_ from "../components/MainVisual_";
// import {ScrollSmoother} from "gsap/ScrollSmoother";

const Wrap = styled.div`
    overflow: hidden;
`;

function Home(){
    useEffect(() => {
        // window.onBeforeunload = function pushRefresh() {
        //     window.scrollTo(0, 0);
        // };

        // gsap.registerPlugin(ScrollSmoother);
        // const smoother = ScrollSmoother.create({
        //     smooth: 2,
        //     speed: 2,
        //     effects: true,
        //     // normalizeScroll: true,
        //     smoothTouch: 0.1,
        // });

    }, []);

    return(
        <Wrap>
            <MainVisual />
            <MainProject />
            <MainCareer />
            <MainContact />
        </Wrap>
    )
}

export default Home;