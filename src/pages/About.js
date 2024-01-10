import Layout from "../components/_inc/Layout";
import {Title1} from "../styles/common";
import {AboutCon, InfoTxt, Intro} from "../styles/about";

function About(){
    return (
        <Layout header={{active: 0}}>
            <AboutCon>
                <Title1>About</Title1>
                <InfoTxt>
                    <p>안녕하세요!</p>
                    <p>열정적인 프론트엔드 개발자</p>
                    <p>최승연 입니다.</p>
                </InfoTxt>
                <Intro>
                    <div className="inner">
                        <p>
                            저는 2년 9개월 동안 디자이너로 일했고, 제가 디자이너로 일하면서 느꼈던 것은 <br/>
                            디자인은 주관적인 평가로 판단된다는 것 이였습니다.
                        </p>
                        <p>
                            그래서 저는 주관적인 평가가 아닌 객관적인 평가를 받을 수 있는<br/>
                            직업이 하고 싶었습니다. 제가 본 퍼블리셔는 객관적으로 평가되어지는 직업이라고<br/>
                            생각해서 이직을 하게 되었습니다.
                        </p>
                        <p>
                            지금은 퍼블리셔로서 화면에 보여지는 인터랙션과 스크립트 작업에<br/>
                            흥미를 느끼며 재미있게 작업하고 있습니다.
                        </p>
                        <p>
                            앞으로는 퍼블리셔에서 더 나아가 프론트엔드 개발자로 성장하고 싶습니다.
                        </p>
                    </div>
                </Intro>
            </AboutCon>
        </Layout>
    )
}

export default About;