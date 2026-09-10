import { useState } from "react";

import "./App.css";

import Welcome from "./components/Welcome";
import QuestionCard from "./components/QuestionCard";
import DodgingQuestion from "./components/DodgingQuestion";
import FinalScreen from "./components/FinalScreen";
import LoveLetter from "./components/LoveLetter";
import MemoryLane from "./components/MemoryLane";

import { questions } from "./data/questions";

function App() {
  const [started, setStarted] = useState(false);

  const [finished, setFinished] = useState(false);

  const [showLoveLetter, setShowLoveLetter] = useState(false);

  const [showMemoryLane, setShowMemoryLane] = useState(false);

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [answers, setAnswers] = useState([]);

  const handleAnswer = (answer) => {
    setAnswers([
      ...answers,
      {
        question: questions[currentQuestion].question,
        answer: answer
      }
    ]);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setFinished(true);
    }
  };

  return (
    <>
      {!started ? (
        <Welcome
          onStart={() => setStarted(true)}
        />
      ) : finished ? (
        showLoveLetter ? (
          showMemoryLane ? (
            <MemoryLane
              onRestart={() => {
                setStarted(false);
                setFinished(false);
                setShowLoveLetter(false);
                setShowMemoryLane(false);
                setCurrentQuestion(0);
                setAnswers([]);
              }}
            />
          ) : (
            <LoveLetter
              onRestart={() => setShowMemoryLane(true)}
            />
          )
        ) : (
          <FinalScreen
            answers={answers}
            onRestart={() => setShowLoveLetter(true)}
          />
        )
      ) : questions[currentQuestion].type === "dodging" ? (
        <DodgingQuestion
          question={questions[currentQuestion]}
          questionNumber={currentQuestion + 1}
          totalQuestions={questions.length}
          onAnswer={handleAnswer}
        />
      ) : (
        <QuestionCard
          question={questions[currentQuestion]}
          questionNumber={currentQuestion + 1}
          totalQuestions={questions.length}
          onAnswer={handleAnswer}
        />
      )}
    </>
  );
}

export default App;