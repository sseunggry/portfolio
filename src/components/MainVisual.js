import {img} from "../recoil/atoms";
import styled from "styled-components";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useEffect, useRef} from "react";
import theme from "../styles/theme";
import Text from "../styles/Text";
import Header from "./_inc/Header";

const Section = styled.section`
    //position: relative;
    overflow: hidden;
    width: 100vw;
    height: 100vh;
    
    background-color: ${theme.color.black};
`;
const TxtBox = styled.div`
    position: absolute;
    top: 200px;
    left: 50%;
    transform: translateX(-50%);
    padding: 0 100px;
    width: 100%;
    text-align: center;
    z-index: 1;

    h3{
        padding-bottom: 60px;
    }
    // p{
    //     line-height: 1.6;
    //     color: ${theme.color.white};
    // }
`;

const Title = styled.h2`
    margin-bottom: 40px;
    font-size: 100px;
    font-weight: 700;
    letter-spacing: 2px;
    color: ${theme.color.white};
    
    .tit2{
        //font-family: 'Abril Fatface', serif;
        
        span{
            display: inline-block;
            min-width: 40px;
        }
    }
`;

const Img = styled.img`
    position: relative;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
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
    position: fixed;
    width: 100vw;
    height: 100vh;
    font-size: 200px;
    font-weight: 700;
    //color: ${theme.color.white};
    color: ${theme.color.black};
    text-align: center;
    //background-color: ${theme.color.black};
    background-color: ${theme.color.white};
    z-index: 5;
    
    p{
        overflow: hidden;
        //display: flex;
        height: fit-content;
        
        span{
            display: inline-block;
        }
    }
`;

function MainVisual(){
    const sectionRef = useRef(null);
    const loadTxtRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const section = sectionRef.current;
        const loadTxt = loadTxtRef.current;

        const loadTxtList = loadTxt.querySelectorAll('p');


        const tit1 = section.querySelector(".txt-box .tit1");
        const tit2 = section.querySelector(".txt-box .tit2");
        const tit3 = section.querySelector(".txt-box .tit3");

        const desc = section.querySelector(".txt-box .desc");
        const scroll = section.querySelector(".txt-scroll");

        // let titDesc = tit2.innerText.split('');
        // let titDescList = '';
        // titDesc.map((el) => titDescList += `<span>${el}</span>`);
        // tit2.innerHTML = titDescList;

        const titSpan = tit2.querySelectorAll("span");

        loadTxtList.forEach((el) => {
            let txtDesc = el.innerText.split('');
            let txtDescList = '';
            txtDesc.map((txt) => txtDescList += `<span>${txt}</span>`);
            el.innerHTML = txtDescList;
        });

        const loadTxtSpan = loadTxt.querySelectorAll('span');
        console.log(loadTxtSpan);

        gsap.set(loadTxtSpan, {yPercent: 100});
        const aniTxt = gsap.timeline();
        aniTxt.to(loadTxtSpan, {yPercent: 0, stagger: 0.1, duration: 0.5, ease: "none"})
              .to(loadTxt, {yPercent: -100, ease: "none"});

        const ctx = () => {
            gsap.context(() => {
                gsap.set(titSpan, {yPercent: 30, scale: 4, opacity: 0,});
                gsap.set(tit1, {yPercent: 20, opacity: 0});
                gsap.set(tit3, {yPercent: -20, opacity: 0});
                gsap.set(desc, {yPercent: 30, opacity: 0});
                // gsap.set(img, {scale: 0.5, top: "20%"});
                gsap.set(scroll, {opacity: 0});

                const ani = gsap.timeline();
                ani.to(titSpan, {
                    yPercent: 0,
                    scale: 1,
                    opacity: 1,
                    stagger: 0.1,
                    duration: 0.4,
                    ease: "Power3.easeInOut"
                })
                    .to(tit1, {yPercent: 0, opacity: 1, duration: 0.3, ease: "Circ.easeOut"}, "tit")
                    .to(tit3, {yPercent: 0, opacity: 1, duration: 0.3, ease: "Circ.easeOut"}, "tit")
                    .to(desc, {yPercent: 0, opacity: 1})
                    .to(scroll, {opacity: 1});

                // ScrollTrigger.create({
                //     animation: ani,
                //     trigger: section,
                //     start: "top top",
                //     // end: `+=${section.offsetWidth}`,
                //     // end: `+=200%`,
                //     scrub: 1,
                //     // pin: true,
                //     // anticipatePin: 1,
                // });

                // gsap.to(img, {
                //     scale: 1, top: 0,
                //     scrollTrigger: {
                //         trigger: section,
                //         start: "top top",
                //         scrub: 1,
                //     }
                // });
            }, sectionRef);

            return () => ctx.revert();
        }

    }, []);

    return (
        <>
            <Section className="sec-kv" ref={sectionRef}>
                <LoadTxt ref={loadTxtRef}>
                    <p>SEUNG YEON</p>
                </LoadTxt>
                <TxtBox className="txt-box">
                    <Title>
                        <p className="tit1">Let's Introduce</p>
                        <p className="tit2">Frontend Developer's</p>
                        <p className="tit3">Seung Yeon</p>
                    </Title>
                    {/*<Text name="tit2" fontWeight="100">*/}
                    {/*    안녕하세요. <br/> */}
                    {/*    프론트엔드 개발자 <br/> */}
                    {/*    최승연 입니다*/}
                    {/*</Text>*/}
                    <Text name="desc1" fontWeight="300" className="desc">
                        현재 퍼블리셔 3년차이며, 인터랙션 및 스크립트 작업을 좋아합니다. <br/>
                        프론트엔드 개발자로 성장하기위해 리액트를 공부하고 있습니다.
                    </Text>
                </TxtBox>
                {/*<Img src={`${img}/main_visual.jpg`} alt="" />*/}
                <ScrollTxt className="txt-scroll">scroll</ScrollTxt>
            </Section>
        </>
    )
}

export default MainVisual;