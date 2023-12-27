import { ChatOpenAI } from "langchain/chat_models/openai";
import { PromptTemplate } from "langchain/prompts";
import { RetrievalQAChain } from 'langchain/chains';
import { redis, redisVectorStore } from "./redis-store";

const openAIChat = new ChatOpenAI({
  openAIApiKey: process.env.OPENAI_API_KEY,
  modelName: "gpt-3.5-turbo",
  temperature: 0.3,
});

const prompt = new PromptTemplate({
  template: `
    Você responde perguntas sobre programação.
    O usuário está assistindo um curso com várias aulas.
    Use o conteúdo das transcrições das aulas abaixo para responder a pergunta do usuário.
    Se a resposta não for encontrada nas transcrições, responda que você não sabe, não tente inventar uma resposta.
    
    Se possível, inclua exemplos de código.
    
    Transcrições:
    {context}
    
    Pergunta: 
    {question}
  `.trim(),
  inputVariables: ["context", "question"],
});

const chain = RetrievalQAChain.fromLLM(openAIChat, redisVectorStore.asRetriever(3), {
  prompt,
  returnSourceDocuments: true,
  verbose: true
})

async function main(){
  await redis.connect()
  const response = await chain.call({
    query: 'Me explique o conceito de Aggregate Root no DDD'
  })
  console.log(response)
  await redis.disconnect()
}

main()