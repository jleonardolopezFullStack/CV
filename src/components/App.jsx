import ImagenesCentro from "./ImagenesCentro";
import "../styles/app.css";
import {
  ButtonBall,
  ButtonsAbout,
  ButtonSkills,
  ButtonEducation,
  ButtonExperience,
  ButtonsLanguages,
} from "./Buttons";
import { Links } from "./Links";
import ProgressBar2 from "./ProgressBar2";
import { FiveStarsRating } from "./FiveStarsRating";
import Title from "./Title";
import "../styles/title.css";

const App = () => {
  return (
    <div>
      <ButtonsLanguages />
      <Title />

      <div className="divApp">
        <div className="right">
          <ButtonsAbout />
          <ButtonBall />
          <ButtonSkills />
        </div>
        <div className="center">
          <ImagenesCentro />
        </div>
        <div className="left">
          <ButtonExperience />
          <ButtonEducation />
        </div>
      </div>

      <Links />
      <div className="feedback">
        <ProgressBar2 />
        <FiveStarsRating />
      </div>
    </div>
  );
};

export default App;
