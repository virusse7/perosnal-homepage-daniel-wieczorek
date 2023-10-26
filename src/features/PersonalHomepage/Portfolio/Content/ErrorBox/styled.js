import styled from "styled-components";

export const Wrapper = styled.div`
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    width: 45%;
`;

export const Header = styled.header`
    color : ${({ theme }) => theme.colors.textprimary};
    font-size: 24px;
    font-weight: 700;
    letter-spacing: 1.2px;
    margin-top: 16px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 20px;
    }
`;

export const Paragraph = styled.p`
    color : ${({ theme }) => theme.colors.textprimary};
    margin: 32px 0px;
    font-size: 20px;
    font-weight: 400;
    line-height: 140%;
    letter-spacing: 1px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 16px;
    }
`;

