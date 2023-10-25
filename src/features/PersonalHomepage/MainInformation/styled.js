import styled from "styled-components";
import { ReactComponent as EnvelopeIcon } from "./Envelope.svg";

export const Wrapper = styled.header`
    margin-top: -23px;
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 66px;
    align-items: center;
`;

export const Avatar = styled.img`
    height: 25vw;
    border-radius: 50%;
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
`;

export const Summary = styled.p`
    width: 35vw;
    font-size: 20px;
    font-weight: 400;
    line-height: 140%;
    letter-spacing: 1px;
`;

export const ButtonLink = styled.a`
    text-decoration: none;
    padding: 12px 16px;
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 1.003px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    color: ${({ theme }) => theme.colors.buttonLink.text};
    background: ${({ theme }) => theme.colors.buttonLink.background};
    border: 1px solid ${({ theme }) => theme.colors.buttonLink.border};
    border-radius: 4px;
`;

export const Icon = styled(EnvelopeIcon)`
    width: 24px;
`;