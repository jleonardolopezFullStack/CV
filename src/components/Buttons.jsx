import { useButtonStore, useInfoStore } from "../store/ButtonStore";
import { useProgressStore } from "../store/ProgressBarStore";
import { shallow } from "zustand/shallow";
import { Plug1, Plug2, Plug4 } from "./Conection";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export const ButtonsAbout = () => {
  const [t, i18n] = useTranslation("global");

  const [aboutState, setAboutState] = useState(0);
  const { stateProgressList } = useProgressStore((state) => ({
    stateProgressList: state.stateProgressList,
  }));
  const { hanldeStateAboutTrue, hanldeStateAboutFalse } = useButtonStore();
  const { hanldeStateProgress, hanldeStateProgressList } = useProgressStore();
  /*   const handleMouseEnter = (e) => {
    console.log(e.target);
  }; */

  const cambiandoEstado = () => {
    setAboutState(aboutState + 1);
  };

  const varias = (word) => {
    hanldeStateProgress(20);
    hanldeStateProgressList(word);
  };

  return (
    <div>
      <button
        className="button about_button"
        //onMouseEnter={hanldeStateAbout(1)}
        onMouseEnter={() => {
          hanldeStateAboutTrue();
          cambiandoEstado();
        }}
        onMouseLeave={() => {
          hanldeStateAboutFalse();
        }}
        onClick={() => {
          stateProgressList.includes("about")
            ? console.log("already is add")
            : varias("about");
        }}
      >
        {t("header.about")}
      </button>
    </div>
  );
};

export const ButtonSkills = () => {
  const [t, i18n] = useTranslation("global");
  const { stateProgressList } = useProgressStore((state) => ({
    stateProgressList: state.stateProgressList,
  }));

  const { hanldeStateSkillTrue, hanldeStateSkillFalse } = useButtonStore();
  const { hanldeStateProgress, hanldeStateProgressList } = useProgressStore();

  const varias = (word) => {
    hanldeStateProgress(20);
    hanldeStateProgressList(word);
  };
  return (
    <div>
      <button
        className="button skill_button"
        onMouseEnter={() => {
          hanldeStateSkillTrue();
        }}
        onMouseLeave={() => {
          hanldeStateSkillFalse();
        }}
        onClick={() => {
          stateProgressList.includes("skill")
            ? console.log("already is add")
            : varias("skill");
        }}
      >
        {t("header.skills")}
      </button>
    </div>
  );
};

export const ButtonBall = () => {
  const [t, i18n] = useTranslation("global");
  const { stateProgressList } = useProgressStore((state) => ({
    stateProgressList: state.stateProgressList,
  }));

  const { hanldeStateInfoTrue, hanldeStateInfoFalse } = useInfoStore();
  const { hanldeStateProgress, hanldeStateProgressList } = useProgressStore();

  const varias = (word) => {
    hanldeStateProgress(20);
    hanldeStateProgressList(word);
  };
  return (
    <div>
      <button
        className="button ball_button"
        onMouseEnter={() => {
          hanldeStateInfoTrue();
        }}
        onMouseLeave={() => {
          hanldeStateInfoFalse();
        }}
        onClick={() => {
          stateProgressList.includes("info")
            ? console.log("already is add")
            : varias("info");
        }}
      >
        {t("header.info")}
      </button>
    </div>
  );
};

export const ButtonExperience = () => {
  const [t, i18n] = useTranslation("global");
  const { stateProgressList } = useProgressStore((state) => ({
    stateProgressList: state.stateProgressList,
  }));

  const { hanldeStateExperienceTrue, hanldeStateExperienceFalse } =
    useButtonStore();
  const { hanldeStateProgress, hanldeStateProgressList } = useProgressStore();

  const varias = (word) => {
    hanldeStateProgress(20);
    hanldeStateProgressList(word);
  };
  return (
    <div>
      <button
        className="button experience_button"
        onMouseEnter={() => {
          hanldeStateExperienceTrue();
        }}
        onMouseLeave={() => {
          hanldeStateExperienceFalse();
        }}
        onClick={() => {
          stateProgressList.includes("experience")
            ? console.log("already is add")
            : varias("experience");
        }}
      >
        {t("header.experience")}
      </button>
    </div>
  );
};

export const ButtonEducation = () => {
  const [t, i18n] = useTranslation("global");

  const { stateProgressList } = useProgressStore((state) => ({
    stateProgressList: state.stateProgressList,
  }));
  const { hanldeStateEducationTrue, hanldeStateEducationFalse } =
    useButtonStore();
  const { hanldeStateProgress, hanldeStateProgressList } = useProgressStore();
  const varias = (word) => {
    hanldeStateProgress(20);
    hanldeStateProgressList(word);
  };

  return (
    <div>
      <button
        className="button education_button"
        onMouseEnter={() => {
          hanldeStateEducationTrue();
        }}
        onMouseLeave={() => {
          hanldeStateEducationFalse();
        }}
        onClick={() => {
          stateProgressList.includes("education")
            ? console.log("already is add")
            : varias("education");
        }}
      >
        {t("header.education")}
      </button>
    </div>
  );
};

export const ButtonsLanguages = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <label className="button_language">
      <input
        type="checkbox"
        onClick={(e) =>
          e.target.checked
            ? i18n.changeLanguage("en")
            : i18n.changeLanguage("es")
        }
        /* style={{e.target.checked}} */
      />
      <span className="check"></span>
      <p className="button_english">EN</p>
      <p className="button_spanish">ES</p>
    </label>
  );
};
