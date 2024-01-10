import {ProjectCon, Tab, Thumb} from "../styles/project";
import {Title1} from "../styles/common";
import {img, projectPersonal, projectWork} from "../recoil/atoms";
import {useState} from "react";
import project from "../data/project_list.json";
import Layout from "../components/_inc/Layout";

function Project(){
    // const work = project.work;
    // const personal = project.personal;
    // const projectWork = Object.values(work).filter((el, idx) => el.thumbImg);
    // const projectPersonal = Object.values(personal).filter((el, idx) => el.thumbImg);
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
        <Layout header={{active: 1}}>
            <ProjectCon>
                <Title1>Project</Title1>
                <Tab onClick={onClick}>
                    <li className="active">work ({projectWork.length})</li>
                    <li>personal ({projectPersonal.length})</li>
                </Tab>
                {projectData.map(({client, name, period, thumbImg, desc}, idx) => (
                    <Thumb key={idx}>
                        <div className="img-box">
                            <img src={`${img}/${thumbImg}`} alt={`${name} 썸네일 이미지`}/>
                        </div>
                        <div className="txt-box">
                            <strong>{client}</strong>
                            <h3>[{client}] <br/> {name}</h3>
                            <p className="desc">{desc}</p>
                            <p className="period">{period}</p>
                        </div>
                    </Thumb>
                ))}
            </ProjectCon>
        </Layout>
    )
}

export default Project;