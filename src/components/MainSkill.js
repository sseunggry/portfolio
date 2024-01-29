import styled from "styled-components";
import {vw} from "../utils/common";
import {useEffect, useRef} from "react";

import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import theme from "../styles/theme";

const Section = styled.section`
    padding: 200px 0;

    // ${({theme}) => theme.medium`
    //     padding: 200px 0;
    // `};

    ${({theme}) => theme.small`
        padding: ${vw(100)} 0;
    `};
`;

const Inner = styled.div`
    margin: 0 auto;
    max-width: 1440px;
    //padding: 0 240px;

    ${({theme}) => theme.xLarge`
        padding: 0 60px;
    `};

    ${({theme}) => theme.medium`
        padding: 0 60px;
    `};

    ${({theme}) => theme.small`
        padding: ${vw(100)} ${vw(40)};
    `};
`;

const LargeTxt = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    word-break: keep-all;
    gap: 30px;
    
    p{
        font-size: 100px;
        font-weight: 100;
        
        &:nth-of-type(2n){
            font-family: 'Playfair Display', serif;
            font-weight: 500;
        }
    }

    ${({theme}) => theme.xLarge`
        p{
            font-size: 80px;
        }
    `};

    ${({theme}) => theme.medium`
        gap: 20px;
        
        p{
            font-size: 65px;
        }
    `};

    ${({theme}) => theme.small`
        gap: ${vw(30)};
        
        p{
            width: 100%;
            font-size: ${vw(80)};
        }
    `};
`;


function MainSkill() {
    const sectionRef = useRef(null);
    const largeTxtRef = useRef(null);

    useEffect(() =>{
        gsap.registerPlugin(ScrollTrigger);

        let ctx = gsap.context(() =>{
            const section = sectionRef.current;
            const largeTxt = largeTxtRef.current;

            // let ani = gsap.timeline({
            //     scrollTrigger: {
            //         trigger: section,
            //         start: "top 50%",
            //         end: "top 50%",
            //         scrub: 1,
            //     }
            // });
            //
            // ani.to(section, { ease: "none",  backgroundColor: theme.color.black})
            //     .to(largeTxt, {stagger: 0.1, duration: 2, color: theme.color.white})
            gsap.to(section, {
                ease: "none",
                backgroundColor: theme.color.black,
                scrollTrigger: {
                    trigger: section,
                    start: "top 50%",
                    end: "top 50%",
                    scrub: 1,
                }
            });

            const txt = largeTxt.querySelectorAll('p:nth-of-type(2n)');
            const txt2 = largeTxt.querySelectorAll('p:nth-of-type(2n-1)');
            let ani = gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    start: "top 50%",
                    end: "center 50%",
                    scrub: 1,
                }
            });
            gsap.set(txt, {clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)"});

            ani.to(txt, { ease: "none", clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", color: theme.color.white, stagger: 0.1,duration: 2})
                .to(txt2, {ease: "none", color: theme.color.white, opacity: 0.3, stagger: 0.1, duration: 2});
        });

        return () => ctx.revert();
    }, []);
    return (
        <Section className="sec-02" ref={sectionRef}>
            <Inner>
                <LargeTxt ref={largeTxtRef}>
                    <p>Photoshop</p>
                    <p>Scss</p>
                    <p>Illustration</p>
                    <p>Html</p>
                    <p>Figma</p>
                    <p>Javascript</p>
                    <p>Zeplin</p>
                    <p>React</p>
                    <p>Notion</p>
                    <p>Gulp</p>
                    <p>Jquery</p>
                    <p>Gsap</p>
                    <p>Webpack</p>
                    <p>Ejs</p>
                </LargeTxt>
            </Inner>
        </Section>
    )
}

export default MainSkill;