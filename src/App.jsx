import './App.scss'

function App() {


  return (
    <>
    <div className='main'>
      <h3>Calculator</h3>
      <div className="screen">
        <h1>20000</h1>
      </div>
      <div className="keypad">
          <div className="stack">
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>DEL</button>
          </div>
          <div className="stack">
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>+</button>
          </div>
          <div className="stack">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>-</button>
          </div>
          <div className="stack">
          <button>.</button>
          <button>0</button>
          <button>/</button>
          <button>x</button>
          </div>
          <div className="stack">
          <button className='half'>RESET</button>
          <button className='half'>=</button>
          </div>
      </div>
    </div>
    </>
  )
}

export default App

