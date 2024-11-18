import './HistoryView.css';
import { useEffect, useState } from 'react';

function HistoryView({ setView }) {
  const answers = JSON.parse(localStorage.getItem('diary') || '{}');

  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <button
          className='back-btn'
          onClick={() => {
            // MainView 화면으로 전환
            setView('main');
          }}
        >
          &lt;
        </button>
        <h4>다이어리 기록</h4>
      </div>
      <div className='diary-list'>
        {Object.entries(answers).map(([date, answer]) => {
          return (
            <div key={date} className='diary-item'>
              <div className='diary-date'>{date}일</div>
              <div>{answer}</div>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default HistoryView;
