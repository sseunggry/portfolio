import Layout from "../components/_inc/Layout";
import MainVisual from "../components/MainVisual";
import MainProject from "../components/MainProject";
import MainCareer from "../components/MainCareer";
import MainContact from "../components/MainContact";
import theme from "../styles/theme";
import MainVisual_ from "../components/MainVisual_";
import MainSkill from "../components/MainSkill";


function Home(){
    return(
        <Layout header={{color: theme.color.white, motion: true}}>
            <MainVisual />
            <MainProject />
            <MainSkill />
            {/*<MainCareer />*/}
            <MainContact />
        </Layout>
    )
}

export default Home;