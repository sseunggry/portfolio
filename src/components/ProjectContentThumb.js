import {img, projectTabState} from "../recoil/atoms";
import {useEffect, useRef} from "react";
import styled from "styled-components";
import theme from "../styles/theme";
import Text from "../styles/Text";
import {vw} from "../utils/common";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useNavigate} from "react-router-dom";
import {useRecoilValue} from "recoil";

const ImgBox = styled.div`
    overflow: hidden;
    position: relative;
    flex-shrink: 0;
    width: 700px;

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

    ${({theme}) => theme.xLarge`
        width: 50%;
    `};

    ${({theme}) => theme.medium`
        width: 100%;
    `};
`;
const TxtBox = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 50px 0 50px 100px;

    strong{
        position: absolute;
        top: 25%;
        left: 100px;
        display: inline-block;
        margin-bottom: 30px;
        font-family: 'Playfair Display', serif;
        font-size: 90px;
        white-space: nowrap;
        font-weight: 700;
        color: ${theme.color.gray1};
        opacity: 0.1;
    }
    h3{
        font-size: 48px;
        font-weight: 100;
        overflow: hidden;
        text-overflow: ellipsis;
        //white-space: nowrap;
        word-break: keep-all;
        color: ${theme.color.white};
    }
    .desc{
        margin-top: auto;
        width: 70%;
        word-break: keep-all;
        
        p{
            margin-bottom: 10px;
            color: ${theme.color.white};
            
            &:last-of-type{
                margin-top: 0;
            }
        }
    }
    
    ${({theme}) => theme.xLarge`
        padding-left: 50px;
        min-height: 400px;
        
        strong{
            left: 50px;
        }
    `};

    ${({theme}) => theme.large`        
        h3{
            font-size: 40px;
        }
    `};

    ${({theme}) => theme.medium`
        padding: 40px 0 0;
        min-height: auto;
        
        strong{
            top: 80px;
            left: 0;
        }
        
        .desc{
            margin-top: 50px;
            width: 90%;
        }
    `};

    ${({theme}) => theme.small`
        padding-top: ${vw(40)};
        
        strong{
            top: ${vw(110)};
            font-size: ${vw(80)};
        }
        
        h3{
            font-size: ${vw(48)};
        }
        
        .desc{
            margin-top: ${vw(60)};
            
            p{
                margin-bottom: ${vw(10)};
            }
        }   
    `};
`;
const ThumbList = styled.ul`
    li{
        display: flex;
        margin-bottom: 100px;
        cursor: pointer;

        ${({theme}) => theme.medium`
            flex-direction: column;
        `};

        ${({theme}) => theme.small`
            margin-bottom: ${vw(100)};
        `};
    }
`;

function ProjectContentThumb({data}){
    const projectTab = useRecoilValue(projectTabState);

    const thumbRef = useRef(null);
    const navigate = useNavigate();

    const gsapThumbMotion = () => {
        gsap.registerPlugin(ScrollTrigger);

        const thumbList = thumbRef.current;
        const thumb = thumbList.querySelectorAll('li');
        const thumbImg = thumbList.querySelectorAll('li .img-box');

        let ctx = gsap.context(() => {
            gsap.set(thumbImg, {clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)"});
            Object.values(thumbImg).map((img, idx) => {
                let name = thumb[idx].querySelector('h3');
                let desc = thumb[idx].querySelector('.desc');
                let client = thumb[idx].querySelector('strong');

                gsap.set(name, { yPercent: 20, opacity: 0});
                gsap.set(client, {opacity: 0});
                gsap.set(desc, {yPercent: 10, opacity: 0});

                gsap.timeline({
                    scrollTrigger: {
                        trigger: thumb[idx],
                        start: "-10% 60%",
                        end: "-10% 60%",
                        // scrub: 1,
                        // markers: true
                    }
                })
                    .to(img, {ease: "none", opacity: 1, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)"}, 0)
                    .to(name, {yPercent: 0, opacity: 1}, 0.2)
                    .to(client, {opacity: 0.1}, 0.2)
                    .to(desc, {yPercent: 0, opacity: 1}, 0.5)
            });
        }, thumbRef);
        return () => ctx.revert();
    }
    const onClickThumb = (id) => {
        navigate(`/project/${id}`);
    }

    useEffect(() => {
        gsapThumbMotion();
    }, [projectTab]);

    return (
        <ThumbList ref={thumbRef} className="thumb">
            {data.map(({clientEn, client, name, period, thumbImg, desc, id, participateRate}, idx) => (
                <li key={idx} onClick={() => onClickThumb(id)} >
                    <ImgBox className="img-box">
                        <img src={`${img}/${thumbImg}`} alt={`${name} 썸네일 이미지`}/>
                    </ImgBox>
                    <TxtBox className="txt-box">
                        <strong>{clientEn}</strong>
                        <h3>{client} <br/> {name}</h3>
                        <div className="desc">
                            <Text name="desc2">기간 : {period}</Text>
                            <Text name="desc2">참여율 : {participateRate}%</Text>
                        </div>
                    </TxtBox>
                </li>
            ))}
        </ThumbList>
    )
}

export default ProjectContentThumb;