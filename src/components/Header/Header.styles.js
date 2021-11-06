import styled from "styled-components";

export const Wrapper = styled.div`
  background: var(--darkBlue);
  padding: 20px 20px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--maxWidth);
  padding: 0 20px;
  margin: 0 auto;
  color: var(--white);

  a {
    color: var(--white);
    text-decoration: none;

    :hover {
      opacity: 0.8;
    }
  }

  .button-logout {
    color: var(--white);
    text-decoration: none;
  }

  span {
    font-size: 1em;
  }

  @media screen and (max-width: 600px) {
    span {
      font-size: .9em;
    }
  }
`;

export const LogoImg = styled.img`
  margin-left: 16px;
  width: 130px;

  @media screen and (max-width: 600px) {
    margin-left: 2px;
    width: 128px;
  }
`;

export const FacebookLogo = styled.img`
  padding: 28px;
  width: 100px;

  @media screen and (max-width: 600px) {
    margin-right: 2px;
    width: 50px;
  }
`;

export const InstagramLogo = styled.img`
  padding: 28px;
  width: 100px;

  @media screen and (max-width: 600px) {
    margin-right: 2px;
    width: 50px;
  } 
`;
