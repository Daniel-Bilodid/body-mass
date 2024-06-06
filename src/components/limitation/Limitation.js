import React from "react";

import gender from "../../assets/images/icon-gender.svg";
import vectorRight from "../../assets/images/VectorRight.svg";
import "./limitation.scss";

const Limitation = () => {
  return (
    <div className="limitation">
      <div className="limitation__wrapper">
        <div className="limitation__adv">
          <div className="limitation__adv-title">Limitations of BMI</div>
          <div className="limitation__adv-text">
            Although BMI is often a practical indicator of healthy weight, it is
            not suited for every person. Specific groups should carefully
            consider their BMI outcomes, and in certain cases, the measurement
            may not be beneficial to use.
          </div>
        </div>
        <div className="limitation__card limitation__card-adaptive">
          <div className="limitation__card-wrapper">
            <img src={gender} alt="gender" />
            <span>Gender</span>
          </div>
          <div className="limitation__card-text">
            The development and body fat composition of girls and boys vary with
            age. Consequently, a child's age and gender are considered when
            evaluating their BMI.
          </div>
        </div>
      </div>

      <div className="limitation__holder">
        <div className="limitation__vector">
          <img src={vectorRight} alt="vectorRight" />
        </div>
        <div className="limitation__card">
          <div className="limitation__card-wrapper">
            <img src={gender} alt="gender" />
            <span>Gender</span>
          </div>
          <div className="limitation__card-text">
            The development and body fat composition of girls and boys vary with
            age. Consequently, a child's age and gender are considered when
            evaluating their BMI.
          </div>
        </div>

        <div className="limitation__card dif">
          <div className="limitation__card-wrapper">
            <img src={gender} alt="gender" />
            <span>Gender</span>
          </div>
          <div className="limitation__card-text">
            The development and body fat composition of girls and boys vary with
            age. Consequently, a child's age and gender are considered when
            evaluating their BMI.
          </div>
        </div>
      </div>

      <div className="limitation__footer">
        <div className="limitation__card footer">
          <div className="limitation__card-wrapper">
            <img src={gender} alt="gender" />
            <span>Gender</span>
          </div>
          <div className="limitation__card-text">
            The development and body fat composition of girls and boys vary with
            age. Consequently, a child's age and gender are considered when
            evaluating their BMI.
          </div>
        </div>

        <div className="limitation__card">
          <div className="limitation__card-wrapper">
            <img src={gender} alt="gender" />
            <span>Gender</span>
          </div>
          <div className="limitation__card-text">
            The development and body fat composition of girls and boys vary with
            age. Consequently, a child's age and gender are considered when
            evaluating their BMI.
          </div>
        </div>
      </div>

      <div className="limitation__card limitation__card-tablet">
        <div className="limitation__card-wrapper">
          <img src={gender} alt="gender" />
          <span>Gender</span>
        </div>
        <div className="limitation__card-text">
          The development and body fat composition of girls and boys vary with
          age. Consequently, a child's age and gender are considered when
          evaluating their BMI.
        </div>
      </div>
    </div>
  );
};

export default Limitation;
