import styled from "styled-components";

export const ErrorPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 80vh;
`;

export const ErrorLogo = styled.img`
  width: 15rem;
  height: 15rem;
`

export const ErrorLink = styled.p`
  color: #676767;
  text-align: center;
  font-size: 2rem;
  margin: 3rem;

  a {
    text-decoration: underline;
    color: var(--navbar-foreground);
  }
`