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

## ⚙️ Setup rapide

1. **Cloner le repo**
2. **Installer les dépendances**
   - Frontend : `cd frontend && npm install`
   - Backend : `cd backend && npm install`
   - ML service : `cd ml-service && pip install -r requirements.txt` (à créer)
3. **Entraîner le modèle ML**
   - `cd ml-service && python train.py`
4. **Lancer en local**
   - `docker-compose up --build`

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

**Projet prêt à l’emploi pour portfolio ou entretien technique !**
