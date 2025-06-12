# Donnie’s Portfolio · Built with Nuxt 3

![Nuxt](https://img.shields.io/badge/Nuxt-3.0-green?logo=nuxtdotjs)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-blue?logo=tailwindcss)
![CI/CD](https://img.shields.io/github/actions/workflow/status/dhart83/portfolio/ci.yml?label=CI%2FCD&logo=githubactions)
![License](https://img.shields.io/badge/license-MIT-lightgrey)

> ✨ A clean, modern portfolio built with [Nuxt 3](https://nuxt.com), [Tailwind CSS](https://tailwindcss.com), and deployed via [Docker](https://www.docker.com/) to AWS EC2.

---

## 🌐 Live Site

🔗 [https://donniehartman.com](https://donniehartman.com)  
_Deployed via GitHub Actions + Docker + AWS EC2_

---

## 📁 Project Structure

```
portfolio/
├── .github/            # GitHub workflows (CI/CD)
├── assets/             # Images, fonts, global styles
├── components/         # Vue components (HeroSection, ProjectCard, etc.)
├── layouts/            # App layout with navbar and footer
├── pages/              # Each route/view (index.vue, about.vue, etc.)
├── public/             # Static assets
├── server/             # Nuxt server API (optional)
├── .dockerignore       # Docker ignore file
├── .gitignore          # Git ignore file
├── app.vue             # Nuxt app entry
├── Dockerfile          # Dockerfile for containerized deployment
├── nuxt.config.ts      # Nuxt app configuration
├── package.json        # Nuxt dependencies and scripts
├── README.md           # Information about clone, build, run, deploy, etc.
├── tailwind.config.ts  # Tailwind style configuration
└── tsconfig.json       # Typescript configuration
```

---

## 🚀 Quick Start

### 1. Clone the repository

```bash
git clone https://github.com/dhart83/portfolio.git
cd portfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start development server

```bash
npm run dev
```

🔗 Visit `http://localhost:3000`

---

## 📦 Production

### 1. Build the app:

```bash
npm run build
```

### 2. Preview production build locally:

```bash
npm run preview
```

---

## 🐳 Docker Usage

Build and run using Docker:

```bash
# Build Image
docker build -t portfolio-image .

# Run Container
docker run -d -p 3000:3000 --name portfolio-app portfolio-image
```

---

## ⚙️ CI/CD Deployment

Deployed via GitHub Actions to an AWS EC2 instance.

```yml
.github/workflows/ci.yml
```

Key features:

- Push to `master` triggers deployment
- Sets up SSH keys
- SSH into EC2 instance
- Stops and removes old Docker image and container
- Clears directory of old repo
- Clones the latest code
- Rebuilds Docker container

---

## 🧪 Tech Stack

- [Nuxt 3](https://nuxt.com) – Vue-powered fullstack framework
- [Tailwind CSS](https://tailwindcss.com) – Utility-first styling
- [Docker](https://www.docker.com/) – Containerized deployment
- [GitHub Actions](https://github.com/features/actions) – CI/CD
- [AWS EC2](https://aws.amazon.com/ec2/) – Cloud hosting

---

## ✨ Customization

Want to use this as your own portfolio?

- Replace content in `pages/index.vue`, `components/`, etc.
- Update `nuxt.config.ts` with your meta tags and fonts
- Swap colors in `tailwind.config.ts`

---

<!-- ## 📷 Preview

<p align="center">
  <img src="https://yourdomain.com/screenshot.png" alt="Donnie Portfolio Screenshot" width="80%" />
</p>

--- -->

## 📬 Contact

Reach out via [LinkedIn](https://linkedin.com/in/donniehartman) or [hartman_donnie@hotmail.com](mailto:hartman_donnie@hotmail.com)

---

## 📝 License

MIT License © 2025 Donnie Hartman
