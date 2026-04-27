export const projectsData = [
  {
    /*prj_1 */
    id: "automated-motor-qc",
    title: "Automated Quality Control Rig for DC Motors",
    description: "Built a smart hardware testing system to automatically identify defective, overheating motors before they reach production.",
    tags: ["IoT", "ESP32", "Hardware Automation", "Sensors", "Quality Control"],
    github: "https://github.com/Bipinkrvr/Automated-Motor-QC-Test-Rig",
    linkedin: "https://www.linkedin.com/posts/bipinkrvr_esp32-iot-qualitycontrol-activity-7389325489292652544-HMji?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE9nUx8B9pSDoZpCQMBGvSV3MRFOu7UMIT8",
    live: "",
    details: {
      problem: "Defective DC motors often exhibit abnormal thermal behavior (overheating) even under no-load conditions, causing failures in final production assemblies.",
      solution: "Engineered an automated ESP32-based rig that uses a DHT11 sensor and predictive linear regression models to identify overheating motors in real-time, safely cutting power via a relay when anomalies are detected.",
      features: [
        "Real-Time Monitoring: Uses a DHT11 sensor for motor casing temperature.",
        "Variable Speed Input: Reads speed setting from a potentiometer with hardware smoothing.",
        "Data-Driven Anomaly Detection: Compares real-time temperature against a predictive model.",
        "Safety Cutoff & Manual Reset: Automatically disconnects motor power if an anomaly occurs."
      ],
      techStack: ["C++", "Python", "Jupyter Notebook", "scikit-learn", "pandas"],
      hardware: ["ESP32", "DHT11 Sensor", "L298D Motor Driver", "5V Relay Module", "SSD1306 OLED Display", "Passive Buzzer"],
      media: {
        images: ["/assets/prj_1/motor-qc-architecture.png", "/assets/prj_1/motor-qc-wiring.png"],
        video: "https://www.youtube.com/embed/MMl0Gv_sykc?si=f9QX0cwRHIYjwwge"
      }
    }
  },
  {
    /*prj_2 */
    id: "smart-water-tank",
    title: "Smart Water Tank IoT System",
    description: "Engineered a complete, production-ready system to automatically monitor and control industrial/home water tanks.",
    tags: ["IoT", "ESP32", "Flutter", "Firebase", "Relay Control"],
    github: "https://github.com/Bipinkrvr/smart-water-tank-iot-project",
    linkedin: "https://www.linkedin.com/posts/bipinkrvr_iot-flutter-firebase-activity-7386482224306593792-FfVU?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE9nUx8B9pSDoZpCQMBGvSV3MRFOu7UMIT8",
    live: "",
    details: {
      problem: "Manual monitoring of industrial or residential water tanks leads to overflow wastage, unexpected empty tanks, and inefficient pump management.",
      solution: "Developed a full-stack IoT solution using an ESP32 and Ultrasonic sensors for hardware control, seamlessly integrated with a custom Flutter mobile app and Firebase backend for remote monitoring and automation.",
      features: [
        "Real-time Monitoring: Live water level percentage streamed directly to the mobile app.",
        "Dual-Mode Control: Auto mode (ON at 10%, OFF at 95%) and Manual mode for remote toggling.",
        "Push Notifications: Instant alerts for 'Tank Full' and 'Tank Empty' sent via FCM.",
        "Secure Authentication: 3-level security utilizing Hardware API Keys and Database Rules."
      ],
      techStack: ["Flutter", "Dart", "Firebase Realtime DB", "Cloud Functions", "Node.js"],
      hardware: ["ESP32", "Ultrasonic Sensor (HC-SR04)", "5V Relay", "OLED Display"],
      media: {
        images: [ "/assets/prj_2/smart-water-tank-device-image.jpg","/assets/prj_2/ESP32-Connection-Diagram-Model.png","/assets/prj_2/flowchart.png", "/assets/prj_2/dashboard-screen.jpg","/assets/prj_2/setting-screen.jpg","/assets/prj_2/motor-history-screen.jpg","/assets/prj_2/tank-level-history-screen.jpg","/assets/prj_2/app-drawer-screen.jpg"],
        video: "https://www.youtube.com/embed/u7SZ2H8gCTA?si=Z3mcMeoHErbE1lcT"
      }
    }
  },

  /*prj_3 */
  {
    id: "iot-phone-sensor",
    title: "Upcycled IoT Sensor Hub",
    description: "Innovatively repurposed an abandoned smartphone into a live environmental sensor hub.",
    tags: ["IoT", "Python", "Sensors", "Hardware Upcycling"],
    github: "https://github.com/Bipinkrvr/IoT-Phone-Sensor-Dashboard",
    linkedin: "https://www.linkedin.com/posts/bipinkrvr_iot-upcycling-android-ugcPost-7385323312396128256-hKtu?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE9nUx8B9pSDoZpCQMBGvSV3MRFOu7UMIT8",
    live: "",
    details: {
      problem: "Building reliable IoT monitoring systems often requires purchasing expensive, specialized microcontrollers and sensor arrays, contributing to e-waste.",
      solution: "Upcycled an abandoned Android phone into a powerful, real-time IoT sensor hub. It reads onboard sensors using Termux and streams data to a web dashboard running in a virtual Ubuntu environment on the same device.",
      features: [
        "Real-Time Data Streaming: Pushes sensor telemetry to the dashboard using Server-Sent Events (SSE).",
        "Dual-Environment Architecture: Termux logger streams raw data, Ubuntu serves the UI to bypass CORS.",
        "Interactive Charts: Plotly.js implementation with combined/separate axis views and PNG exports.",
        "Resilient Connection: Auto-detects connection loss and gracefully auto-reconnects."
      ],
      techStack: ["Python", "Flask", "Termux", "Ubuntu (proot)", "Plotly.js", "Bash"],
      hardware: ["Repurposed Android Smartphone"],
      media: {
        images: ["/assets/prj_3/architecture.png","/assets/prj_3/screenshot-dashboard.png","/assets/prj_3/screenshot-livedata.png","/assets/prj_3/phone-sensor-dashboard.png"],
        video: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7385323312396128256?compact=1"
      }
    }
  },
  /*prj_4 */
  {
    id: "power-plant-dashboard",
    title: "Power Plant Maintenance Dashboard",
    description: "Developed an interactive business intelligence dashboard to track power plant equipment health.",
    tags: ["Power BI", "Data Analytics", "DAX", "Maintenance"],
    github: "",
    linkedin: "https://www.linkedin.com/posts/bipinkrvr_powerbi-dataanalytics-businessintelligence-activity-7344231893871017984-hJDX?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE9nUx8B9pSDoZpCQMBGvSV3MRFOu7UMIT8",
    live: "",
    details: {
      problem: "Facility engineers lacked clear visual insights into machine downtime, maintenance logs, and equipment failure points, leading to unoptimized repair schedules.",
      solution: "Developed a 3-page interactive Power BI dashboard utilizing custom DAX measures to analyze equipment downtime, maintenance types, and dynamically optimize engineer assignments.",
      features: [
        "Multi-Page Navigation: Executive Summary, Detailed Maintenance Log, and Insight KPI Page.",
        "Interactive Filtering: Cross-filtering slicers for Maintenance Types, Equipment IDs, and Dates.",
        "Advanced DAX Implementation: Custom measures utilizing SUM, AVERAGE, TOPN, VAR, and DIVIDE.",
        "KPI Tracking: Visualized metrics for total downtime percentages and frequent maintenance interventions."
      ],
      techStack: ["Power BI", "DAX", "Data Analytics", "Business Intelligence"],
      media: {
        images: ["/assets/prj_4/page1.png","/assets/prj_4/page2.png","/assets/prj_4/page3.png"],
        video: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7344231858290716674?compact=1"
      }
    }
  },
 /*prj_5 */
      {
    id: "residential-solar-autocad",
    title: "Residential Solar Power System Design",
    description: "Designed a complete Residential Solar Power System using industry-standard AutoCAD Electrical.",
    tags: ["AutoCAD", "Solar Power", "Electrical Design", "SLD"],
    github: "",
    linkedin: "https://www.linkedin.com/posts/bipinkrvr_electricalengineering-autocadelectrical-finalyearproject-activity-7344994391503085571-GMRE?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE9nUx8B9pSDoZpCQMBGvSV3MRFOu7UMIT8",
    live: "",
    details: {
      problem: "Deploying a residential solar array requires precise, compliant electrical schematics and load calculations to ensure safe integration with the main house panel.",
      solution: "Drafted a complete, professional 6-sheet AutoCAD Electrical design package outlining power flow, system components, and safety compliance for a full home solar setup.",
      features: [
        "Professional Drafting: Created a comprehensive 6-sheet technical documentation package.",
        "Schematic Design: Detailed Single Line Diagram (SLD) outlining power flow.",
        "Component Specification: Integrated 4 Solar Panels, Inverter, and 2x 13.6kWh Battery Storage.",
        "Engineering Calculations: Included a full Bill of Materials (BoM) and precise load calculations."
      ],
      techStack: ["AutoCAD Electrical", "Excel", "System Design"],
      media: {
        images: ["/assets/prj_5/sld-1.png","/assets/prj_5/legend_sheet-1.png","/assets/prj_5/notes-1.png","/assets/prj_5/BOM-1.png","/assets/prj_5/load calculation-1.png","/assets/prj_5/summary-1.png"],
      }
    }
  },
  /*prj_6 */
      {
    id: "vlsi-digital-design",
    title: "VLSI Digital Logic & FSM Design",
    description: "Designed and simulated foundational digital circuits (Logic Gates, Adders) and a Finite State Machine (FSM).",
    tags: ["VLSI", "Verilog", "ModelSim", "Digital Logic", "FSM"],
    github: "https://github.com/Bipinkrvr/CODTECH-TASK-2",
    linkedin: "https://www.linkedin.com/posts/bipinkrvr_i-have-completed-my-tasks-given-by-codtech-activity-7216369727969918976-bttI?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE9nUx8B9pSDoZpCQMBGvSV3MRFOu7UMIT8",
    live: "",
    details: {
      problem: "Foundational understanding of digital systems requires rigorous modeling and verification of logic gates, combinational circuits, and state machines prior to physical silicon fabrication.",
      solution: "Designed, implemented, and successfully simulated a complete suite of foundational digital circuits and a 3-state Finite State Machine (FSM) using Verilog HDL and ModelSim.",
      features: [
        "Logic Gate Implementation: Designed modules for all fundamental gates (AND, OR, NOT, NAND, etc.).",
        "Combinational Circuits: Engineered and simulated Half Adders, Full Adders, and Multiplexers.",
        "FSM Architecture: Designed a 3-state Finite State Machine with strict transition logic.",
        "Simulation & Debugging: Utilized ModelSim for extensive waveform analysis to verify correctness."
      ],
      techStack: ["Verilog HDL", "ModelSim", "VLSI Digital Design"],
      media: {
        videos: ["https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7216369508880392194?compact=1" ,"https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7216369652514328577?compact=1"]
      }
    }
  },
  /*prj_7 */
    {
    id: "explore-jharkhand",
    title: "Explore Jharkhand Web Platform",
    description: "Developed a responsive promotional website highlighting regional industries, mineral wealth, and tourism.",
    tags: ["HTML", "CSS", "UI/UX", "Responsive Design"],
    github: "https://github.com/Bipinkrvr/Bipin_LetsUpgradeFrontendSprint",
    linkedin: "",
    live: "https://bipin-lets-upgrade-frontend-sprint.vercel.app/",
    details: {
      problem: "A lack of engaging, modern digital brochures to effectively promote the state of Jharkhand's natural beauty, industrial strength, and mineral wealth.",
      solution: "Designed and developed a single-page, fully responsive promotional web platform utilizing modern CSS layout techniques, interactive grids, and a thematic design system.",
      features: [
        "CSS-Only Interactivity: Implemented clever click-to-reveal accordions using hidden radio buttons.",
        "Thematic Design System: Deep forest greens and golden accents paired with Poppins typography.",
        "Responsive Grid Layouts: Smart application of CSS Grid and Flexbox for adaptive image cards.",
        "Micro-Interactions: Smooth hover animations for zooming and dynamic background overlays."
      ],
      techStack: ["HTML5", "CSS3", "UI/UX Design"],
      media: {
        video: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7349354358825730048?compact=1"
      }
    }
  },
  /*prj_8 */
  {
    id: "memorae-landing",
    title: "Memorae App Landing Page",
    description: "Built a highly animated, visually engaging landing page for a hackathon project.",
    tags: ["React", "Framer Motion", "Tailwind CSS"],
    github: "https://github.com/Bipinkrvr/memorae-landing-page",
    linkedin: "",
    live: "https://memorae-landing-page-kgou.vercel.app/",
    details: {
      problem: "Standard static landing pages fail to convey the dynamic, interactive nature of a 'mental operating system' application designed for a hackathon.",
      solution: "Engineered a vibrant, component-based React landing page featuring complex scroll animations, dynamic counters, and glassmorphism UI elements powered by Framer Motion.",
      features: [
        "Component-Based Architecture: Broken down into 14 highly reusable Next.js UI components.",
        "Advanced Scroll Animations: Features whileInView scroll triggers and dynamically stacking cards.",
        "Dynamic Counters: Utilizes Framer Motion hooks to create engaging 'count-up' statistics.",
        "Interactive Elements: Orbiting tags around phone mockups and fully interactive FAQ accordions."
      ],
      techStack: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
      media: {
        video: "https://www.youtube.com/embed/R0l2yfxx8eE?si=dv1Qlff6Gsq5tiO9"
      }
    }
  }
];