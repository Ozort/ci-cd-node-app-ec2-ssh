# Node.js CI/CD to EC2 using GitHub Actions (SSH-Based Deployment)

This repository demonstrates how to deploy a **Node.js (Express) application** to an **AWS EC2 instance** using **GitHub Actions with a GitHub-hosted runner** and **SSH-based deployment**.

The goal of this project is to showcase a **realistic, beginner-to-intermediate CI/CD workflow** commonly used in production environments.

---

## 🧠 Project Overview

In this setup, GitHub Actions runs on GitHub-hosted infrastructure and connects securely to an EC2 instance via SSH to deploy the application.

```text
GitHub Repository
      ↓
GitHub Actions (GitHub-hosted runner)
      ↓
SSH into EC2 instance
      ↓
Install dependencies
      ↓
Restart Node.js app with PM2
```

This approach does **not** use a self-hosted runner. The EC2 server is only responsible for running the application.

---

## 🚀 Technologies Used

* Node.js
* Express.js
* GitHub Actions
* AWS EC2 (Ubuntu)
* PM2 (process manager)
* SSH

---

## 📂 Project Structure

```text
.
├── index.js
├── package.json
├── package-lock.json
├── .github/
│   └── workflows/
│       └── deploy.yml
├── .gitignore
└── README.md
```

---

## ⚙️ Application Details

* The app is a simple Express server
* Designed as a backend service for CI/CD demonstration

Example route:

```js
app.get("/", (req, res) => {
  res.send("Node app is running");
});
```

---

## 🔄 CI/CD Workflow Summary

1. Code is pushed to the `main` branch
2. GitHub Actions workflow is triggered
3. A GitHub-hosted runner:

   * Connects to the EC2 instance via SSH
   * Pulls the latest code from GitHub
   * Installs dependencies using `npm install`
   * Restarts the application using PM2

The deployment is fully automated once the workflow is configured.

---

## 🔐 Required GitHub Secrets

The following secrets must be added to the GitHub repository:

* `EC2_HOST` – Public IP or DNS of the EC2 instance
* `EC2_USER` – SSH user (e.g. `ubuntu`)
* `EC2_SSH_KEY` – Private SSH key for EC2 access

---

## 🌍 Accessing the Application

After a successful deployment, the app can be accessed via:

```text
http://<EC2_PUBLIC_IP>:3000
```

(Port 3000 must be allowed in the EC2 security group.)

---

## ✅ Key Learning Outcomes

* CI/CD pipelines using GitHub Actions
* SSH-based deployment to EC2
* Running Node.js apps in production with PM2
* Structuring a Node project for automated deployment

---

## 🔍 Related Project

This repository is part of a broader learning effort that also includes:

* **CI/CD using a self-hosted GitHub Actions runner on EC2**

Both projects demonstrate different but valid deployment strategies.

---

## 📌 Author

**Bobby Abu**

---

## 📝 Notes

This project focuses on deployment automation rather than frontend development.
