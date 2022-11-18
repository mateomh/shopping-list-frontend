import './Banner/styles.css';

interface BannerProps {
  title?: string;
  text?: string;
}

const Banner:React.FC<BannerProps> = ({
  title = null,
  text = null
}) => {
  return(
    <div className="banner-container">
      <div className="banner-content">
        {title && <h2 className="banner-title">{title}</h2>}
        {text && <p className="banner-text">{text}</p>}
      </div>
    </div>
  );
}

export default Banner;