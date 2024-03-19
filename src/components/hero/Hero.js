import React, { useState, useEffect } from "react";
import "./hero.scss";
import logo from "../../assets/images/logo.svg";

const Hero = () => {
  let [value, setValue] = useState(null);
  let [valueW, setValueW] = useState(null);
  let [style, setStyle] = useState("hero__calculator");
  let [ft, setFt] = useState(null);
  let [inc, setInc] = useState(null);
  let [st, setSt] = useState(null);
  let [lbs, setLbs] = useState(null);

  let [styleb, setStyleb] = useState("");
  const [selectedValue, setSelectedValue] = useState("1");

  let [bmiResult, setBmiResult] = useState(
    <>
      <div className={`bmiResult__start`}>
        <div className="bmiStart__wrapper">
          <div className="bmiResult_title">Welcome!</div>
          <div className="bmiResult_text">
            Enter your height and weight and you’ll see your BMI result here
          </div>
        </div>
      </div>
    </>
  );

  useEffect(() => {
    let res = 0;

    let status = "";
    let valueH = value / 100;
    const min = Math.round(18.5 * valueH * valueH);
    const max = Math.round(24.9 * valueH * valueH);

    if (
      value !== null &&
      valueW !== null &&
      value >= 100 &&
      valueW >= 10 &&
      value < 250 &&
      valueW < 250
    ) {
      res = (valueW / ((value / 100) * (value / 100))).toFixed(2);

      if (+res < 18.5) {
        status = "Underweight";
      } else if (+res < 24.9) {
        status = "Healthy weight";
      } else if (+res < 29.9) {
        status = "Overweight";
      } else {
        status = "Obese";
      }

      setBmiResult(
        <>
          <div className={`bmiResult`}>
            <div className="bmiResult__wrapper">
              <div className="bmiResult__title">
                Your BMI is... <span>{res}</span>
              </div>
              <div className="bmiResult__text">
                Your BMI suggests you’re a <span>{status}</span>. Your ideal
                weight is between <span>{min}kgs</span> - <span>{max}kgs</span>.
              </div>
            </div>
          </div>
        </>
      );
    } else {
      setBmiResult(
        <>
          <div className={`bmiResult__start`}>
            <div className="bmiStart__wrapper">
              <div className="bmiResult_title">Welcome!</div>
              <div className="bmiResult_text">
                Enter your height and weight and you’ll see your BMI result here
              </div>
            </div>
          </div>
        </>
      );
    }
  }, [value, valueW]);

  useEffect(() => {
    let res = 0;

    let status = "";
    let valueH = value / 100;
    const min = Math.round(18.5 * valueH * valueH);
    const max = Math.round(24.9 * valueH * valueH);

    if (
      value !== null &&
      valueW !== null &&
      value >= 100 &&
      valueW >= 10 &&
      value < 250 &&
      valueW < 250
    ) {
      res = (valueW / ((value / 100) * (value / 100))).toFixed(2);

      if (+res < 18.5) {
        status = "Underweight";
      } else if (+res < 24.9) {
        status = "Healthy weight";
      } else if (+res < 29.9) {
        status = "Overweight";
      } else {
        status = "Obese";
      }

      setBmiResult(
        <>
          <div className={`bmiResult`}>
            <div className="bmiResult__wrapper">
              <div className="bmiResult__title">
                Your BMI is... <span>{res}</span>
              </div>
              <div className="bmiResult__text">
                Your BMI suggests you’re a <span>{status}</span>. Your ideal
                weight is between <span>{min}kgs</span> - <span>{max}kgs</span>.
              </div>
            </div>
          </div>
        </>
      );
    } else {
      setBmiResult(
        <>
          <div className={`bmiResult__start`}>
            <div className="bmiStart__wrapper">
              <div className="bmiResult_title">Welcome!</div>
              <div className="bmiResult_text">
                Enter your height and weight and you’ll see your BMI result here
              </div>
            </div>
          </div>
        </>
      );
    }
  }, [ft, inc, st, lbs]);
  let [view, setView] = useState(
    <>
      <div className="inputBmi__wrapper">
        <div className="inputBmi__height">
          <div className="inputBmi__height-text">Height </div>

          <input
            type="text"
            className="bmi__input"
            placeholder="0"
            onChange={getInputData}
            maxLength={3}
          />
          <span>cm</span>
        </div>

        <div className="inputBmi__weight">
          <div className="inputBmi__weight-text">Weight</div>

          <input
            type="text"
            className="bmi__input"
            placeholder="0"
            onChange={getInputDataW}
            maxLength={3}
          />
          <span>kg</span>
        </div>
      </div>
    </>
  );

  function onViewChange() {
    setStyle("hero__calculator imperial__style");
    setStyleb("style__bmi");
    setSelectedValue("2");
    setView(
      (view = (
        <>
          <div className="inputBmi">
            <div className="inputBmi__wrapper">
              <div className="inputBmi__height">
                <div className="inputBmi__height-text">Height</div>

                <input
                  type="text"
                  className="bmi__input"
                  placeholder="0"
                  onChange={getInputDataFt}
                />
                <span>ft</span>
              </div>

              <div className="inputBmi__weight">
                <div className="inputBmi__weight-text"></div>

                <input
                  type="text"
                  className="bmi__input"
                  placeholder="0"
                  onChange={getInputDataInc}
                />
                <span>in</span>
              </div>
            </div>
          </div>

          <div className="inputBmi">
            <div className="inputBmi__wrapper">
              <div className="inputBmi__height st-weight">
                <div className="inputBmi__height-text">Weight</div>

                <input
                  type="text"
                  className="bmi__input"
                  placeholder="0"
                  onChange={getInputDataSt}
                />
                <span>st</span>
              </div>

              <div className="inputBmi__weight lbs-weight">
                <div className="inputBmi__weight-text"></div>

                <input
                  type="text"
                  className="bmi__input"
                  placeholder="0"
                  onChange={getInputDataLbs}
                />
                <span>lbs</span>
              </div>
            </div>
          </div>
        </>
      ))
    );
  }

  function getInputData(val) {
    setValue(val.target.value);
  }
  function getInputDataW(val) {
    setValueW(val.target.value);
  }

  function getInputDataFt(val) {
    setFt(val.target.value);
  }
  function getInputDataInc(val) {
    setInc(val.target.value);
  }
  function getInputDataSt(val) {
    setSt(val.target.value);
  }
  function getInputDataLbs(val) {
    setLbs(val.target.value);
  }
  function onViewInputChange() {
    setStyle("hero__calculator ");
    setStyleb("");
    setSelectedValue("1");

    setView(
      (view = (
        <>
          <div className="inputBmi__wrapper">
            <div className="inputBmi__height">
              <div className="inputBmi__height-text">Height</div>

              <input
                type="text"
                className="bmi__input"
                placeholder="0"
                onChange={getInputData}
              />
              <span>cm</span>
            </div>

            <div className="inputBmi__weight">
              <div className="inputBmi__weight-text">Weight</div>

              <input
                type="text"
                className="bmi__input"
                placeholder="0"
                onChange={getInputDataW}
              />
              <span>kg</span>
            </div>
          </div>
        </>
      ))
    );
  }
  return (
    <div className="hero">
      <div className="hero__container">
        <div className="hero__logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="hero__wrapper">
          <div className="hero__title">
            <div className="hero__sub">Body Mass Index Calculator</div>
            <div className="hero__text">
              Better understand your weight in relation to your height using our
              body mass index (BM) calculator. While BMI is not the sole
              determinant of a healthy weight, it offers a valuable starting
              point to evaluate your overall health and well-being.
            </div>
          </div>
          <div className={`${style}`}>
            <div className="hero__calculator-wrapper">
              <div className="hero__calculator-name">
                Enter your details below
              </div>

              <div className="hero__calculator-check">
                <div className="checkbox__metric">
                  <label className="metric">
                    <input
                      className="radio__btn"
                      type="radio"
                      name="mycheck"
                      value="1"
                      checked={selectedValue === "1"}
                      onChange={onViewInputChange}
                    />
                    <span>Metric</span>
                    <br />
                  </label>
                  <label className="imperial">
                    <input
                      className="radio__btn"
                      type="radio"
                      name="mycheck"
                      value="2"
                      checked={selectedValue === "2"}
                      onChange={onViewChange}
                    />
                    <span>Imperial</span>
                    <br />
                  </label>
                </div>
              </div>
              <div className="inputBmi">{view}</div>

              <div className={`${styleb}`}>{bmiResult}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
