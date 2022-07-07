import { Routes, Route } from 'react-router-dom';
import './App.css';
import Alfa from './components/Alfa';

function App() {
  return (
    <Routes>
      <Route path="/main_page" element={<Alfa />} />
    </Routes>
  );
}

export default App;
