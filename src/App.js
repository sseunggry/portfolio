import {BrowserRouter, Routes, Route} from "react-router-dom";
import {RecoilRoot} from "recoil";
import Main from "./pages/Main";

import {ThemeProvider} from "styled-components";
import GlobalStyle from "./styles/global";
import theme from "./styles/theme";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <RecoilRoot>
                <BrowserRouter basename={process.env.PUBLIC_URL}>
                    <Routes>
                        <Route path="/" element={<Main />}/>
                    </Routes>
                </BrowserRouter>
            </RecoilRoot>
        </ThemeProvider>
    )
}

export default App;
