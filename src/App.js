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
import Project from "./pages/Project";
import Project4 from "./pages/Project4";
import Project3 from "./pages/Project3";
import Project1 from "./pages/Project1";
import Project5 from "./pages/Project5";

function App() {
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
                        <Route path="/project1" element={<Project1 />}/>
                        <Route path="/project2" element={<Project2 />}/>
                        <Route path="/project3" element={<Project3 />}/>
                        <Route path="/project4" element={<Project4 />}/>
                        <Route path="/project5" element={<Project5 />}/>
                        <Route path="/contact" element={<Contact />}/>
                    </Routes>
                </BrowserRouter>
            </RecoilRoot>
        </ThemeProvider>
    )
}

export default App;
