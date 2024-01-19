import {img, projectPersonal, projectWork} from "../recoil/atoms";
import {useEffect, useRef, useState} from "react";
import Layout from "../components/_inc/Layout";
import styled from "styled-components";
import theme from "../styles/theme";
import Text from "../styles/Text";
import {vw} from "../utils/common";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

const ProjectCon = styled.div`
    padding-top: 80px;

    ${({theme}) => theme.small`
        padding-top: ${vw(120)};
    `};
`;
const Inner = styled.div`
    margin: 0 auto;
    padding: 150px 0;
    max-width: 1440px;

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
    margin: 50px 0;
    
    li{
        margin-right: 80px;
        font-size: 28px;
        font-weight: 700;
        color: ${theme.color.gray3};
        text-transform: uppercase;
        cursor: pointer;
      
        &:last-of-type{
            margin-right: 0;
        }
      
        &:hover, &.active{
            color: ${theme.color.black};
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
    
    li{
        display: flex;
        &:nth-of-type(2n){
            flex-direction: row-reverse;
        }
        
        ${({theme}) => theme.medium`
            flex-direction: column;
            margin-bottom: 60px;
            
            &:nth-of-type(2n){
                flex-direction: column;
            }
            &:last-of-type{
                margin-bottom: 0;
            }
        `};
    
        ${({theme}) => theme.small`
            margin-bottom: ${vw(60)};
        `};
    }
`;
const ImgBox = styled.div`
    position: relative;
    width: 50%;
    
    &::before{
        content: '';
        display: block;
        padding-top: 100%;
        width: 100%;
    }

    img{
        position: absolute;
        width: 100%;
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
    const thumbConRef = useRef(null);
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

    useEffect(() => {
       gsap.registerPlugin(ScrollTrigger);

       const section = sectionRef.current;
       const thumbCon = thumbConRef.current;
       const thumbList = thumbRef.current;
       const pageTit = section.querySelector('[name="tit1"]');
       const thumb = thumbList.querySelectorAll('li');

        let ctx = gsap.context(() => {
            gsap.set(pageTit, {yPercent: 30, opacity: 0});
            gsap.set(thumbCon, {yPercent: 10, opacity: 0});
            // gsap.set(thumbList, {yPercent: 1, opacity: 0});
            gsap.set(thumb[0], {opacity: 0});
            gsap.set(thumb, {opacity: 0});

            const ani = gsap.timeline();
            ani.to(pageTit, {yPercent: 0, opacity: 1}, 'motion')
               .to(thumbCon, {yPercent: 0, opacity: 1}, 'motion')
               .to(thumb[0], {opacity: 1}, 'motion');


            Object.values(thumb).map((el, idx) => {
                const ani2 = gsap.timeline({
                    scrollTrigger: {
                        trigger: el,
                        start: "top 80%",
                        end: "bottom bottom",
                        scrub: 1,
                    }
                });
                if(idx !== 0) {
                    ani2.to(el, {opacity: 1});
                }
            })


        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <Layout header={{active: 1}}>
            <ProjectCon ref={sectionRef}>
                <Inner>
                    <Text name="tit1">Project</Text>
                    <div ref={thumbConRef}>
                        <Tab onClick={onClick}>
                            <li className="active">work ({projectWork.length})</li>
                            <li>personal ({projectPersonal.length})</li>
                        </Tab>
                        <ThumbList ref={thumbRef}>
                            {projectData.map(({client, name, period, thumbImg, desc}, idx) => (
                                <li key={idx}>
                                    <ImgBox>
                                        <img src={`${img}/${thumbImg}`} alt={`${name} 썸네일 이미지`}/>
                                    </ImgBox>
                                    <TxtBox>
                                        <strong>{client}</strong>
                                        <h3>{name}</h3>
                                        {/*<h3>[{client}] <br/> {name}</h3>*/}
                                        <Text name="desc3" className="desc">{desc}</Text>
                                        <Text name="desc2" className="period">{period}</Text>
                                    </TxtBox>
                                </li>
                            ))}
                        </ThumbList>
                    </div>
                </Inner>
            </ProjectCon>
        </Layout>
    )
}

export default Project;