import { MyRecentProjects, Section, StyledGithubIcon, Header } from "./styled"
import { SubHeader } from "../SubHeader/index";
import { Content } from "./Content";

export const Portfolio = () => {
    return (
        <Section>
            <Header>
                <StyledGithubIcon />
                <SubHeader>Portfolio</SubHeader>
                <MyRecentProjects>My recent projects</MyRecentProjects>
            </Header>
            <Content />
        </Section>
    )
}