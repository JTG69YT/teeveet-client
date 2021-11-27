import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 70px;
    background: var(--darkBlue);
    color: var(--white);
    transition: all 0.3s;
    animation: animateBreadCrumb 1s;

    @keyframes animateBreadCrumb {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;

export const Content = styled.div`
    display: flex;
    width: 100%;
    max-width: var(--maxWidth);
    transition: all 0.3s;
    padding: 0 20px;

    span {
        font-size: var(--fontSmall);
        color: var(--white);
        transition: all 0.3s;
        padding-right: 10px;

        @media screen and (max-width: 768px) {
            transition: all 0.3s;
            font-size: var(-fontSmall);
        }
    }
`;