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

const App = () => {
  return (
    <div className="divApp">
      <ImagenesCentro />
      <ButtonsAbout />
      <ButtonSkills />
      <ButtonBall />
      <ButtonExperience />
      <ButtonEducation />
      <ButtonsLanguages />
      <Links />
      <ProgressBar2 />
      <FiveStarsRating />
    </div>
  );
};

export default App;
