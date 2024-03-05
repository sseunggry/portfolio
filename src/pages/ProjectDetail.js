import {Link, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {img, personal, projectTabState, work} from "../recoil/atoms";
import theme from "../styles/theme";
import Layout from "../components/_inc/Layout";
import styled from "styled-components";
import {vw} from "../utils/common";
import Text from "../styles/Text";
import {useRecoilValue} from "recoil";

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
        //margin-bottom: 40px;
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
    //flex-shrink: 0;
    //width: 46%;
    width: 80%;

    ${({theme}) => theme.small`
        width: 100%;
    `};

    .desc{
        //margin-top: 30px;
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
        //grid-template-columns: 20% auto;
        row-gap: 10px;
        font-size: 16px;

        ${({theme}) => theme.small`
            font-size: ${vw(28)};
        `};

        ${({theme}) => theme.small`
            row-gap: ${vw(10)};
        `};
        
        a{
            font-weight: 700;
            text-decoration: underline;
            + a{
                margin-left: 10px;

                ${({theme}) => theme.small`
                    margin-left: ${vw(10)};
                `};
            }
        }
    }
    
    dl{
        display: flex;
        margin-bottom: 6px;
        font-size: 16px;
        
        dt{
            margin-right: 10px;
            //width: 100px;
            //font-weight: 500;
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

    &::before{
        content: '';
        display: block;
        padding-top: 50%;
        width: 100%;
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
    
    // ${ImgBox}{
    //     &::before{
    //         padding-top: 100%;
    //     }
    // }
    
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

function ProjectDetail() {
    const navigate = useNavigate();
    const {id} = useParams();
    const [item, setItem] = useState([]);
    const [prevData, setPrevData] = useState(0);
    const [nextData, setNextData] = useState(0);
    const projectTab = useRecoilValue(projectTabState);

    const {clientEn, client, name, period, detailImg, participateRate, useTool, github, overviewTxt, overviewImg, detailDesc, link} = item;

    useEffect(() => {
        const data = (projectTab === 'work') ? work : (projectTab === 'personal') ? personal : [];
        const dataIdx = data.findIndex((item) => item.id === id);

        window.scrollTo(0, 0);
        setItem(data[dataIdx]);
        setPrevData(data[dataIdx - 1]);
        setNextData(data[dataIdx + 1]);
    }, [item]);

    const onClick = (data) => {
        setItem(data);
        navigate(`/project/${data.id}`);
    }
    const onClickProjectAll = () => {
        navigate(`/project`);
    }

    return (
        <Layout header={{active: 1}}>
            <>
                <Visual>
                    <TxtBox>
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
                                {link ? github ? (
                                    <li>
                                        링크: <Link to={link} target="_blank">Site</Link>, <Link to={github} target="_blank">Github</Link>
                                    </li>
                                ) : (
                                    <li>
                                        링크: <Link to={link} target="_blank">Site</Link>
                                    </li>
                                ) : ''}
                            </ul>
                        </Desc>
                    </TxtBox>
                    <ImgBox>
                        <img src={`${img}/${detailImg}`} alt={`${name} 썸네일 이미지`}/>
                    </ImgBox>
                </Visual>
                {overviewTxt && overviewImg &&
                    <Overview>
                        <TxtBox>
                            <Text name="tit5">Overview</Text>
                            <Text name="desc3">{overviewTxt}</Text>
                        </TxtBox>
                        <img src={`${img}/${overviewImg}`} alt={`${name} 썸네일 이미지`}/>
                    </Overview>
                }
                <BtnList>
                    {prevData && <button onClick={() => onClick(prevData)}>Prev <span>Project</span></button>}
                    <button onClick={onClickProjectAll}>All <span>Project</span></button>
                    {nextData && <button onClick={() => onClick(nextData)}>Next <span>Project</span></button>}
                </BtnList>
            </>
        </Layout>
    )
}

export default ProjectDetail;