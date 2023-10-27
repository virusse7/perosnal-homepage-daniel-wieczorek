import { ThemeSwitch } from "./ThemeSwitch";
import { MainInformation } from "./MainInformation";
import { Skills } from "./Skills";
import { Container } from "./styled";
import { skills, nextSkills } from "./skillsData";
import { Footer } from "../../features/PersonalHomepage/Footer";
import { Portfolio } from "./Portfolio";

export const PersonalHomepage = () => (
    <Container>
        <ThemeSwitch />
        <MainInformation />
        <Skills
            title={"My skillset includes 🔍"}
            skills={skills}
        />
        <Skills
            title={"What I want to learn next 🚀"}
            skills={nextSkills}
        />
        <Portfolio />
        <Footer />
    </Container>
);