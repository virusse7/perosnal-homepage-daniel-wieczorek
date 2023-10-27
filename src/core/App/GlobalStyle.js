import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, ::after, ::before {
        box-sizing: inherit;
    };

    body {
        font-family: 'Inter', sans-serif;
        background: ${({ theme }) => theme.colors.site.background};
        color: ${({ theme }) => theme.colors.site.text};
        padding-bottom: 108px;
        transition: 0.3s;
        margin-top: 30px;

        @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
            padding: 32px 16px;
        };
    };
`;