import {img, projectPersonal, projectWork} from "../recoil/atoms";
import {useState} from "react";
import Layout from "../components/_inc/Layout";
import styled from "styled-components";
import theme from "../styles/theme";
import Text from "../styles/Text";

const ProjectCon = styled.div`
    margin: 0 auto;
    padding: 150px 0;
    max-width: 1440px;

    @media screen and (max-width: 1500px) {
        padding-left: 40px;
        padding-right: 40px;
    }
`;
const Tab = styled.ul`
    display: flex;
    margin: 20px 0 50px;
    
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
`;
const Thumb = styled.div`
    display: flex;
    &:nth-of-type(2n){
        flex-direction: row-reverse;
    }
`;
const ImgBox = styled.div`
    //flex-shrink: 0;
    //width: 720px;
    flex: 1;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;
const TxtBox = styled.div`
    padding: 60px;
    flex: 1;
    //width: 100%;
    font-size: 20px;
    color: ${theme.color.black};

    strong{
        font-weight: 700;
    }
    h3{
        margin-top: 10px;
        font-size: 48px;
        font-weight: 300;
        word-break: keep-all;
    }
    .desc{
        margin: 20px 0 40px;
        width: 70%;
        line-height: 1.5;
        color: ${theme.color.gray2};
    }
`;

function Project(){
    const [projectData, setProjectData] = useState(projectWork);

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

    return (
        <Layout>
            <ProjectCon>
                <Text name="tit1">Project</Text>
                <Tab onClick={onClick}>
                    <li className="active">work ({projectWork.length})</li>
                    <li>personal ({projectPersonal.length})</li>
                </Tab>
                {projectData.map(({client, name, period, thumbImg, desc}, idx) => (
                    <Thumb key={idx}>
                        <ImgBox>
                            <img src={`${img}/${thumbImg}`} alt={`${name} 썸네일 이미지`}/>
                        </ImgBox>
                        <TxtBox>
                            <strong>{client}</strong>
                            <h3>[{client}] <br/> {name}</h3>
                            <p className="desc">{desc}</p>
                            <p className="period">{period}</p>
                        </TxtBox>
                    </Thumb>
                ))}
            </ProjectCon>
        </Layout>
    )
}

export default Project;