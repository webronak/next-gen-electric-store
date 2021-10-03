import { SpinnerWrapper, Spinner, Absolute } from "./spineer.stylesheet.js";

const SpinnerComponent = () => {
  return(
    <SpinnerWrapper>
      <Absolute>
        <Spinner></Spinner>
      </Absolute>
    </SpinnerWrapper>
  )
};

export default SpinnerComponent;
