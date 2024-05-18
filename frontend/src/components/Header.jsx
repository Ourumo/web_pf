import React from 'react';
import '../styles/Header.css';

export default function Header() {
  function Page1() {
    console.log("page1");
  };

  function Page2() {
    console.log("page2");
  };

  return (
    <header className="header">
      <div className="title">web_pf</div>
      <div className="button-group">
        <button onClick={Page1}>Page 1</button>
        <button onClick={Page2}>Page 2</button>
      </div>
    </header>
  );
};