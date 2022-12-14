import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../css/App.css';
import Layout from "./Layout"

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
