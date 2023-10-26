import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";
import { themeDark, themeLight } from "./theme";
import { PersonalHomepage } from "../../features/PersonalHomepage";



export const App = () => {

    return (
        <ThemeProvider theme={themeLight}>
            <Normalize />
            <GlobalStyle />
            <PersonalHomepage />
        </ThemeProvider>
    )
}

export default App;