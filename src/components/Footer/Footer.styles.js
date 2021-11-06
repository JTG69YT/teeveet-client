import styled from "styled-components";

export const Wrapper = styled.div`
  background: var(--darkBlue);
  padding: 32px 32px;
  margin-top: auto;

  @media screen and (max-width: 600px) {
    padding: 16px 16px;
  }
`;

export const Content = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  text-align: center;
  line-height: 2.2em;
  font-size: 1.4em;
  font-family: "Poppins";
  font-weight: 400;
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
    font-size: .9em;
  }

  @media screen and (max-width: 600px) {
    span {
      font-size: .8em;
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
