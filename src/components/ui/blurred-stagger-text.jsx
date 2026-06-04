import React from 'react'
// Motion library — imported from framer-motion (already installed; same lib as "motion/react").
import { motion } from 'framer-motion'

const NBSP = ' '

// HextaUI "BlurredStagger" — adapted to JSX and made scroll-triggered (whileInView).
export const BlurredStagger = ({ text = '', className, once = true }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.02 },
    },
  }

  const letterAnimation = {
    hidden: { opacity: 0, filter: 'blur(10px)' },
    show: { opacity: 1, filter: 'blur(0px)' },
  }

  return (
    <motion.span
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount: 0.3 }}
      className={className}
      aria-label={text}
    >
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          variants={letterAnimation}
          transition={{ duration: 0.3 }}
          className="inline-block"
          aria-hidden="true"
        >
          {char === ' ' ? NBSP : char}
        </motion.span>
      ))}
    </motion.span>
  )
}
