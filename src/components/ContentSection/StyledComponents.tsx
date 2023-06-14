import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// export const ContentCard = styled.div<{reversed: boolean}>`
export const ContentCard = styled.div.attrs((props: {reversed: boolean}) => props)`
  display: flex;
  // flex-direction: row-reverse;
  flex-direction: ${props => props.reversed ? "row-reverse" : "row"};
  flex-wrap: nowrap;
  width: 90vw;
  height: 30vh;
  justify-content: center;
  align-items: center;
  margin-top: 2vh;
  margin-bottom: 2vh;
`;

export const ContentCardImage = styled.img`
  /* width: 20vw; */
  height: inherit;
`;

export const ContentCardText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70vw;
  height: inherit;
`;