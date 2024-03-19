import React from "react";
import "./meaning.scss";
import Vector from "../../assets/images/Vector.png";
import Man from "../../assets/images/image-man-eating.webp";

const meaning = () => {
  return (
    <div className="meaning">
      <img src={Vector} alt="vector" className="meaning__vector" />

      <div className="meaning__wrapper">
        <div className="meaning__card">
          <img src={Man} alt="man" className="meaning__img" />
        </div>
        <div className="meaning__info">
          <div className="meaning__info-title">What your BMI result means</div>
          <div className="meaning__info-text">
            A BMI range of 18.5 to 24.9 is considered a 'healthy weight.'
            Maintaining a healthy weight may lower your chances of experiencing
            health issues later on, such as obesity and type 2 diabetes. Aim for
            a nutritious diet with reduced fat and sugar content, incorporating
            ample fruits and vegetables. Additionally, strive for regular
            physical activity, ideally about 30 minutes daily for five days a
            week.
          </div>
        </div>
      </div>
    </div>
  );
};

export default meaning;
