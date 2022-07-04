import styled from 'styled-components';

export const Image = styled.img`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 720px;
  transition: all 0.3s ease-in-out;
  object-fit: cover;
  background: darkslategrey;
  border: 6px solid white;
  border-radius: 8px;
  animation: animateThumb 0.5s;

  :hover {
    border: 12px solid white;
    padding: 8px;
    background: white;
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
