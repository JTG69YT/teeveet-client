import styled from "styled-components";

export const Wrapper = styled.div`
  background: var(--darkBlue);
  transition: all 0.3s;
  padding: 20px 0;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--maxWidth);
  padding: 0 20px;
  margin: 0 auto;
  transition: all 0.3s;
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
  margin-left: 8px;
  width: 150px;
  transition: all 0.3s;

  @media screen and (max-width: 600px) {
    margin-left: 0px;
    width: 125px;
  }
`;
