# SPROUT: Smart Agriculture Robot

[![Arduino](https://img.shields.io/badge/Arduino-00979D?style=for-the-badge&logo=Arduino&logoColor=white)](https://www.arduino.cc/)
[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)

## Overview

**Sprout** is an innovative agricultural robot designed to automate and optimize essential farming operations, including **plowing**, **seed sowing**, and **irrigation**. Powered by an Arduino microcontroller and integrated with IoT and Bluetooth connectivity, Sprout enables smart, data-driven farming practices aimed at improving efficiency, reducing manual labor, and conserving natural resources.

This project demonstrates the fusion of **robotics**, **embedded systems**, and **web technologies** to create an affordable and scalable solution for smart agriculture. Sprout provides both local Bluetooth control via a mobile application and remote monitoring through a Next.js + Node.js dashboard, allowing farmers to operate and supervise their farms seamlessly.

---

## Key Features

- **Automated Plowing**: Motorized blades prepare the soil uniformly for optimal crop growth
- **Seed Sowing System**: Mechanized seed dispenser ensures uniform depth and spacing
- **Smart Irrigation**: Automated water pump operates based on real-time soil moisture data
- **Bluetooth Remote Control**: Enables wireless control through a mobile application
- **Web-Based Dashboard**: Built with Next.js and Node.js for real-time data visualization and analytics
- **Sensor Integration**: Collects data on soil moisture, motor status, and battery health
- **Scalable and Modular Design**: Allows future integration of additional modules such as pesticide sprayers or fertilization units

---

## System Architecture

### Hardware Components

| Component | Description |
|-----------|-------------|
| **Arduino Uno** | Central control unit managing motors, sensors, and communication modules |
| **Bluetooth Module (HC-05/HC-06)** | Facilitates remote operation and data exchange |
| **Motor Driver (L293D)** | Controls the direction and speed of DC motors |
| **DC Motors** | Drive movement and operate field mechanisms |
| **Water Pump** | Automates irrigation based on sensor readings |
| **Sensors** | Includes soil moisture and environmental sensors for feedback control |
| **Battery Unit** | Rechargeable power supply with voltage monitoring |

### Software Components

- **Arduino Firmware (C/C++)**: Embedded control logic for motors, sensors, and Bluetooth communication
- **Web Dashboard (React + TypeScript)**: Real-time monitoring interface with data visualization
  - Built with Vite for fast development and optimized production builds
  - shadcn/ui components for modern, accessible UI
  - Recharts for performance metrics and analytics visualization
  - Responsive design for desktop and mobile viewing

---

## Functional Workflow

```mermaid
graph LR
    A[Initialization] --> B[Remote Operation]
    B --> C[Data Collection]
    C --> D[Automation]
    D --> E[Monitoring]
    E --> C
```

1. **Initialization**: Arduino configures communication, sensors, and control parameters
2. **Remote Operation**: Bluetooth app sends commands (move, plow, irrigate) to Arduino
3. **Data Collection**: Sensors continuously record soil and operational data
4. **Automation**: Irrigation and seed sowing occur automatically based on preset thresholds
5. **Monitoring**: Real-time data is transmitted to the dashboard for visualization and logging

---

## Experimental Results

Field experiments demonstrated Sprout's efficiency across key agricultural operations:

| Metric | Result |
|--------|--------|
| **Plowing Efficiency** | Covered 1000 m² in ~42 minutes, improving soil aeration by 28% |
| **Seed Sowing Accuracy** | Achieved 97% accuracy in seed placement with consistent spacing |
| **Irrigation Optimization** | Reduced water consumption by 42% through sensor-based control |
| **Battery Performance** | Operated for 3.5 hours per charge with stable power delivery |

These results confirm Sprout's **reliability**, **precision**, and suitability for small to medium-scale farming operations.

---

## Project Structure

```
SPROUT/
│
├── dashboard/                     # Web Dashboard (React + Vite + TypeScript)
│   ├── src/
│   │   ├── components/            # React components
│   │   │   ├── dashboard/         # Dashboard-specific components
│   │   │   └── ui/                # Reusable UI components (shadcn/ui)
│   │   ├── pages/                 # Application pages
│   │   ├── hooks/                 # Custom React hooks
│   │   ├── lib/                   # Utility functions
│   │   └── assets/                # Images and static assets
│   ├── public/                    # Public static files
│   ├── package.json               # Dependencies and scripts
│   ├── vite.config.ts             # Vite configuration
│   ├── tailwind.config.ts         # Tailwind CSS configuration
│   └── tsconfig.json              # TypeScript configuration
│
├── sprout.ino                     # Main Arduino sketch (C/C++)
└── README.md                      # Project documentation
```

---

## Tools and Technologies

### Hardware
- **Microcontroller**: Arduino Uno
- **Communication**: Bluetooth (HC-05/HC-06), Serial Communication

### Software
- **Programming Languages**: C/C++ (Arduino), TypeScript, JavaScript
- **Frontend Framework**: React 18 with Vite
- **UI Components**: shadcn/ui, Radix UI
- **Styling**: TailwindCSS
- **Charts & Visualization**: Recharts
- **State Management**: TanStack Query (React Query)
- **Routing**: React Router DOM
- **Development Tools**: Arduino IDE, VS Code, Vite

---

## Getting Started

### Prerequisites

- Arduino IDE installed
- Node.js (v18 or higher) and npm installed
- Bluetooth-enabled mobile device

### Hardware Setup

1. Connect components according to the pin configuration:
   - Motor Driver (L293D) to pins 8, 9, 10, 11
   - Additional controls to pins 6, 7
2. Upload `sprout.ino` to Arduino Uno using Arduino IDE
3. Pair Bluetooth module with your mobile device

### Software Setup

#### Arduino Firmware
```bash
# Open sprout.ino in Arduino IDE
# Select Board: Arduino Uno
# Select Port: [Your Arduino Port]
# Click Upload
```

#### Web Dashboard
```bash
# Navigate to dashboard directory
cd dashboard

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

The dashboard will be available at `http://localhost:5173`

---

## Future Enhancements

Sprout's architecture supports further expansion toward a fully autonomous and AI-driven system. Potential future upgrades include:

- **AI and Machine Learning**: Predictive irrigation, crop disease detection, and adaptive control
- **GPS-Based Navigation**: Automated path planning and field coverage
- **Cloud Integration**: Remote access and analytics using AWS IoT or Google Cloud IoT
- **Solar-Powered Operation**: Sustainable energy integration for continuous field use
- **Advanced Sensors**: Soil nutrient and pH analysis for precision agriculture
- **Swarm Robotics**: Multi-unit collaboration for large-scale farming

---

## Contributors

<table>
  <tr>
    <td align="center">
      <b>Varsheni Dillibabu</b><br>
      <sub>RA2311026010736</sub>
    </td>
    <td align="center">
      <b>Kaveen Krithik Kandan</b><br>
      <sub>RA2311033010019</sub>
    </td>
  </tr>
</table>

### Under the Guidance of
**Dr. R. Kayalvizhi**  
Associate Professor  
Department of Networking and Communications  
SRM Institute of Science and Technology, Kattankulathur

---

## License

This project is developed as part of academic research at SRM Institute of Science and Technology.

---

## Contact

For queries and collaboration opportunities, please reach out to the contributors through their institutional email addresses.

---

<div align="center">
  <b>Built for Smart Agriculture</b>
</div>
