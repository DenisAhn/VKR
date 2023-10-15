import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './Pages/MainPage';
import GetStarted from './Pages/GetStarted';
import CV from './Pages/CV';
import NLP from './Pages/NLP';
import { Classes } from './Pages/Classes';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<MainPage />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/nlp" element={<NLP />} />
          <Route path="/classes" element={<Classes />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
