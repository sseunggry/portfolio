import {img, personal, windowWidths, work} from "../recoil/atoms";
import styled from "styled-components";
import theme from "../styles/theme";
import Text from "../styles/Text";
import {useEffect, useLayoutEffect, useRef, useState} from "react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {vw} from "../utils/common";
import {Link} from "react-router-dom";
import {debounce, throttle} from "lodash";
import {useRecoilState, useRecoilValue} from "recoil";

const Section = styled.section`
    padding: 200px 0;

    ${({theme}) => theme.small`
        padding: ${vw(100)} 0;
    `};
`;

const Inner = styled.div`
    margin: 0 auto;
    max-width: 1440px;

    ${({theme}) => theme.xLarge`
        padding: 0 100px;       
    `};

    ${({theme}) => theme.medium`
        padding: 0 60px;
    `};

    ${({theme}) => theme.small`
        padding: 0 ${vw(40)};
    `};
`;

const Title = styled.div`
    width: fit-content;
    
    h2{
        font-family: 'Playfair Display', serif;
        font-size: 100px;
        font-weight: 600;
    }
    
    p{
        padding: 30px 0 80px 120px;
        width: 60%;
        font-size: 18px;
        color: ${theme.color.gray2};
        line-height: 1.6;
        word-break: keep-all;
    }

    ${({theme}) => theme.large`
        p{
            padding-left: 80px;
        }       
    `};

    ${({theme}) => theme.medium`
        width: 100%;
        
        p{
            padding-left: 0;
            width: 60%;
        }
    `};

    ${({theme}) => theme.small`
        h2{
            font-size: ${vw(120)};
        }
        
        p{
            width: 80%;
            padding: ${vw(30)} 0 ${vw(80)} 0;
            font-size: ${vw(28)};
        }
    `};
`;

const List = styled.ul`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 100px;

    ${({theme}) => theme.large`
        gap: 80px;  
    `};

    ${({theme}) => theme.medium`
        grid-template-columns: auto;
    `};

    ${({theme}) => theme.small`
        gap: ${vw(100)};
    `};

    li{
        position: relative;
        max-width: 640px;
        &:nth-child(2n){
            transform: translateY(-100px);
        }

        ${({theme}) => theme.medium`
            max-width: 100%;
            &:nth-child(2n){
                transform: translateY(0);
            }
        `};
        
        // ${({theme}) => theme.small`
        //     margin-bottom: ${vw(40)};
        // `};
    }
`;
const ImgBox = styled.div`
    overflow: hidden;
    position: relative;

    &::before{
        content: '';
        display: block;
        padding-top: 100%;
    }
    
    img{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    ${({theme}) => theme.medium`
        &::before{
            padding-top: 100%;
        }
    `};
`;

const TxtBox = styled.div`
    padding-top: 30px;
    width: 100%;
    //color: ${theme.color.white};
    //z-index: 1;
    
    h5{
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    
    p{
        margin-top: 16px;
        font-size: 18px;
    }

    // ${({theme}) => theme.sLarge`
    //
    // `};

    ${({theme}) => theme.medium`
        position: absolute;
        left: 0;
        bottom: 0;
        padding: 0 60px 60px;
        
        color: ${theme.color.white};
        
        h5{
            color: ${theme.color.white};
        }
    `};

    ${({theme}) => theme.small`
        padding: 0 ${vw(40)} ${vw(40)};
        
        p{
            margin-top: ${vw(20)};
            font-size: ${vw(28)};
        }
    `};
`;

function MainProject(){
    const data = [...Object.values(work).filter((el) => el.link), ...Object.values(personal).filter((el) => el.link)];
    const sectionRef = useRef(null);
    const listRef = useRef(null);
    // const windowWidth = useRecoilValue(windowWidths);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        let ctx = gsap.context(() => {
            const list = listRef.current;
            const listLi = list.querySelectorAll('li');

            gsap.set(listLi, {opacity: 0, clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)"});

            ScrollTrigger.matchMedia({
                "(min-width: 980px)": function() {
                    Object.values(listLi).map((el) => {
                        gsap.to(el, {
                            opacity: 1,
                            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                            ease: "power3.in",
                            scrollTrigger: {
                                trigger: el,
                                start: "top 90%",
                                end: "top 50%",
                                scrub: 1,
                            }
                        });
                    });
                },
                "(max-width: 979px)" : function() {
                    Object.values(listLi).map((el) => {
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
            });

        }, sectionRef);

        return () => ctx.revert();

    }, []);

    return (
        <Section className="sec-01" ref={sectionRef}>
            <Inner className="inner">
                <Title>
                    <h2>Project</h2>
                    <p>에이젼시를 다니면서 참여한 프로젝트와 개인적으로 작업한 프로젝트 리스트입니다.</p>
                </Title>
                <List className="list" ref={listRef}>
                    {data && Object.values(data).map(({client, name, period, thumbImg, link}, idx) => (
                        <li key={idx}>
                            <Link to={link ? link : ''} target="_blank">
                                <ImgBox>
                                    <img src={`${img}/${thumbImg}`}  alt=""/>
                                </ImgBox>
                                <TxtBox>
                                    {/*color={theme.color.white}*/}
                                    <Text name="tit4" fontWeight="400">[{client}] <br/>{name}</Text>
                                    <p>{period}</p>
                                </TxtBox>
                            </Link>
                        </li>
                    ))}
                </List>
            </Inner>
        </Section>
    )
}

export default MainProject;