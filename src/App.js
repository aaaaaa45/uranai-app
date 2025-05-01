const handleFortune = async () => {
  if (name.trim() === "" || consultation.trim() === "") {
    setResult("⚠️ 名前と相談内容を入力してください！");
  } else {
    try {
      const response = await axios.post("http://localhost:8000/question", {
        name: name,
        consultation: consultation
      });
      setResult(response.data.message);
    } catch (error) {
      console.error(error);
      setResult("⚠️ サーバーエラーが発生しました！");
    }
  }
};
