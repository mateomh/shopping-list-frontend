import { ErrorLink, ErrorLogo, ErrorPageContainer } from "./Error/styles";

const errorLogo = require("../assets/logos/error-logo.png");

const Error:React.FC = () => {
  return(
    <ErrorPageContainer>
      <ErrorLogo 
        src={errorLogo}
        alt="Error message"
      />
      <ErrorLink>
        To go back click <a href="/">here</a>
      </ErrorLink>
    </ErrorPageContainer>
  );
}

export default Error;