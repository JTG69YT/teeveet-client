import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 50px 50px;
  transition: all 0.3s;
  background: var(--darkBlue);

  h1 {
    color: white;
    margin-bottom: 1.25em;
    transition: all 0.3s;

    @media screen and (max-width: 768px) {
      transition: all 0.3s;
      font-size: var(--fontBig);
    }
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 2rem;
  transition: all 0.3s;
`;
