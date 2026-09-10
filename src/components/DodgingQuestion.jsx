import { useRef, useState } from "react";
import { motion } from "framer-motion";

function DodgingQuestion({
  question,
  questionNumber,
  totalQuestions,
  onAnswer
}) {
  const stageRef = useRef(null);
  const noButtonRef = useRef(null);

  const [noPosition, setNoPosition] = useState({
    x: 0,
    y: 0
  });

  const [escapeCount, setEscapeCount] = useState(0);
  const [accepted, setAccepted] = useState(false);

  const progress =
    (questionNumber / totalQuestions) * 100;

  const moveNoButton = () => {
    const stage = stageRef.current;
    const button = noButtonRef.current;

    if (!stage || !button) return;

    const maxX =
      stage.clientWidth - button.offsetWidth;

    const maxY =
      stage.clientHeight - button.offsetHeight;

    const newX =
      Math.random() * Math.max(0, maxX);

    const newY =
      Math.random() * Math.max(0, maxY);

    setNoPosition({
      x: newX,
      y: newY
    });

    setEscapeCount((count) => count + 1);
  };

  const handleYes = () => {
    setAccepted(true);
  };

  if (accepted) {
    return (
      <div className="quiz-page celebration-page">

        <div className="celebration-hearts">

          <motion.span
            animate={{
              y: [-20, -160],
              x: [0, -40],
              opacity: [1, 0]
            }}
            transition={{
              duration: 2
            }}
          >
            ❤️
          </motion.span>

          <motion.span
            animate={{
              y: [-10, -180],
              x: [0, 50],
              opacity: [1, 0]
            }}
            transition={{
              duration: 2.2,
              delay: 0.2
            }}
          >
            💕
          </motion.span>

          <motion.span
            animate={{
              y: [-30, -140],
              x: [0, 20],
              opacity: [1, 0]
            }}
            transition={{
              duration: 1.8,
              delay: 0.4
            }}
          >
            ✨
          </motion.span>

          <motion.span
            animate={{
              y: [-15, -200],
              x: [0, -60],
              opacity: [1, 0]
            }}
            transition={{
              duration: 2.4,
              delay: 0.1
            }}
          >
            💖
          </motion.span>

        </div>

        <motion.div
          className="celebration-card"
          initial={{
            opacity: 0,
            scale: 0.7,
            y: 30
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0
          }}
          transition={{
            type: "spring",
            stiffness: 180,
            damping: 15
          }}
        >

          <motion.div
            className="celebration-icon"
            animate={{
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 1,
              repeat: Infinity
            }}
          >
            ❤️
          </motion.div>

          <p className="small-text">
            I knew it 😏
          </p>

          <h1>
            Good choice, beautiful.
          </h1>

          <p className="celebration-text">
            Looks like we're on the same page. ❤️
            <br />
            But I have a few more questions for you...
          </p>

          <motion.button
            className="start-button"
            whileHover={{
              scale: 1.05
            }}
            whileTap={{
              scale: 0.95
            }}
            onClick={() => onAnswer(question.yesText)}
          >
            Continue 😏
          </motion.button>

        </motion.div>

      </div>
    );
  }

  return (
    <div className="quiz-page">

      <motion.div
        className="quiz-card dodging-card"
        initial={{
          opacity: 0,
          scale: 0.95
        }}
        animate={{
          opacity: 1,
          scale: 1
        }}
        transition={{
          duration: 0.4
        }}
      >

        <div className="question-header">

          <span>
            Question {questionNumber} of {totalQuestions}
          </span>

          <motion.span
            animate={{
              scale: [1, 1.15, 1]
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity
            }}
          >
            ❤️
          </motion.span>

        </div>

        <div className="progress-container">

          <motion.div
            className="progress-bar"
            initial={{
              width: 0
            }}
            animate={{
              width: `${progress}%`
            }}
            transition={{
              duration: 0.5
            }}
          />

        </div>

        <motion.p
  className="question-nickname"
  initial={{
    opacity: 0,
    y: 10
  }}
  animate={{
    opacity: 1,
    y: 0
  }}
  transition={{
    delay: 0.1
  }}
>
  {question.nickname}
</motion.p>

        <motion.h2
          className="question-title"
          initial={{
            opacity: 0,
            y: 15
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            delay: 0.15
          }}
        >
          {question.question}
        </motion.h2>

        <p className="dodging-hint">
          Choose wisely... 😏
        </p>

        <div
          className="dodging-stage"
          ref={stageRef}
        >

          <motion.button
            className="yes-button"
            whileHover={{
              scale: 1.05
            }}
            whileTap={{
              scale: 0.95
            }}
            onClick={handleYes}
          >
            {question.yesText}
          </motion.button>

          <motion.button
            ref={noButtonRef}
            className="no-button"
            animate={{
              x: noPosition.x,
              y: noPosition.y
            }}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 25
            }}
            onPointerEnter={moveNoButton}
            onPointerDown={(event) => {
              event.preventDefault();
              moveNoButton();
            }}
          >
            {question.noText}
          </motion.button>

        </div>

        <p className="escape-message">
          {escapeCount === 0
            ? "Try clicking NO... if you can 😂"
            : `Nice try 😈 (${escapeCount} escape${
                escapeCount === 1 ? "" : "s"
              })`}
        </p>

        <button
          className="skip-button"
          onClick={() => onAnswer("No / skipped")}
        >
          Okay, I'll skip this one
        </button>

      </motion.div>

    </div>
  );
}

export default DodgingQuestion;
