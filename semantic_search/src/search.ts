import { redis,redisVectorStore } from "./redis-store"

async function search(){
  redis.connect()
  const response = await redisVectorStore.similaritySearchWithScore(
    "Qual o conceito de algoritmo?",
    5
  )
  console.log(response)
  redis.disconnect()
}

search()