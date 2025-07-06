# Personal Data Engineer Website

A modern, professional portfolio website for showcasing data engineering expertise, projects, and experience.

## Prerequisites

Before you can run this project, you need to install Node.js and npm:

1. **Download Node.js**: Visit [nodejs.org](https://nodejs.org/) and download the LTS version
2. **Install Node.js**: Run the downloaded installer and follow the installation steps
3. **Verify Installation**: Open a new terminal and run:
   ```bash
   node --version
   npm --version
   ```

## Getting Started

Once Node.js is installed, run the following commands:

```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Resume Section**: Professional CV/resume display
- **About Page**: Personal and professional background
- **Projects Showcase**: Interactive project gallery with data visualizations
- **Blog**: Technical blog posts and articles
- **Contact**: Contact form and social media links

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Charts**: Recharts for data visualizations
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## Project Structure

```
src/
├── app/                    # App Router pages
│   ├── about/             # About page
│   ├── blog/              # Blog section
│   ├── projects/          # Projects showcase
│   ├── resume/            # Resume/CV page
│   └── contact/           # Contact page
├── components/            # Reusable UI components
│   ├── ui/               # Base UI components
│   ├── layout/           # Layout components
│   └── sections/         # Page sections
├── lib/                  # Utility functions and data
└── public/               # Static assets
```

## Customization

1. **Personal Information**: Update the data in `src/lib/data.ts`
2. **Styling**: Modify the Tailwind configuration in `tailwind.config.js`
3. **Content**: Edit the page components in `src/app/`
4. **Assets**: Add your images and files to `public/`

## Deployment

This project is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with one click

## License

MIT License - feel free to use this template for your own portfolio.
