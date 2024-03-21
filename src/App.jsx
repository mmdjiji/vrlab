import React, { Suspense } from 'react';

function App() {
  return (
    <>
      <div style={{textAlign: 'center'}} >
        <h1>VRLab by JiJi</h1>
        <Suspense fallback={<p>Loading</p>}>
          <div>
            <a href="#lab1">
              Lab1
            </a>
            
            &nbsp;&nbsp;
            <a href="#lab2">
              Lab2
            </a>
          </div>
          <br></br>
          Repo: <a href="https://github.com/mmdjiji/vrlab">https://github.com/mmdjiji/vrlab</a>
        </Suspense>
      </div>
      
    </>
  )
}

export default App
