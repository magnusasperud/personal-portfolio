'use client'

import { motion } from 'framer-motion'
import { Download, Calendar, MapPin, Building2 } from 'lucide-react'
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

  return (
    <section id="resume" className="py-20 bg-gray-50">
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
          <button 
            onClick={handleDownloadResume}
            className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
          >
            <Download className="h-5 w-5 mr-2" />
            Download PDF Resume
          </button>
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
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Professional Experience</h3>
              <div className="space-y-8">
                {experience.map((job, index) => (
                  <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900">{job.title}</h4>
                        <div className="flex items-center text-gray-600 mt-1">
                          <Building2 className="h-4 w-4 mr-2" />
                          <span>{job.company}</span>
                        </div>
                      </div>
                      <div className="flex flex-col sm:items-end mt-2 sm:mt-0">
                        <div className="flex items-center text-gray-500 text-sm">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{job.period}</span>
                        </div>
                        <div className="flex items-center text-gray-500 text-sm mt-1">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span>{job.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{job.description}</p>
                    
                    <div className="space-y-3">
                      <h5 className="font-medium text-gray-900">Key Achievements:</h5>
                      <ul className="space-y-2">
                        {job.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-blue-600 mr-2 mt-1">•</span>
                            <span className="text-gray-600">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mt-4">
                      <h5 className="font-medium text-gray-900 mb-2">Technologies:</h5>
                      <div className="flex flex-wrap gap-2">
                        {job.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Education & Certifications */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Education */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Education</h3>
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{edu.degree}</h4>
                      <div className="flex items-center text-gray-600 mb-2">
                        <Building2 className="h-4 w-4 mr-2" />
                        <span>{edu.school}</span>
                      </div>
                      <div className="flex items-center text-gray-500 text-sm mb-3">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{edu.period}</span>
                        <MapPin className="h-4 w-4 ml-4 mr-1" />
                        <span>{edu.location}</span>
                      </div>
                      <p className="text-gray-600 mb-3">{edu.description}</p>
                      {edu.courses && (
                        <div>
                          <h5 className="font-medium text-gray-900 mb-2">Key Courses:</h5>
                          <div className="flex flex-wrap gap-1">
                            {edu.courses.map((course) => (
                              <span
                                key={course}
                                className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm"
                              >
                                {course}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Certifications</h3>
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                      <h4 className="font-semibold text-gray-900">{cert.name}</h4>
                      <div className="text-gray-600 text-sm mt-1">{cert.issuer}</div>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-gray-500 text-sm">{cert.date}</span>
                        {cert.credentialId && (
                          <span className="text-xs text-gray-400">ID: {cert.credentialId}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
                <div className="space-y-2 text-sm">
                  <div className="text-gray-600">
                    <strong>Email:</strong> {personalInfo.email}
                  </div>
                  <div className="text-gray-600">
                    <strong>Phone:</strong> {personalInfo.phone}
                  </div>
                  <div className="text-gray-600">
                    <strong>Location:</strong> {personalInfo.location}
                  </div>
                  <div className="text-gray-600">
                    <strong>Website:</strong> {personalInfo.website}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
