# Chat com seus próprios dados

Essa aplicação [carrega dados](./src/loader.ts) de arquivos [JSON](./tmp), coloca em um banco de dados [Redis](./src/redis-store.ts) e disponibiliza para fazermos perguntas com [busca semantica](./src/search.ts).

## Setup Redis

```bash
docker run -d --name redis-stack -p 6379:6379 -p 8001:8001 redis/redis-stack:latest
```

## Modelos de pre-treinados para semantica
https://sbert.net/
