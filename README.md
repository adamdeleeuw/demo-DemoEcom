# DemoEcom — Modern T-Shirt Storefront
*Full-featured e-commerce demo • Next.js + Tailwind • Built by Adam de Leeuw*

[![Live Demo](https://img.shields.io/badge/live-demo-brightgreen)](https://demo-demo-ecom.vercel.app/)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

---

> **Disclaimer:** This is a demo project. The buying/checkout functionality and email list sign-up are not implemented and are for UI demonstration only.

## 1. Why I Built It
Modern online stores need to be fast, beautiful, and easy to use—without the complexity of legacy platforms. DemoEcom shows how you can launch a polished, accessible, and high-performance e-commerce site in days, ready for real users and scalable for future growth.

## 2. Thought Process & Design
- **User flow:** Land → browse featured products → view product details → add to cart → checkout (≤ 2 min).
- **Design priorities:** Clean, modern UI; zero layout shift; seamless mobile/desktop experience; clear calls to action.
- **AI leverage:** Used shadcn/ui and Vercel v0 for scaffolding, then hand-crafted layouts, TypeScript contracts, and accessibility.

## 3. Tech Stack & Architecture
| Layer         | Details                                                      |
|--------------|--------------------------------------------------------------|
| **Framework**| Next.js 15 (App Router) • React 18 • TypeScript              |
| **Styling**  | Tailwind CSS • shadcn/ui • Lucide icons                      |
| **Infra**    | Deployed on Vercel; static assets in `/public/images`        |
| **CI/Dev**   | GitHub + Vercel for auto-deploy; ESLint & TypeScript checks  |

## 4. Core Features
| Feature                | Impact                                                      |
|-----------------------|------------------------------------------------------------|
| 🏠 **Hero Section**    | Instantly communicates brand and value                     |
| 🛒 **Product Catalog** | Responsive, filterable, and mobile-first                   |
| 🖼️ **Image Carousel**  | Product pages with multi-image carousel                    |
| 🛍️ **Shopping Cart**   | Add/remove items, quantity control, persistent state       |
| 💳 **Checkout Demo**   | Simulated checkout flow, ready for integration             |
| 📱 **Mobile First**    | Fully responsive, touch-friendly navigation                |
| 🎨 **Brand Palette**   | Clean, modern, and accessible color scheme                |
| ♿ **Accessibility**    | Semantic HTML, ARIA labels                                |

## 5. Quick Start (Local)
```bash
git clone https://github.com/adamdeleeuw/demo-DemoEcom.git
cd demo-ecom
npm install
npm run dev # http://localhost:3000
```

## 6. Future Improvements 📈
- Optimize images to improve LCP (big issue) and properly sizing images is estimated to save 18,687 KiB, which would be a massive upgrade.
- Add real payment integration (Stripe, PayPal)
- Product reviews and ratings
- User authentication and order history
- Incremental Static Regeneration for instant content updates
- Cypress e2e for full cart + checkout flow
- SEO meta auto-generation from product data
- Cloudinary CDN for on-the-fly image transforms
- PWA manifest + offline cart support

## 7. What I Learned 🧠
- 🚀 **E-Commerce UX:** Built a modern storefront with a focus on performance, accessibility, and conversion.
- 🛠️ **Modern Frontend Stack:** Used Next.js, React, Tailwind, and shadcn/ui for rapid, scalable UI development.
- 🧩 **Component-Driven Architecture:** Practiced modular design for easy expansion and code reuse.
- 🤝 **Collaboration & Version Control:** Used Git and GitHub for source control and CI/CD with Vercel.

## 8. License

Released under the MIT License—free for learning, adaptation, and remixing.

## About Me

I’m Adam de Leeuw, a Computer Engineering student at UBC. I build product-quality demos and production apps fast by blending low-overhead tech with AI tooling, then document the process for teammates and clients.

[Connect with me on LinkedIn](https://www.linkedin.com/in/adamjdl/)
