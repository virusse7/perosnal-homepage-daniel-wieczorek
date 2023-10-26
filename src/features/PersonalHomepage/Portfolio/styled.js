import styled from "styled-components";
import { ReactComponent as GithubIcon } from "./github.svg";

export const Section = styled.section`
    text-align: center;
`;

export const StyledGithubIcon = styled(GithubIcon)`
    margin-bottom: 12px;
    width: 40px;
`;

export const MyRecentProjects = styled.h3`
    margin: 8px 0 88px 0;
    font-size: 20px;
    font-weight: 400;
    line-height: 140%;
    letter-spacing: 1px;
    color: ${({ theme }) => theme.colors.textprimary};

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        margin-bottom: 24px;
    }
`;

export const Header = styled.header`
    margin-top: 72px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        margin-top: 48px;
    }
`;