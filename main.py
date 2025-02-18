from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
from langchain_ollama import ChatOllama
from langchain_core.output_parsers import StrOutputParser
from langchain_core.prompts import ChatPromptTemplate

app = FastAPI()

# 🔹 CORS 설정 추가 (모든 출처 허용)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # 특정 도메인만 허용하려면 ["http://yourdomain.com"]
    allow_credentials=True,
    allow_methods=["*"],  # 모든 HTTP 메서드 허용
    allow_headers=["*"],  # 모든 헤더 허용
)

# Langchain Ollama 사용
llm = ChatOllama(
    model="hf.co/mradermacher/Qwen2.5-14B-Gutenberg-1e-Delta-GGUF:Q4_K_S",
    format="json",
    temperature=0,
)


@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.post("/chat")
async def chat(request: Request):
    data = await request.json()
    user_input = data.get("message", "")

    if not user_input:
        return {"response": "메시지를 입력해주세요!"}

    prompt = ChatPromptTemplate.from_messages(["{user_input}"])
    chain = prompt | llm | StrOutputParser()
    response = chain.invoke({"user_input": user_input})

    return {"response": response}


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
