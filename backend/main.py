from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from fastapi.responses import HTMLResponse

app = FastAPI()

# CORS設定（Reactなどのフロントエンドと通信するために必要）
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# POST用のリクエストモデル
class FortuneRequest(BaseModel):
    name: str
    question: str

# POSTリクエスト処理：Reactなどから占いリクエストが来たとき
@app.post("/")
def get_fortune(data: FortuneRequest):
    name = data.name
    question = data.question
    return {
        "fortune": f"{name}さん、ようこそ！！質問内容は「{question}」ですね！！"
    }

# GETリクエスト処理：ブラウザでアクセスされたとき用
@app.get("/", response_class=HTMLResponse)
def root():
    return "<h1>占いAPIは動作中です（POSTリクエストを送ってください）</h1>"
