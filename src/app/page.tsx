import { Hero } from '@/components/sections/hero'
import { About } from '@/components/sections/about'
import { Skills } from '@/components/sections/skills'
import { FeaturedProjects } from '@/components/sections/featured-projects'
import { Resume } from '@/components/sections/resume'
import { Contact } from '@/components/sections/contact'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <FeaturedProjects />
      <Resume />
      <Contact />
    </>
  )
}
