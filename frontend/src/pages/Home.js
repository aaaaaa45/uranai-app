import React, { useState } from 'react';

function Home() {
  const [name, setName] = useState('');
  const [question, setQuestion] = useState('');
  const [result, setResult] = useState('');

  const fortunes = [
    '大吉 - すべてがうまくいくでしょう！',
    '中吉 - 良いことがあります！',
    '小吉 - 少しラッキーな日です。',
    '凶 - 慎重に行動してください。',
    '大凶 - 気を引き締めて過ごしましょう。'
  ];

  const handleFortune = () => {
    if (name.trim() === '' || question.trim() === '') {
      setResult('名前と相談内容を入力してください。');
      return;
    }
    const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    setResult(`${name}さんの運勢は…\n${randomFortune}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6">占いアプリ</h1>
      
      <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-lg space-y-4">
        <div>
          <label className="block text-lg font-medium mb-1">名前：</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded-lg"
            placeholder="あなたの名前を入力"
          />
        </div>

        <div>
          <label className="block text-lg font-medium mb-1">相談内容：</label>
          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded-lg"
            placeholder="相談内容を入力"
          />
        </div>

        <button
          onClick={handleFortune}
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
        >
          実行
        </button>

        {result && (
          <div className="mt-4 p-4 bg-gray-100 rounded-lg whitespace-pre-wrap">
            {result}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
