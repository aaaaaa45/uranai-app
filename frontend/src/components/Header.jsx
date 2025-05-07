import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-purple-700 text-white p-4 flex items-center justify-between">
      <h1 className="text-2xl font-bold">🔮 占いアプリ</h1>
      <nav>
        <Link to="/" className="mr-4 hover:underline">ホーム</Link>
        <Link to="/fortune" className="hover:underline">占いページ</Link>
      </nav>
    </header>
  );
}
