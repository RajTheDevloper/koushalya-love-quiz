import { motion } from "framer-motion";

function QuestionCard({
  question,
  questionNumber,
  totalQuestions,
  onAnswer
}) {
  const progress =
    (questionNumber / totalQuestions) * 100;

  return (
    <div className="quiz-page">

      <motion.div
        className="quiz-card"
        initial={{
          opacity: 0,
          x: 80
        }}
        animate={{
          opacity: 1,
          x: 0
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
            delay: 0.15,
            duration: 0.4
          }}
        >
          {question.question}
        </motion.h2>

        <div className="options-container">

          {question.options.map((option, index) => (

            <motion.button
              key={index}
              className="option-button"

              initial={{
                opacity: 0,
                y: 20
              }}

              animate={{
                opacity: 1,
                y: 0
              }}

              transition={{
                delay: 0.1 + index * 0.08,
                duration: 0.35
              }}

              whileHover={{
                scale: 1.02
              }}

              whileTap={{
                scale: 0.97
              }}

              onClick={() => onAnswer(option)}
            >

              <span className="option-number">
                {String.fromCharCode(65 + index)}
              </span>

              <span>
                {option}
              </span>

            </motion.button>

          ))}

        </div>

      </motion.div>

    </div>
  );
}

export default QuestionCard;