import {Link, useNavigate, useParams} from "react-router-dom";
import {useEffect, useRef} from "react";
import {img, projectTabState} from "../recoil/atoms";
import theme from "../styles/theme";
import Layout from "../components/_inc/Layout";
import styled from "styled-components";
import {vw} from "../utils/common";
import Text from "../styles/Text";
import {useRecoilValue} from "recoil";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

const Visual = styled.div`
    padding-top: 80px;

    ${({theme}) => theme.small`
        padding-top: ${vw(120)};
    `};
`;
const Tit = styled.div`
    small{
        display: block;
        margin-bottom: 10px;
        
        font-family: 'Playfair Display', serif;
        font-size: 28px;
        font-weight: 700;

        ${({theme}) => theme.small`
            font-size: ${vw(36)};
        `};
    }

    h2{
        font-size: 50px;
        font-weight: 200;
        word-break: keep-all;

        ${({theme}) => theme.small`
            font-size: ${vw(60)};
        `};

        strong{
            display: block;
            font-weight: 500;
        }
    }

    span{
        font-size: 18px;
        font-weight: 500;

        ${({theme}) => theme.small`
            font-size: ${vw(28)};
        `};
    }
`;
const Desc = styled.div`
    width: 80%;

    ${({theme}) => theme.small`
        width: 100%;
    `};

    .desc{
        margin: 40px 0;
        font-size: 16px;
        color: ${theme.color.gray2};
        line-height: 1.8;
        word-break: keep-all;

        ${({theme}) => theme.small`
            margin: ${vw(60)} 0;
            font-size: ${vw(28)};
        `};
    }
    
    .list{
        display: grid;
        row-gap: 10px;
        font-size: 16px;

        ${({theme}) => theme.small`
            font-size: ${vw(28)};
            row-gap: ${vw(20)};
        `};
        
        li{
            &:last-of-type{
                display: flex;
                align-items: center;
            }
        }
        
        a{
            margin-left: 10px;
            padding: 3px 14px;
            font-size: 14px;
            color: ${theme.color.white};
            text-align: center;
            background-color: ${theme.color.black};
            border-radius: 30px;
            
            font-weight: 700;
            //text-decoration: underline;
            + a{
                //margin-left: 10px;

                // ${({theme}) => theme.small`
                //     margin-left: ${vw(10)};
                // `};
            }

            ${({theme}) => theme.small`
                margin-left: ${vw(20)};
                padding: ${vw(8)} ${vw(24)};
                font-size: ${vw(24)};
            `};
        }
    }
    
    dl{
        display: flex;
        margin-bottom: 6px;
        font-size: 16px;
        
        dt{
            margin-right: 10px;
            color: ${theme.color.gray1};
        }
        
        dd{
            a{
                font-weight: 700;
                text-decoration: underline;
                
                + a{
                    margin-left: 10px;
                }
            }
        }
    }
`;
const TxtBox = styled.div`
    margin: 0 auto;
    padding: 60px 0 100px;
    max-width: 1440px;

    ${({theme}) => theme.xLarge`
        padding-left: 60px;
        padding-right: 60px;
    `};

    ${({theme}) => theme.small`
        padding: ${vw(100)} ${vw(40)};
    `};
`;
const ImgBox = styled.div`
    overflow: hidden;
    position: relative;
    width: 100%;
    height: 600px;
    
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    ${({theme}) => theme.small`
        height: ${vw(600)};
    `};
`;
const Overview = styled.div`
    ${TxtBox}{
        padding-top: 100px;

        ${({theme}) => theme.small`
            padding-top: ${vw(100)};
        `};
        
        p {
           margin-top: 12px;
            width: 60%;
            word-break: keep-all;

            ${({theme}) => theme.sMedium`
                width: 80%;
            `};

            ${({theme}) => theme.small`
                margin-top: ${vw(20)};
                width: 100%;
            `};
        }
    }
    
    img{
        display: inline-block;
        width: 100%;
    }
    
`;
const BtnList = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 100px;
    height: 150px;
    border-top: 1px solid ${theme.color.gray5};

    ${({theme}) => theme.sMedium`
        flex-direction: column;
        height: auto;
    `};

    ${({theme}) => theme.small`
        margin-top: ${vw(100)};
        border-top-weight: ${vw(1)};
    `};
    
    button{
        position: relative;
        flex: 1;
        font-size: 50px;
        font-weight: 500;
        width: 100%;
        height: 100%;
        
        ${({theme}) => theme.medium`
            font-size: 40px;
        `};

        ${({theme}) => theme.sMedium`
            padding: 30px 0;
            &::after{
                content: '';
                position: absolute;
                left: 50%;
                bottom: 0;
                transform: translateX(-50%);
                display: block;
                width: 100%;
                height: 1px;
                background-color: ${theme.color.gray5};
            }
            
            &:last-child::after{
                display: none;
            }
        `};

        ${({theme}) => theme.small`
            padding: ${vw(30)} 0;
            font-size: ${vw(60)};
            height: ${vw(2)};
        `};
        
        span{
            font-family: 'Playfair Display', serif;
            font-weight: 200;
            letter-spacing: 2px;

            ${({theme}) => theme.small`
                letter-spacing: ${vw(2)};
            `};
        }
        
        &:hover{
            background-color: ${theme.color.gray5}
        }
    }
`;

function ProjectDetail({dataWork, dataPersonal}) {
    const navigate = useNavigate();
    const {id} = useParams();
    const projectTab = useRecoilValue(projectTabState);

    const visualRef = useRef(null);
    const overViewRef = useRef(null);
    const imgRef1 = useRef(null);
    const imgRef2 = useRef(null);

    const dataItem = (projectTab === 'work') ? dataWork : (projectTab === 'personal') ? dataPersonal : [];
    const dataIdx = dataItem.findIndex((item) => item.id === id);
    const {clientEn, client, name, period, detailImg, participateRate, useTool, github, overviewTxt, overviewImg, detailDesc, link, notion} = dataItem[dataIdx];
    const prevData = dataItem[dataIdx - 1];
    const nextData = dataItem[dataIdx + 1];

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const visual = visualRef.current;
        const overView = overViewRef.current;

        let ctx = gsap.context(() => {
            const visualTxtBox = visual.querySelector('.txt-box');
            const visualImgBox = visual.querySelector('.img-box');
            gsap.set(visualTxtBox, {opacity: 0, yPercent: 10});
            gsap.set(visualImgBox, {clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)"});
            // gsap.set(overView, {opacity: 0, yPercent: 10});

            const ani = gsap.timeline({
                ease: "cubic-bezier(.19,1,.22,1)"
            });
            ani.to(visualTxtBox, {opacity: 1, yPercent: 0}, 0)
                .to(visualImgBox, {clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)"}, 0.5);

            // gsap.to(overView, {opacity: 1, yPercent: 0,
            //     scrollTrigger: {
            //         trigger: overView,
            //         start: "-10% -0",
            //         end: "top 20%",
            //         markers: true,
            //     }
            // });
        }, visualRef);
        return () => ctx.revert();
    }, [id]);
    const onClick = (data) => {
        navigate(`/project/${data.id}`);
    }
    const onClickProjectAll = () => {
        navigate(`/project`);
    }
    return (
        <>
            <Layout header={{active: 1, bgColor: theme.color.white}}>
                <Visual ref={visualRef}>
                    <TxtBox className="txt-box">
                        <Tit>
                            <small>{clientEn}</small>
                            <h2><strong>{client}</strong> {name}</h2>
                        </Tit>
                        <Desc>
                            {detailDesc && <p className="desc">{detailDesc}</p>}
                            <ul className="list">
                                <li>참여율: {participateRate}%</li>
                                <li>기간: {period}</li>
                                <li>사용언어: {useTool}</li>
                                {link || github || notion ? (
                                    <li>
                                        링크: {link && <Link to={link} target="_blank">Site</Link>} {github && <Link to={github} target="_blank">Github</Link>} {notion && <Link to={notion} target="_blank">Notion</Link>}
                                    </li>
                                ): ''}
                            </ul>
                        </Desc>
                    </TxtBox>
                    <ImgBox className="img-box">
                        <img src={`${img}/${detailImg}`} alt={`${name} 상세 이미지`} ref={imgRef1}/>
                    </ImgBox>
                </Visual>
                {overviewTxt && overviewImg &&
                    <Overview ref={overViewRef}>
                        <TxtBox>
                            <Text name="tit5">Overview</Text>
                            <Text name="desc3">{overviewTxt}</Text>
                        </TxtBox>
                        <img src={`${img}/${overviewImg}`} alt={`${name} 이미지`} ref={imgRef2} />
                    </Overview>
                }
                <BtnList>
                    {prevData && <button onClick={() => onClick(prevData)}>Prev <span>Project</span></button>}
                    <button onClick={onClickProjectAll}>All <span>Project</span></button>
                    {nextData && <button onClick={() => onClick(nextData)}>Next <span>Project</span></button>}
                </BtnList>
            </Layout>
        </>
    )
}

export default ProjectDetail;