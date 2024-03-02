import {img, projectPersonal, projectTabState, projectWork} from "../recoil/atoms";
import {useEffect, useRef, useState} from "react";
import Layout from "../components/_inc/Layout";
import styled from "styled-components";
import theme from "../styles/theme";
import Text from "../styles/Text";
import {vw} from "../utils/common";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {Link} from "react-router-dom";
import {useRecoilState, useSetRecoilState} from "recoil";

const ProjectCon = styled.div`
    position: relative;
    padding-top: 80px;
    background-color: ${theme.color.black};

    ${({theme}) => theme.small`
        padding-top: ${vw(120)};
    `};
`;
const Inner = styled.div`
    margin: 0 auto;
    padding: 120px 150px 0;
    //max-width: 1440px;

    ${({theme}) => theme.xLarge`
        padding-left: 60px;
        padding-right: 60px;
    `};

    ${({theme}) => theme.small`
        padding: ${vw(150)} ${vw(40)};
    `};
`;
const Tab = styled.ul`
    display: flex;
    margin: 40px 0 60px;

    li{
        margin-right: 80px;
        //font-family: 'Playfair Display', serif;
        font-size: 40px;
        font-weight: 700;
        color: ${theme.color.gray2};
        letter-spacing: 3px;
        text-transform: uppercase;
        cursor: pointer;

        .outfit{
            font-size: 20px;
            font-weight: 300;
        }

        &:last-of-type{
            margin-right: 0;
        }

        &:hover, &.active{
            color: ${theme.color.white};
        }
    }
    ${({theme}) => theme.medium`
        // margin-top: 40px;
        // margin-bottom: 60px;
    `};
    ${({theme}) => theme.small`
        margin-top: ${vw(60)};
        margin-bottom: ${vw(100)};
        
        li{
            letter-spacing: ${vw(3)};
            margin-right: ${vw(80)};
            font-size: ${vw(40)};
            
            .outfit{
                font-size: ${vw(24)};
            }
        }
    `};

`;
const ImgBox = styled.div`
    overflow: hidden;
    position: relative;
    flex-shrink: 0;
    width: 600px;

    &::before{
        content: '';
        display: block;
        padding-top: 70%;
        width: 100%;
    }

    &::after{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        width: 100%;
        height: 100%;
    }

    img{
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    ${({theme}) => theme.medium`
        width: 100%;
    `};
`;
const TxtBox = styled.div`
    //margin-left: 50px;
    //position: absolute;
    //bottom: 0;
    //left: 0;
    padding-top: 20px;
    color: ${theme.color.white};

    .txt{
        //position: absolute;
        //bottom: 40px;
        //right: 40px;
        //text-align: right;
    }

    strong{
        overflow: hidden;
        position: absolute;
        top: 40px;
        left: 0;
        display: inline-block;
        font-family: 'Playfair Display', serif;
        font-size: 40px;
        font-weight: 700;
    }
    h3{
        font-size: 32px;
        font-weight: 100;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        word-break: keep-all;
    }
    .desc{
        margin: 20px 0 40px;
        width: 70%;
        word-break: keep-all;
    }
    .period{
        margin-top: 10px;
        color: ${theme.color.white};
    }

    ${({theme}) => theme.large`        
        h3{
            font-size: 40px;
            
            em{
                font-weight: 500;
            }
        }
        .desc{
            width: 80%;
        }
    `};

    ${({theme}) => theme.medium`
        padding: 40px 0;
        align-self: flex-start;
        
        strong{
            left: 40px;
        }
        
        .desc{
            width: 90%;
        }
    `};

    ${({theme}) => theme.small`
        padding-top: ${vw(40)};
        padding-bottom: ${vw(40)};
        
        strong{
            top: ${vw(40)};
            left: ${vw(40)};
            font-size: ${vw(60)};
        }
        
        h3{
            // margin-top: ${vw(10)};
            font-size: ${vw(48)};
        }
        
        .desc{
            margin-top: ${vw(20)};
            margin-bottom: ${vw(40)};
        }
        
        .period{
            margin-top: ${vw(20)};
        }      
        
    `};
`;
const ThumbList = styled.ul`
    display: flex;
    align-items: center;
    padding-left: 100px;
    height: 100vh;

    li{
        overflow: hidden;
        position: relative;
        flex-shrink: 0;
        padding-left: 50px;
        padding-right: 200px;
        height: fit-content;
        max-height: 80%;
    }
    ${({theme}) => theme.medium`
        flex-direction: column;
        padding-left: 0;
        height: auto;
        
        li{
            padding: 0;
            margin-bottom: 60px;
            width: 100%;

            &:last-of-type{
                // margin-bottom: 0;
            }
        }
    `};

    ${({theme}) => theme.small`
        li{
            margin-bottom: ${vw(80)};
        }
    `};
`;

function Project(){
    const [projectData, setProjectData] = useState(projectWork);
    // const setProjectTab = useSetRecoilState(projectTabState);
    const [projectTab, setProjectTab] = useRecoilState(projectTabState);
    const sectionRef = useRef(null);
    const tabRef = useRef(null);
    const thumbRef = useRef(null);

    const onClick = (e) => {
        const $target = e.target;
        const $targetList = $target.parentNode.childNodes;
        let text = $target.innerText.toLowerCase();
        let menuText = $target.innerText.replace(/[0-9]/g, '').trim();

        $targetList.forEach((el) => {if(el) return el.classList.remove('active')});
        $target.classList.add('active');

        setProjectTab(menuText.toLowerCase());

        if(text.includes('work')){
            setProjectData(projectWork);
        } else if(text.includes('personal')){
            setProjectData(projectPersonal);
        }
    }

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const section = sectionRef.current;
        const tab = tabRef.current;
        const thumbList = thumbRef.current;

        const sectionInner = section.querySelector('.inner');
        const pageTit = section.querySelector('[name="tit1"] span');
        const thumb = thumbList.querySelectorAll('li');
        const thumbImg = thumbList.querySelectorAll('li .img-box');
        const thumbTxt = thumbList.querySelectorAll('li .txt-box');

        let ctx = gsap.context(() => {
            ScrollTrigger.matchMedia({
                "(min-width: 981px)": function() {
                    let scrollTween = gsap.to(thumb, {
                        xPercent: -100 * (thumb.length - 1),
                        ease: "none",
                        scrollTrigger: {
                            trigger: thumbList,
                            pin: true,
                            scrub: 1,
                            start: "center center",
                            end: "300%",
                        }
                    });

                    gsap.set(thumbImg, {clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)"});
                    Object.values(thumbImg).forEach((el) => {

                        let client = el.nextElementSibling.querySelector('strong');
                        let tit = el.nextElementSibling.querySelector('.txt h3');
                        let period = el.nextElementSibling.querySelector('.txt .period');

                        gsap.set(client, {clipPath: "inset(100%)"});
                        gsap.set(tit, { clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)"});
                        gsap.set(period, { clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)"});

                        gsap.timeline({
                            scrollTrigger: {
                                trigger: el,
                                containerAnimation: scrollTween,
                                start: 'center right',
                                end: 'center center',
                                scrub: 1,
                            }
                        })
                            .to(client, {clipPath: "inset(0%)"})
                            .to(el, {clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", ease: 'none', duration: 1}, 0)
                            .to(tit, {clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", duration: 1}, 1)
                            .to(period, {clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", duration: 1}, 1);
                    });
                },
                "(max-width: 980px)": function() {
                    gsap.set(thumbImg, {clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)"});

                    Object.values(thumbImg).map((img, idx) => {
                        let txt = img.nextElementSibling.querySelector('.txt');
                        let client = img.nextElementSibling.querySelector('strong');

                        gsap.set(txt, { clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)"});
                        gsap.set(client, {opacity: 0});
                        gsap.timeline({
                            scrollTrigger: {
                                trigger: thumb[idx],
                                start: "-10% 60%",
                                end: "-10% 60%",
                                scrub: 1,
                                // markers: true
                            }
                        })
                            .to(client, {opacity: 1})
                            .to(img, {ease: "none", opacity: 1, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", duration: 1}, 0)
                            .to(txt, {ease: "power3.in", opacity: 1, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", duration: 1}, 0)
                    });
                },
                "all": function() {
                    gsap.set(pageTit, {yPercent: 110});
                    gsap.set(tab, {yPercent: 30, opacity: 0});

                    const ani = gsap.timeline({
                        ease: "cubic-bezier(.19,1,.22,1)"
                    });
                    ani.to(pageTit, {opacity: 1, yPercent: 0})
                        .to(tab, {yPercent: 0, opacity: 1});

                    // gsap.set(section, {backgroundColor: theme.color.white});
                    // gsap.to(section, {
                    //     backgroundColor: theme.color.black,
                    //     scrollTrigger: {
                    //         trigger: inner,
                    //         start: "top top",
                    //         end: "top 10%",
                    //         scrub: 1,
                    //     }
                    // });
                }
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <Layout header={{active: 1}}>
            <ProjectCon ref={sectionRef}>
                <Inner className="inner">
                    <Text name="tit1" color={theme.color.white} className="mask">
                        <span>Project</span>
                    </Text>
                    <Tab onClick={onClick} ref={tabRef}>
                        <li className="active">work <span className="outfit">{projectWork.length}</span></li>
                        <li>personal <span className="outfit">{projectPersonal.length}</span></li>
                    </Tab>
                    <ThumbList ref={thumbRef}>
                        {projectData.map(({clientEn, client, name, period, thumbImg, desc, id}, idx) => (
                            <li key={idx}>
                                <Link to={`/project/${id}`}>
                                    <ImgBox className="img-box">
                                        <img src={`${img}/${thumbImg}`} alt={`${name} 썸네일 이미지`}/>
                                    </ImgBox>
                                    <TxtBox className="txt-box">
                                        <strong>{clientEn}</strong>
                                        <div className="txt">
                                            <h3>{name}</h3>
                                            <Text name="desc2" className="period">{period}</Text>
                                        </div>
                                        {/*<Text name="desc3" className="desc">{desc}</Text>*/}
                                        {/*<h3>[{client}] <br/> {name}</h3>*/}
                                    </TxtBox>
                                </Link>
                            </li>
                        ))}
                    </ThumbList>
                </Inner>
            </ProjectCon>
        </Layout>
    )
}

export default Project;