import { useProgressStore } from "../store/ProgressBarStore";
import "../styles/progressBar2.css";

const ProgressBar2 = () => {
  const { stateProgress, stateProgressList } = useProgressStore((state) => ({
    stateProgress: state.stateProgress,
    stateProgressList: state.stateProgressList,
  }));

  /*   const progress = document.querySelector(".progress-done");
  const input = document.querySelector(".input");
  const maxInput = document.querySelector(".maxInput"); */
  let finalValue = stateProgress;
  let max = 100;
  console.log(stateProgressList);
  /*   const changeWidth = () => {
    progress.style.width = `${(finalValue / max) * 100}%`;
    progress.innerText = `${Math.ceil((finalValue / max) * 100)}%`;
  };
  changeWidth(); */
  /* 
  input.addEventListener("keyup", function () {
    finalValue = parseInt(input.value, 10);
    console.log("finalValue", finalValue);
  });

  maxInput.addEventListener("keyup", function () {
    max = parseInt(maxInput.value, 10);
    console.log("max", max);
  }); */
  return (
    <>
      <div className="progress">
        <div
          className="progress-done"
          style={{ width: `${(finalValue / max) * 100}%` }}
        >
          {(finalValue / max) * 100}%
        </div>
      </div>
    </>
  );
};

export default ProgressBar2;
