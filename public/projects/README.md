# Project Images Directory

This directory contains images for your portfolio projects. Each project image should be named to match the image path specified in your `projects.ts` data file.

## Current Project Images Needed

Based on your `projects.ts` file, you need these images:

### 1. Fraud Detection Project
- **Filename**: `pipeline.jpg`
- **Path**: `/projects/pipeline.jpg`
- **Description**: Real-time Fraud Detection Pipeline

### 2. Data Warehouse Project
- **Filename**: `data-center.jpg`
- **Path**: `/projects/data-center.jpg`
- **Description**: Customer Analytics Data Warehouse

### 3. IoT Platform Project
- **Filename**: `iot.jpg`
- **Path**: `/projects/iot.jpg`
- **Description**: IoT Sensor Data Platform

## Image Requirements

### Technical Specs
- **Format**: JPG, JPEG, or PNG
- **Dimensions**: 800x400 pixels or similar aspect ratio (2:1 works well)
- **File size**: Keep under 500KB for optimal loading
- **Quality**: High resolution but web-optimized

### Content Guidelines
- **Architecture diagrams**: Show data flow, system components
- **Dashboard screenshots**: Display key metrics and visualizations
- **Code snippets**: Clean, well-formatted code examples
- **Infrastructure diagrams**: Cloud architecture, pipeline flow
- **Analytics charts**: Data visualizations, performance metrics

## Image Ideas by Project Type

### Data Pipeline Projects
- System architecture diagrams
- Data flow charts
- Monitoring dashboards
- Performance metrics
- Pipeline status screens

### Analytics Projects
- Dashboard screenshots
- Data visualizations
- Report examples
- Chart galleries
- Business metrics

### ML/AI Projects
- Model performance charts
- Confusion matrices
- Feature importance plots
- Prediction dashboards
- Training curves

### Infrastructure Projects
- Cloud architecture diagrams
- Deployment pipelines
- Monitoring screens
- Resource utilization charts
- Network diagrams

## Tools for Creating Project Images

### Diagramming Tools
- **Draw.io** (free, web-based)
- **Lucidchart** (professional diagrams)
- **Figma** (design and diagrams)
- **Excalidraw** (hand-drawn style)

### Screenshot Tools
- Use your actual project dashboards
- Grafana/Tableau/Power BI screenshots
- Terminal/IDE screenshots with code
- Web application interfaces

### Design Tools
- **Canva** (easy templates)
- **Adobe Photoshop** (professional editing)
- **GIMP** (free alternative)

## Fallback Behavior

If an image isn't found, the project card will show:
- A placeholder icon (trending chart)
- "Project Image" text
- The same background gradient
- No broken image errors

## Adding New Projects

When you add new projects to `projects.ts`:

1. Add the image path in the project data:
   ```typescript
   {
     id: 4,
     title: "New Project",
     image: "/projects/new-project.jpg", // Add this line
     // ... other project data
   }
   ```

2. Add the corresponding image file to this directory with the exact filename.

## Tips for Great Project Images

1. **Tell a story**: Show the impact and functionality
2. **Keep it clean**: Avoid cluttered screenshots
3. **Use consistent style**: Similar color schemes and layouts
4. **Highlight key features**: Focus on the most impressive aspects
5. **Show scale**: Include metrics, numbers, or data volumes
6. **Professional appearance**: Clean, well-organized visuals
