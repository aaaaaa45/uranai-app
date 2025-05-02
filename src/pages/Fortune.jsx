import React, { useState } from "react";

const Fortune = () => {
  const [name, setName] = useState("");
  const [question, setQuestion] = useState("");
  const [result, setResult] = useState("");

  const fortunes = [
    "今日は最高の運勢！新しいことに挑戦してみて。",
    "少し慎重に行動すると吉。",
    "人との出会いが運を呼ぶかも。",
    "疲れが出やすい日。無理せず休んで。",
    "思いがけない幸運が訪れる予感！"
  ];

  const handleClick = () => {
    if (!name.trim()) {
      setResult("名前を入力してください。");
      return;
    }
    if (!question.trim()) {
      setResult("相談内容を入力してください。");
      return;
    }
    const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    setResult(`${name}さんの占い結果：${randomFortune}`);
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4 mt-10">
      <h1 className="text-2xl font-bold text-purple-700">🔮 占いフォーム</h1>

      <div>
        <label className="block mb-1 font-semibold">名前：</label>
        <input
          type="text"
          className="w-full border px-2 py-1 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div>
        <label className="block mb-1 font-semibold">相談内容：</label>
        <textarea
          className="w-full border px-2 py-1 rounded"
          rows="4"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
      </div>

      <button
        onClick={handleClick}
        className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 w-full"
      >
        実行
      </button>

      {result && (
        <div className="mt-4 text-green-700 font-bold border-t pt-2">
          {result}
        </div>
      )}
    </div>
  );
};

export default Fortune;
<input
  type="text"
  className="w-full sm:w-1/2 md:w-1/3 border px-2 py-1 rounded"
  value={name}
  onChange={(e) => setName(e.target.value)}
/>
