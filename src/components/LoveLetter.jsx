import { motion } from "framer-motion";

function LoveLetter({ onRestart }) {
  return (
    <main className="love-page">

      <div className="love-particles">
        <span>❤️</span>
        <span>💕</span>
        <span>✨</span>
        <span>💖</span>
        <span>🌹</span>
        <span>✨</span>
        <span>❤️</span>
        <span>💕</span>
      </div>

      <motion.div
        className="love-card"
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

        <motion.div
          className="love-seal"
          initial={{
            scale: 0,
            rotate: -20
          }}
          animate={{
            scale: 1,
            rotate: 0
          }}
          transition={{
            delay: 0.4,
            type: "spring"
          }}
        >
          💌
        </motion.div>

        <p className="love-label">
          A little message from your Raju
        </p>

        <h1>
          For my Koushalya ❤️
        </h1>

        <div className="love-letter">

          <p>
            Hey baby,
          </p>

          <p>
            If you reached this far, I hope you know
            that this little game was just an excuse
            for me to remind you how special you are to me.
          </p>

          <p>
            You are my <strong>muddhu</strong>,
            my <strong>chinnamma</strong>,
            my <strong>bangari</strong>,
            and all the other names I call you
            when I just can't stop smiling because of you.
          </p>

          <p>
            Sometimes I call you <strong>odve</strong>,
            sometimes <strong>magne</strong>,
            sometimes <strong>kandha</strong>...
            but underneath every name is the same thing:
            <strong> I love you.</strong>
          </p>

          <p>
            I don't know what the future has planned for us,
            but I do know one thing.
          </p>

          <p className="highlight-line">
            I want many more silly moments,
            annoying arguments, laughs,
            hugs, and memories with you. ❤️
          </p>

          <p>
            So this wasn't really a quiz.
          </p>

          <p className="final-love-line">
            It was just my little way of saying...
            <br />
            <strong>
              I'm really lucky to have you, Koushalya.
            </strong>
          </p>

        </div>

        <motion.div
          className="love-signature"
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          transition={{
            delay: 2
          }}
        >
          Forever your Raju ❤️
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

export default LoveLetter;
