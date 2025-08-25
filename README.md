# CI/CD Pipeline with Jenkins, Docker & Kubernetes

This project demonstrates a CI/CD pipeline for a Node.js app using:

- Jenkins for automation
- Docker for containerization
- Kubernetes for deployment

## 🔧 Tech Stack

- Jenkins (Pipeline as Code)
- Docker & DockerHub
- Kubernetes (minikube, k3s, GKE, etc.)
- Node.js (Express App)

## 🛠️ Steps

1. Jenkins builds Docker image and pushes to DockerHub
2. Kubernetes pulls image and deploys container
3. Accessible via LoadBalancer service

## 📁 Folder Structure

- `app/`: Node.js source code
- `docker/`: Dockerfile
- `k8s/`: Kubernetes manifests
- `Jenkinsfile`: CI/CD pipeline

## 🐳 DockerHub Repo

Push images to: `<registry>`

## 🖥️ Demo Output

```bash
curl http://<k8s-external-ip>/
> Hello from CI/CD App!
