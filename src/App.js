import React from 'react'

const App = () => {
  return (
    <div className="container">
      <h2>
        CO-REFERENCE RESOLUTION <br />
        IN URDU LANGUAGE
      </h2>
      <div className="buttonSection">
        <button className="button">Input Text</button>
        <button className="button">Input File</button>
      </div>
      <div className="inputSection">
        <textarea
          className="input"
          placeholder="ارد گرد بہت سارے ڈمی ٹیکسٹس جنریٹر ہیں۔ چنانچہ کچھ بہترین"
        ></textarea>
      </div>
      <div className="outputButton">
        <button className="output">Process Input</button>
      </div>
      <div className="outputSection">
        <h2>Output</h2>
        <table>
          <tr>
            <th>Word</th>
            <td>ارد گرد</td>
            <td>بہت</td>
            <td>سارے</td>
            <td>ڈمی ٹیکسٹس</td>
            <td>جنریٹر</td>
            <td>ہیں</td>
            <td>چنانچہ</td>
            <td>کچھ</td>
            <td>بہترین</td>
          </tr>
          <tr>
            <th>Tagging</th>
            <td>NEP</td>
            <td>NEP</td>
            <td>NEL</td>
            <td>O</td>
            <td>O</td>
            <td>NEP</td>
            <td>NEL</td>
            <td>O</td>
            <td>NEP</td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default App
