import { useState } from "react";
import axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [consultation, setConsultation] = useState("");
  const [result, setResult] = useState("");

  const handleFortune = async () => {
    if (name.trim() === "" || consultation.trim() === "") {
      setResult("⚠️ 名前と相談内容を入力してください！");
    } else {
      try {
        const response = await axios.get('http://localhost:8000/question');
        setResult(`${name}さんの相談「${consultation}」への結果：${response.data.message}`);
      } catch (error) {
        console.error(error);
        setResult("⚠️ サーバーエラーが発生しました！");
      }
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="名前を入力"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="相談内容を入力"
        value={consultation}
        onChange={(e) => setConsultation(e.target.value)}
      />
      <button onClick={handleFortune}>占う！！</button>
      <p>{result}</p>
    </div>
  );
}

export default App;
