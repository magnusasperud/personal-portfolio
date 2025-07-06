<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# Personal Data Engineer Portfolio Website

This is a modern, professional portfolio website built with Next.js, TypeScript, and Tailwind CSS, specifically designed for data engineers to showcase their expertise, projects, and experience.

## Project Structure

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion for smooth animations
- **Icons**: Lucide React for consistent iconography
- **Charts**: Recharts for data visualizations

## Key Features

- **Responsive Design**: Mobile-first approach with breakpoints for all devices
- **Modern Animations**: Smooth scroll animations and micro-interactions
- **Professional Sections**: Hero, About, Skills, Projects, Resume, Blog, Contact
- **Data Visualization**: Interactive charts for project metrics and analytics
- **SEO Optimized**: Proper meta tags, structured data, and performance optimization
- **Dark/Light Mode Ready**: CSS variables for easy theme switching

## Development Guidelines

### Component Structure
- Use functional components with TypeScript
- Implement proper prop types and interfaces
- Follow the established design system and color palette
- Use Framer Motion for animations with proper performance considerations

### Styling Guidelines
- Use Tailwind CSS classes with semantic naming
- Follow the established spacing, typography, and color systems
- Implement responsive design patterns with mobile-first approach
- Use CSS custom properties for theme consistency

### Data Management
- Personal and professional data is stored in `src/lib/data.ts`
- Update this file to customize content for different users
- Maintain type safety for all data structures

### Performance
- Optimize images and assets for web
- Use Next.js Image component for automatic optimization
- Implement proper lazy loading for sections and components
- Minimize bundle size and follow Core Web Vitals guidelines

## Customization Notes

When helping users customize this portfolio:

1. **Personal Information**: Guide them to update `src/lib/data.ts`
2. **Styling**: Help with Tailwind customizations and theme modifications
3. **Content**: Assist with writing professional copy and technical descriptions
4. **Projects**: Help structure project data with proper metrics and technologies
5. **Resume**: Guide the creation of professional resume layouts
6. **Blog**: Assist with blog post structure and technical writing

## Technical Focus Areas

This portfolio is specifically designed for data engineers, so emphasize:
- Data pipeline architectures and ETL/ELT processes
- Big data technologies (Spark, Hadoop, Kafka, etc.)
- Cloud platforms (AWS, GCP, Azure) and infrastructure
- Analytics and business intelligence tools
- Machine learning operations and model deployment
- Database design and optimization
- Real-time streaming and batch processing

## Code Quality

- Maintain consistent code formatting and structure
- Use meaningful variable and function names
- Implement proper error handling and loading states
- Follow React and Next.js best practices
- Ensure accessibility standards are met
