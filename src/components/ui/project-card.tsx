'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { ExternalLink, Github, TrendingUp } from 'lucide-react'

interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  features: string[]
  metrics: Record<string, string>
  github: string
  demo?: string
  featured: boolean
}

interface ProjectCardProps {
  project: Project
  index?: number
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const [imageError, setImageError] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-sm border border-gray-200 dark:border-gray-600 hover:shadow-md transition-shadow duration-300 ${
        project.featured ? 'ring-2 ring-blue-200 dark:ring-blue-500/50' : ''
      }`}
    >
      {/* Project Image */}
      <div className="h-48 bg-gradient-to-br from-blue-100 to-indigo-200 dark:from-blue-900/30 dark:to-indigo-900/30 relative overflow-hidden">
        {project.featured && (
          <div className="absolute top-4 right-4 bg-blue-600 dark:bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold z-10">
            Featured
          </div>
        )}
        
        {!imageError ? (
          <Image
            src={project.image}
            alt={`${project.title} project screenshot`}
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            onError={() => setImageError(true)}
          />
        ) : (
          // Fallback when image is not found
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center">
              <TrendingUp className="h-16 w-16 text-blue-600 dark:text-blue-400 opacity-50 mx-auto mb-2" />
              <p className="text-blue-600 dark:text-blue-400 font-medium text-sm">Project Image</p>
            </div>
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
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Features */}
        <div>
          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Features</h4>
          <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
            {project.features.slice(0, 3).map((feature, idx) => (
              <li key={idx} className="flex items-start">
                <span className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                {feature}
              </li>
            ))}
            {project.features.length > 3 && (
              <li className="text-blue-600 dark:text-blue-400 text-xs font-medium">
                +{project.features.length - 3} more features
              </li>
            )}
          </ul>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-4 py-4 border-t border-gray-200 dark:border-gray-600">
          {Object.entries(project.metrics).map(([key, value]) => (
            <div key={key} className="text-center">
              <div className="text-sm font-semibold text-gray-900 dark:text-white capitalize">
                {key}
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400">
                {value}
              </div>
            </div>
          ))}
        </div>

        {/* Links */}
        <div className="flex space-x-4 pt-4">
          <a
            href={project.github}
            className="flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="h-5 w-5 mr-2" />
            Code
          </a>
          {project.demo && (
            <a
              href={project.demo}
              className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="h-5 w-5 mr-2" />
              Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}
