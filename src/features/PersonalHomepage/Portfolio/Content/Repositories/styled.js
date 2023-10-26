import styled from "styled-components";

export const List = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
    padding: 0;
`;

export const Tile = styled.li`
    padding: 56px;
    box-shadow: ${({ theme }) => theme.boxShadow};
    background: ${({ theme }) => theme.boxBackground};
    border: 6px solid ${({ theme }) => theme.colors.tile.border};
    border-radius: ${({ theme }) => theme.borderRadiusSmall};
    display: inline-flex;
    flex-direction: column;
    gap: 24px;
    transition: 0.5s;

    &:hover {
       border-color: ${({ theme }) => theme.colors.tile.borderHover};
    };
`;

export const Name = styled.h3`
    margin: 0;
    font-size: 24px;
    font-weight: 700;
    letter-spacing: 1.2px;
    color: ${({ theme }) => theme.colors.tile.header};
    text-transform: capitalize;
`;

export const Description = styled.p`
    margin: 0;
    color: ${({ theme }) => theme.colors.gray};
    font-size: 18px;
    font-weight: 400;
    line-height: 140%;
    letter-spacing: 0.9px;
`;

export const Links = styled.dl`
    display: grid;
    line-height: 160%;
`;

export const LinksRow = styled.div`
    display: grid;
    grid-template-columns: 4em 1fr;
    gap: 8px;
`;

export const Link = styled.a`
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
    padding-bottom: 1px;
    transition: 0.3s;

    &:hover {
        filter: brightness(120%);
    };
`;

export const LinksValue = styled.p`
    margin: 0;
    color: ${({ theme }) => theme.colors.textprimary};
    font-size: 18px;
    font-weight: 400;
    line-height: 140%;
    letter-spacing: 0.9px;
`;