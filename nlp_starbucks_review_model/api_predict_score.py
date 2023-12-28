from pydantic import BaseModel
from fastapi import FastAPI
import uvicorn
import joblib
  
# Criar uma instancia do FastAPI
app = FastAPI(title='API to predict score for a review',)

# Criar uma classe que terá os dados do request body para a API
class request_body(BaseModel):
  review: str
  
# Carregar o modelo para realizar as predições
review_model = joblib.load('./nlp_starbucks_review_model/review_model.pkl')

@app.post('/predict', tags=["Score"], name="Score", description='Predict the score for a review', response_description='Score from 1 to 5', response_model=int)
def predict(data: request_body):
  #Preparar os dados para predição
  input_feature = [[data.review]]
  
  # Realizar a predição
  y_pred = review_model.predict(input_feature)[0].astype(int)
  return {'score': y_pred.tolist()}