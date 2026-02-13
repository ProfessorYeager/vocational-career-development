# Vocational Career Development (VCD) Platform

A professional, mobile-first web application designed for high school CTE Career Development courses (Automotive + Medical Assisting). This platform is currently being piloted with a Semester 2 Career Development class to streamline curriculum delivery and tracking.

## 🚀 Features

- **Unit-based Curriculum**: 60-day course structure organized into logical units.
- **Daily Deliverables**: Clear instructions, rationale, and submission guidelines for every day.
- **Artifact Tracking**: Stay on top of required pass/fail deliverables.
- **AI Policy**: Integrated guidance on responsible AI use in the workplace.
- **Responsive Design**: Optimized for mobile devices used in the classroom.
- **Automated Grading & Reporting**:
  - **Daily Batch Processing**: An **n8n** workflow connects to email and **Google Sheets** to automatically log submissions, mark grades (on time/late/missing), and track completion.
  - **Weekly Insights**: A separate Monday morning batch process generates student progress reports, highlighting who needs intervention and why.

## 🛠 Tech Stack

- **Frontend**: React + Vite (Fast, modern UI)
- **Styling**: Vanilla CSS (Professional, custom design system)
- **Icons**: Lucide React
- **Backend / Automation**: n8n + Google Sheets (Automated grading and reporting workflows)

## 📦 Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Development Server**:
   ```bash
   npm run dev
   ```

3. **Build for Production**:
   ```bash
   npm run build
   ```

## 🌐 Deployment to GitHub Pages

This project is configured to deploy to GitHub Pages.

1. **Deploy Script**:
   ```bash
   npm run deploy
   ```
   This command builds the project and pushes the `dist` folder to the `gh-pages` branch.

## 📄 License
This project is for educational use.

