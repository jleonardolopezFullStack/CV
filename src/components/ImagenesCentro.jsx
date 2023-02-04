import { useButtonStore, useInfoStore } from "../store/ButtonStore";
import { shallow } from "zustand/shallow";
import { useTranslation } from "react-i18next";

const ImagenesCentro = () => {
  const [t, i18n] = useTranslation("global");
  const { stateAbout, stateSkill, stateExperience, stateEducation } =
    useButtonStore((state) => ({
      stateAbout: state.stateAbout,
      stateSkill: state.stateSkill,
      stateExperience: state.stateExperience,
      stateEducation: state.stateEducation,
    }));
  const { stateInfo } = useInfoStore((state) => ({
    stateInfo: state.stateInfo,
  }));
  return (
    <>
      {/*       <h1 className="name_title">Jorge Lopez</h1>
       */}

      <div
        className="img"
        style={
          !(
            stateAbout ||
            stateSkill ||
            stateInfo ||
            stateExperience ||
            stateEducation
          )
            ? { opacity: "1" }
            : { opacity: "0.1" }
        }
      ></div>
      <div
        className="textAbout"
        style={!stateAbout ? { opacity: "0" } : { opacity: "1" }}
      >
        <p className="textMern">
          Full Stack Engineer | Mongo | Express | React | Node | TypeScript |
          MERN
        </p>
        <p>{t("header.aboutText")}</p>
      </div>
      <div
        className="imgSkills"
        style={!stateSkill ? { opacity: "0" } : { opacity: "1" }}
      ></div>
      <div
        className="textInfo"
        style={!stateInfo ? { opacity: "0" } : { opacity: "1" }}
      >
        <div className="phone">
          <div className="phone_img"></div>
          <p className="phone_text">{t("header.bot")}</p>
        </div>

        <div className="address">
          <div className="address_img"></div>
          <p className="address_text">Waterloo, NSW, Sydney</p>
        </div>
        <div className="email">
          <div className="email_img"></div>
          <p className="email_text">Jleonardolopez@hotmail.com</p>
        </div>
      </div>
      <div
        className="textExperience"
        style={!stateExperience ? { opacity: "0" } : { opacity: "1" }}
      >
        <p>{t("header.experienceText")}</p>
      </div>
      <div className="img_back">
        <svg
          width="460"
          height="360"
          viewBox="0 0 352 227"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="Vector"
            className="img_back_svg"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M212.661 210.627C195.884 223.761 171.961 228.965 149.339 224.401C104.603 215.362 68.4754 201.256 42.007 183.051C12.3917 162.701 -3.07252 131.872 0.607768 100.52C4.28823 69.1677 26.6468 41.264 60.464 25.8192C95.5662 9.76449 148.421 -1.56729 227.992 0.569019C466.3 6.9672 287.788 151.808 287.788 151.808C287.788 151.808 242.462 187.295 212.661 210.626V210.627Z"
            fill="#068DD1"
          />
        </svg>
      </div>
      <div
        className="textEducation"
        style={!stateEducation ? { opacity: "0" } : { opacity: "1" }}
      >
        <p>{t("header.educationText").replace(/\n/g, "<br />")}</p>
      </div>
    </>
  );
};

export default ImagenesCentro;
