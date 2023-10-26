import styled from "styled-components";
import { ButtonLink } from "../ButtonLink";
import { ReactComponent as EnvelopeIcon } from "./Envelope.svg";

export const Wrapper = styled.header`
    margin-top: -23px;
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 66px;
    align-items: center;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        grid-template-columns: 1fr;
    }
`;

export const Avatar = styled.img`
    width: 398px;
    border-radius: 50%;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        width: 136px;
    }
`;

export const ThisIs = styled.p`
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 700;
    line-height: 130%;
`;

export const Name = styled.h1`
    margin: 0;
    color: ${({ theme }) => theme.colors.textprimary};
    font-size: 32px;
    font-weight: 900;
    letter-spacing: 1.9px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 22px;
        letter-spacing: 1.1px;
    }
`;

export const Summary = styled.p`
    width: 35vw;
    font-size: 20px;
    font-weight: 400;
    line-height: 140%;
    letter-spacing: 1px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        width: 75%;
        font-size: 17px;
        letter-spacing: 0.85px;
    }
`;

export const Icon = styled(EnvelopeIcon)`
    width: 24px;
`;

export const StyledButtonLink = styled(ButtonLink)`
    margin-top: 10px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
`;