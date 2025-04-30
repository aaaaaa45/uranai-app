from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# フロントとの通信許可
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/question")
async def read_question(request: Request):
    data = await request.json()
    name = data.get("name", "")
    question = data.get("consultation", "")
    return {"message": f"{name}さん、ようこそ！！質問内容は「{question}」ですね！！"}
