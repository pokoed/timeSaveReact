import React from 'react';
import './App.css';

function WatchBody() {
  return (
    <div className="js-clock">
      <h1>Time</h1>
    </div>
  );
}



function App() {
  return (
    <div className="App">
      <WatchBody></WatchBody>
      <div className="table">
        <table className="main">
          <tr className="tablehead">
            <th colSpan="7">시간표</th>
          </tr>
          <tr className="headRow">
            <th className="col">교시/요일</th>
            <th className="col2">월</th>
            <th className="col3">화</th>
            <th className="col4">수</th>
            <th className="col5">목</th>
            <th className="col6">금</th>
          </tr>
          <tr className="secondRow">
            <th className="col1">1교시</th>
            <td className="col2"><a href="https://classroom.google.com/w/NzIwNzMwNTU5MTBa/t/all" target="_blank">사회</a></td>
            <td className="col3"><a href="https://classroom.google.com/w/NjQ0MzQyNTg4OTNa/t/all" target="_blank">국사</a></td>
            <td className="col4"><a href="https://classroom.google.com/w/Njk4NjYzODM5OTBa/t/all" target="_blank">웹</a></td>
            <td className="col5"><a href="https://classroom.google.com/w/NjQ0MzQyNTg4OTNa/t/all" target="_blank">국사</a></td>
            <td className="col6"><a href="https://classroom.google.com/w/NTQzNzU1NjYxNDha/t/all" target="_blank">미술</a></td>
          </tr>
          <tr className="thirdRow">
            <th className="col1">2교시</th>
            <td className="col2"><a href="https://classroom.google.com/w/Njg1MTg4NTMyMDJa/t/all" target="_blank">음악</a></td>
            <td className="col3"><a href="https://classroom.google.com/w/NjkzMTM4MjA5NTNa/t/all" target="_blank">진로</a></td>
            <td className="col4"><a href="https://classroom.google.com/w/Njk4NjYzODM5OTBa/t/all" target="_blank">웹</a></td>
            <td className="col5"><a href="https://classroom.google.com/w/NjkzNjU0NzAzNTBa/t/all" target="_blank">과학</a></td>
            <td className="col6"><a href="https://classroom.google.com/w/NTQzNzU1NjYxNDha/t/all" target="_blank">미술</a></td>
          </tr>
          <tr className="fourthRow">
            <th className="col1">3교시</th>
            <td className="col2"><a href="https://classroom.google.com/w/NzA1NTM5NjMxODla/t/all" target="_blank">수학</a></td>
            <td className="col3"><a href="https://classroom.google.com/w/NjkzNjU0NzAzNTBa/t/all" target="_blank">과학</a></td>
            <td className="col4"><a href="https://classroom.google.com/w/Njk4NjYzODM5OTBa/t/all" target="_blank">웹</a></td>
            <td className="col5"><a href="https://classroom.google.com/w/NjQ2MzU3MDE0NTda/t/all" target="_blank">체육</a></td>
            <td className="col6"><a href="https://classroom.google.com/w/NjkzNjU0NzAzNTBa/t/all" target="_blank">과학</a></td>
          </tr>
          <tr className="fifthRow">
            <th className="col1">4교시</th>
            <td className="col2"><a href="https://classroom.google.com/w/NTQ0MTQ1NTYwOtda/t/all" target="_blank">종교</a></td>
            <td className="col3"><a href="https://classroom.google.com/w/NzA1NTM5NjMxODla/t/all" target="_blank">수학</a></td>
            <td className="col4"><a href="https://classroom.google.com/w/NjQ0MzQyNTg4OTNa/t/all" target="_blank">국사</a></td>
            <td className="col5"><a href="https://classroom.google.com/w/Njk4NjYzODM5OTBa/t/all" target="_blank">웹</a></td>
            <td className="col6"><a href="https://classroom.google.com/w/NTUyNzYyNDgyODJa/t/all" target="_blank">자바</a></td>
          </tr>
          <tr className="sixthRow">
            <th className="col1">5교시</th>
            <td className="col2"><a href="https://classroom.google.com/w/Njk1MTg3OTgxMDBa/t/all" target="_blank">논술</a></td>
            <td className="col3"><a href="https://classroom.google.com/w/Njg1MzY4ODk3OTRa/t/all" target="_blank">영어</a></td>
            <td className="col4"><a href="https://classroom.google.com/w/Njg1MTg4NTMyMDJa/t/all" target="_blank">음악</a></td>
            <td className="col5"><a href="https://classroom.google.com/w/Njk4NjYzODM5OTBa/t/all" target="_blank">웹</a></td>
            <td className="col6"><a href="https://classroom.google.com/w/NTUyNzYyNDgyODJa/t/all" target="_blank">자바</a></td>
          </tr>
          <tr className="seventhRow">
            <th className="col1">6교시</th>
            <td className="col2"><a href="https://classroom.google.com/w/NTMyNTc3MTk0NTda/t/all" target="_blank">자바</a></td>
            <td className="col3"><a href="https://classroom.google.com/w/Njk4MTg3NzMwMDla/t/all" target="_blank">국어</a></td>
            <td className="col4"><a href="https://classroom.google.com/w/Njg1MTg4NTMyMDJa/t/all" target="_blank">음악</a></td>
            <td className="col5"><a href="https://classroom.google.com/w/NjQ0MzQyNTg4OTNa/t/all" target="_blank">사회</a></td>
            <td className="col6"><a href="https://classroom.google.com/w/Njk1MTg3OTgxMDBa/t/all" target="_blank">논술</a></td>
          </tr>
          <tr className="eighthRow">
            <th className="col1">7교시</th>
            <td className="col2"><a href="https://classroom.google.com/w/NTMyNTc3MTk0NTda/t/all" target="_blank">자바</a></td>
            <td className="col3"><a href="https://classroom.google.com/w/NjQ0MzQyNTg4OTNa/t/all" target="_blank">사회</a></td>
            <td className="col4"><a href="#" target="_blank"></a></td>
            <td className="col5"><a href="https://classroom.google.com/w/Njk4MTg3NzMwMDla/t/all" target="_blank">국어</a></td>
            <td className="col6"><a href="https://classroom.google.com/w/Njg1MzY4ODk3OTRa/t/all" target="_blank">영어</a></td>
          </tr>
        </table>
      </div>
    </div>
  );
}    

const clockContainer = document.querySelector(".js-clock");
const clockTitle = document.querySelector("h1");

export default App;
