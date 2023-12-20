from pydantic import BaseModel
from fastapi import FastAPI
import uvicorn
import joblib
import pandas as pd

# Criar uma instancia do FastAPI
app = FastAPI()

# Criar uma classe que terá os dados do request body para a API
class request_body(BaseModel):
  tempo_na_empresa: int
  nivel_na_empresa: int
  
# Carregar o modelo para realizar as predições
modelo_salario = joblib.load('./modelo_salario.pkl')

@app.post('/predict')
def predict(data: request_body):
  #Preparar os dados para predição
  input_feature = {
    "tempo_na_empresa": data.tempo_na_empresa,
    "nivel_na_empresa": data.nivel_na_empresa
  }
  pred_df = pd.DataFrame(input_feature, index=[1])

  # Realizar a predição
  y_pred = modelo_salario.predict(pred_df)[0].astype(float)
  
  return {'salario_em_reais': y_pred.tolist()}