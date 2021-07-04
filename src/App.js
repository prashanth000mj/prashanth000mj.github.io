import QuickIntro from './components/QuickIntro';
import Backgorund from './components/Background';
import './App.css';

function App() {
  return (
    <div className="App">
      <Backgorund />
      <header className="App-header">
        <QuickIntro />
      </header>
    </div>
  );
}

export default App;
