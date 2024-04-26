import React, { useState } from 'react';
import '../App.css'; // Include CSS for styling
import BackgroundAssessment from '../assets/BackgroundAssessment.jpg';

// Function to send risk level to a backend server
const sendRiskLevelToServer = async (riskLevel) => {
  try {
    const response = await fetch('http://localhost:3001/api/risk-count', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ riskLevel }),
    });

    if (!response.ok) {
      throw new Error('Failed to update risk count.');
    }
  } catch (error) {
    console.error('Error updating risk count:', error);
  }
};

const RiskAssessment = () => {
  const [answers, setAnswers] = useState({});
  const questions = [
    {
      id: 1,
      question: "I am a user of recreational drugs.",
      options: [
        { text: "Strongly Disagree", value: 0 },
        { text: "Disagree", value: 1 },
        { text: "Neutral", value: 2 },
        { text: "Agree", value: 3 },
        { text: "Strongly Agree", value: 5 },
      ],
    },
    {
      id: 2,
      question: "Growing up (or still), I had easily accessible or offered drugs/alcohol.",
      options: [
        { text: "Strongly Disagree", value: 0 },
        { text: "Disagree", value: 1 },
        { text: "Neutral", value: 2 },
        { text: "Agree", value: 3 },
        { text: "Strongly Agree", value: 5 },
      ],
    },
    {
      id: 3,
      question: "My family or people that I grew up around used drugs frequently.",
      options: [
        { text: "Strongly Disagree", value: 0 },
        { text: "Disagree", value: 1 },
        { text: "Neutral", value: 2 },
        { text: "Agree", value: 3 },
        { text: "Strongly Agree", value: 5 },
      ],
    },
    {
      id: 4,
      question: "I grew (and/or am currently) poor.",
      options: [
        { text: "Strongly Disagree", value: 0 },
        { text: "Disagree", value: 1 },
        { text: "Neutral", value: 2 },
        { text: "Agree", value: 3 },
        { text: "Strongly Agree", value: 5 },
      ],
    },
    {
      id: 5,
      question: "I have a history of childhood abuse and/or trauma.",
      options: [
        { text: "Strongly Disagree", value: 0 },
        { text: "Disagree", value: 1 },
        { text: "Neutral", value: 2 },
        { text: "Agree", value: 3 },
        { text: "Strongly Agree", value: 5 },
      ],
    },
  ];

  const isAllAnswered = Object.keys(answers).length === questions.length;

  const handleChange = (questionId, value) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: value,
    }));
  };

  const getRiskLevel = (totalScore) => {
    if (totalScore >= 15) {
      return 'high';
    } else if (totalScore >= 7) {
      return 'medium';
    } else {
      return 'low';
    }
  };

  const handleSubmit = () => {
    if (!isAllAnswered) {
      alert('Please answer all questions before submitting.');
      return;
    }

    const totalScore = Object.values(answers).reduce((acc, cur) => acc + cur, 0);
    const riskLevel = getRiskLevel(totalScore);

    sendRiskLevelToServer(riskLevel);

    alert(`Total Score: ${totalScore}\nRisk Level: ${riskLevel.toUpperCase()}`);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${BackgroundAssessment})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          padding: '20px',
          borderRadius: '10px',
          maxWidth: '600px', // Optional, to limit the maximum width of the content
        }}
      >
        <h1 style={{ marginBottom: '20px' }}>Risk Assessment</h1> {/* Space between header and first question */}
        {questions.map((question) => (
          <div key={question.id} style={{ marginBottom: '20px' }}>
            <p>{question.question}</p>
            {question.options.map((option, index) => (
              <button
                key={option.text}
                className={`option-button ${answers[question.id] === option.value ? 'selected' : ''}`}
                style={{
                  marginRight: '10px',
                  padding: '10px', 
                  minWidth: index === 0 || index === 4 ? '100px' : '80px', // Larger for first and last
                }}
                onClick={() => handleChange(question.id, option.value)}
              >
                {option.text}
              </button>
            ))}
          </div>
        ))}
        <button onClick={handleSubmit} disabled={!isAllAnswered} style={{ padding: '10px 20px' }}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default RiskAssessment;
