import styled from "styled-components";

export const Wrapper = styled.div`
  background: var(--darkBlue);
  padding: 32px 32px;
  margin-top: auto;
  transition: all 0.3s;

  @media screen and (max-width: 600px) {
    transition: all 0.3s;
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
  transition: all 0.3s;
  color: var(--white);

  a {
    color: var(--white);
    text-decoration: none;
    transition: all 0.3s;

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
      transition: all 0.3s;
      font-size: .8em;
    }
  }
`;

export const LogoImg = styled.img`
  width: 200px;
  transition: all 0.3s;

  @media screen and (max-width: 600px) {
    transition: all 0.3s;
    width: 150px;
  }
`;
