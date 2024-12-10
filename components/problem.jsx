'use client'

import { motion } from 'framer-motion'
import { AlertTriangle } from 'lucide-react'

export default function ProblemStatement() {
  return (
    <div className="text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-center">Problem Statement</h1>
        <motion.div
          className="bg-white bg-opacity-10 rounded-lg p-8 backdrop-blur-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center mb-6">
            <AlertTriangle className="w-12 h-12 text-yellow-300 mr-4" />
            <h2 className="text-2xl font-semibold">Key Challenges</h2>
          </div>
          <ul className="space-y-4 text-lg">
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              Barriers for individuals with visual or mobility impairments in digital interactions
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              Time-consuming and repetitive tasks reducing overall efficiency
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              Need for a solution that automates tasks and improves accessibility
            </motion.li>
          </ul>
        </motion.div>
      </div>
    </div>
  )
}

