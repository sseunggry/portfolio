import Layout from "../components/_inc/Layout";
import styled from "styled-components";
import theme from "../styles/theme";
import {useEffect, useRef} from "react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import Text from "../styles/Text";
import {vw} from "../utils/common";
import {img} from "../recoil/atoms";

const AboutCon = styled.div`
    padding-top: 80px;

    ${({theme}) => theme.small`
        padding-top: ${vw(120)};
    `};
`;
const Inner = styled.div`
    margin: 0 auto;
    max-width: 1440px;
    
    ${({theme}) => theme.xLarge`
        padding-left: 60px;
        padding-right: 60px;
    `};
    
    ${({theme}) => theme.small`
        padding-left: ${vw(40)};
        padding-right: ${vw(40)};
    `};
`;
const TitBox = styled.div`
    padding: 150px 0 200px;

    ${({theme}) => theme.small`
        padding-top: ${vw(150)};
        padding-bottom: ${vw(200)};
    `};
`;
const InfoTxt = styled.ul`
    margin: 100px 0 0 auto;
    width: 40%;
    
    li{
        overflow: hidden;
        margin-bottom: 20px;
        font-size: 18px;
        line-height: 2;
        word-break: keep-all;
        
        &:last-of-type{
            margin-bottom: 0;
        }
        
        span{
            display: inline-block;
        }
    }

    ${({theme}) => theme.large`
        width: 50%;
    `};

    ${({theme}) => theme.medium`
        width: 70%;
    `};

    ${({theme}) => theme.small`
        margin-top: ${vw(100)};
        width: 90%;
        
        li{
            margin-bottom: ${vw(30)};
            font-size: ${vw(28)};
        }
    `};
`;

const Feature = styled.div`
    padding: 140px 0;
    background-color: ${theme.color.black};

    ${({theme}) => theme.small`
        padding: ${vw(140)} 0;
    `};

    .tit{
        h3{
            margin-bottom: 40px;
            font-size: 80px;
            font-weight: 700;
            color: ${theme.color.white};
            
            &:last-of-type{
                margin-bottom: 0;
            }
    
            ${({theme}) => theme.small`
                margin-bottom: ${vw(40)};
                font-size: ${vw(80)};
            `};
        }
    }
    
    .desc{
        margin: 100px 0 0 auto;
        width: 40%;
        
        p{
            margin-bottom: 30px;
            font-size: 18px;
            font-weight: 300;
            color: ${theme.color.gray3};
            letter-spacing: 0;
            line-height: 1.6;
            word-break: keep-all;
        }

        ${({theme}) => theme.large`
            width: 70%;
        `};
    
        ${({theme}) => theme.medium`
            width: 100%;
        `};

        ${({theme}) => theme.small`
            margin-top: ${vw(100)};
            
            p{
                margin-bottom: ${vw(40)};
                font-size: ${vw(28)};
            }
        `};
    }
`;
const LargeTxt = styled.div`
    padding: 200px 0;
    font-size: 100px;
    font-weight: 700;
    color: ${theme.color.gray5};

    ${({theme}) => theme.large`
        font-size: 80px;
    `};

    ${({theme}) => theme.medium`
        padding: 150px 0;
        font-size: 70px;
    `};

    ${({theme}) => theme.small`
        padding: ${vw(150)} 0;
        font-size: ${vw(70)};
    `};
`;
const Story = styled.div`
    padding: 150px 0;
    background-color: ${theme.color.black};

    ${Inner} {
        position: relative;
    }
    
    ${({theme}) => theme.small`
        padding: ${vw(150)} 0;
    `};
`;
const StoryTit = styled.h3`
    display: flex;
    flex-direction: column;
    margin-bottom: 100px;
    font-size: 120px;
    color: ${theme.color.white};
    
    span:nth-child(2){
        font-family: 'Playfair Display', serif;
    }

    ${({theme}) => theme.sMedium`
        font-size: 110px;
    `};

    ${({theme}) => theme.small`
        margin-bottom: ${vw(100)};
        font-size: ${vw(120)};
    `};
`;
const StoryBox = styled.div`
    display: flex;

    ${({theme}) => theme.medium`
        flex-direction: column; 
    `};
`;
const StoryImg = styled.div`
    overflow: hidden;
    margin-left: auto;
    flex-shrink: 0;
    width: 40%;
    min-width: 400px;
    
    img{
        width: 100%;
        object-fit: cover;
    }
    span{
        display: inline-block;
        margin-top: 16px;
        font-size: 18px;
        color: ${theme.color.gray2};
        font-weight: 300;
        line-height: 1.8;
        word-break: keep-all;
    }

    ${({theme}) => theme.medium`
        width: 50%;
    `};

    ${({theme}) => theme.small`
        min-width: auto;
        width: 100%;
        
        span{
            margin-top: ${vw(100)};
            font-size: ${vw(28)};
        }
    `};
`;
const StoryTxt = styled.div`
    padding-right: 50px;
    width: 35%;
    
    p{
        margin-bottom: 20px;
        font-size: 18px;
        color: ${theme.color.gray2};
        font-weight: 300;
        line-height: 1.8;
        word-break: keep-all;
        
        &:last-of-type{
            margin-bottom: 0;
        }
    }
    
    ${({theme}) => theme.large`
        width: 50%;
    `};

    ${({theme}) => theme.medium`
        margin-bottom: 60px;
        width: 80%;
    `};

    ${({theme}) => theme.small`
        padding-right: 0;
        margin-bottom: ${vw(100)};
        width: 95%;
        br{
            display: none;
        }
        
        p{
            margin-bottom: ${vw(30)};
            font-size: ${vw(28)};
        }
    `};
`;

function About(){
    const sectionRef = useRef(null);
    const infoRef = useRef(null);
    const featureRef = useRef(null);
    const largeTxtRef = useRef(null);
    const storyRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const section = sectionRef.current;
        const info = infoRef.current;
        const feature = featureRef.current;
        const largeTxt = largeTxtRef.current;
        const storyCon = storyRef.current;

        const pageTit = section.querySelector('[name="tit1"] span');
        const infoTxt = info.querySelectorAll('li');
        const featureTitCon = feature.querySelectorAll('.tit');
        const featureTit = feature.querySelectorAll('.tit h3');
        const featureTxt = feature.querySelector('.desc');
        const largeTxtList = largeTxt.querySelector('p');
        const storyConTit = storyCon.querySelector('.tit');
        const storyConImg = storyCon.querySelector('.img-box');
        const storyConTxt = storyCon.querySelector('.txt-box');

        let txtDesc = largeTxtList.innerText.split('');
        let txtDescList = '';
        txtDesc.map((txt) => txtDescList += `<span>${txt}</span>`);
        largeTxtList.innerHTML = txtDescList;

        let ctx = gsap.context(() => {
            let aniTxt = gsap.to(largeTxt.querySelectorAll("span"), {
                color: theme.color.black, stagger: 0.5, duration: 8,
                ease: "none",
            });

            gsap.set(storyConTit, {opacity: 0, clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)"});
            gsap.set(storyConTxt, {opacity: 0, clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)"});
            gsap.set(storyConImg, {opacity: 0, clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)"});

            const aniStory = gsap.timeline({
                ease: "power3.in",
                scrollTrigger: {
                    trigger: storyCon,
                    start: "top 30%",
                    end: "center 50%",
                    scrub: 1,
                }
            });
            aniStory.to(storyConTit, { opacity: 1, clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0 100%)"})
                    .to(storyConTxt, { opacity: 1, clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"})
                    .to(storyConImg, { opacity: 1, clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"});

            ScrollTrigger.matchMedia({
                "(min-width: 981px)": function() {
                    ScrollTrigger.create({
                        animation: aniTxt,
                            trigger: largeTxt,
                            start: "top top",
                            end: "bottom 80%",
                            scrub: 1
                    });
                },
                "(max-width: 980px)": function() {
                    ScrollTrigger.create({
                        animation: aniTxt,
                        trigger: largeTxt,
                        start: "top 50%",
                        end: "bottom 70%",
                        scrub: 1
                    });
                },
                "all": function(){
                    gsap.set(pageTit, {yPercent: 110});
                    gsap.set(infoTxt, {yPercent: 40, opacity: 0});

                    const ani = gsap.timeline({
                        ease: "cubic-bezier(.19,1,.22,1)"
                    });
                    ani.to(pageTit, {opacity: 1, yPercent: 0})
                        .to(infoTxt, {yPercent: 0, opacity: 1, stagger: 0.1, duration: 0.3});

                    gsap.set(featureTit, {xPercent: -30, opacity: 0});
                    gsap.to(featureTit, {
                        xPercent: 0, opacity: 1, stagger: 0.2, duration: 1,
                        ease: "none",
                        scrollTrigger: {
                            trigger: featureTitCon,
                            start: "top 20%",
                            end: "bottom bottom",
                            scrub: 1,
                        }
                    });

                    gsap.set(featureTxt, {xPercent: 30, opacity: 0});
                    gsap.to(featureTxt, {
                        xPercent: 0, opacity: 1,
                        ease: "none",
                        scrollTrigger: {
                            trigger: featureTxt,
                            start: "top 60%",
                            end: "bottom bottom",
                            scrub: 1,
                        }
                    });
                }
            });
        }, section);
        return () => ctx.revert();
    }, []);

    return (
        <Layout header={{active: 0}}>
            <AboutCon ref={sectionRef}>
                <TitBox>
                    <Inner>
                        <Text name="tit1" className="mask">
                            <span>About <em className="outfit">ME</em> </span>
                        </Text>
                        <InfoTxt ref={infoRef}>
                            <li>
                                <span>
                                    어떻게 하면 재사용이 가능하며 다양한 경우에 맞게 공통으로
                                    사용이 가능할지를 고려하며 코딩합니다.
                                </span>
                            </li>
                            <li>
                                <span>화면에 보여지는 인터랙션과 스크립트 작업에 흥미를 느끼며 재미있게 작업하고 있습니다.</span>
                            </li>
                            <li>
                                <span>앞으로는 퍼블리셔에서 더 나아가 프론트엔드 개발자로 성장하고 싶습니다.</span>
                            </li>
                        </InfoTxt>
                    </Inner>
                </TitBox>
                <Feature ref={featureRef}>
                    <Inner>
                        <div className="tit">
                            <h3>Passion.</h3>
                            <h3>Sincerity.</h3>
                            <h3>Responsibility.</h3>
                            <h3>Communication.</h3>
                        </div>
                        <div className="desc">
                            <p>
                                저는 열정적으로 일하며, 제가 맡은 업무는 무슨 일이 있어도 끝냅니다. <br/>
                                책임감이 강하고, 성실하여 주어진 일을 완벽하게 끝내는 성격입니다.
                            </p>
                            <p>
                                단 한번도 지각한 적이 없으며, 어떤 업무가 주어져도 일정 안에
                                맞추기 위해 밤을 새서라도 작업을 끝냅니다.
                            </p>
                            <p>
                                저는 에이젼시를 다니면서 다양한 프로젝트 경험이 있어, 업무 프로세스에 대해
                                잘 알고 있습니다. 또한 다른 팀과의 협업 및 커뮤니케이션을 잘 합니다!
                            </p>
                        </div>
                    </Inner>
                </Feature>
                <LargeTxt ref={largeTxtRef}>
                    <Inner>
                        <p>
                            저는 3년차 퍼블리셔 최승연 입니다.
                            저는 인터랙션 및 스크립트에 관심이 많습니다.
                            재사용 가능한 소스를 짜기 위해 생각하며 코딩합니다.
                            저는 다양한 시도와 경험을 하는 열정을 지닌 퍼블리셔입니다.
                        </p>
                    </Inner>
                </LargeTxt>
                <Story ref={storyRef}>
                    <Inner>
                        <StoryTit className="tit">
                            <span>Seung yeon</span>
                            <span>Story</span>
                        </StoryTit>
                        <StoryBox>
                            <StoryTxt className="txt-box">
                                <p>
                                    저는 디자이너로 일했었고, 제가 디자이너로 일하면서 느꼈던 것은
                                    디자인은 주관적인 기준에 의해 평가된다는 것입니다.
                                    그래서 저는 주관적인 기준이 아닌 객관적인 기준에 의해 평가되어지는 직업이 하고 싶었습니다.
                                </p>
                                <p>
                                    제가 본 퍼블리셔는 디자인과 동일한지, 기능적으로 이상이 없는지 등과 같이
                                    객관적인 기준에 의해 평가 되어지는 직업이라고 생각해서 이직을 하게 되었습니다.
                                </p>
                            </StoryTxt>
                            <StoryImg className="img-box">
                                <img src={`${img}/img_about.jpg`} alt="" />
                                <span>
                                    지금은 퍼블리셔로서 화면에 보여지는 인터랙션과 스크립트 작업에 흥미를 느끼며 재미있게 작업하고 있습니다.
                                </span>
                            </StoryImg>
                        </StoryBox>
                    </Inner>
                </Story>
            </AboutCon>
        </Layout>
    )
}

export default About;