# SmartPredict MLOps

Projet complet de prédiction de prix avec architecture MLOps moderne.

## 🚀 Description

SmartPredict MLOps est une application fullstack qui permet de prédire un prix à partir de données (ex: surface d’un bien). Elle intègre un modèle ML, une API Python, un backend NestJS, un frontend Next.js, le tout orchestré avec Docker et CI/CD.

## 🏗️ Architecture

```
smartpredict-mlops/
│
├── frontend/              # Next.js (UI)
├── backend/               # NestJS (API proxy)
├── ml-service/            # FastAPI + modèle ML
├── docker/                # Dockerfiles
├── .github/
│   └── workflows/         # CI/CD GitHub Actions
├── README.md
└── docker-compose.yml
```

## 🔁 Flux de données

Utilisateur → Next.js (frontend) → NestJS (backend) → FastAPI (ml-service) → modèle ML → retour UI


## ⚙️ Étapes de lancement détaillées

1. **Cloner le repo**
   ```bash
   git clone <url-du-repo>
   cd smartpredict-mlops
   ```

2. **Installer les dépendances**
   - **Frontend** :
     ```bash
     cd frontend
     npm install
     cd ..
     ```
   - **Backend** :
     ```bash
     cd backend
     npm install
     cd ..
     ```
   - **ML service** :
     ```bash
     cd ml-service
     pip install -r requirements.txt
     cd ..
     ```

3. **Entraîner le modèle ML**
   ```bash
   cd ml-service
   python train.py
   cd ..
   ```

4. **Lancer tous les services avec Docker Compose**
   ```bash
   docker-compose up --build
   ```

5. **Tester l’API ML directement**
   - Accéder à : [http://localhost:8000/predict?surface=75](http://localhost:8000/predict?surface=75)

6. **Accéder à l’application**
   - Frontend : [http://localhost:3000](http://localhost:3000)
   - Backend API : [http://localhost:3001/predict?surface=75](http://localhost:3001/predict?surface=75)

## 🧪 Test API ML

- `GET http://localhost:8000/predict?surface=75`

## 🚦 CI/CD

- GitHub Actions : `.github/workflows/ci.yml` (build/test auto)

## 📸 Screenshots

*(À ajouter après lancement)*

## 💼 Pour les recruteurs

- Fullstack (Next.js + NestJS)
- ML (Python, scikit-learn)
- DevOps (Docker, CI/CD)
- Microservices

## 🔥 Pour aller plus loin

- Authentification JWT
- Monitoring (MLflow)
- Déploiement cloud (AWS)
- Tests E2E (Playwright)

---
