import {BrowserRouter, Routes, Route} from "react-router-dom";
import {useEffect} from "react";
import {RecoilRoot, useRecoilState} from "recoil";

import {ThemeProvider} from "styled-components";
import GlobalStyle from "./styles/global";
import theme from "./styles/theme";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import smooth from "./utils/smooth";
import Project2 from "./pages/Project2";
import media from "./styles/base/media";
import ScrollToTop from "./utils/ScrollToTop";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {windowWidths} from "./recoil/atoms";
import {debounce} from "lodash";
import Project from "./pages/Project";

function App() {
    // let windowSize = useWindowSizeCustom();
    // console.log(windowSize.width)
    // if(windowSize.width){
    //     ScrollTrigger.update();
    // }
    useEffect(() => {
        smooth();
    }, []);
    return (
        <ThemeProvider theme={{...theme, ...media}}>
            <GlobalStyle />
            <RecoilRoot>
                <BrowserRouter basename={process.env.PUBLIC_URL}>
                    <ScrollToTop />
                    <Routes>
                        <Route path="/" element={<Home />}/>
                        <Route path="/about" element={<About />}/>
                        <Route path="/project" element={<Project />}/>
                        <Route path="/project2" element={<Project2 />}/>
                        <Route path="/contact" element={<Contact />}/>
                    </Routes>
                </BrowserRouter>
            </RecoilRoot>
        </ThemeProvider>
    )
}

export default App;
