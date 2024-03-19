import React from "react";
import "./eating.scss";
import exercise from "../../assets/images/icon-exercise.svg";
import eatnig from "../../assets/images/icon-eating.svg";

import sleep from "../../assets/images/icon-sleep.svg";

const Eating = () => {
  return (
    <div className="eating">
      <div className="eating__wrapper">
        <div className="eating__card">
          <div className="eating__card-img">
            <img src={eatnig} alt="eating" />
          </div>
          <div className="eating__text-wrapper">
            <div className="eating__card-title">Healthy eating</div>
            <div className="eating__card-text">
              Healthy eating promotes weight control, disease prevention, better
              digestion, immunity, mental clarity, and mood.
            </div>
          </div>
        </div>

        <div className="eating__card">
          <div className="eating__card-img">
            <img src={exercise} alt="exercise" />
          </div>
          <div className="eating__text-wrapper">
            <div className="eating__card-title">Regular exercise</div>
            <div className="eating__card-text">
              Exercise improves fitness, aids weight control, elevates mood, and
              reduces disease risk, fostering wellness and longevity.
            </div>
          </div>
        </div>

        <div className="eating__card">
          <div className="eating__card-img">
            <img src={sleep} alt="sleep" />
          </div>
          <div className="eating__text-wrapper">
            <div className="eating__card-title">Adequate sleep</div>
            <div className="eating__card-text">
              Sleep enhances mental clarity, emotional stability, and physical
              wellness, promoting overall restoration and rejuvenation.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eating;
