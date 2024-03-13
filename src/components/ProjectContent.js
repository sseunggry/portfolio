import {projectTabState} from "../recoil/atoms";
import {useEffect, useRef} from "react";
import Layout from "../components/_inc/Layout";
import styled from "styled-components";
import theme from "../styles/theme";
import Text from "../styles/Text";
import {vw} from "../utils/common";
import {gsap} from "gsap";
import {useRecoilState} from "recoil";
import ProjectContentThumb from "./ProjectContentThumb";

const ProjectCon = styled.div`
    overflow: hidden;
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
    max-width: 1920px;

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

function ProjectContent({dataWork, dataPersonal}){
    const [projectTab, setProjectTab] = useRecoilState(projectTabState);
    const sectionRef = useRef(null);
    const tabRef = useRef(null);

    const gsapTitMotion = () => {
        const section = sectionRef.current;
        const tab = tabRef.current;
        const pageTit = section.querySelector('[name="tit1"] span');

        gsap.set(pageTit, {yPercent: 110});
        gsap.set(tab, {yPercent: 30, opacity: 0});

        const ani = gsap.timeline({
            ease: "cubic-bezier(.19,1,.22,1)"
        });
        ani.to(pageTit, {opacity: 1, yPercent: 0})
            .to(tab, {yPercent: 0, opacity: 1});
    }
    const tabActive = () => {
        let li = tabRef.current.children;
        Object.values(li).forEach((el, idx) => {
            el.classList.remove('active');
            if(el.classList.contains(projectTab)){
                el.classList.add('active');
            }
        });
    }
    const onClick = (e) => {
        const $target = e.target;
        let menuText = $target.innerText.replace(/[0-9]/g, '').trim();
        setProjectTab(menuText.toLowerCase());
    }

    useEffect(() => {
        gsapTitMotion();
        tabActive();
    }, []);
    useEffect(() => {
        tabActive();
    }, [projectTab]);

    return (
        <Layout header={{active: 1}}>
            <ProjectCon ref={sectionRef}>
                <Inner className="inner">
                    <Text name="tit1" color={theme.color.white} className="mask">
                        <span>Project</span>
                    </Text>
                    <Tab ref={tabRef}>
                        <li className="work" onClick={onClick}>work <span className="outfit">{dataWork.length}</span></li>
                        <li className="personal" onClick={onClick}>personal <span className="outfit">{dataPersonal.length}</span></li>
                    </Tab>
                    {(projectTab === 'work') && <ProjectContentThumb data={dataWork} /> }
                    {(projectTab === 'personal') && <ProjectContentThumb data={dataPersonal} /> }
                </Inner>
            </ProjectCon>
        </Layout>
    )
}

export default ProjectContent;