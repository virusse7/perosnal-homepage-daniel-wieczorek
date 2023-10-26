import styled from "styled-components";
import { SubHeader } from "../SubHeader/index";
import { ReactComponent as bulletImage } from "./bullet.svg";

export const Bullet = styled(bulletImage)`
    margin-right: 18px;
    width: 9px;
`;

export const Section = styled.section`
    background: ${({ theme }) => theme.colors.boxBackground};
    box-shadow: ${({ theme }) => theme.boxShadow};
    padding: 32px;
    margin-top: 72px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        padding: 16px;
        margin-top: 48px;
    }
`;

export const Header = styled(SubHeader)`
    padding-bottom: 16px;
    letter-spacing: 1.5px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.headerLine};

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) { 
        font-size: 18px;
        letter-spacing: 0.9px;
        padding-bottom: 12px;
    }
`;

export const List = styled.ul`
    margin: 0;
    padding: 16px 0px 0px 0px;
    list-style: none;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 8px 115px;

    @media(max-width: ${({ theme }) => theme.breakpoints.tabletHorizontalMax}px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        grid-template-columns: 1fr;
        padding-top: 12px;
    }
`;

export const Item = styled.li`
    font-size: 18px;
    font-weight: 400;
    line-height: 140%;
    letter-spacing: 0.9px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 14px;
        letter-spacing: 0.7px;
    }
`;

