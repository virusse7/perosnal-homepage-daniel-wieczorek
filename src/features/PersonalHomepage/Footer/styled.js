import styled from "styled-components";

export const Wrapper = styled.footer`
    margin-top: 120px;
`;

export const LetsTalk = styled.h2`
    margin: 0;
    font-size: 12px;
    font-weight: 700;
    line-height: 130%;
    text-transform: uppercase;
`;

export const Address = styled.address``;

export const EmailLink = styled.a`
    text-decoration: none;
    font-size: 32px;
    font-weight: 900;
    letter-spacing: 1.6px;
    font-style: normal;
    color: ${({ theme }) => theme.colors.textprimary};
    transition: 0.5s linear;

    &:hover {
        color: ${({ theme }) => theme.colors.primary};
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 18px;
        letter-spacing: 0.9px;
    }
`;

export const EmailWrapper = styled.div`
    margin: 24px 0;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        margin: 12px 0;
    }
`;

export const Paragraph = styled.p`
    max-width: 750px;
    color: ${({ theme }) => theme.colors.textprimary};
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    letter-spacing: 0.9px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 14px;
        letter-spacing: 0.7px;
    }
`;