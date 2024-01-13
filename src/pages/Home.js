import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';

import Layout from "../components/_inc/Layout";
import MainVisual from "../components/MainVisual";
import MainProject from "../components/MainProject";
import MainCareer from "../components/MainCareer";
import MainContact from "../components/MainContact";
import {useEffect} from "react";

function Home(){
    // useEffect(() => {
    //     window.onBeforeunload = function pushRefresh() {
    //         window.scrollTo(0, 0);
    //     };
    // }, []);

    return(
        <Layout>
            <MainVisual />
            <MainProject />
            <MainCareer />
            <MainContact />
        </Layout>
    )
}

export default Home;