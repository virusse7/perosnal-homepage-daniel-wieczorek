import styled from "styled-components";

export const styleIcon = Icon => styled(Icon)`
    height: auto;
`;

export const List = styled.ul`
    margin-top: 56px;
    margin-bottom: 0;
    padding: 0;
    list-style: none;
    display: flex;
    gap: 24px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        margin-top: 40px;
    }
`;

export const Link = styled.a`
    color: ${({ theme }) => theme.colors.textprimary};
    transition: color 0.5s;
    
    &:hover {
        color: ${({ theme }) => theme.colors.primary};
    }
`;

export const Item = styled.li``;