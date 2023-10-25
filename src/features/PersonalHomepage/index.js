import { ThemeSwitch } from "../../common/ThemeSwitch"
import { MainInformation } from "./MainInformation"
import { Container } from "./styled"

export const PersonalHomepage = () => {

    return (
        <Container>
            <ThemeSwitch />
            <MainInformation />
        </Container>
    )
}