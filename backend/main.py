from fastapi import FastAPI
from pydantic import BaseModel
import openai
import os
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
import logging

# .envファイルの読み込み
load_dotenv()
# .env や環境変数から読み込む方法も推奨
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")
openai.api_key = OPENAI_API_KEY  # これが必要！
if not OPENAI_API_KEY:
    print("❌ OpenAI APIキーが読み込めていません。")
else:
    print("✅ OpenAI APIキーが読み込めました。")

# loggingの基本設定（INFO以上のログを標準出力に表示）
logging.basicConfig(level=logging.INFO)

app = FastAPI()

# CORS（フロントからのアクセス許可）
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # 本番では特定ドメインに限定推奨
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# リクエスト形式
class AIRequest(BaseModel):
    name: str
    question: str

@app.post("/task3/ask-ai")
async def ask_ai(data: AIRequest):
    prompt = f"{data.name}さんからの質問です：{data.question}"

    try:
        response = openai.ChatCompletion.create(
            model="gpt-4",
            messages=[
                {"role": "system", "content": "あなたは親切で賢い占い師です。300文字以内で答えてください。"},
                {"role": "user", "content": prompt}
            ],
            temperature=0.7,
            max_tokens=300
        )

        answer = response["choices"][0]["message"]["content"]
        # return {"answer": answer}
        print(f"AIの回答: {answer}")
        return {"name": data.name, "answer": answer}


    except Exception as e:
        print(f"エーラ: {str(e)}")
        return {"error": str(e)}
