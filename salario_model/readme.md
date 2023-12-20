# Installation

pipenv install scikit-learn scipy pandas matplotib seaborn ipykernel pingouin fastapi pydantic streamlit uvicorn requests


Rodar servidor
```bash
cd salario_model
uvicorn api_salario_model:app --reload
```

Rodar Streamlit
```bash
streamlit run app_streamlit_salario.py
```