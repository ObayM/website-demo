'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Database, Brain, Cog, TestTube, BarChart } from 'lucide-react'

const steps = [
  {
    title: 'Data Collection',
    icon: Database,
    description: 'Collect diverse dataset of user interfaces for training and evaluation.',
  },
  {
    title: 'Model Training',
    icon: Brain,
    description: 'Train YOLO models for screen reading and LLM for decision-making.',
  },
  {
    title: 'System Integration',
    icon: Cog,
    description: 'Integrate screen reader, LLM, and physical interface components.',
  },
  {
    title: 'Testing',
    icon: TestTube,
    description: 'Evaluate system through real-world scenarios and track metrics.',
  },
  {
    title: 'Evaluation',
    icon: BarChart,
    description: 'Assess task success rate, error rate, processing speed, and accessibility impact.',
  },
]

export default function Procedure() {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <div className="text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-center">Development Procedure</h1>
        <div className="relative">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex items-center mb-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-white rounded-full opacity-20"></div>
                <step.icon className="w-12 h-12 text-white relative z-10" />
              </div>
              <div className="ml-6">
                <h2 className="text-2xl font-semibold">{step.title}</h2>
                <p className="mt-2 text-blue-100">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <motion.div
                  className="absolute left-6 w-0.5 bg-white bg-opacity-50"
                  style={{ top: '3rem', bottom: '-1rem' }}
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: hoveredIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

