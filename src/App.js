import React from "react";
import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

/**
 * The main component of the application.
 * Renders the Steps component, which contains a multi-step form with navigation buttons.
 */
export default function App() {
  return (
    <div>
      <Steps />
      {/* <Steps /> */}
    </div>
  );
}

/**
 * Renders a multi-step form with buttons to navigate between steps and display step-specific messages.
 */
function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  // const [test, setTest] = useState({ name: "Jonas" });

  /**
   * Handles the previous button click and updates the current step if it is greater than 1.
   */
  function handlePrevious() {
    if (step > 1) {
      setStep((prevStep) => prevStep - 1);
    }
  }

  /**
   * Handles the next button click and updates the current step if it is less than 3.
   */
  function handleNext() {
    if (step < 3) {
      setStep((nextStep) => nextStep + 1);
    }

    // BAD PRACTICE
    // test.name ="Ned";
    // GOOD PRACTICE
    // setTest({ name: "Ned" });
  }

  return (
    <div>
      <button className="close" onClick={() => setIsOpen((is) => !isOpen)}>
        &times;
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <StepMessage step={step}>
            {messages[step - 1]}
            <div className="buttons">
              <Button
                textColor="#333"
                bgColor="#e7e7e7"
                onClick={() => {
                  alert(`Learn how to ${messages[step - 1]}`);
                }}
              >
                Learn how
              </Button>
            </div>
          </StepMessage>
          <div className="buttons">
            <Button textColor="#fff" bgColor="#7950f2" onClick={handlePrevious}>
              <span>👈</span>
              Previous
            </Button>
            <Button textColor="#fff" bgColor="#7950f2" onClick={handleNext}>
              Next
              <span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

/**
 * Renders a message with the current step number and its children components.
 * @param {Object} props - The component props.
 * @param {number} props.step - The current step number.
 * @param {ReactNode} props.children - The components to be rendered inside the message.
 * @returns {ReactElement} The rendered message component.
 */
function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>Step {step}</h3>
      {children}
      {/* {test.name} */}
    </div>
  );
}

/**
 * Generates a button element with customizable text color, background color, and onClick event.
 * @param {string} textColor - The color of the button text.
 * @param {string} bgColor - The color of the button background.
 * @param {function} onClick - The function to be executed when the button is clicked.
 * @param {ReactNode} children - The content of the button.
 * @returns {ReactElement} - A button element with customized text color, background color, and onClick event.
 */
function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
