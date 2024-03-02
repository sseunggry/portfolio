import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {img, personal, work} from "../recoil/atoms";
import theme from "../styles/theme";
import Layout from "../components/_inc/Layout";
import styled from "styled-components";
import {vw} from "../utils/common";

const Visual = styled.section`
    padding-top: 80px;

    ${({theme}) => theme.small`
        padding-top: ${vw(120)};
    `};
`;
const LeftTxt = styled.div`
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
const RightTxt = styled.div`
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
            color: ${theme.color.gary1};
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
    padding: 100px 0;
    max-width: 1440px;

    ${({theme}) => theme.xLarge`
        padding-left: 60px;
        padding-right: 60px;
    `};

    ${({theme}) => theme.small`
        padding: ${vw(100)} ${vw(40)};
    `};
    
    //display: flex;
    //justify-content: space-between;
    //align-items: flex-end;
    //text-align: center;
    //min-height: 400px;
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

function ProjectDetail() {
    const {id} = useParams();
    const [item, setItem] = useState([]);
    const {clientEn, client, name, period, thumbImg, detailImg, desc} = item;

    useEffect(() => {
        const data = [...work, ...personal];
        const dataIdx = data.findIndex((item) => item.id === id);
        setItem(data[dataIdx]);
    }, []);

    return (
        <Layout header={{active: 1}}>
            <>
                <Visual>
                    <TxtBox>
                        <LeftTxt>
                            <small>{clientEn}</small>
                            <h2><strong>{client}</strong> {name}</h2>
                            {/*<span>{period}</span>*/}
                        </LeftTxt>
                        <RightTxt>
                            <p className="desc">
                                어떻게 하면 재사용이 가능하며 다양한 경우에 맞게 공통으로 사용이 가능할지를 고려하며 코딩합니다.
                                화면에 보여지는 인터랙션과 스크립트 작업에 흥미를 느끼며 재미있게 작업하고 있습니다.
                                앞으로는 퍼블리셔에서 더 나아가 프론트엔드 개발자로 성장하고 싶습니다.
                            </p>

                            <ul className="list">
                                <li>참여율: 20%</li>
                                <li>기간: {period}</li>
                                <li>사용언어: Html, Scss, Javascript</li>
                                <li>링크:  <Link to="">Site</Link>,<Link to="">Github</Link></li>
                            </ul>
                        </RightTxt>
                    </TxtBox>
                    <ImgBox>
                        <img src={`${img}/${detailImg}`} alt={`${name} 썸네일 이미지`}/>
                    </ImgBox>
                </Visual>
            </>
        </Layout>
    )
}

export default ProjectDetail;