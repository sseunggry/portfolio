import {BrowserRouter, Routes, Route} from "react-router-dom";
import {RecoilRoot} from "recoil";
import Main from "./pages/Main";

import {ThemeProvider} from "styled-components";
import GlobalStyle from "./styles/global";
import theme from "./styles/theme";
import Project from "./pages/Project";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <RecoilRoot>
                <BrowserRouter basename={process.env.PUBLIC_URL}>
                    <Routes>
                        <Route path="/" element={<Main />}/>
                        <Route path="/project" element={<Project />}/>
                    </Routes>
                </BrowserRouter>
            </RecoilRoot>
        </ThemeProvider>
    )
}

export default App;
