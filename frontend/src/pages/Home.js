import React, { useState } from 'react';

function Home() {
  const [name, setName] = useState('');
  const [question, setQuestion] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleFortune = async () => {
    if (name.trim() === '' || question.trim() === '') {
      setResult('名前と相談内容を入力してください。');
      return;
    }

    setLoading(true);
    setResult('');  // クリア

    try {
      // const response = await fetch('http://localhost:8000/api/fortune', {
      const response = await fetch('http://localhost:8000/task3/ask-ai', {
        

        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, question }),
      });

      if (!response.ok) {
        throw new Error('サーバーエラーが発生しました。');
      }
      // abc
      const data = await response.json();
      // 例: バックエンドのレスポンスに { "fortune": "大吉！..." } があると仮定
      setResult(`${name}さんの運勢は…\n${data.answer ?? '結果が取得できませんでした。'}`);
    } catch (error) {
      console.error('エラー:', error);
      setResult('占いに失敗しました。');
    } finally {
      setLoading(false);
    }
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
          disabled={loading}
          className={`w-full text-white py-2 rounded-lg transition ${
            loading ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'
          }`}
        >
          {loading ? '占い中...' : '実行'}
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
