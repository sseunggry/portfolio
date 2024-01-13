import {img} from "../recoil/atoms";
import styled from "styled-components";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useEffect, useRef} from "react";
import theme from "../styles/theme";

const Section = styled.section`
    position: relative;
    padding-top: 200px;
    //height: 100vh;
`;
const TxtBox = styled.div`
    position: relative;
    text-align: center;
    z-index: 1;

    h2{
        padding-bottom: 60px;
        font-size: 60px;
        font-weight: 100;
    }
    p{
        font-size: 20px;
        font-weight: 100;
        line-height: 1.6;
        color: #fff;
    }
`;
const Img = styled.img`
    //position: relative;
    position: absolute;
    display: block;
    //margin: 0 auto;
    width: 100%;
    height: 100vh;
    object-fit: cover;
    //width: 1200px;
`;

function MainVisual(){
    const sectionRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const section = sectionRef.current;
        const h2 = section.querySelector("h2");
        const desc = section.querySelector("p");
        const img = section.querySelector("img");

        gsap.set(h2, {scale: 1.5, yPercent: 20});
        gsap.set(desc, {yPercent: 20, opacity: 0});
        gsap.set(img, {scale: 0.5, top: "30%"});

        const ani = gsap.timeline();
        ani.to(h2, {scale: 1, yPercent: 0})
            .to(h2, { color: theme.color.white})
            .to(desc,{yPercent: 0, opacity: 1});

        ScrollTrigger.create({
            animation: ani,
            trigger: section,
            start: "top top",
            end: `+=${section.offsetWidth}`,
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            // invalidateOnRefresh: true,
            // pinSpacing: true,
            // markers: true
        });

        const ani2 = gsap.to(img, {
            scale: 1, top: 0, opacity: 1,
            scrollTrigger: {
                trigger: section,
                start: "top top",
                scrub: 1,
                // endTrigger: $img,
            }
        });

        return () => {
            ani.kill();
            ani2.kill();
        };
    }, []);

    return (
        <Section className="sec-kv" ref={sectionRef}>
            <TxtBox>
                <h2>안녕하세요. <br/> 프론트엔드 개발자 <br/> 최승연 입니다</h2>
                <p>
                    현재 퍼블리셔 3년차이며, 인터랙션 및 스크립트 작업을 좋아합니다. <br/>
                    프론트엔드 개발자로 성장하기위해 리액트를 공부하고 있습니다.
                </p>
            </TxtBox>
            <Img src={`${img}/main_visual.jpg`} alt="" />
        </Section>
    )
}

export default MainVisual;