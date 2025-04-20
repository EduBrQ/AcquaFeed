# 🦐 AquaFeed – Shrimp Feed Management System

[![Angular](https://img.shields.io/badge/Angular-16+-dd0031?logo=angular&logoColor=white)](https://angular.io/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Status](https://img.shields.io/badge/status-in%20development-orange)](#)
[![Made with ❤️](https://img.shields.io/badge/made%20with-%E2%9D%A4-red)](#)

**AquaFeed** is a modern web application built with Angular to manage and track shrimp pond feedings. Designed for aquaculture operations, the system allows precise control of rations provided to each pond, supports real-time visualization, and offers exportable reports.

---

## 🚀 Features

- 📅 Register daily feedings (morning and afternoon)
- 🧮 View total feed per day and across ponds
- 🔍 Filter by date and pond
- 📊 Dynamic chart of daily feed consumption (ApexCharts)
- 💾 Local storage persistence (no backend required for now)
- 📤 Export data to Excel and PDF
- 🌙 Dark mode interface (Angular Material)

---

## 🧰 Tech Stack

- [Angular](https://angular.io/)
- [Angular Material](https://material.angular.io/)
- [ApexCharts (ng-apexcharts)](https://apexcharts.com/)
- [xlsx](https://github.com/SheetJS/sheetjs)
- [jsPDF](https://github.com/parallax/jsPDF)

---

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/aquafeed.git
cd aquafeed

# Install dependencies
npm install

# Run the development server
ng serve
```

Open [http://localhost:4200](http://localhost:4200) in your browser.

---

## 📁 Project Structure

```
src/
├── app/
│   ├── features/
│   │   └── racao/
│   │       └── pages/
│   │           └── racao-tabela/
│   ├── core/
│   ├── shared/
│   └── app-routing.module.ts
│   └── app.component.ts
└── styles.scss
```

---

## 📈 Screenshots

> *Add screenshots or GIFs here if available to showcase the UI.*

---

## 🛠 Future Plans

- 🔐 Authentication & user roles
- ☁️ Firebase or REST API backend
- 📱 Responsive mobile layout
- 📈 Monthly/weekly report dashboards
- 🧠 AI-based feed suggestions (experimental)

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

## 💬 Feedback & Contributions

Pull requests are welcome!  
For major changes, please open an issue first to discuss what you’d like to change.

---

Made with ❤️ for aquaculture and clean code.
