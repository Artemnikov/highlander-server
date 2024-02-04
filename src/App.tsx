import './App.scss';
import React from 'react';
const MainGameBoard = React.lazy(() => import("./components/game/MainGameBoard"))

function App() {
  return (
    <div className="App">
      <MainGameBoard />
    </div>
  );
}

export default App;
