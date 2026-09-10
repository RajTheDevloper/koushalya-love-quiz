import { motion } from "framer-motion";

function MemoryLane({ onRestart }) {
  return (
    <main className="memory-page">

      <div className="memory-background">
        <span>❤️</span>
        <span>💕</span>
        <span>✨</span>
        <span>💖</span>
        <span>🌹</span>
      </div>

      <motion.div
        className="memory-card"
        initial={{
          opacity: 0,
          y: 40,
          scale: 0.9
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1
        }}
        transition={{
          duration: 0.8,
          type: "spring",
          stiffness: 120
        }}
      >

        <div className="memory-header">

          <motion.div
            className="memory-icon"
            animate={{
              scale: [1, 1.15, 1]
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity
            }}
          >
            📸
          </motion.div>

          <p className="memory-label">
            A little trip down memory lane...
          </p>

          <h1>
            Our little story ❤️
          </h1>

          <p className="memory-intro">
            Some moments are too special to forget.
            <br />
            And with you, I want many more.
          </p>

        </div>

        <div className="memory-grid">

          <motion.div
            className="memory-item"
            whileHover={{
              y: -8
            }}
          >
            <div className="memory-photo">
  <img
    src="/memory1.jpg"
    alt="A special memory of Raju and Koushalya"
  />
</div>

            <h2>
              One of my favorite memories ❤️
            </h2>

            <p>
              Add one of our favorite photos here
              and write a little memory about it.
            </p>
          </motion.div>

          <motion.div
            className="memory-item"
            whileHover={{
              y: -8
            }}
          >
            <div className="memory-photo">
  <img
    src="/memory2.jpg"
    alt="A silly moment between Raju and Koushalya"
  />
</div>

            <h2>
              That silly moment 😂
            </h2>

            <p>
              A photo, a funny story,
              or one of those moments only we understand.
            </p>
          </motion.div>

          <motion.div
            className="memory-item"
            whileHover={{
              y: -8
            }}
          >
            <div className="memory-photo">
  <img
    src="/memory3.jpg"
    alt="A future memory of Raju and Koushalya"
  />
</div>

            <h2>
              And there's more to come...
            </h2>

            <p>
              This isn't the end of our story.
              It's just another page. ❤️
            </p>
          </motion.div>

        </div>

        <motion.div
          className="memory-ending"
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          transition={{
            delay: 1
          }}
        >
          <p>
            More memories with my
            <strong> Koushalya </strong>
            coming soon... ❤️
          </p>
        </motion.div>

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
          Play our little game again 💕
        </motion.button>

      </motion.div>

    </main>
  );
}

export default MemoryLane;
