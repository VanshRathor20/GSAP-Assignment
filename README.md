### 🚗 ScrollDrive – GSAP Scroll Animation Project
- An interactive scroll-based storytelling animation built using React, GSAP, ScrollTrigger, and Tailwind CSS.

- This project demonstrates advanced scroll-driven animations where a car moves horizontally while statistic cards appear sequentially using a GSAP timeline.
  
---
## 🌐 Live Demo
- 🔗 Live URL: https://scrolldrive.netlify.app/
---

## ✨ Features
- 🚗 Smooth horizontal car movement on scroll

- 📌 Pinned scroll section using ScrollTrigger

- 🎯 Timeline-based sequential card animations

- 🎨 Tailwind CSS styling

- ⚛️ Component-based React structure

- 🧠 Clean animation synchronization

---
## 🛠️ Tech Stack
- React
  
- GSAP

- ScrollTrigger

- Tailwind CSS

- Vite

---
## 📁 Project Structure
```
├── 📁 Components
│   ├── 📄 BlueCard.jsx
│   ├── 📄 Car.jsx
│   ├── 📄 GreyCard.jsx
│   ├── 📄 OrangeCard.jsx
│   ├── 📄 ScrollSection.jsx
│   ├── 📄 StatsCard.jsx
│   └── 📄 YellowCard.jsx
├── 📁 assets
│   ├── 🖼️ car.png
│   └── 🖼️ react.svg
├── 📄 App.jsx
├── 🎨 index.css
└── 📄 main.jsx
```
---
## 🚀 How It Works

- The ScrollSection component is pinned using ScrollTrigger.

- A GSAP timeline controls:

- The car’s horizontal movement.

- Sequential appearance of statistic cards.

- Animations are synchronized using scrub and timeline positioning.

- Proper layering (z-index) ensures the car visually sits above the road strip.

---
## 📦 Installation

1. Clone the repository:
```
git clone https://github.com/your-username/scrolldrive.git
```
  
```
cd scrolldrive
```

2. Install dependencies:
```
npm install
```

3. If installing manually, make sure these are installed:
```
npm install gsap
```

```
npm install @gsap/react
```

4. Run the development server:
```
npm run dev
```
---

## 🎯 Why Mention GSAP?

- It’s not part of React by default

- Recruiters can see you know external dependency setup

- Makes your project look complete & professional
---
## 🎯 Learning Highlights

- This project helped strengthen understanding of:

- Scroll-based animations

- Timeline synchronization

- GSAP with React (useGSAP)

- Component-level animation control

- Layering & positioning with Tailwind
---
## 📸 Preview

- Scroll to see the car drive across the screen while cards animate in sequence.
---
## 💡 Future Improvements

- Add responsive breakpoints

- Add easing variations

- Improve performance optimization

- Add smooth scroll library integration

---
## 👤 Author
- Vansh Rathor
- ScrollDrive
