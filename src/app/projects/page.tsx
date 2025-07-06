import type { Metadata } from 'next'
import { projects } from '@/lib/data/projects'
import { ProjectCard } from '@/components/ui/project-card'

export const metadata: Metadata = {
  title: 'Projects | Data Engineer Portfolio',
  description: 'Explore my data engineering projects, from real-time pipelines to analytics platforms.',
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      <div className="max-w-7xl mx-auto section-padding py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My Projects
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive showcase of data engineering projects that demonstrate expertise 
            in building scalable, reliable, and performant data solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Technologies Summary */}
        <div className="mt-20 bg-white dark:bg-gray-700 rounded-xl p-8 shadow-sm border border-gray-200 dark:border-gray-600">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
            Technologies Used Across Projects
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {['Python', 'Scala', 'SQL', 'Java'].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Big Data</h3>
              <div className="flex flex-wrap gap-2">
                {['Spark', 'Kafka', 'Airflow', 'Hadoop'].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Cloud</h3>
              <div className="flex flex-wrap gap-2">
                {['AWS', 'GCP', 'Azure', 'Snowflake'].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Analytics</h3>
              <div className="flex flex-wrap gap-2">
                {['Tableau', 'dbt', 'MLflow', 'Grafana'].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
