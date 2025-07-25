# 🧠 VibeArmor - Pattern-Based DSA Learning Platform

A full-stack web platform to help users master **DSA through pattern recognition**, track their progress, and get AI-powered doubt resolution. Built with **Next.js, TypeScript, MongoDB, and Tailwind CSS**, it integrates with LeetCode and offers a curated sheet to crack tech interviews efficiently.

> 🚀 Live: [vibearmor.com](https://vibearmor.com)  
> 🔗 GitHub: [github.com/rajveer-09/VibeArmor](https://github.com/rajveer-09/VibeArmor)

---

## ✨ Features

- 🔒 JWT-based Authentication with Role-Based Access
- 📚 Curated Pattern-Based DSA Sheet (e.g., Sliding Window, Binary Search on Answer)
- 📈 User Dashboard with Progress Tracking
- 🤖 AI-Powered Doubt Support (LeetCode problem-specific)
- 🌐 LeetCode Data Integration for external stats
- ⚡ CDN-Cached APIs + Vercel Deployment
- 🛡️ Zod-based Validation for API Contracts

---

## 🛠️ Tech Stack

| Tech       | Usage                         |
|------------|-------------------------------|
| Next.js    | Fullstack framework (SSR + API routes) |
| TypeScript | Type safety                   |
| MongoDB    | NoSQL Database (Mongoose ODM) |
| Tailwind   | Utility-first CSS framework   |
| Zod        | Runtime input validation      |
| JWT        | Auth token handling           |
| OpenAI/Gemini | AI assistant for doubt-solving |
| Vercel     | Hosting & CDN caching         |

---

## 🧑‍💻 Roles & Contributions

> 👥 Team project (3 members). This repo represents overall contributions.

- 🧩 Designed MongoDB models (User, Problem, Progress)
- ✅ Zod schema validation for all routes
- 📘 Created DSA Sheet with pattern-based LeetCode links
- 📊 Integrated progress tracking on dashboard
- 🧠 Helped design AI input prompts and validation flow

---
## 🗂️ DSA Pattern Sheet
The platform covers 15+ common DSA patterns:

Two Pointers

Sliding Window

Binary Search on Answer

Monotonic Stack/Queue

Top K Elements

Backtracking

…and more

Each pattern includes curated LeetCode problems with solution tracking.

## 🚀 Deployment
Hosted on Vercel

CDN Caching for static assets and API responses via Cache-Control headers

Cache Invalidation handled via webhook on admin update

## 📊 Progress Tracking
Each user’s dashboard displays:

Solved problems per pattern

Overall completion stats

Streaks & LeetCode stats integration

## 👨‍💼 Admin Panel
Admins can:

Add/Edit/Delete DSA problems

Trigger cache invalidation for updated problems

Manage users (RBAC)

## 🤝 License
MIT License. Feel free to fork and use for learning.

## 🙋‍♂️ Authors
Rajveer Sharma

Team Collaborators: @teammate1, @teammate2 (will mention actual GitHub handles...)

## 💬 Feedback / Suggestions
Found a bug? Want to contribute a new pattern? Open an issue or drop a pull request!


