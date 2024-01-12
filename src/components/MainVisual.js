import {img} from "../recoil/atoms";
import styled from "styled-components";

const Section = styled.section`
    position: relative;
    padding-top: 200px;
    //height: 100vh;
`;
const TxtBox = styled.div`
    position: relative;
    text-align: center;
    z-index: 1;

    h2{
        padding-bottom: 60px;
        font-size: 60px;
        font-weight: 100;
    }
    p{
        font-size: 18px;
        font-weight: 100;
        line-height: 1.5;
        color: #fff;
    }
`;
const Img = styled.img`
    position: absolute;
    display: block;
    //margin: 0 auto;
    width: 100%;
    height: 100vh;
    object-fit: cover;
    //width: 1200px;
`;

function MainVisual(){
    return (
        <Section className="sec-kv">
            <TxtBox>
                <h2>안녕하세요. <br/> 프론트엔드 개발자 <br/> 최승연 입니다</h2>
                <p>
                    현재 퍼블리셔 3년차이며, 다양한 인터랙션 및 스크립트 작업을 좋아합니다. <br/>
                    프론트엔드 개발자로 성장하고 싶어서 리액트를 공부하고 있습니다.
                </p>
            </TxtBox>
            <Img src={`${img}/main_visual.jpg`} alt="" />
        </Section>
    )
}

export default MainVisual;