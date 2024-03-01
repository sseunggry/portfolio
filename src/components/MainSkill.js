import styled from "styled-components";
import {vw} from "../utils/common";
import {useEffect, useLayoutEffect, useRef} from "react";

import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import theme from "../styles/theme";

const Section = styled.section`
    padding: 200px 0;

    ${({theme}) => theme.small`
        padding: ${vw(200)} 0;
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
        padding: 0 ${vw(40)};
    `};
`;

const Desc = styled.div`
    padding: 20px 0 60px;
    font-size: 18px;
    color: ${theme.color.gray2};
    text-align: center;
    line-height: 1.8;
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

    useLayoutEffect(() =>{
        gsap.registerPlugin(ScrollTrigger);

        const section = sectionRef.current;
        const largeTxt = largeTxtRef.current;

        const txtList = largeTxt.querySelectorAll('p');
        const txt = largeTxt.querySelectorAll('p:nth-of-type(2n)');
        const txt2 = largeTxt.querySelectorAll('p:nth-of-type(2n-1)');

        let ctx = gsap.context(() =>{
            const ani = gsap.timeline({ease: "none",});
            const ani2 = gsap.timeline({ease: "none",});

            ScrollTrigger.matchMedia({
                "(min-width: 721px)": function() {
                    gsap.set(txt, {clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)"});
                    ani2.to(txt, { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", color: theme.color.white, stagger: 0.1,duration: 5})
                        .to(txt2, {color: theme.color.white, opacity: 0.3, stagger: 0.1, duration: 5});

                    ScrollTrigger.create({
                        animation: ani2,
                        trigger: section,
                        start: "top 50%",
                        end: "center 50%",
                        scrub: 1,
                    });
                },
                "(max-width: 720px)": function() {
                    ani2.set(txtList, { clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)"});

                    Object.values(txtList).map((el) => {
                        gsap.to(el, {
                            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                            color: theme.color.white,
                            scrollTrigger: {
                                trigger: el,
                                start: "top 60%",
                                end: "bottom 80%",
                                scrub: 1,
                            }
                        })
                    });
                },
                "all": function() {
                    ani.to('body', {backgroundColor: theme.color.black, duration: 2});
                    ScrollTrigger.create({
                        animation: ani,
                        trigger: section,
                        start: "top 50%",
                        end: "0 100%",
                        scrub: 1,
                    });
                }
            });
        });

        return () => ctx.revert();

    }, []);
    return (
        <Section className="sec-02" ref={sectionRef} >
            <Inner>
                {/*<Desc>*/}
                {/*    <p>저는 디자이너 출신 퍼블리셔로, 디자인 툴과 퍼블리싱 툴 모두 사용 가능합니다.</p>*/}
                {/*    <p>현재는 프론트엔드로 성장하기 위해 리액트도 공부하고 있습니다!</p>*/}
                {/*</Desc>*/}
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