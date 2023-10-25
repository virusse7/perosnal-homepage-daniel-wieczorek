import { ThemeSwitch } from "../../common/ThemeSwitch";
import { MainInformation } from "./MainInformation";
import { Skills } from "./Skills";
import { Container } from "./styled";
import { skills } from "./skillsData";

export const PersonalHomepage = () => {

    return (
        <Container>
            <ThemeSwitch />
            <MainInformation />
            <Skills
                title={"My skillset includes 🔍"}
                skills={skills}
            />
        </Container>
    )
}