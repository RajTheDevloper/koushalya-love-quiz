import { motion } from "framer-motion";

function Welcome({ onStart }) {
  return (
    <main className="welcome">

      <div className="hearts">
        <span>❤️</span>
        <span>✨</span>
        <span>💕</span>
        <span>✨</span>
        <span>❤️</span>
      </div>

      <motion.div
        className="welcome-card"
        initial={{
          opacity: 0,
          y: 30,
          scale: 0.95
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1
        }}
        transition={{
          duration: 0.7
        }}
      >

        <motion.div
          className="heart-icon"
          animate={{
            scale: [1, 1.15, 1]
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity
          }}
        >
          ❤️
        </motion.div>

        <p className="small-text">
          A little something from Raju...
        </p>

        <h1>
          Hey, Koushalya
        </h1>

        <p className="nickname">
          My baby • My odve • My muddhu ❤️
        </p>

        <p className="description">
          I made a little game for my favorite person.
          <br />
          No cheating, bangari. 😏
        </p>

        <motion.button
          className="start-button"
          whileHover={{
            scale: 1.05
          }}
          whileTap={{
            scale: 0.95
          }}
          onClick={onStart}
        >
          Start the fun ❤️
        </motion.button>

        <p className="from-text">
          — With love, Raju
        </p>

      </motion.div>

    </main>
  );
}

export default Welcome;
