import Layout from "../components/_inc/Layout";
import MainVisual from "../components/MainVisual";
import MainProject from "../components/MainProject";
import MainCareer from "../components/MainCareer";
import MainContact from "../components/MainContact";
import theme from "../styles/theme";


function Home(){
    return(
        <Layout header={{bgColor: theme.color.black, motion: true}}>
            <MainVisual />
            <MainProject />
            <MainCareer />
            <MainContact />
        </Layout>
    )
}

export default Home;