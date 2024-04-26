import React, { useState } from 'react';
import '../App.css'; // Include CSS for styling
import BackgroundAssessment from '../assets/BackgroundAssessment.jpg';
import Mutex from "./MutexRiskCounter"; // Your custom Mutex implementation
const fs = require('fs');

const RiskAssessment = () => {
    const [answers, setAnswers] = useState({});
    const questions = [
        { id: 1, question: "I am a user of recreational drugs.", options: [{ text: "Strongly  Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 5 }] },
        { id: 2, question: "Growing up (or still), I had easily accessible or offerred drugs/alchohol.", options: [{ text: "Strongly  Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 5 }] },
        { id: 3, question: "My family or people that I grew up around used Drugs frequently.", options: [{ text: "Strongly  Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 5 }] },
        { id: 4, question: "I Grew (and/or am currently) poor.", options: [{ text: "Strongly  Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 5 }] },
        { id: 5, question: "I have a history of childhood abuse and/or trauma.", options: [{ text: "Strongly  Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 5 }] },
    ];

    const isAllAnswered = Object.keys(answers).length === questions.length;

    const mutex = new Mutex(); // Ensure proper mutex initialization
  
    const readFileSafely = (filePath) => {
      try {
        const data = fs.readFileSync(filePath, 'utf8');
        return parseInt(data, 10) || 0; // Ensure safe parsing with a fallback
      } catch (error) {
        console.error(`Error reading file ${filePath}: ${error.message}`);
        return 0; // Default count if file read fails
      }
    };
  
    const updateRiskCount = (filePath) => {
      mutex.lock(); // Critical section
      const currentCount = readFileSafely(filePath);
      fs.writeFile(filePath, (currentCount + 1).toString(), (err) => {
        if (err) {
          console.error(`Error writing to file ${filePath}: ${err.message}`);
        }
        mutex.unlock(); // Unlock the mutex once done
      });
    };
  
    const getRiskMessage = (totalScore) => {
      if (totalScore >= 15) {
        return { riskMessage: 'High risk. Please seek professional help.', filePath: './risk_counts_high' };
      } else if (totalScore >= 7) {
        return { riskMessage: 'Moderate risk. Consider talking to a counselor.', filePath: './risk_counts_medium' };
      } else {
        return { riskMessage: 'Low risk. Keep making healthy choices!', filePath: './risk_counts_low' };
      }
    };
  
    const assessRisk = (totalScore) => {
      const { riskMessage, filePath } = getRiskMessage(totalScore);
      console.log(riskMessage);
      updateRiskCount(filePath);
      return riskMessage;
    };
  
    const handleSubmit = () => {
      if (!isAllAnswered) {
        alert('Please answer all questions before submitting.');
        return;
      }
  
      const totalScore = Object.values(answers).reduce((acc, cur) => acc + cur, 0);
      const riskMessage = assessRisk(totalScore);
  
      alert(`Total Score: ${totalScore}\n${riskMessage}`);
    };
  
    return (
      <div
        className="background-container"
        style={{
          backgroundImage: `url(${BackgroundAssessment})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh',
        }}
      >
        <div className="risk-assessment-container">
          <h1>Risk Assessment</h1>
          <p className="risk-assessment-text">How likely am I to develop a dangerous (perhaps life-threatening) drug addiction?</p>
          {questions.map((question) => (
            <div key={question.id} className="question-container">
              <p className="question-text">{question.question}</p>
              <div className="options-container">
                {question.options.map((option) => (
                  <button
                    key={option.text}
                    className={`option-button ${answers[question.id] === option.value ? 'selected' : ''}`}
                    onClick={() => handleChange(question.id, option.value)}
                  >
                    {option.text}
                  </button>
                ))}
              </div>
            </div>
          ))}
          <button
            className="submit-button"
            onClick={handleSubmit}
            disabled={!isAllAnswered} // Disable if not all questions are answered
          >
            Submit
          </button>
        </div>
      </div>
    );
  };
  
  export default RiskAssessment;