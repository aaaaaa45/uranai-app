import React, { useState } from 'react';

function Fortune() {
  const [name, setName] = useState('');
  const [question, setQuestion] = useState('');
  const [result, setResult] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const fortunes = ['大吉', '中吉', '小吉', '凶', '大凶'];
    const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    setResult(`${name}さんの運勢は… ${randomFortune}！ 質問：「${question}」`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>名前：</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>相談内容：</label>
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            required
          />
        </div>
        <button type="submit">実行</button>
      </form>
      {result && (
        <div>
          <h2>結果</h2>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
}

export default Fortune;
