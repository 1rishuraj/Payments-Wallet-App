# 💰 Payments Wallet App

A **full-stack Paytm Wallet** clone built with **Next.js (TypeScript)**, **Express (TypeScript)**, **PostgreSQL**, and **Prisma ORM**, featuring:

* OnRamp transactions (bank to wallet)
* Peer-to-peer (P2P) wallet transfers
* Transaction history
* UI state management with **Jotai** atoms
* CI/CD via Docker & GitHub Actions, deployed to AWS EC2

---

## 🚀 Features

* 🔐 **Authentication**

  * Secure login/signup with NextAuth.js

* 🏦 **/dashboard**

  * Displays authenticated user dashboard

* 💸 **/transfer**

  * Simulate bank-to-wallet OnRamp transaction
  * View current wallet balance

* 👥 **/p2ptransfer**

  * Transfer Paytm Wallet balance to another user
  * List of registered users

* 📜 **/transactions**

  * View complete OnRamp and P2P transaction history



---

## ⚙️ System Architecture

### 🧠 Architecture Overview

* **Frontend/Backend:** Next.js (TypeScript) app styled with Tailwind CSS
* **Webhook Server:** Node JS - Express (TypeScript) server receives simulated bank callbacks for OnRamp success
* **Database:** PostgreSQL accessed through Prisma ORM
* **Monorepo:** Managed with Turborepo
* **CI/CD:** Docker + GitHub Actions for builds and deployment to EC2
* **State Management:** `Jotai` atoms for global state (e.g., sidebar highlight)


### 🔄 OnRamp Flow (Bank to Wallet)

1. User clicks "Add Money"
2. Frontend sends payment request to a simulated bank API
3. To complete the requested payment, bank API hits a **webhook server**. 
4. Webhook securely updates wallet balance using Express (TypeScript) + Prisma

> ⚠️ Webhook server ensures **idempotent**, asynchronous updates under load, preventing frontend inconsistencies

### 🔐 P2P Transfer Atomicity

To prevent double withdrawal when a user clicks transfer multiple times:
- Used PostgreSQL's `FOR UPDATE` locking on `Balance` table for sender row.
- Ensures atomic transactions using `prisma.$transaction`. 

### 🎨 Jotai State Management

* Global state atoms using `Jotai` in `packages/store`
* Active sidebar element tracking for dynamic UI feedback

---

## 🛠️ Tech Stack

| Tech              | Role                              |
| ----------------- | --------------------------------- |
| Next.js (TypeScript)| Fullstack frontend/backend        |
| Tailwind CSS      | UI styling                        |
| Node.js + Express (TypeScript) | Webhook server                    |
| PostgreSQL        | Database                          |
| Prisma ORM        | Type-safe DB client               |
| Jotai             | Global state management (sidebar) |
| Turborepo         | Monorepo manager                  |
| GitHub Actions    | Continuous Integration & Delivery |
| Docker            | Containerization                  |
| AWS EC2           | Cloud deployment                  |

---

## 📂 Folder Structure

```
paytm-wallet-clone/
├── apps/
│   ├── user-app/           # Next.js (TypeScript) frontend
│   └── webhook-server/     # Express (TypeScript) webhook backend
├── packages/
│   ├── db/                 # Prisma schema + migrations
│   └── store/              # Jotai atoms for global state
├── .github/
│   └── workflows/          # CI/CD GitHub Actions configs
├── docker/                
│   └── Dockerfile.user     # Dockerfile for user app
└── turbo.json              # Turborepo config file
```

---

## 👨‍💻 Author

**Rishu Raj**

* 📧 [rishuraj1702@gmail.com](mailto:rishuraj1702@gmail.com)
* 🐦 [@\_rishu\_raj](https://x.com/_rishu_raj)
* 💻 [github.com/1rishuraj](https://github.com/1rishuraj)

---

Ready to deploy and scale. Built for performance, usability, and security.