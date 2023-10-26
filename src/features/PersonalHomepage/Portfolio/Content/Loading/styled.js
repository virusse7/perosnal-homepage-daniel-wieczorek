import styled, { keyframes } from "styled-components";
import { ReactComponent as spinner } from "./icon-spinner.svg";

const rotate = keyframes`
    to {
        transform: rotate(360deg);
    }
`;

export const StyledSpinner = styled(spinner)`
    animation: ${rotate} 1s linear infinite;
    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        width: 100px;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 48px;
    margin-bottom: 140px;
`;