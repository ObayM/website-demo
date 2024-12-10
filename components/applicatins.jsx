'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Rocket, Accessibility, Zap, Lightbulb } from 'lucide-react'

const applications = [
  {
    title: 'Productivity Tool',
    icon: Zap,
    description: 'Automate repetitive tasks across different applications and workflows.',
  },
  {
    title: 'Accessibility Aid',
    icon: Accessibility,
    description: 'Enhance interactive capabilities for visually or mobility impaired persons.',
  },
]

const futureWork = [
  {
    title: 'Dynamic Content Handling',
    icon: Rocket,
    description: 'Improve screen reader\'s ability to handle dynamic and multimedia content.',
  },
  {
    title: 'Contextual Learning',
    icon: Lightbulb,
    description: 'Integrate machine learning for personalized task automation based on user behavior.',
  },
]

export default function ApplicationsFutureWork() {
  const [activeTab, setActiveTab] = useState('applications')

  return (
    <div className="text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-center">Applications & Future Work</h1>
        <div className="flex justify-center mb-8">
          <button
            className={`px-6 py-2 rounded-l-full ${
              activeTab === 'applications' ? 'bg-white text-green-700' : 'bg-green-600'
            }`}
            onClick={() => setActiveTab('applications')}
          >
            Applications
          </button>
          <button
            className={`px-6 py-2 rounded-r-full ${
              activeTab === 'future' ? 'bg-white text-green-700' : 'bg-green-600'
            }`}
            onClick={() => setActiveTab('future')}
          >
            Future Work
          </button>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {(activeTab === 'applications' ? applications : futureWork).map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-lg"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-center mb-4">
                    <item.icon className="w-8 h-8 text-green-300 mr-3" />
                    <h2 className="text-xl font-semibold">{item.title}</h2>
                  </div>
                  <p className="text-green-100">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

