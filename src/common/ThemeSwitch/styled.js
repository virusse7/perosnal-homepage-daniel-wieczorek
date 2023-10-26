import styled, { css } from "styled-components";
import { ReactComponent as SunIcon } from "./sun.svg";

export const Wrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export const Button = styled.button`
    cursor: pointer;
    background: none;
    border: none;
    offset: 8px;
    display: flex;
    align-items: center;
    color: inherit;
`;

export const Text = styled.span`
    font-size: 12px;
    font-size: 700;
    line-height: 130%;
    text-transform: uppercase;
    margin-right: 12px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        display: none;
    };
`;

export const Box = styled.span`
    color: ${({ theme }) => theme.colors.themeSwitch.background};
    display: flex;
    border: 1px solid;
    border-radius: 12px;
    padding: 3px;
    width: 48px;
`;

export const IconWrapper = styled.span`
    background: currentColor;
    padding: 3px;
    border-radius: 50%;
    display: flex;
    transition: transform 0.3s;

    ${({ moveToRight }) => moveToRight && css`
        transform: translateX(20px);
    `};
`;

export const Icon = styled(SunIcon)`
    color: ${({ theme }) => theme.colors.themeSwitch.icon};
`;