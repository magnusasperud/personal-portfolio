export const projects = [
  {
    id: 1,
    title: "Real-time Fraud Detection Pipeline",
    description: "Built a real-time fraud detection system processing millions of transactions daily with sub-second latency.",
    image: "/projects/pipeline.jpg",
    technologies: ["Python", "Kafka", "Spark Streaming", "MLflow", "AWS"],
    features: [
      "Real-time stream processing with Kafka and Spark",
      "ML model deployment with MLflow and automated retraining",
      "Monitoring dashboard with custom metrics",
      "99.9% uptime with automated failover"
    ],
    metrics: {
      performance: "Processing 1M+ transactions/hour",
      accuracy: "94% fraud detection accuracy",
      latency: "Sub-second response time"
    },
    github: "https://github.com/yourusername/fraud-detection",
    demo: "https://fraud-detection-demo.com",
    featured: true
  },
  {
    id: 2,
    title: "Customer Analytics Data Warehouse",
    description: "Designed and implemented a modern data warehouse for customer analytics supporting business intelligence and ML workloads.",
    image: "/projects/data-center.jpg",
    technologies: ["Snowflake", "dbt", "Airflow", "Python", "Tableau"],
    features: [
      "Dimensional modeling with slowly changing dimensions",
      "Automated data quality testing with dbt",
      "Self-service analytics with Tableau",
      "Data lineage and governance framework"
    ],
    metrics: {
      scale: "500GB+ data processed daily",
      users: "50+ business users",
      reports: "100+ automated reports"
    },
    github: "https://github.com/yourusername/analytics-warehouse",
    featured: true
  },
  {
    id: 3,
    title: "IoT Sensor Data Platform",
    description: "Built scalable IoT data platform processing sensor data from thousands of devices with real-time analytics.",
    image: "/projects/iot.jpg",
    technologies: ["Python", "InfluxDB", "Grafana", "MQTT", "Docker"],
    features: [
      "Time-series data ingestion and storage",
      "Real-time alerting and monitoring",
      "Custom dashboard for device management",
      "Predictive maintenance models"
    ],
    metrics: {
      devices: "10K+ connected devices",
      dataPoints: "1B+ data points/day",
      alerts: "99.5% alert accuracy"
    },
    github: "https://github.com/yourusername/iot-platform",
    featured: false
  }
]
