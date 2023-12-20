# Install Packages

```bash
pipenv install scikit-learn scipy pandas matplotlib statsmodels fastapi uvicorn pydantic pingouin seaborn ipykernel
```

Rodar servidor
```bash
cd grade_model
uvicorn api_modelo_regressao:app --reload
```