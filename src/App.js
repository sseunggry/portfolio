import {BrowserRouter, Routes, Route} from "react-router-dom";
import {useEffect} from "react";
import {RecoilRoot} from "recoil";

import {ThemeProvider} from "styled-components";
import GlobalStyle from "./styles/global";
import theme from "./styles/theme";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import smooth from "./utils/smooth";
import media from "./styles/base/media";
import ScrollToTop from "./utils/ScrollToTop";
import Project from "./pages/Project";
import ProjectDetail from "./pages/ProjectDetail";

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
                        <Route path="/project/:id" element={<ProjectDetail />} />
                        <Route path="/contact" element={<Contact />}/>
                    </Routes>
                </BrowserRouter>
            </RecoilRoot>
        </ThemeProvider>
    )
}

export default App;
