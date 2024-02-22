import styled from "styled-components";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useEffect, useRef, useState} from "react";
import theme from "../styles/theme";
import {vw} from "../utils/common";
import {lenis} from "../utils/smooth";
import {motion, useMotionValueEvent, AnimatePresence, stagger} from "framer-motion";

const Section = styled.section`
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 80px;
    background-color: ${theme.color.black};

    ${({theme}) => theme.small`
        padding-top: ${vw(120)};
    `};
`;
const TxtBox = styled.div`
    text-align: center;

    ${({theme}) => theme.small`
        padding-left: ${vw(40)};
        padding-right: ${vw(40)};
    `};
`;
const Svg = styled.svg`
    width: 800px;

    path{
        fill: none;
        stroke: ${theme.color.white};
        stroke-width: 7;
        stroke-miterlimit: 10;
    }

    //@keyframes strokeOffset {
    //    to {
    //        stroke-dashoffset: 0;
    //    }
    //}
    //
    //#mask-s {
    //    animation: strokeOffset 0.5s linear forwards;
    //}
    //#mask-e {
    //    animation: strokeOffset 0.5s linear forwards 0.5s;
    //}
    //#mask-u{
    //    animation: strokeOffset 0.5s linear forwards 1s;
    //}
    //#mask-n{
    //    animation: strokeOffset 0.5s linear forwards 1.5s;
    //}
    //#mask-g {
    //    animation: strokeOffset 0.5s linear forwards 2s;
    //}
`;
const Title = styled.h2`
    margin-bottom: 40px;
    font-size: 90px;
    font-weight: 700;
    //font-weight: 100;
    letter-spacing: 2px;
    color: ${theme.color.white};

    strong{
        font-weight: 700;
    }

    ${({theme}) => theme.large`
        font-size: 70px;
    `};

    ${({theme}) => theme.medium`
        font-size: 60px;
    `};

    ${({theme}) => theme.small`
        font-size: ${vw(70)};
    `};
`;
const Desc = styled.p`
    font-size: 20px;
    font-weight: 300;
    line-height: 1.6;
    color: ${theme.color.gray2};
    word-break: keep-all;

    ${({theme}) => theme.large`
        font-size: 18px;
    `};

    ${({theme}) => theme.medium`
        font-size: 18px;
    `};

    ${({theme}) => theme.small`
        // display: none;
        font-size: ${vw(28)};
    `};
`;
const ScrollTxt = styled.p`
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    font-size: 16px;
    font-weight: 700;
    color: ${theme.color.white};
    text-transform: uppercase;

    &:after{
        content: '';
        display: block;
        margin: 10px auto 0;
        width: 2px;
        height: 50px;
        background-color: ${theme.color.white};
    }
`;
const LoadTxt = styled.div`
    overflow: hidden;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    color: ${theme.color.black};
    text-align: center;
    background-color: ${theme.color.white};
    transform: translate(0, 0);
    transition: transform 1.5s cubic-bezier(0.19,1,0.22,1);
    z-index: 999;

    &.hide{
        transform: translate(0, -100%);
    }

    p{
        overflow: hidden;
        height: fit-content;
        //padding: 0 40px;
        font-size: 240px;
        font-weight: 800;

        ${({theme}) => theme.large`
            font-size: 200px;
        `}

        ${({theme}) => theme.medium`
            font-size: 140px;
        `}

        ${({theme}) => theme.small`
            font-size: ${vw(130)};
        `}

        span{
            display: inline-block;
        }
    }
`;
const drawSvgTxt = {
    hidden: {pathLength: 0, opacity: 0},
    visible: (i) => {
        const delay = i * 1;
        return {
            pathLength: 1,
            opacity: 1,
            // delay: stagger(0.5, { startDelay: 0.5 }),
            transition: {
                // duration: 2,
                pathLength: {delay, duration: 1, bounce: 0},
                opacity: {delay, duration: 0.01},
                // repeat: Infinity,
                // repeatType: "loop",
            },
        };
    }
};

function MainVisual(){
    const sectionRef = useRef(null);
    const loadTxtRef = useRef(null);
    const [isSvgTxtAni, setSvgTxtAni] = useState(false);

    const onAnimationComplete = () => {
        setSvgTxtAni(false);
        setTimeout(() => {
            setSvgTxtAni(true);
        }, 1000);
    };

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const section = sectionRef.current;
        const loadTxt = loadTxtRef.current;

        const loadTxtList = loadTxt.querySelectorAll('p');
        loadTxtList.forEach((el) => {
            let txtDesc = el.innerText.split('');
            let txtDescList = '';
            txtDesc.map((txt) => txtDescList += `<span>${txt}</span>`);
            el.innerHTML = txtDescList;
        });
        const loadTxtSpan = loadTxt.querySelectorAll('span');

        // const tit1 = section.querySelector(".tit-box p:nth-of-type(1)");
        // const tit2 = section.querySelector(".tit-box p:nth-of-type(2)");
        // const tit3 = section.querySelector(".tit-box p:nth-of-type(3)");
        const desc = section.querySelector(".desc");
        const scroll = section.querySelector(".txt-scroll");

        let ctx = gsap.context(() => {
            gsap.set(loadTxtSpan, {yPercent: 100});
            // gsap.set(tit1, {yPercent: 20, opacity: 0});
            // gsap.set(tit3, {yPercent: -20, opacity: 0});
            // gsap.set(tit2, {opacity: 0});
            gsap.set(desc, {yPercent: 30, opacity: 0});
            gsap.set(scroll, {opacity: 0});

            gsap.to(loadTxtSpan, {yPercent: 0, stagger: 0.1, duration: 0.5, ease: "expo.inOut",
                onStart: () => {
                    lenis.stop();
                },
                onComplete: () => {
                    loadTxt.classList.add('hide');

                    if(window.scrollY !== 0 ){
                        lenis.start();
                    }

                    visualAni();
                }
            });

            const visualAni = () => {
                const aniTxt = gsap.timeline({
                    onComplete: () => {
                        lenis.start();
                    }
                });
                setSvgTxtAni(true);
                aniTxt
                    // .to(tit2, {opacity: 1, delay: 0.1, ease: "expo.in"})
                    // .to(tit1, {yPercent: 0, opacity: 1, ease: "expo.inOut"}, "tit")
                    // .to(tit3, {yPercent: 0, opacity: 1, ease: "expo.inOut"}, "tit")
                    .to(desc, {yPercent: 0, opacity: 1, ease: "expo.out"});
                // .to(scroll, {opacity: 1});
            }
        }, loadTxt);

        const txtSvg = section.querySelector('.txt-svg');
        const txtSvgPath = section.querySelectorAll('.txt-svg path');
        const txtSvgS = section.querySelector('.txt-svg #mask-s');
        const txtSvgE = section.querySelector('.txt-svg #mask-e');
        const txtSvgU = section.querySelector('.txt-svg #mask-u');
        const txtSvgN = section.querySelector('.txt-svg #mask-n');
        const txtSvgG = section.querySelector('.txt-svg #mask-g');

        const svgAni = () => {
            // gsap.registerPlugin(DrawSVGPlugin, MotionPathPlugin);
            let tl =  gsap.timeline({defaults: {duration: 0.3, ease: 'none'}});
            tl
                // .to(txtSvg, {autoAlpha: 1})
                .fromTo(txtSvgS, {drawSVG: '0'},{drawSVG: '100% 0%'})
                .fromTo(txtSvgE, {drawSVG: '0'},{drawSVG: '100% 0%'})
                .fromTo(txtSvgU, {drawSVG: '0'},{drawSVG: '100% 0%'})
                .fromTo(txtSvgN, {drawSVG: '0'},{drawSVG: '100% 0%'})
                .fromTo(txtSvgG, {drawSVG: '0'},{drawSVG: '100% 0%'})
        }
        return () => ctx.revert();

        // const ctx2 = () => {
        //     gsap.context(() => {
        //         gsap.set(titSpan, {yPercent: 30, scale: 4, opacity: 0,});
        //         gsap.set(tit1, {yPercent: 20, opacity: 0});
        //         gsap.set(tit3, {yPercent: -20, opacity: 0});
        //         gsap.set(desc, {yPercent: 30, opacity: 0});
        //         // gsap.set(img, {scale: 0.5, top: "20%"});
        //         gsap.set(scroll, {opacity: 0});
        //
        //         const ani = gsap.timeline();
        //         ani.to(titSpan, {
        //             yPercent: 0,
        //             scale: 1,
        //             opacity: 1,
        //             stagger: 0.1,
        //             duration: 0.4,
        //             ease: "Power3.easeInOut"
        //         })
        //             .to(tit1, {yPercent: 0, opacity: 1, duration: 0.3, ease: "Circ.easeOut"}, "tit")
        //             .to(tit3, {yPercent: 0, opacity: 1, duration: 0.3, ease: "Circ.easeOut"}, "tit")
        //             .to(desc, {yPercent: 0, opacity: 1})
        //             .to(scroll, {opacity: 1});
        //
        //         // ScrollTrigger.create({
        //         //     animation: ani,
        //         //     trigger: section,
        //         //     start: "top top",
        //         //     // end: `+=${section.offsetWidth}`,
        //         //     // end: `+=200%`,
        //         //     scrub: 1,
        //         //     // pin: true,
        //         //     // anticipatePin: 1,
        //         // });
        //
        //         // gsap.to(img, {
        //         //     scale: 1, top: 0,
        //         //     scrollTrigger: {
        //         //         trigger: section,
        //         //         start: "top top",
        //         //         scrub: 1,
        //         //     }
        //         // });
        //     }, sectionRef);
        //
        //     return () => ctx2.revert();
        // }

    }, []);

    // useEffect(() => {
    //     const masks = ['s', 'e', 'u', 'n', 'g'];
    //
    //     masks.forEach((txt, index, el) => {
    //         const id = `#mask-${txt}`
    //         let path = document.querySelector(id);
    //         const length = path.getTotalLength();
    //         path.style.strokeDasharray = length;
    //         path.style.strokeDashoffset = length;
    //     })
    // }, []);
    return (
        <>
            <LoadTxt ref={loadTxtRef}>
                <p>SSEUNG</p>
            </LoadTxt>
            <Section className="sec-kv" ref={sectionRef}>
                <TxtBox>
                    <AnimatePresence>
                        <Svg className="txt-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720.2 359.12">
                            <motion.g className="txt-line" initial="hidden" animate={isSvgTxtAni ? "visible" : null} >
                                {/*onAnimationComplete={onAnimationComplete}*/}
                                <motion.path id="mask-s" variants={drawSvgTxt} custom={0}
                                             d="M157.71,50.23s13.39-30.77,2.32-41.14c-8.61-8.07-32.01-3.8-88.01,36.89,0,0-66.37,48.87-59.77,83.7,5.27,27.8,86.27-10.2,110.38-13.01,9.82-1.15,22.56.3,29.58,8.38,8.64,9.94,3.84,25.5-.43,36.22-8.33,14.35-85.26,111.21-133.65,107.38-14.57-1.16-9.57-14.85-4.65-23.53,23.04-40.64,121.25-95,201.64-94.82"
                                             strokeLinecap="round" />
                                <motion.path id="mask-e" variants={drawSvgTxt} custom={1}
                                             d="M216.51,150.48c15.86,5.18,36.11-.16,47.06-14.51,9.93-13.01-2.32-13.91-12.19-9.39-20.66,9.45-38.88,27.08-47.76,48.21-1.5,3.57-2.74,7.41-2.79,11.31-.33,28.38,37.96,6.3,44.67,2.38,12-7,75.11-42.8,80.99-43.45"
                                             strokeLinecap="round" />
                                <motion.path id="mask-u" variants={drawSvgTxt} custom={2}
                                             d="M328.71,145.3c-7.15,6.22-13.94,12.98-20.06,20.23-4.14,4.9-20.1,25.35-10.08,30.85,12.93,7.1,69.93-52.9,78.87-49.51,5.86,2.23-13.36,25.56-16.64,36.42-3.52,11.66,8.7,9.19,17.7,5.19,10.68-4.75,71.4-42.36,78.2-43.18"
                                             strokeLinecap="round" />
                                <motion.path id="mask-n" variants={drawSvgTxt} custom={3}
                                             d="M456.71,145.3c-7.81,8.9-44.52,50.18-30.2,50.18,9,0,65-56,85-56,14.56,0-16,47-5,52,8.24,3.75,37-24,78-41"
                                             strokeLinecap="round" />
                                <motion.path id="mask-g" variants={drawSvgTxt} custom={4}
                                             d="M622.51,145.48c-.51-4.33-4.42-6.84-8.42-6.63-11.58.63-39.61,12.74-42.05,29.01-3.53,23.62,58.29-14.02,66.88-24.7-2.92,7.49-6,14.92-9.14,22.32-11.33,26.74-23.59,53.13-37.18,78.81-14.72,27.82-30.84,56.18-52.34,79.4-7.71,8.32-29.62,29.05-44.76,23.8-27.42-9.5,9.28-63.28,19.53-76.48,18.13-23.34,42.17-41.81,66.92-57.61,41.99-26.81,88.15-46.93,134.73-64.26"
                                             strokeLinecap="round" strokeLinejoin="round" />
                            </motion.g>
                        </Svg>
                    </AnimatePresence>
                    <Title className="tit-box">
                        {/*<p>Let's Introduce</p>*/}
                        {/*<p>Frontend Developer's</p>*/}
                        {/*<p>Seung Yeon</p>*/}
                        {/*<p>안녕하세요.</p>*/}
                        {/*<p>프론트엔드 개발자</p>*/}
                        {/*<p><strong>최승연</strong> 입니다.</p>*/}
                    </Title>
                    <Desc className="desc">
                        현재 퍼블리셔 3년차이며, 인터랙션 및 스크립트 작업을 좋아합니다. <br/>
                        프론트엔드 개발자로 성장하기위해 리액트를 공부하고 있습니다.
                    </Desc>
                </TxtBox>
                <ScrollTxt className="txt-scroll">scroll</ScrollTxt>
            </Section>
        </>
    )
}

export default MainVisual;