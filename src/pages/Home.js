import Layout from "../components/_inc/Layout";
import MainVisual from "../components/MainVisual";
import MainProject from "../components/MainProject";
import MainCareer from "../components/MainCareer";
import MainContact from "../components/MainContact";
import MainSkill from "../components/MainSkill";
import LoadMotion from "../components/LoadMotion";
import {useRecoilValue} from "recoil";
import {loadingTxtState} from "../recoil/atoms";


function Home(){
    const loading = useRecoilValue(loadingTxtState);
    return(
        <>
            <LoadMotion />
            <Layout header={{motion: true}}>
                <MainVisual />
                <MainProject />
                <MainSkill />
                {/*<MainCareer />*/}
                <MainContact />
            </Layout>
        </>
    )
}

export default Home;