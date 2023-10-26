import { MyRecentProjects, Section, StyledGithubIcon, Header } from "./styled";
import { SubHeader } from "../SubHeader/index";
import { Content } from "./Content";
import { useDispatch, useSelector } from "react-redux";
import { fetchRepositories, selectRepositories, selectRepositoriesStatus } from "../../personalHomepageSlice";
import { useEffect } from "react";
import { githubUsername } from "./githubUsername";

export const Portfolio = () => {
    const dispatch = useDispatch();

    const repositories = useSelector(selectRepositories);
    const repositoriesStatus = useSelector(selectRepositoriesStatus);

    useEffect(() => {
        dispatch(fetchRepositories(githubUsername));
    }, [dispatch]);

    return (
        <Section>
            <Header>
                <StyledGithubIcon />
                <SubHeader>Portfolio</SubHeader>
                <MyRecentProjects>My recent projects</MyRecentProjects>
            </Header>
            <Content
                status={repositoriesStatus}
                repositories={repositories}
            />
        </Section>
    );
};