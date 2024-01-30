import {img, projectPersonal, projectWork, windowWidths} from "../recoil/atoms";
import {useEffect, useRef, useState} from "react";
import Layout from "../components/_inc/Layout";
import styled from "styled-components";
import theme from "../styles/theme";
import Text from "../styles/Text";
import {vw} from "../utils/common";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useRecoilValue} from "recoil";
import {Link} from "react-router-dom";

const ProjectCon = styled.div`
    position: relative;
    padding-top: 80px;
    min-height: 100vh;
    background-color: ${theme.color.black};

    ${({theme}) => theme.small`
        padding-top: ${vw(120)};
    `};
`;
const Inner = styled.div`
    //position: absolute;
    //top: 50%;
    //transform: translateY(-50%);
    padding: 120px 240px;

    ${({theme}) => theme.medium`
        position: initial;
        transform: translateY(0);
        padding: 100px 60px;
    `};

    ${({theme}) => theme.small`
        padding: ${vw(100)} ${vw(40)};
    `};
`;
const Tab = styled.ul`
    display: flex;
    margin: 50px 0;
    
    li{
        margin-right: 80px;
        font-size: 40px;
        font-weight: 500;
        color: ${theme.color.gray3};
        text-transform: uppercase;
        cursor: pointer;
      
        &:last-of-type{
            margin-right: 0;
        }
      
        &:hover, &.active{
            color: ${theme.color.white};
        }
    }
    ${({theme}) => theme.small`
        margin-top: ${vw(20)};
        margin-bottom: ${vw(50)};
        
        li{
            margin-right: ${vw(80)};
            font-size: ${vw(32)};
        }
    `};
    
`;
const ThumbList = styled.ul`
    //overflow: hidden;
    display: flex;

    ${({theme}) => theme.medium`
        flex-direction: column;
    `};
    
    li{
        position: relative;
        margin-right: 30px;
        flex-shrink: 0;
        width: 100%;
        //background-color: ${theme.color.white};

        &:last-child{
            margin-right: 0;
        }
        
        //display: flex;
        //&:nth-of-type(2n){
        //    flex-direction: row-reverse;
        //}

        a{
            display: flex;
        }

        ${({theme}) => theme.medium`
            width: 100%;
            margin-right: 0;
            margin-bottom: 30px;
            
            &:last-child{
                margin-bottom: 0;
            }
        `};

        ${({theme}) => theme.small`
            margin-bottom: ${vw(40)};
        `};
        
        // ${({theme}) => theme.medium`
        //     flex-direction: column;
        //     margin-bottom: 60px;
        //    
        //     &:nth-of-type(2n){
        //         flex-direction: column;
        //     }
        //     &:last-of-type{
        //         margin-bottom: 0;
        //     }
        // `};
        //
        // ${({theme}) => theme.small`
        //     margin-bottom: ${vw(60)};
        // `};
    }
`;
const ImgBox = styled.div`
    position: relative;
    overflow: hidden;
    width: 50%;
    
    &::before{
        content: '';
        display: block;
        padding-top: 80%;
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
        // background-color: ${theme.color.white};
        //transition: all 0.3s;
        //clip-path: ;
    }
    
    //&.motion{
    //    &::after{
    //        left: -100%;
    //    }
    //}

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
    padding: 60px;
    flex: 1;
    align-self: center;
    color: ${theme.color.white};

    strong{
        font-size: 20px;
        font-weight: 700;
    }
    h3{
        margin-top: 10px;
        font-size: 48px;
        font-weight: 300;
        word-break: keep-all;

        display: -webkit-box; 
        overflow: hidden; 
        //max-height: 145px; 
        text-overflow: ellipsis; 
        -webkit-line-clamp: 2; 
        -webkit-box-orient: vertical;
    }
    .desc{
        margin: 20px 0 40px;
        width: 70%;
        word-break: keep-all;
    }
    .period{
        color: ${theme.color.black};
    }
    
    ${({theme}) => theme.large`
        // align-self: center;
        // padding: 0 60px;
        // width: 100%;
        
        h3{
            font-size: 40px;
        }
        .desc{
            width: 80%;
        }
    `};

    ${({theme}) => theme.medium`
        padding: 40px 0;
        align-self: flex-start;
        
        .desc{
            width: 90%;
        }
    `};

    ${({theme}) => theme.small`
        padding-top: ${vw(40)};
        padding-bottom: ${vw(40)};
        
        strong{
            font-size: ${vw(28)};
        }
        
        h3{
            margin-top: ${vw(10)};
            font-size: ${vw(48)};
        }
        
        .desc{
            margin-top: ${vw(20)};
            margin-bottom: ${vw(40)};
        }
        
    `};
`;

function Project(){
    const [projectData, setProjectData] = useState(projectWork);
    const sectionRef = useRef(null);
    const tabRef = useRef(null);
    const thumbRef = useRef(null);

    const onClick = (e) => {
        const $target = e.target;
        const $targetList = $target.parentNode.childNodes;
        let text = $target.innerText.toLowerCase();

        $targetList.forEach((el) => el.classList.remove('active'));
        $target.classList.add('active');

        if(text.includes('work')){
            setProjectData(projectWork);
        } else if(text.includes('personal')){
            setProjectData(projectPersonal);
        }
    }

    const windowWidth = useRecoilValue(windowWidths);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const section = sectionRef.current;
        const tab = tabRef.current;
        const thumbList = thumbRef.current;

        const sectionInner = section.querySelector('.inner');
        // const pageTit = section.querySelector('[name="tit1"]');
        const thumbLi = thumbList.querySelectorAll('li');
        const thumbImg = thumbList.querySelectorAll('li .img-box');
        const thumbTxt = thumbList.querySelectorAll('li .txt-box');


        let ctx = gsap.context(() => {
            // gsap.set(pageTit, {yPercent: 30, opacity: 0});
            gsap.set(tab, {yPercent: 30, opacity: 0});
            // gsap.set(thumbImg[0], {opacity: 0, clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)"});
            // gsap.set(thumbTxt[0].children, {opacity: 0, clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)"});
            // gsap.set(thumbImg, {opacity: 0, clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)"});
            // gsap.set(thumbLi, {scale: 0.8,});

            const ani = gsap.timeline();
            ani.to(tab, {yPercent: 0, opacity: 1}, 'motion')
                // .to(thumbImg[0], {opacity: 1, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", ease: "power3.in"},'motion')
                // .to(thumbTxt[0].children, {stagger: 0.1, opacity: 1, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", ease: "power3.in"}, 'motion');

            // const section = sectionRef.current;
            // const sectionInner = section.querySelector('.inner');
            // const list = listRef.current;
            // const listLi = list.querySelectorAll('li');

            console.log(thumbList.querySelector('li').offsetWidth*thumbLi.length);

            if(windowWidth > 980) {
                gsap.to(section, {
                    x: -( thumbList.querySelector('li').offsetWidth*thumbLi.length - windowWidth ),
                    ease: "none",
                    scrollTrigger: {
                        trigger: section,
                        start: "top top",
                        end: `bottom+=${thumbList.offsetWidth}`,
                        scrub: 1,
                        pin: section,
                    }
                });
                gsap.set(thumbLi, {opacity: 1, clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)"});
                Object.values(thumbLi).map((el) => {
                    gsap.to(el, {
                        opacity: 1,
                        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                        ease: "power3.in",
                        scrollTrigger: {
                            trigger: el,
                            start: "top 90%",
                            end: "bottom bottom",
                            scrub: 1,
                        }
                    });
                });
            } else{
                gsap.set(thumbLi, {opacity: 0, clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)"});
                Object.values(thumbLi).map((el) => {
                    gsap.to(el, {
                        opacity: 1,
                        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                        ease: "power3.in",
                        scrollTrigger: {
                            trigger: el,
                            start: "top 90%",
                            end: "bottom bottom",
                            scrub: 1,
                        }
                    });
                });
            }
        }, sectionRef);

        return () => ctx.revert();

    }, [windowWidth]);

    /*
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const section = sectionRef.current;
        const tab = tabRef.current;
        const thumbList = thumbRef.current;
        const pageTit = section.querySelector('[name="tit1"]');
        const thumb = thumbList.querySelectorAll('li');
        const thumbImg = thumbList.querySelectorAll('li .img-box');
        const thumbTxt = thumbList.querySelectorAll('li .txt-box');


        let ctx = gsap.context(() => {
            gsap.set(pageTit, {yPercent: 30, opacity: 0});
            gsap.set(tab, {yPercent: 30, opacity: 0});
            gsap.set(thumbImg[0], {opacity: 0, clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)"});
            gsap.set(thumbTxt[0].children, {opacity: 0, clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)"});
            gsap.set(thumbImg, {opacity: 0, clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)"});

            const ani = gsap.timeline();
            ani.to(pageTit, {yPercent: 0, opacity: 1}, 'motion')
               .to(tab, {yPercent: 0, opacity: 1}, 'motion')
               .to(thumbImg[0], {opacity: 1, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", ease: "power3.in"},'motion')
               .to(thumbTxt[0].children, {stagger: 0.1, opacity: 1, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", ease: "power3.in"}, 'motion');

            ScrollTrigger.matchMedia({
                "(min-width: 981px)": function() {
                    Object.values(thumbImg).map((el, idx) => {
                        let txtBoxList = thumbTxt[idx].children;
                        gsap.set(txtBoxList, {clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)"});

                        const ani2 = gsap.timeline({
                            ease: "power3.in",
                            scrollTrigger: {
                                trigger: el,
                                start: "top 30%",
                                end: "bottom 90%",
                                scrub: 1,
                            }
                        });
                        if(idx !== 0){
                            ani2.to(el, {opacity: 1, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", duration: 1}, 'motion2')
                                .to(txtBoxList, {stagger: 0.2, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", duration: 2}, 'motion2')
                        }
                    });
                },
                "(max-width: 980px)": function() {
                    Object.values(thumbImg).map((el, idx) => {
                        if(idx !== 0){
                            gsap.to(el, {
                                opacity: 1, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", duration: 1,
                                ease: "power3.in",
                                scrollTrigger: {
                                    trigger: el,
                                    start: "top 50%",
                                    end: "bottom 90%",
                                    scrub: 1,
                                }
                            });
                        }
                    });

                    Object.values(thumbTxt).map((el, idx) => {
                        if(idx !== 0){
                            gsap.set(el.children, {clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)"});
                            gsap.to(el.children, {
                                stagger: 0.2, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", duration: 2,
                                ease: "power3.in",
                                scrollTrigger: {
                                    trigger: thumbImg[idx],
                                    start: "center 50%",
                                    end: "bottom 90%",
                                    scrub: 1,
                                }
                            });
                        }
                    });
                }
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);
     */

    return (
        <Layout header={{active: 1}}>
            <ProjectCon ref={sectionRef}>
                <Inner className="inner">
                    {/*<Text name="tit1">Project</Text>*/}
                    <Tab onClick={onClick} ref={tabRef}>
                        <li className="active">work ({projectWork.length})</li>
                        <li>personal ({projectPersonal.length})</li>
                    </Tab>
                    <ThumbList ref={thumbRef}>
                        {projectData.map(({client, name, period, thumbImg, desc, link}, idx) => (
                            <li key={idx}>
                                <Link to={link ? link : ''} target="_blank">
                                    <ImgBox className="img-box">
                                        <img src={`${img}/${thumbImg}`} alt={`${name} 썸네일 이미지`}/>
                                    </ImgBox>
                                    <TxtBox className="txt-box">
                                        <strong>{client}</strong>
                                        <h3>{name}</h3>
                                        {/*<h3>[{client}] <br/> {name}</h3>*/}
                                        <Text name="desc3" className="desc">{desc}</Text>
                                        <Text name="desc2" className="period">{period}</Text>
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