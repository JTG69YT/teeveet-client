import styled from 'styled-components';

export const Image = styled.img`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 720px;
  transition: all 0.3s;
  background: var(--white);
  padding: 4px;
  object-fit: cover;
  border-radius: 8px;
  animation: animateThumb 0.5s;

  :hover {
    opacity: 0.8;
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
