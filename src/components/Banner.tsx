import {
  BannerContainer,
  BannerContent,
  BannerTitle,
  BannerText
} from './Banner/styled-components';

interface BannerProps {
  title?: string;
  text?: string;
  image?: any;
}

const Banner:React.FC<BannerProps> = ({
  title = null,
  text = null,
  image = null
}) => {
  return(
    <BannerContainer>
      <BannerContent
        image={image as any}
      >
        {title && <BannerTitle className="banner-title">{title}</BannerTitle>}
        {text && <BannerText className="banner-text">{text}</BannerText>}
      </BannerContent>
    </BannerContainer>
  );
}

export default Banner;