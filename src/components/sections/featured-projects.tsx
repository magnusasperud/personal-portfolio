'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'
import { ExternalLink, Github, TrendingUp } from 'lucide-react'
import { projects } from '@/lib/data/projects'

// Individual project card component with image handling
function FeaturedProjectCard({ project, index }: { project: any, index: number }) {
  const [imageError, setImageError] = useState(false)

  return (
    <motion.div
      key={project.id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="bg-gray-50 dark:bg-gray-700 rounded-xl overflow-hidden shadow-sm border border-gray-200 dark:border-gray-600 hover:shadow-md transition-shadow duration-300"
    >
      {/* Project Image */}
      <div className="h-48 bg-gradient-to-br from-blue-100 to-indigo-200 dark:from-blue-900/30 dark:to-indigo-900/30 relative overflow-hidden">
        {!imageError ? (
          <Image
            src={project.image}
            alt={`${project.title} project screenshot`}
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 1024px) 100vw, 50vw"
            onError={() => setImageError(true)}
          />
        ) : (
          // Fallback when image is not found
          <div className="w-full h-full flex items-center justify-center">
            <TrendingUp className="h-16 w-16 text-blue-600 dark:text-blue-400 opacity-50" />
          </div>
        )}
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>

      {/* Project Content */}
      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            {project.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            {project.description}
          </p>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech: string) => (
            <span
              key={tech}
              className="px-3 py-1 bg-white dark:bg-gray-600 text-gray-700 dark:text-gray-200 rounded-full text-sm font-medium border border-gray-300 dark:border-gray-500"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-4 py-4 border-t border-gray-200 dark:border-gray-600">
          {Object.entries(project.metrics).map(([key, value]) => (
            <div key={key} className="text-center">
              <div className="text-sm font-semibold text-gray-900 dark:text-white capitalize">
                {key}
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400">
                {String(value)}
              </div>
            </div>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3 pt-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <Github className="h-4 w-4" />
            <span className="text-sm">Code</span>
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
              <span className="text-sm">Demo</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export function FeaturedProjects() {
  const featuredProjects = projects.filter(project => project.featured)

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A showcase of impactful data engineering projects that solve real-world problems
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <FeaturedProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* View All Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="/projects"
            className="inline-flex items-center bg-blue-600 dark:bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-200"
          >
            View All Projects
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
