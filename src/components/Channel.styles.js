import styled from "styled-components";

export const Wrapper = styled.div`
  background: var(--darkBlue);
  background-size: cover;
  background-position: center;
  padding: 40px 20px;
  animation: animateChannelInfo 1s;

  @keyframes animateChannelInfo {
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
  justify-content: center;
  align-items: center;
  max-width: var(--maxWidth);
  margin: 0 auto;
  background: var(--darkBlue);
  border-radius: 20px;

  @media screen and (max-width: 768px) {
    display: block;
    max-height: none;
  }
`;

export const Text = styled.div`
  width: 100%;
  padding: 20px 40px;
  color: var(--white);
  overflow: hidden;

  .homepage {
    margin: 0 0 0 40px;

    p {
      margin: 0;
    }

    a {
      text-decoration: none;
      color: var(--white);
    }
  }

  h1 {
    @media screen and (max-width: 768px) {
      font-size: var(--fontBig);
    }
  }
`;
