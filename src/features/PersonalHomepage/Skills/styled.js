import styled from "styled-components";
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
`;

export const Header = styled.h2`
    margin: 0;
    padding-bottom: 16px;
    color: ${({ theme }) => theme.colors.textprimary};
    font-size: 30px;
    font-weight: 900;
    letter-spacing: 1.5px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.headerLine};
`;

export const List = styled.ul`
    padding: 16px 0px 0px 0px;
    list-style: none;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 8px 115px;
`;

export const Item = styled.li`
    font-size: 18px;
    font-weight: 400;
    line-height: 140%;
    letter-spacing: 0.9px;
`;

