'use client'

import { motion } from 'framer-motion'
import { Download } from 'lucide-react'
import { experience } from '@/lib/data/experience'
import { education, certifications } from '@/lib/data/education'
import { personalInfo } from '@/lib/data/personal-info'

export function Resume() {
  const handleDownloadResume = () => {
    // Try to download the PDF, or show a helpful message if it doesn't exist
    const link = document.createElement('a')
    link.href = '/resume/resume.pdf'
    link.download = 'resume.pdf'
    
    // Check if the file exists by trying to fetch it
    fetch('/resume/resume.pdf', { method: 'HEAD' })
      .then(response => {
        if (response.ok) {
          // File exists, proceed with download
          document.body.appendChild(link)
          link.click()
          document.body.removeChild(link)
        } else {
          // File doesn't exist, show helpful message
          alert('PDF resume not found. Please add your resume.pdf file to the /public/resume/ directory. You can print this page as PDF as an alternative!')
        }
      })
      .catch(() => {
        // Fallback: show message if fetch fails
        alert('PDF resume not available yet. You can print this page as PDF using your browser\'s print function (Ctrl+P or Cmd+P)!')
      })
  }

  return (t'

import { motion } from 'framer-motion'
import { Download, Calendar, MapPin, Building2 } from 'lucide-react'
import { experience } from '@/lib/data/experience'
import { education, certifications } from '@/lib/data/education'
import { personalInfo } from '@/lib/data/personal-info'

export function Resume() {
  return (
    <section id="resume" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Resume
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Professional experience and educational background in data engineering
          </p>
          <a 
            href="/resume/resume.pdf" 
            download="resume.pdf"
            className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
          >
            <Download className="h-5 w-5 mr-2" />
            Download PDF Resume
          </a>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Experience */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Professional Experience</h3>
              <div className="space-y-8">
                {experience.map((job, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative pl-8 pb-8 border-l border-gray-300 last:border-l-0"
                  >
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
                    
                    <div className="bg-gray-50 p-6 rounded-xl">
                      <div className="flex flex-wrap items-start justify-between mb-4">
                        <div>
                          <h4 className="text-xl font-semibold text-gray-900">{job.title}</h4>
                          <div className="flex items-center text-blue-600 font-medium mb-2">
                            <Building2 className="h-4 w-4 mr-1" />
                            {job.company}
                          </div>
                        </div>
                        <div className="text-sm text-gray-600 flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {job.period}
                        </div>
                      </div>
                      
                      <div className="flex items-center text-gray-600 mb-3">
                        <MapPin className="h-4 w-4 mr-1" />
                        {job.location}
                      </div>
                      
                      <p className="text-gray-700 mb-4">{job.description}</p>
                      
                      <div className="mb-4">
                        <h5 className="font-semibold text-gray-900 mb-2">Key Achievements:</h5>
                        <ul className="space-y-2">
                          {job.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start text-gray-700">
                              <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {job.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Education & Certifications */}
          <div className="space-y-12">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Education</h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-xl">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{edu.degree}</h4>
                    <div className="text-blue-600 font-medium mb-2">{edu.school}</div>
                    <div className="text-sm text-gray-600 mb-3 flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {edu.period}
                    </div>
                    <div className="text-sm text-gray-600 mb-3 flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {edu.location}
                    </div>
                    <p className="text-gray-700 mb-3">{edu.description}</p>
                    <div className="text-sm">
                      <strong className="text-gray-900">Key Courses:</strong>
                      <ul className="mt-1 space-y-1">
                        {edu.courses.map((course, idx) => (
                          <li key={idx} className="text-gray-600">• {course}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Certifications</h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-xl">
                    <h4 className="font-semibold text-gray-900">{cert.name}</h4>
                    <div className="text-blue-600 text-sm font-medium">{cert.issuer}</div>
                    <div className="text-gray-600 text-sm">{cert.date}</div>
                    {cert.credentialId && (
                      <div className="text-gray-500 text-xs mt-1">
                        ID: {cert.credentialId}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
