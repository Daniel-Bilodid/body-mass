import React from "react";

import gender from "../../assets/images/icon-gender.svg";
import age from "../../assets/images/icon-age.svg";
import muscle from "../../assets/images/icon-muscle.svg";
import pregnancy from "../../assets/images/icon-pregnancy.svg";
import race from "../../assets/images/icon-race.svg";
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
            <img src={age} alt="age" />
            <span>Age</span>
          </div>
          <div className="limitation__card-text">
            In aging individuals, increased body fat and muscle loss may cause
            BMI to underestimate body fat content.
          </div>
        </div>

        <div className="limitation__card dif">
          <div className="limitation__card-wrapper">
            <img src={muscle} alt="muscle" />
            <span>Muscle</span>
          </div>
          <div className="limitation__card-text">
            BMI may misclassify muscular individuals as overweight or obese, as
            it doesn't differentiate muscle from fat.
          </div>
        </div>
      </div>

      <div className="limitation__footer">
        <div className="limitation__card footer">
          <div className="limitation__card-wrapper">
            <img src={pregnancy} alt="pregnancy" />
            <span>Pregnancy</span>
          </div>
          <div className="limitation__card-text">
            Expectant mothers experience weight gain due to their growing baby.
            Maintaining a healthy pre-pregnancy BMI is advisable to minimise
            health risks for both mother and child.
          </div>
        </div>

        <div className="limitation__card">
          <div className="limitation__card-wrapper">
            <img src={race} alt="race" />
            <span>Gender</span>
          </div>
          <div className="limitation__card-text">
            Certain health concerns may affect individuals of some Black and
            Asian origins at lower BMIs than others. To learn more, it is
            advised to discuss this with your GP or practice nurse.
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
