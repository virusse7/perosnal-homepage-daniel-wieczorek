import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, ::after, ::before {
        box-sizing: inherit;
    }

    body {
        font-family: 'Inter', sans-serif;
        background: ${({ theme }) => theme.colors.site.background};
        color: ${({ theme }) => theme.colors.site.text};
        padding-bottom: 108px;
        word-break: break-word;

        @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
            padding-bottom: 32px;
        }

    }
`;