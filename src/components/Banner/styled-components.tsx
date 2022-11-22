import styled from "styled-components";

export const BannerContainer = styled.div`
  height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface BannerContentProps {
  image: any;
}

export const BannerContent = styled.div<BannerContentProps>`
  background-color: white;
  height:30vh;
  width: 90%;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
    rgba(0, 0, 0, 0.6), 
    rgba(0, 0, 0, 0.6)
  ),url('${props => props.image}');
  background-size: 100% 200%;
  background-repeat: no-repeat;
  background-position: center
`;

export const BannerTitle = styled.h2`
  font-size: 3rem;
  margin: 1rem;
  color: white;
`;

export const BannerText = styled.p`
  color: white;
`;