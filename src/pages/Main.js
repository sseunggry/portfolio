import Header from "../components/_inc/Header";
import Layout from "../components/_inc/Layout";
import {SecKv, Sec01, TxtBox, Title2, Tab} from "../styles/main";
import {img, projectList} from "../recoil/atoms";
import {Swiper, SwiperSlide} from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import {useState} from "react";

function Main(){
    const {data, setData} = useState({});
    const work = projectList.work;
    const personal = projectList.personal;

    const onClick = (e) => {
        let text = e.target.innerText.toLowerCase();
        // console.log(text);

        // if(text === 'work'){
        //     setData(work);
        // } else if(text === 'personal'){
        //     setData(personal);
        // }
    }

    console.log(data);
    return(
        <>
            <Layout header={{active: -1}}>
                <SecKv>
                    <h2>안녕하세요. <br/> 프론트엔드 개발자 <br/> 최승연 입니다</h2>
                    <img src={`${img}/main_visual.jpg`} alt="" />
                </SecKv>

                <Sec01>
                    <TxtBox>
                        <Title2>Project</Title2>
                        <Tab onClick={onClick}>
                            <li>work</li>
                            <li>personal</li>
                        </Tab>
                    </TxtBox>
                    <Swiper
                        slidesPerView={'auto'}
                    >
                        {work.map(({client, name, period, thumbImg}, idx) => (
                            <SwiperSlide key={idx}>
                                <div className="txt">
                                    <h4>[{client}] <br/>{name}</h4>
                                    <p>{period}</p>
                                </div>
                                <img src={`${img}/${thumbImg}`} alt="" />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Sec01>
            </Layout>
        </>
    )
}

export default Main;