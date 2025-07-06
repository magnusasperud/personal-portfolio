'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { personalInfo } from '@/lib/data/personal-info'

export function About() {
  const [imageError, setImageError] = useState(false)

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Passionate about transforming data into actionable insights and building scalable solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Professional Photo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Main photo container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-blue-100 to-indigo-200 dark:from-blue-900/30 dark:to-indigo-900/30">
                {!imageError ? (
                  <Image
                    src="/images/profile-photo.jpg"
                    alt={`${personalInfo.name} - Data Engineer`}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  // Fallback placeholder until photo is uploaded
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl font-bold text-blue-600 dark:text-blue-400 opacity-50 mb-4">
                        {personalInfo.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <p className="text-blue-600 dark:text-blue-400 font-medium">Photo Coming Soon</p>
                    </div>
                  </div>
                )}
                {/* Gradient overlay for better text contrast if needed */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>
              
              {/* Floating decorative elements */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-500 dark:bg-blue-400 rounded-full opacity-80 shadow-lg"></div>
              <div className="absolute -bottom-6 -right-2 w-8 h-8 bg-green-500 dark:bg-green-400 rounded-full opacity-80 shadow-lg"></div>
              <div className="absolute top-1/3 -right-8 w-6 h-6 bg-purple-500 dark:bg-purple-400 rounded-full opacity-80 shadow-lg"></div>
              <div className="absolute top-2/3 -left-6 w-4 h-4 bg-yellow-400 dark:bg-yellow-300 rounded-full opacity-70 shadow-lg"></div>
              
              {/* Professional badge */}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-800 rounded-full px-4 py-2 shadow-lg border border-gray-200 dark:border-gray-600">
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Data Engineer</span>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {personalInfo.summary}
            </p>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I specialize in designing and implementing robust data architectures that can handle 
              massive scale while maintaining reliability and performance. My experience spans across 
              various industries, from fintech to e-commerce, always focusing on delivering 
              data-driven solutions that create real business value.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Focus Areas</h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li>• Data Pipeline Engineering</li>
                  <li>• Real-time Analytics</li>
                  <li>• Cloud Data Architecture</li>
                  <li>• ML Operations</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Interests</h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li>• Open Source Projects</li>
                  <li>• Data Visualization</li>
                  <li>• Tech Communities</li>
                  <li>• Continuous Learning</li>
                </ul>
              </div>
            </div>

            <div className="pt-6">
              <a
                href="/resume"
                className="inline-flex items-center bg-blue-600 dark:bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-200"
              >
                View Resume
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
