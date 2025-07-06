'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Database, TrendingUp, Zap } from 'lucide-react'
import Link from 'next/link'

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/20 dark:bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-400/20 dark:bg-indigo-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto section-padding relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight"
              >
                Data Engineer &{' '}
                <span className="gradient-text">Analytics Expert</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl"
              >
                Transforming raw data into actionable insights through scalable pipelines, 
                advanced analytics, and modern data architecture solutions.
              </motion.p>
            </div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/projects"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 text-center"
              >
                View My Work
              </Link>
              <Link
                href="/contact"
                className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 text-center"
              >
                Get In Touch
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-3 gap-6 pt-8"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">5+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">50+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">100TB+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Data Processed</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Visual Elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-6">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg glass-effect"
              >
                <Database className="h-12 w-12 text-blue-600 dark:text-blue-400 mb-4" />
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Data Pipeline</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">ETL/ELT processes</p>
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg glass-effect mt-6"
              >
                <TrendingUp className="h-12 w-12 text-green-600 dark:text-green-400 mb-4" />
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Analytics</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Business Intelligence</p>
              </motion.div>
              
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 2 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg glass-effect mt-2"
              >
                <Zap className="h-12 w-12 text-yellow-600 dark:text-yellow-400 mb-4" />
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Real-time</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Stream Processing</p>
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 3 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg glass-effect mt-4"
              >
                <div className="h-12 w-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-purple-600 dark:text-purple-400 font-bold text-xl">ML</span>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Machine Learning</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Predictive Models</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center space-y-2"
        >
          <span className="text-sm text-gray-600 dark:text-gray-400">Scroll to explore</span>
          <ChevronDown className="h-5 w-5 text-gray-400 dark:text-gray-500" />
        </motion.div>
      </motion.div>
    </section>
  )
}