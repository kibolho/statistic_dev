import path from "node:path";

import { DirectoryLoader } from "langchain/document_loaders/fs/directory";
import { JSONLoader } from "langchain/document_loaders/fs/json";
import { TokenTextSplitter } from "langchain/text_splitter";
import { createClient } from "redis";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { RedisVectorStore } from "langchain/vectorstores/redis";

export const redis = createClient({
  url: "redis://127.0.0.1:6379",
});

export const redisVectorStore = new RedisVectorStore(
  new OpenAIEmbeddings({openAIApiKey: process.env.OPENAI_API_KEY}),
  {
    indexName: 'videos-embeddings',
    redisClient: redis,
    keyPrefix: 'videos:'
  }
);