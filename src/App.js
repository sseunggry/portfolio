import {BrowserRouter, Routes, Route} from "react-router-dom";
import {useEffect} from "react";
import {RecoilRoot} from "recoil";

import {ThemeProvider} from "styled-components";
import GlobalStyle from "./styles/global";
import theme from "./styles/theme";
import Home from "./pages/Home";
import Project from "./pages/Project";
import About from "./pages/About";
import Contact from "./pages/Contact";
import smooth from "./utils/smooth";

function App() {
    useEffect(() => {
        smooth();
    }, []);
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <RecoilRoot>
                <BrowserRouter basename={process.env.PUBLIC_URL}>
                    <Routes>
                        <Route path="/" element={<Home />}/>
                        <Route path="/about" element={<About />}/>
                        <Route path="/project" element={<Project />}/>
                        <Route path="/contact" element={<Contact />}/>
                    </Routes>
                </BrowserRouter>
            </RecoilRoot>
        </ThemeProvider>
    )
}

export default App;
