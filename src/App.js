import './App.css';
import { Route, Routes } from 'react-router-dom';
import MainHeader from './components/MainHeader';
import Home from './pages/Home';
import CalculatePage from './pages/CalculatePage';
import Quotes from './pages/Quotes';

function App() {
  return (
    <div className="App">
      <MainHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<CalculatePage />} />
        <Route path="/quotes" element={<Quotes />} />
      </Routes>
    </div>
  );
}

export default App;
