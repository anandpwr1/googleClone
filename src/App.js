import './App.css';
import Home from './pages/Home';
import SearchPage from './pages/SearchPage';

import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/searchpage" element={<SearchPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
