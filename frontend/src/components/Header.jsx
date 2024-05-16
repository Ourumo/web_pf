import React, { useState } from "react";
import '../styles/MainStyle.css';

export default function Header() {
  return (
    <div>
      <div style={{ backgroundColor: "yellow" }}>
        <table>
          <tr>
            <td style={{ paddingRight: 50 }}><span style={{ fontSize: 40 }}>logo</span></td>
            <td>nav1</td>
            <td>nav2</td>
          </tr>
        </table>
      </div>
    </div>
  );
}