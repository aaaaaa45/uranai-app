import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
import { useState } from "react";

function App() {
  return (
    <div>
      <h1>テスト画面！！！</h1>
    </div>
  );
}

export default App;
