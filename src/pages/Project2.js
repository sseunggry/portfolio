import {img, projectPersonal, projectWork} from "../recoil/atoms";
import {useState} from "react";
import Layout from "../components/_inc/Layout";
import styled from "styled-components";
import theme from "../styles/theme";
import Text from "../styles/Text";

import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';


const ProjectCon = styled.div`
    margin: 0 auto;
    padding: 150px 0;
    max-width: 1440px;
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
const SwiperCon = styled.div`
    display: flex;

    .swiper{
        &:first-of-type{
            flex-shrink: 0;
            width: 720px;
        }
        //.swiper-slide{
        //    display: flex;
        //}
        .swiper-pagination-fraction{
            width: fit-content;
            left: auto;
            right: 0;
        }
    }
`;
const ImgBox = styled.div`
    flex-shrink: 0;
    //width: 720px;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;
const TxtBox = styled.div`
    padding: 60px;
    width: 100%;
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

function Project2(){
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
                <SwiperCon>
                    <Swiper slidesPerView={'auto'} pagination={{type: 'fraction'}} >
                        {projectData && Object.values(projectData).map(({client, name, period, thumbImg, desc}, idx) => (
                                <SwiperSlide key={idx}>
                                    <ImgBox>
                                        <img src={`${img}/${thumbImg}`} alt={`${name} 썸네일 이미지`}/>
                                    </ImgBox>
                                    {/*<TxtBox>*/}
                                    {/*    <strong>{client}</strong>*/}
                                    {/*    <h3>[{client}] <br/> {name}</h3>*/}
                                    {/*    <p className="desc">{desc}</p>*/}
                                    {/*    <p className="period">{period}</p>*/}
                                    {/*</TxtBox>*/}
                                </SwiperSlide>
                        ))}
                    </Swiper>
                    <Swiper slidesPerView={'auto'} modules={[Navigation,  Pagination]} pagination={{type: 'fraction'}} >
                        {projectData && Object.values(projectData).map(({client, name, period, thumbImg, desc}, idx) => (
                            <SwiperSlide key={idx}>
                                <TxtBox>
                                    <strong>{client}</strong>
                                    <h3>[{client}] <br/> {name}</h3>
                                    <p className="desc">{desc}</p>
                                    <p className="period">{period}</p>
                                </TxtBox>
                            </SwiperSlide>
                            ))}
                    </Swiper>

                </SwiperCon>
            </ProjectCon>
        </Layout>
    )
}

export default Project2;