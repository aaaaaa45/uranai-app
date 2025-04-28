import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [consultation, setConsultation] = useState("");
  const [result, setResult] = useState("");

  const handleFortune = () => {
    if (name.trim() === "" || consultation.trim() === "") {
      setResult("⚠️ 名前と相談内容を入力してください！");
    } else {
      const fortunes = [
        "🌟 大吉！最高の一日になりそう！",
        "🍀 中吉！いいことあるかも！",
        "☁️ 小吉。焦らず行こう！",
        "🌧️ 凶...でも落ち込まないで！",
        "🔥 大凶！リベンジのチャンス！",
        "🌈 超大吉！奇跡が起きるかも！",
        "🌀 末吉。まだ運気はこれから！",
        "🌟 吉！小さなラッキーに気づいて！",
        "🌒 半吉。冷静に行動するのが吉！",
        "🎯 大成功！願いが叶うかも！？",
        "🎲 ランダムな運勢！運を天に任せろ！",
        "💀 大凶…でも学びのチャンス到来！",
        "🧙‍♂️ 神秘的な力が働く日！"
      ];
    
       
    
      const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
      setResult(`${name}さんの相談「${consultation}」への結果：${randomFortune}`);
    }
  };

  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(to bottom right, #6a11cb, #2575fc)", display: "flex", alignItems: "center", justifyContent: "center", padding: "20px" }}>
      <div style={{ background: "white", borderRadius: "16px", boxShadow: "0 8px 32px rgba(0,0,0,0.25)", padding: "40px", width: "100%", maxWidth: "450px", textAlign: "center" }}>
        <h1 style={{ marginBottom: "30px", color: "#333", fontSize: "32px" }}>占いアプリ</h1>

        {/* 名前のフォーム */}
        <input
          type="text"
          placeholder="名前を入力してください"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "20px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            fontSize: "16px"
          }}
        />

        {/* 相談フォーム */}
        <input
          type="text"
          placeholder="相談内容を入力してください"
          value={consultation}
          onChange={(e) => setConsultation(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "20px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            fontSize: "16px"
          }}
        />

        {/* 実行ボタン */}
        <button
          onClick={handleFortune}
          style={{
            width: "100%",
            padding: "14px",
            fontSize: "18px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            transition: "0.3s"
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#45a049")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#4CAF50")}
        >
          占う
        </button>

        {/* 結果フォーム */}
        {result && (
          <div style={{ marginTop: "30px", padding: "20px", backgroundColor: "#f1f1f1", borderRadius: "8px", fontSize: "18px", color: "#333" }}>
            {result}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
