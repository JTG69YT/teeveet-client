import styled from "styled-components";

export const Wrapper = styled.div`
  background: var(--darkBlue);
  background-size: cover;
  background-position: center;
  padding: 40px 20px;
  transition: all 0.3s;
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
  justify-content: space-between;
  align-items: center;
  max-width: var(--maxWidth);
  margin: 0 auto;
  background: var(--darkBlue);
  transition: all 0.3s;
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
  transition: all 0.3s;
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
    font-size: 2em;
    @media screen and (max-width: 768px) {
      transition: all 0.3s;
      font-size: var(--fontBig);
    }
  }
`;

export const Facebook = styled.img`
  width: 40px;
  margin-right: 16px;
  transition: all 0.3s;
  animation: animateThumb 0.5s;

  :hover {
    opacity: 0.75;
    background-color: white;
    border-radius: 40px;
  }

  @media screen and (max-width: 768px) {
    width: 40px;
  }

  @keyframes animateThumb {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Twitter = styled.img`
  width: 40px;
  margin-right: 16px;
  transition: all 0.3s;
  animation: animateThumb 0.5s;

  :hover {
    opacity: 0.75;
  }

  @media screen and (max-width: 768px) {
    width: 32px;
  }

  @keyframes animateThumb {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const YouTube = styled.img`
  width: 40px;
  margin-right: 16px;
  transition: all 0.3s;
  animation: animateThumb 0.5s;

  :hover {
    opacity: 0.75;
  }

  @media screen and (max-width: 768px) {
    width: 32px;
  }

  @keyframes animateThumb {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Instagram = styled.img`
  width: 40px;
  margin-right: 16px;
  transition: all 0.3s;
  animation: animateThumb 0.5s;

  :hover {
    opacity: 0.75;
    background-color: white;
    border-radius: 10px;
  }

  @media screen and (max-width: 768px) {
    width: 32px;
  }

  @keyframes animateThumb {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Web = styled.img`
  width: 40px;
  transition: all 0.3s;
  animation: animateThumb 0.5s;

  :hover {
    opacity: 0.75;
    background-color: white;
    border-radius: 40px;
  }

  @media screen and (max-width: 768px) {
    width: 32px;
  }

  @keyframes animateThumb {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
