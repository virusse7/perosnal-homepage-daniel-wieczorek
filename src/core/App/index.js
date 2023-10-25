import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";
import { themeDark, themeLight } from "./theme";


export const App = () => {

    return (
        <ThemeProvider theme={themeLight}>
            <Normalize />
            <GlobalStyle />

        </ThemeProvider>
    )
}

export default App;