import { motion } from "framer-motion";

function FinalScreen({ answers, onRestart }) {
  return (
    <main className="final-page">

      <div className="final-background">
        <span>❤️</span>
        <span>💕</span>
        <span>✨</span>
        <span>💖</span>
        <span>🌹</span>
        <span>❤️</span>
        <span>✨</span>
      </div>

      <motion.div
        className="final-card"
        initial={{
          opacity: 0,
          scale: 0.8,
          y: 30
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0
        }}
        transition={{
          duration: 0.7,
          type: "spring",
          stiffness: 150
        }}
      >

        <motion.div
          className="final-heart"
          animate={{
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity
          }}
        >
          ❤️
        </motion.div>

        <p className="final-small-text">
          You made it to the end...
        </p>

        <h1>
          And the winner is...
        </h1>

        <h2>
          YOU & ME ❤️
        </h2>

        <p className="final-message">
          Thank you for playing my little game.
          <br />
          But honestly, I didn't need a quiz
          <br />
          to know you're my favorite person.
        </p>

        <div className="answer-summary">
          <p>
            You answered <strong>{answers.length}</strong> questions.
          </p>

          <p>
            And somehow you still like me. 😏
          </p>
        </div>

        <motion.button
          className="restart-button"
          whileHover={{
            scale: 1.05
          }}
          whileTap={{
            scale: 0.95
          }}
          onClick={onRestart}
        >
          Play again ❤️
        </motion.button>

      </motion.div>

    </main>
  );
}

export default FinalScreen;
