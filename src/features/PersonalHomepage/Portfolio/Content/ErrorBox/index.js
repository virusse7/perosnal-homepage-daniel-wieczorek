import { ReactComponent as DangerIcon } from "./Danger.svg";
import { ButtonLink } from "../../../ButtonLink";
import { Wrapper, Header, Paragraph } from "./styled";
import { githubUsername } from "../../githubUsername";

export const ErrorBox = () => {
    return (
        <Wrapper>
            <DangerIcon />
            <Header>Ooops! Something went wrong...</Header>
            <Paragraph>
                Sorry, failed to load Github projects.
                You can check them directly on Github.
            </Paragraph>
            <ButtonLink href={`https://github.com/${githubUsername}`} target="_blank" rel="noreferrer">Go to Github</ButtonLink>
        </Wrapper>
    );
};