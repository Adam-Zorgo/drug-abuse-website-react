import React, { useState } from 'react';
import '../App.css';
import BackgroundAssessment from '../assets/BackgroundAssessment.jpg';
import Mutex from "./MutexRiskCounter"
const fs = require('node:fs');

const RiskAssessment = () => {
    const [answers, setAnswers] = useState({});
    const questions = [
        { id: 1, question: "I am a user of recreational drugs.", options: [{ text: "Strongly  Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 5 }] },
        { id: 2, question: "Growing up (or still), I had easily accessible or offerred drugs/alchohol.", options: [{ text: "Strongly  Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 5 }] },
        { id: 3, question: "My family or people that I grew up around used Drugs frequently.", options: [{ text: "Strongly  Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 5 }] },
        { id: 4, question: "I Grew (and/or am currently) poor.", options: [{ text: "Strongly  Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 5 }] },
        { id: 5, question: "I have a history of childhood abuse and/or trauma.", options: [{ text: "Strongly  Disagree", value: 0 }, { text: "Disagree", value: 1 }, { text: "Neutral", value: 2 }, { text: "Agree", value: 3 }, { text: "Strongly Agree", value: 5 }] },
    ];

    const handleChange = (questionId, optionValue) => {
        setAnswers(prev => ({
            ...prev,
            [questionId]: optionValue
        }));
    };

    const isAllAnswered = Object.keys(answers).length === questions.length; // Checking if all questions are answered

    function readFile(filePath) {
        try {
          const data = fs.readFileSync(filePath);
          return data.toInt();
        } catch (error) {
          console.error(`Got an error trying to read the file: ${error.message}`);
        }
      }

    const mutex = new Mutex()

    const handleSubmit = () => {
        if (!isAllAnswered) {
            alert("Please answer all questions before submitting.");
            return;
        }

        const totalScore = Object.values(answers).reduce((acc, cur) => acc + cur, 0);

        // Determinig risk level based on the total score
        let riskMessage;
        if (totalScore >= 15) {
            mutex.lock();
            riskMessage = "High risk. Please seek professional help.";
            x = readFile("./risk_counts_high") + 1;
            fs.writeFile("./risk_counts_high", x, err => {if err()
                if (err){
                    console.error(err);
                }
            })
        } else if (totalScore >= 7) {
            mutex.lock();
            riskMessage = "Moderate risk. Consider talking to a counselor.";
            x = readFile("./risk_counts_medium") + 1;
            fs.writeFile("./risk_counts_medium", x, err => {if err()
                if (err){
                    console.error(err);
                }
            })
        } else {
            mutex.lock();
            riskMessage = "Low risk. Keep making healthy choices!";
            x = readFile("./risk_counts_low") + 1;
        }

        alert(`Total Score: ${totalScore}\n${riskMessage}`);
    };

    return (
        <div
            className="background-container"
            style={{
                BackgroundAssessment: `url(${BackgroundAssessment})`, 
                backgroundSize: 'cover', 
                backgroundPosition: 'center', 
                backgroundAttachment: 'fixed',
                minHeight: '100vh', 
            }}
        >
            <div className="risk-assessment-container">
                <h1>Risk Assessment</h1> 
                <p className="risk-assessment-text">How likely am I to develop a dangerous (perhaps life threatening) drug addiction?</p>
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