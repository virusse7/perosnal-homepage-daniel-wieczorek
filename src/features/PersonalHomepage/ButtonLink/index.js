import styled from "styled-components";

export const ButtonLink = styled.a`
    text-decoration: none;
    color: ${({ theme }) => theme.colors.buttonLink.text};
    padding: 12px 16px;
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 1.003px;
    gap: 16px;
    background: ${({ theme }) => theme.colors.buttonLink.background};
    border: 1px solid ${({ theme }) => theme.colors.buttonLink.border};
    border-radius: ${({ theme }) => theme.borderRadiusSmall};
    transition: 0.3s;

    &:hover {
        box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.buttonLink.shadow};
    }
`;