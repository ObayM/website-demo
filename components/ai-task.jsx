'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Brain, Eye, Hand, ChevronDown, ChevronUp } from 'lucide-react'

const components = [
  {
    title: 'Intelligent Task Execution (Brain)',
    icon: Brain,
    description: 'Powered by LLM with RAG and embeddings for context-aware decision making.',
    details: 'Interprets user instructions, formulates action sequences, and adapts based on real-time feedback.'
  },
  {
    title: 'Screen Reader (Eyes)',
    icon: Eye,
    description: 'Uses YOLO-based deep learning models for UI component detection.',
    details: 'Processes textual and graphical data, enabling accurate interpretation of screen content.'
  },
  {
    title: 'Physical Interface (Hands)',
    icon: Hand,
    description: 'Simulates human interaction with the computer through mouse and keyboard control.',
    details: 'Executes commands with precision, ensuring seamless interaction across applications.'
  }
]

export default function AITaskAutomation() {
  const [expandedIndex, setExpandedIndex] = useState(null)

  return (
    <div className="text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">AI-Powered Task Automation</h1>
        <div className="space-y-6">
          {components.map((component, index) => (
            <motion.div
              key={index}
              className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="flex items-center justify-between cursor-pointer" onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}>
                <div className="flex items-center space-x-4">
                  <component.icon className="w-8 h-8 text-purple-300" />
                  <h2 className="text-2xl font-semibold">{component.title}</h2>
                </div>
                {expandedIndex === index ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
              </div>
              <p className="mt-2 text-purple-200">{component.description}</p>
              {expandedIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 text-sm text-purple-100"
                >
                  {component.details}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

